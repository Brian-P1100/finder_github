class Github {
    constructor() {
        this.client_id = 'dc94b4414d8be91e1eb5';
        this.client_secret = 'e4dd28e6f07331f03cccc6c14e8f5b8bb192aa39';
        this.repos_conunt = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&clinet_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_conunt}&sort=${this.repos_sort}client_id=${this.client_id}&clinet_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}