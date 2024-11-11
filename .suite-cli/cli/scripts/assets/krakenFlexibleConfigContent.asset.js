module.exports = () => `
{
    "$schema": "https://www.krakend.io/schema/v3.json",
    "version": 3,
    "name": "Sample Gateway",
    "port": {{ .env.port }},
    "timeout": "30s",
    "cache_ttl": "300s",
    "extra_config": {{ include "extra_config.tmpl" }},
    "endpoints": [
      {{ template "sample_template.tmpl" . }},

      {{ range $idx, $endpoint := .loop_example.dummy }}
        {{ if $idx }},{{ end }}
        {
            "endpoint": "{{ $endpoint }}",
            "backend": [
              {
                "host": [ "http://localhost:8080" ],
                "url_pattern": "/__debug{{ $endpoint }}"
              }
            ]
        }
      {{ end }}
   ]
}
`