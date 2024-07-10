# Data base
```
docker build . -t postgres-db
```

```docker run --name postgres-db-container -p 4321:5432 -d postgres-db```