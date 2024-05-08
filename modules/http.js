import axios from 'axios'

  
export class MakeRequest {
    baseURL = import.meta.env.VITE_BASE_URL

    async getData(path) {
        try {
            const res = await axios.get(this.baseURL + path)
            

            if(res.status === 200 || res.status === 201) {
                return res.data
            } 
        } catch(e) {
            alert(e.message)
            return e
        }
    }
    async postData(path, body) {
        try {
            const res = await axios.post(this.baseURL + path, body)

            if(res.status === 200 || res.status === 201) {
                return res.data
            }
        } catch(e) {
            alert(e.message)
            return e
        }
    }
    async patchData(path, body) {
        try {
            const res = await axios.patch(this.baseURL + path, body)

            if(res.status === 200 || res.status === 201) {
                return res.data
            }
        } catch(e) {
            alert(e.message)
            return e
        }
    }
    async deleteData(path) {
        try {
            const res = await axios.delete(this.baseURL + path)
            if(res.status === 200 || res.status === 201) {
                return res.data
            }
        } catch(e) {
            alert(e.message)
            return e
        }
    }
}