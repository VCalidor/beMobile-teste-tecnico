cd ./beMobile_back_end 
npx json-server db.json &
BACKEND_PID=$!

cd ..
cd ./beMobile_front_end
npm run dev &
FRONTEND_PID=$!

wait $BACKEND_PID
wait $FRONTEND_PID