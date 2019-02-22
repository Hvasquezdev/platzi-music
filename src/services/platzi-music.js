import configServices from './config';

const baseUrl = configServices.apiUrl;

class PlatziMusicService {
  static searchTrack (query) {
    return fetch(`${baseUrl}/search?q=${query}&type=track`)
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.error(error));
  }

  static getTrackById (id) {
    return fetch(`${baseUrl}/tracks/${id}`)
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.error(error));
  }
}

export default PlatziMusicService;