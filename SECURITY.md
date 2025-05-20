# Política de Seguridad

Gracias por tu interés en mejorar la seguridad de este proyecto .NET.

Este documento describe cómo reportar vulnerabilidades de manera responsable.

## Cómo Reportar Vulnerabilidades

Si descubres una vulnerabilidad en este proyecto, **no abras un issue público**. En su lugar, sigue este proceso:

1. Envía un correo a **[security@example.com]** con:
   - Descripción detallada del problema
   - Pasos para reproducirlo (incluyendo código de ejemplo, si es posible)
   - Posible impacto
   - Archivos afectados o paquetes NuGet relacionados
   - Tu información de contacto (opcional)

Nos comprometemos a responder lo antes posible y trabajar contigo de forma confidencial.

## Alcance

Esta política cubre vulnerabilidades en el código fuente de este repositorio, incluidas:

- Aplicaciones ASP.NET Core o Blazor
- Librerías en C# (.NET Standard/.NET Core/.NET 6+)
- Paquetes NuGet generados por este proyecto
- Scripts de despliegue o automatización (.ps1, YAML de GitHub Actions, etc.)

No cubre problemas en servicios externos (como Azure, GitHub, etc.) o en paquetes NuGet de terceros.

## ⏱Tiempos de Respuesta

| Tipo de vulnerabilidad | Tiempo estimado de respuesta |
|------------------------|------------------------------|
| Crítica                | < 48 horas                   |
| Alta                   | ≤ 5 días hábiles             |
| Media/Baja             | ≤ 10 días hábiles            |

En todos los casos, trabajaremos contigo para desarrollar y publicar un parche en una versión segura del proyecto.

## Buenas Prácticas de Seguridad (Recomendadas)

Mientras trabajas con este proyecto, te recomendamos:

- Mantener actualizado el SDK de .NET (https://dotnet.microsoft.com/en-us/download)
- Revisar dependencias NuGet con herramientas como [OWASP Dependency Check](https://jeremylong.github.io/DependencyCheck/)
- Utilizar herramientas como `dotnet list package --vulnerable` para detectar paquetes con CVEs conocidos
- Seguir las [recomendaciones de seguridad de Microsoft](https://learn.microsoft.com/en-us/dotnet/standard/security/)

## Reconocimiento

Si reportas una vulnerabilidad válida y deseas ser reconocido, podemos mencionarte (con tu consentimiento) en los agradecimientos del proyecto o en las notas de la versión.

---

Gracias por ayudarnos a mantener este proyecto seguro y confiable.
