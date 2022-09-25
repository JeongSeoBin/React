class Youtube{
    constructor(httpClient){
        this.youtube = httpClient;
    }

    async mostPopular(){
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResult: 20,
            }
        });
        return response.data.items;
    }

    async search(query){
        const response = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                type: 'video',
                maxResult: 20,
                q: query
            }
        })
        return response.data.items.map(item => ({...item, id: item.id.videoId}));
    }
}

export default Youtube;