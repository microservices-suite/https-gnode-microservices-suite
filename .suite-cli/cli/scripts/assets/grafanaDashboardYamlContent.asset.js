module.exports = () =>`
apiVersion: 1

providers:
- name: 'default'
  orgId: 1
  folder: ''
  type: file
  disableDeletion: false
  updateIntervalSeconds: 60
  options:
    path: /var/lib/grafana/dashboards/krakend`