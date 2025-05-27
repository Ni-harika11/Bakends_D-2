const nextConfig={
    async rewrites(){
        return[
            {
                source:"/cats",
                destination:"https://meowfacts.herokuapp.com"
            }
        ]
    }
}

export default nextConfig;