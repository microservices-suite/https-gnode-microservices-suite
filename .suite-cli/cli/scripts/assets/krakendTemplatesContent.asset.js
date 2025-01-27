module.exports = () => `
{
   "endpoint": "/admin/users",
  {{  include "input_headers.tmpl"}},
   "backend": [
   {
     "url_pattern": "/users",
     "extra_config": {
       {{ include "rate_limit_backend.tmpl"}}
     },
     "host": ["{{ .env.host_case }}"]
   }
   ],
   "extra_config": {
     "auth/validator": {
       "alg": "RS256",
       "jwk_url": "{{ .env.security }}"
     }
   }
 },
 {
   "endpoint": "/admin/devices",
   "output_encoding": "json",
   "input_query_strings":["*"],
 {{  include "input_headers.tmpl"}},
   "backend": [
   {
     "url_pattern": "/devices",
     "encoding": "json",
     "extra_config": {
       {{ include "rate_limit_backend.tmpl"}}
     },
     "host": ["{{ .env.host_case }}"]
   }
   ],
   "extra_config": {
     "auth/validator": {
       "alg": "RS256",
       "jwk_url": "{{ .env.security }}"
     }
   }
 }`