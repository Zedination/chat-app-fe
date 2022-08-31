# cd "D:/Source Code/WebRTC Demo/Vue3ChatApp/chat-app-fe"
npm run build
cp -r dist/* ../zedination.github.io
cd ../zedination.github.io
cp index.html 404.html
git add .
git commit -m "release"
git push origin main
