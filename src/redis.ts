import Redis from "ioredis";

export const redis = new Redis({
  port: 6379,
  host: "redis",
  password: "estodeberiaserunsecreto",
});

redis
  .connect()
  .catch((error) => {
    console.log("ocurrió un eror con redis" + error);
    console.log(redis.status);
  })
  .finally();
