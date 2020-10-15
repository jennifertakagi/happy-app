import Orphanage from '../models/Orphanage';
import imagesView from './images_view';

export default {
  /**
   * Render Orphanage's view
   * @param {Orphanage} orphanage 
   * @returns {Object} orphanage to be rendered
   */
  render(orphanage: Orphanage) {
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: imagesView.renderMany(orphanage.images)
    };
  },

  /**
   * Render Orphanages' view
   * @param {Orphanage[]} orphanages
   * @returns {Array} orphanages to be rendered
   */
  renderMany(orphanages: Orphanage[]) {
    return orphanages.map(orphanage => this.render(orphanage));
  }
}