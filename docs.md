# DEPLOYING THIS APP - Well this might have changed
When deploying this Vite React App to github pages,
    1. I edited the vite.config.js adding the two properties below;

        base: '/wilmukulembezeportfo/',
        build: {
          outDir: 'build',
        },

    The 'base' property adds the repository name.
    The 'build' property changes the vite build output directory from the default 'dist' to 'build'. Before changing this, yarn deploy command was returning the error below as instead of 'build', 'dist' was being created as the build output directory.

    Error: ENOENT: no such file or directory, stat '/home/mukulembeze/Documents/PORTFOLIO PROJECTS/portfolio website/wilmukulembezeportfo.com/build'

    2. To deploy to gh pages:

    Just follow these simple steps:

1. Install the gh-pages package (ctrl+~ to open the terminal in VS Code)
npm install gh-pages --save-dev   [or similar yarn commands]
2. In the package.json file add these lines before "build": "vite build",

"predeploy": "npm run build",
"deploy": "gh-pages -d dist",

3. In the vite.config.js file add this line before plugins: [react()],
base: "/YOUR_REPOSITORY_NAME",

Change YOUR_REPOSITORY_NAME to the name of your GitHub repository.

4. In terminal type
npm run deploy or yarn deploy
🎉 You now have a gh-pages branch in your repository and your app is deployed (you can check it under Settings -> Pages )
It took a while for the deployed app to appear in the settings.

P.S. To update your app deployment, just run the npm run deploy or yarn deploy command again.

On setting up things on the Github side visit:

https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site