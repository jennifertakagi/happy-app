import Image from '../models/Image';

export default {
  /**
   * Render Image's view
   * @param {Image} image 
   * @returns {Object} image to be rendered
   */
  render(image: Image) {
    return {
      id: image.id,
      url: `http://localhost:3333/uploads/${image.path}`
    };
  },

  /**
   * Render Images' view
   * @param {Image[]} orphanages
   * @returns {Array} images to be rendered
   */
  renderMany(images: Image[]) {
    return images.map(image => this.render(image));
  }
}