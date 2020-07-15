import http from './http-common';

class ChurchDataService {
    getAll() {
        return http.get('/churches/churchlist');
    }

    
//working on this to find churches by denomination
    findByDenomination(Denomination) {
        return http.get(`/churches/search/denomination?denomination=${Denomination}`);
    }
}

export default new ChurchDataService();