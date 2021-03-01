curl http://localhost:3000/ping

npm run build

sleep 2

npm run start-pm2

sleep 2

curl http://localhost:3000/1
echo $'\n'
curl http://localhost:3000/12
echo $'\n'
curl http://localhost:3000/123
echo $'\n'
curl http://localhost:3000/1234
echo $'\n'
curl http://localhost:3000/12345
echo $'\n'
curl http://localhost:3000/123456
echo $'\n'
curl http://localhost:3000/1234567
echo $'\n'
curl http://localhost:3000/12345678
echo $'\n'
curl http://localhost:3000/123456789
echo $'\n'
curl http://localhost:3000/0.1
echo $'\n'
curl http://localhost:3000/0.12
echo $'\n'
curl http://localhost:3000/0.123
echo $'\n'
curl http://localhost:3000/0.1234
echo $'\n'
curl http://localhost:3000/0.12345
echo $'\n'
curl http://localhost:3000/0.123456

pm2 kill
