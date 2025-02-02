/*
 * Copyright (c) 2019 Open990.org, Inc.. All rights reserved.
 */

import axios from 'axios';

class ApiClient {
  
  axiosBinding = axios.create({
    baseURL: 'http://m9i97xhjzujxnp5s.us-east-1.elasticbeanstalk.com/',
    headers: {
      contentType: 'application/json'
    }
  });

  getListOfOrganizationSuggestion = (query) => {
    return this.axiosBinding.get(`/api/search/org/suggest/${query}/`);
  };
  
  getListOfPeopleSuggestion = (query) => {
    return this.axiosBinding.get(`/api/search/people/suggest/${query}/`);
  };
  
  searchOrganizationByQuery = (query) => {
    return this.axiosBinding.get(`/api/search/org/simple/${query}/`);
  };
  
  searchPeopleByQuery = (query) => {
    return this.axiosBinding.get(`/api/search/people/simple/${query}/`);
  };
  
  searchOrganizationsWithParams = (paramsQuery) => {
    return this.axiosBinding.get(`/api/search/org/${paramsQuery}`);
  };
  
  searchPeopleWithParams = (paramsQuery) => {
    return this.axiosBinding.get(`/api/search/people/${paramsQuery}`);
  };
  
  searchDataByQuery = (searchQuery) => {
    return this.axiosBinding.get(`/api/search/data/${searchQuery}`)
  };
  
  downloadIRSFile = (url) => {
    return this.axiosBinding.get(`/zip${url}/`)
  };

  downloadDataset = (ds) => {
    return this.axiosBinding.get(`/dl/ds/${ds}/`)
  };

  getOrgSkeleton = (ein) => {
    return this.axiosBinding.get(`/api/org/skeleton/${ein}/`);
  };

  getTableData = (tableId) => {
    return this.axiosBinding.get(`/api/org/table/${tableId}/`);
  };

  getFocusOptions = (ntee_major) => {
    return this.axiosBinding.get(`/api/search/options/focus/${ntee_major}/`)
  };

  submitContactForm = (address, inquiry, form, name, url) => {
    let params = {
      "address": address,
      "body": inquiry,
      "form": form,
      "name": name,
      "url": url
    };
    return this.axiosBinding.post(`/api/contact/`, params);
  }
}

const apiClient = new ApiClient();
export default apiClient;
