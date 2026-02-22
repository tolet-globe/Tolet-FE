import { API } from "../config/axios";

class Service {
  // -------------------------
  // AUTH APIs
  // -------------------------
  static async login(data) {
    try {
      const response = await API.post("/auth/login", data);
      return response;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  }

  static async register(data) {
    try {
      const response = await API.post("/auth/register", data);
      return response;
    } catch (error) {
      console.error("Error registering:", error);
      throw error;
    }
  }

  static async verifyOtp(data) {
    try {
      const response = await API.post("/auth/verify-otp", data);
      return response;
    } catch (error) {
      console.error("Error verifying OTP:", error);
      throw error;
    }
  }

  static async googleLogin(data) {
    try {
      const response = await API.post("/auth/google-login", data);
      return response;
    } catch (error) {
      console.error("Error logging in with Google:", error);
      throw error;
    }
  }

  static async forgotPassword(data) {
    try {
      const response = await API.post("auth/forgot-password", data);
      return response;
    } catch (error) {
      console.error("Error recovering password:", error);
      throw error;
    }
  }

  static async resetPassword(data) {
    try {
      const response = await API.post("/auth/reset-password", data);
      return response;
    } catch (error) {
      console.error("Error resetting password:", error);
      throw error;
    }
  }

  static async verifyAccount(token) {
    try {
      const response = await API.get(`/auth/verify/${token}`);
      return response;
    } catch (error) {
      console.error("Error verifying account:", error);
      throw error;
    }
  }

  // -------------------------
  // USER APIs
  // -------------------------
  static async getCurrentUser(token) {
    try {
      const response = await API.get(`/user/info`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      console.error("Error fetching user info:", error);
      throw error;
    }
  }

  static async updateMobile(data) {
    try {
      const response = await API.put("/user/savemobile", data);
      return response;
    } catch (error) {
      console.error("Error updating mobile:", error);
      throw error;
    }
  }

  static async updateProfile(data) {
    try {
      const response = await API.put("/user/update", data);
      return response;
    } catch (error) {
      console.error("Error updating profile:", error);
      throw error;
    }
  }

  static async checkUserData(token) {
    try {
      const response = await API.get(`/user/info?token=${token}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      console.error("Error checking user:", error);
      throw error;
    }
  }

  // -------------------------
  // PROPERTY APIs
  // -------------------------
  static async getAllProperties() {
    try {
      const response = await API.get("property/all");
      return response;
    } catch (error) {
      console.error("Error fetching all properties:", error);
      throw error;
    }
  }

  static async getPropertyById(id) {
    try {
      const response = await API.get(`/property/${id}`);
      return response;
    } catch (error) {
      console.error("Error fetching property by id:", error);
      throw error;
    }
  }

  static async getPropertyBySlug(slug) {
    try {
      const response = await API.get(`property/slug/${slug}`);
      return response;
    } catch (error) {
      console.error("Error fetching property by slug:", error);
      throw error;
    }
  }

  static async getPropertiesByFilter(queryString, config = {}) {
    try {
      const response = await API.get(`property/filter?${queryString}`, config);
      return response;
    } catch (error) {
      console.error("Error fetching properties by filter:", error);
      throw error;
    }
  }

  static async getUserProperties(userId) {
    try {
      const response = await API.get(`property/user/${userId}`);
      return response;
    } catch (error) {
      console.error("Error fetching user properties:", error);
      throw error;
    }
  }

  static async getFavourites(userId, config = {}) {
    try {
      const response = await API.post("user/getFavourites", { userId }, config);
      return response;
    } catch (error) {
      console.error("Error fetching favourite properties:", error);
      throw error;
    }
  }

  static async addToFavourites(userId, propertyId, config = {}) {
    try {
      const response = await API.post(
        "user/addToFavourites",
        { userId, propertyId },
        config,
      );
      return response;
    } catch (error) {
      console.error("Error adding to favourites:", error);
      throw error;
    }
  }

  static async removeFromFavourites(userId, propertyId, config = {}) {
    try {
      const response = await API.post(
        "user/removeFromFavourites",
        { userId, propertyId },
        config,
      );
      return response;
    } catch (error) {
      console.error("Error removing from favourites:", error);
      throw error;
    }
  }

  static async updatePropertyAvailabilityStatus(propertyId, data, config = {}) {
    try {
      const response = await API.patch(
        `property/update-property-availability-status/${propertyId}`,
        data,
        config,
      );
      return response;
    } catch (error) {
      console.error("Error updating property availability status:", error);
      throw error;
    }
  }

  static async addProperty(data, config = {}) {
    try {
      const response = await API.post("property/add-property", data, config);
      return response;
    } catch (error) {
      console.error("Error adding property:", error);
      throw error;
    }
  }

  static async deleteProperty(propertyId, config = {}) {
    try {
      const response = await API.delete(`property/${propertyId}`, config);
      return response;
    } catch (error) {
      console.error("Error deleting property:", error);
      throw error;
    }
  }

  static async toggleFavouriteProperty(data, config = {}) {
    try {
      const response = await API.post(
        "/property/toggleFavourite",
        data,
        config,
      );
      return response;
    } catch (error) {
      console.error("Error toggling favourite:", error);
      throw error;
    }
  }

  static async purchaseQuery(data) {
    try {
      const response = await API.post("/property/purchasequery", data);
      return response;
    } catch (error) {
      console.error("Error sending purchase query:", error);
      throw error;
    }
  }

  // -------------------------
  // GENERAL / CONTACT / BLOG APIs
  // -------------------------
  static async submitContactData(data) {
    try {
      const response = await API.post("contact/submit-data", data);
      return response;
    } catch (error) {
      console.error("Error submitting contact data:", error);
      throw error;
    }
  }

  static async submitPricing(data) {
    try {
      const response = await API.post("pricing/submit-pricing", data);
      return response;
    } catch (error) {
      console.error("Error submitting pricing:", error);
      throw error;
    }
  }

  static async getBlogBySlug(slug) {
    try {
      const response = await API.get(`blog/blogs/${slug}`);
      return response;
    } catch (error) {
      console.error("Error fetching blog:", error);
      throw error;
    }
  }

  static async updateLikes(slug, config = {}) {
    try {
      const response = await API.get(`blog/updateLikes/${slug}`, config);
      return response;
    } catch (error) {
      console.error("Error updating likes:", error);
      throw error;
    }
  }

  static async updateViews(slug, config = {}) {
    try {
      const response = await API.get(`blog/updateViews/${slug}`, config);
      return response;
    } catch (error) {
      console.error("Error updating views:", error);
      throw error;
    }
  }
}

export default Service;
