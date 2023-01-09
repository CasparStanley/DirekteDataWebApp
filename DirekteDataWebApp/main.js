const RESTURL = 'https://direktedatarest2022.azurewebsites.net/api/DirekteData';

Vue.createApp({
    data() {
        return {
            DirekteData: [],
            dataSet: {id: null, name: "", description: "", recordings: []},
            dataStructure: {id: null, dataSetId: null, time: null, rotation: ""},
            dataSetIdToGetBy: 0,
            dataSetIdToRecordingGetBy: 0,
            idToGetBy: 0,
            dataToGet: 0,
            addData: {id: 0, time: 0, rotation: ""},
            addMessage: ""
        }
    },
    methods: {
        async getAll() {
            try {
                const response = await axios.get(RESTURL);
                this.DirekteData = await response.data;
            }
            catch (e) {
                alert(e.message);
            }
        },
        async getLive() {
            try {
                const url = RESTURL + "/live";
                const response = await axios.get(url);
                this.dataSet = await response.data;
            }
            catch (e) {
                this.dataStructure = null;
                // alert(e.message);
            }
        },
        async getDataSet(id) {
            try {
                const url = RESTURL + "/" + id;
                const response = await axios.get(url);
                this.dataSet = await response.data;
            }
            catch (e) {
                this.dataStructure = null;
                // alert(e.message);
            }
        },
        async getRecording(dataSetId, id) {
            try {
                const url = RESTURL + "/" + dataSetId + "/" + id;
                const response = await axios.get(url);
                this.dataStructure = await response.data;
            }
            catch (e) {
                this.dataStructure = null;
                // alert(e.message);
            }
        }
        // async add() {
        //     try {
        //         response = await axios.post(RESTURL, this.addData);
        //         this.addMessage = "Response: " + response.status + ", " + response.statusText;
        //         this.getAll();
        //     }
        //     catch (e) {
        //         alert(e.message);
        //     }
        // },
        // async addData(id) {
        //     try {
        //         const url = RESTURL + "/" + id;
        //         response = await axios.post(url);
        //         this.addMessage = "Response: " + response.status + ", " + response.statusText;
        //         this.getAll();
        //     }
        //     catch (e) {
        //         alert(e.message);
        //     }
        // }
    },
    created() {
        this.getAll();

    }
}).mount("#app")