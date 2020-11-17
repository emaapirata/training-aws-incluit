# Repo para el training 📖
Este repo contiene un ejemplo de uso de: Lambda, SQS, SNS. <br />

- **Clase 1**: Ejemplo básico usando el SDK de AWS para interactuar con SQS y SNS.
- **Clase 2**: Se mostrará cómo utilizar Serverless y CloudWatch con este mismo proyecto.
- **Clase 3**: Refactorizar usando nuestra libreria propia ebased/nbased.

## Tarea clase 1:
- Forkear repo
- Agregar lógica para validar entrada desde API Gateway
- Si los datos son incorrectos (el nombre no está o contiene caracteres inválidos) generar logs en CloudWatch
- En este último caso, devolver un error al usuario
- Generar una PR hacia el repo original
