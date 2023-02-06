module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps: [
        // First application
        {
            name: 'website.com', // name of the process in PM2
            script: 'build/index.js',
            env_production: {
                NODE_ENV: 'production',
                PORT: 10004 // port the app will be launched on
            }
        }
    ],

    /**
     * Deployment section
     * http://pm2.keymetrics.io/docs/usage/deployment/
     */
    deploy: {
        production: {
            user: 'deployer', // deployer user
            host: '127.0.0.1', // IP address of your server

            path: '/var/node/audiophile-svelte', // the path where you want the project to be
            // code you want to run after the project has been pushed to your server
        }
    }
};
