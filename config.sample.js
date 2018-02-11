{

  "host": "127.0.0.1",
  "port": 7777,
  "keyLength": 10,
  "maxLength": 400000,
  "staticMaxAge": 86400,
  "recompressStaticAssets": true,
  "logging": [
    {
      "level": "verbose",
      "type": "Console",
      "colorize": true
    }
  ],
  "keyGenerator": {
    "type": "phonetic"
  },
  "rateLimits": {
    "categories": {
      "normal": {
        "totalRequests": 500,
        "every": 60000
      }
    }
  },

  "storage": {
    "type": "redis",
    "host": "127.0.0.1",
    "port": 6379,
    "db": 2,
    "password": "",
    "expire": 2592000
  },
  "documents": {
    "about": "./about.md"
  }
}
