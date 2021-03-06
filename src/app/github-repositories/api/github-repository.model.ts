export class GithubRepositoryModel {
    constructor(
        public name?: string,
        public shortName?: string,
        public url?: string,
        public updateAt?: Date
    ){}

    public fromJSON(json: any) {
        if(!json){
            return;
        }
        
        this.name = json.full_name;
        this.shortName = json.name;
        this.url = json.html_url;
        this.updateAt = new Date(json.updated_at);
    }
}