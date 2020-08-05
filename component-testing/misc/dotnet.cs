public class OrdersComponentTests : IClassFixture<WebApplicationFactory<Api.Startup>>
{
    readonly HttpClient _httpClient { get; }
    public OrdersComponentTests(WebApplicationFactory<Api.Startup> fixture)
    {
        _httpClient = fixture.CreateClient();
    }

    [Fact]
    public async Task WhenAddingValidOrder_GetConfirmation()
    {
        // Arrange
        //var orderDetails = { id:1};

        // Act
        var response = await _httpClient.SendAsync("/order");

        // Assert
        response.StatusCode.Should().Be(HttpStatusCode.OK);
        var forecast = JsonConvert.DeserializeObject<WeatherForecast[]>(await response.Content.ReadAsStringAsync());
        forecast.Should().HaveCount(5);
    }
}