cd ./beMobile_back_end 
npm i &
BACKEND_PID=$!

cd ..
cd ./beMobile_front_end
npm i &
FRONTEND_PID=$!

wait $BACKEND_PID
wait $FRONTEND_PID