FROM alpine:latest

ENV PROVIDER_NAME "{{ ProviderName }}"
ENV PROVIDER_TYPE "{{ ProviderType }}"

{% for value in DockerExampleData.Array1 %}
{{ value }}
{% endfor %}

{% for value in DockerExampleData.Array2 %}
{{ value }}
{% endfor %}

RUN {{ DockerExampleData.SetupExample.Line1 }}
RUN {{ DockerExampleData.SetupExample.Line2 }}

RUN "/bin/bash"
