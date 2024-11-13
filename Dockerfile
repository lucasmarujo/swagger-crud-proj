# Usa a imagem oficial do Nginx
FROM nginx:alpine

# Copia os arquivos HTML, CSS e JS para o diretório padrão do Nginx
COPY frontend /usr/share/nginx/html

# Expõe a porta 80 para o servidor
EXPOSE 80

# Comando para iniciar o Nginx em modo foreground
CMD ["nginx", "-g", "daemon off;"]
