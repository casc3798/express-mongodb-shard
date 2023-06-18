### EXPRESSJS + MONGODB WITH SHARDED CLUSTER

### PROJECT DESCRIPTION
This is a learning-purpose project. This project contains a simple ExpressJS server that is connected to a sharded mongodb cluster.

### HOW TO USE

1. Mount the mongodb instances:
   1. Use the command `docker-compose up -f docker/configs/docker-compose.yml up` to create and mount the mongodb containers for cluster configuration.
   2. Use `mongosh` to execute the following command inside one of the mongo instances: `rs.initiate(
  {
    _id: "cfgrs",
    configsvr: true,
    members: [
      { _id : 0, host : "[ip-address]:[port]" },
      { _id : 1, host : "[ip-address]:[port]" },
      { _id : 2, host : "[ip-address]:[port]" }
    ]
  }
)`
   3. Use the command `docker-compose up -f docker/shard/docker-compose.yml up` to create and mount the mongodb containers that are going to be used as shard instances.
   4. Use `mongosh` to execute the following command inside one of the mongo instances: `rs.initiate(
  {
    _id: "shard1rs",
    configsvr: true,
    members: [
      { _id : 0, host : "[ip-address]:[port]" },
      { _id : 1, host : "[ip-address]:[port]" },
      { _id : 2, host : "[ip-address]:[port]" }
    ]
  }
)`
   5. Use the command `docker-compose up -f docker/mongos/docker-compose.yml up` to create and mount the mongodb container that is going to be used as mongos instance (proxy for querying the cluster).
   6. Use `mongosh` to execute the following command inside the mongos instance: `sh.addShard("[ip-address]:[port],[ip-address]:[port],[ip-address]:[port]")` where the instances are the configuration nodes containers ip's.
