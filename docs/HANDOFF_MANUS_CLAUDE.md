# Handoff do site Nogueira da Gama

Este documento resume o estado atual do site para continuidade no Manus, Claude ou outra ferramenta.

## Objetivo

Manter no ar o site institucional do escritorio Nogueira da Gama Assessoria Juridica, preservando o visual original aprovado.

## Enderecos

- Site publicado no GitHub Pages: https://ddquarentena-sketch.github.io/
- Dominio principal: http://www.nogueiradagamaassessoria.com.br
- Dominio com HTTPS: https://www.nogueiradagamaassessoria.com.br
- Repositorio do codigo-fonte: https://github.com/ddquarentena-sketch/nogueira-da-gama-site
- Repositorio publicado no GitHub Pages: https://github.com/ddquarentena-sketch/ddquarentena-sketch.github.io

## Estado atual

- O site foi recuperado do pacote final produzido no Manus.
- O visual original aprovado foi preservado.
- O build foi validado localmente antes da publicacao.
- O codigo-fonte completo esta salvo no GitHub.
- A versao estatica publicada esta no repositorio `ddquarentena-sketch.github.io`.
- O dominio foi configurado no Registro.br para apontar para GitHub Pages.

## DNS configurado no Registro.br

Dominio raiz:

```text
nogueiradagamaassessoria.com.br A 185.199.108.153
nogueiradagamaassessoria.com.br A 185.199.109.153
nogueiradagamaassessoria.com.br A 185.199.110.153
nogueiradagamaassessoria.com.br A 185.199.111.153
```

Subdominio `www`:

```text
www.nogueiradagamaassessoria.com.br CNAME ddquarentena-sketch.github.io
```

Nao voltar o `www` para `cname.manus.space`.

## Importante

- Nao alterar o design sem pedido expresso do Daniel.
- Nao depender do Manus para hospedagem.
- Nao hospedar localmente como solucao final.
- O site deve continuar publicado na internet, preferencialmente via GitHub Pages.
- O HTTPS pode levar ate 24 horas apos alteracoes de DNS para ficar disponivel no GitHub Pages.

## Como rodar ou publicar novamente

No repositorio do codigo-fonte:

```bash
npx pnpm@10.4.1 install
npx pnpm@10.4.1 run check
npx pnpm@10.4.1 run build
```

Depois, publicar o conteudo gerado em `dist/public` no repositorio:

```text
ddquarentena-sketch/ddquarentena-sketch.github.io
```

O arquivo `CNAME` do repositorio publicado deve conter:

```text
www.nogueiradagamaassessoria.com.br
```

## Troubleshooting rapido

Se o dominio mostrar erro do Cloudflare/Manus, provavelmente e cache DNS antigo.

Testes uteis:

```bash
dig +short www.nogueiradagamaassessoria.com.br CNAME @1.1.1.1
dig +short www.nogueiradagamaassessoria.com.br A @1.1.1.1
curl -I http://www.nogueiradagamaassessoria.com.br/
```

Resultado esperado:

- CNAME para `ddquarentena-sketch.github.io`.
- IPs `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
- Resposta HTTP `200 OK` quando o DNS ja tiver propagado.

Se o HTTPS falhar com erro de certificado, aguardar a emissao pelo GitHub Pages e tentar habilitar `Enforce HTTPS` novamente.
