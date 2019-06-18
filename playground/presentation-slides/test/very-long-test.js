describe.skip('Search returned from scrapers bulk 1', () => {
            let testSearch;
            let searchId;
            let testMessage;
            const tempRecords = [];

            beforeEach(async () => {
                testSearch = await createNewSearch();
                searchId = testSearch._id;
                testMessage = {
                    searchId
                };
            });

            afterEach(async () => {
                await clearBusMessageLogs(searchId);
                await testSearch.remove();
                await Promise.all(tempRecords.map(record => record.remove()));
            })

            afterAll(async () => {
                const allConnections = Object.values(connections);
                await Promise.all(allConnections.map((connection: any) => connection.close()));
            });


            test('With new data but without must results move to process all bulk 1', async () => {
                const scraperId = Math.floor(Math.random() * 10000);
                const clearScraperId = 1133;
                const currentBulkNumber = 1;

                // Prepare message
                testMessage.data = {
                    scraperId
                };
                testMessage.senderChannel = CHANNELS.SCRAPER_FLOW_MANAGER_CHANNEL;

                // Prepare search in db
                const updateObject = {
                    $set: {
                        state: 2,
                        hasAppended: true
                    }
                };
                await updateSearch(searchId, updateObject);

                // Prepare executionPlan in db
                tempRecords.push(await fakeBulkNumberRecordForScraperId(searchId, scraperId, currentBulkNumber));
                tempRecords.push(await fakeBulkNumberRecordForScraperId(searchId, clearScraperId, currentBulkNumber));
                tempRecords.push(await fakeNextBulkRecord(searchId, currentBulkNumber));

                /* Action */
                await operation(testMessage, scope);

                /* Assertions */
                const expectedreceipientChannel = CHANNELS.RESULTS_PROCESSOR_CHANNEL;
                const outMessageLog = await getBusMessageLog(searchId, expectedreceipientChannel);
                const {
                    state
                } = await getSearch(searchId);
                const clearRecord = await getExecutionPlanRecord(searchId, clearScraperId);

                // Expect correct message
                expect(+outMessageLog.searchId).toEqual(searchId);
                expect(outMessageLog.data).toMatchObject({
                    executionPlan: 'default_execution',
                    searchId: searchId,
                    runId: expect.stringMatching(/.+/),
                    executionPlanName: 'default_execution',
                    executionPlanSchema: 'SearchIdScraperStatus',
                    processMode: 'ALL',
                    matchMode: 'STRICT'
                });

                // Expect correct state
                expect(state).toEqual(PROCESS_ALL_BULK);

                // Expect clear turned back to pending
                expect(clearRecord.status).toEqual(ScraperStatusEnum.PENDING);

            }, 15000);
