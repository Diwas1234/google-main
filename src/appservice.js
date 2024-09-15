class ApiService {
  static async fetchImages(page = 2, limit = 10) {
    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch images:", error);
      throw error;
    }
  }
}

export default ApiService;
