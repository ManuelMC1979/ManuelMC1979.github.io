# Guía de Estilo de Botones ACHS - Optimización Completada

## 📋 Resumen de Cambios

Se han optimizado todos los botones del sitio web ACHS Ejecutivo Centralizado con los colores corporativos oficiales, bordes suaves, sombras ligeras y estados hover claros.

---

## 🎨 Paleta de Colores Corporativos

### Botón Primario - Azul ACHS
- **Color Base:** `#005DAA`
- **Color Hover:** `#003F7D`
- **Texto:** `#FFFFFF` (Blanco)
- **Uso:** Acciones principales y llamados a la acción importantes

### Botón Secundario - Verde ACHS Salud
- **Color Base:** `#2BB673`
- **Color Hover:** `#239F5F`
- **Texto:** `#FFFFFF` (Blanco)
- **Uso:** Acciones secundarias y alternativas

### Botón Herramienta - Azul ACHS
- **Color Base:** `#005DAA`
- **Color Hover:** `#003F7D`
- **Texto:** `#FFFFFF` (Blanco)
- **Uso:** Herramientas y funciones auxiliares

---

## 🔧 Especificaciones Técnicas

### Botón Primario (`.btn-primario`)
```css
.btn-primario {
    background: #005DAA;
    color: #ffffff;
    border-radius: 8px;
    border: none;
    padding: 12px 16px;
    min-height: 42px;
    box-shadow: 0 2px 8px rgba(0, 93, 170, 0.2);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primario:hover {
    background: #003F7D;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 63, 125, 0.3);
}

.btn-primario:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 93, 170, 0.25);
}

.btn-primario:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 93, 170, 0.3);
}
```

### Botón Secundario (`.btn-secundario`)
```css
.btn-secundario {
    background: #2BB673;
    color: #ffffff;
    border-radius: 8px;
    border: none;
    padding: 12px 16px;
    min-height: 42px;
    box-shadow: 0 2px 8px rgba(43, 182, 115, 0.2);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-secundario:hover {
    background: #239F5F;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(43, 182, 115, 0.3);
}

.btn-secundario:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(43, 182, 115, 0.25);
}

.btn-secundario:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(43, 182, 115, 0.3);
}
```

### Botón Herramienta (`.btn-herramienta`)
```css
.btn-herramienta {
    background: #005DAA;
    color: #fff;
    border-radius: 6px;
    border: none;
    padding: 8px 12px;
    min-height: 36px;
    box-shadow: 0 1px 4px rgba(0, 93, 170, 0.15);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-herramienta:hover {
    background: #003F7D;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 63, 125, 0.25);
}
```

---

## ✨ Características de Diseño

### Bordes Suaves
- **Botones primarios y secundarios:** `border-radius: 8px`
- **Botones herramienta:** `border-radius: 6px`
- Proporciona una apariencia moderna y profesional

### Sombras Ligeras
- **Estado normal:** Sombras sutiles con opacidad 0.15-0.2
- **Estado hover:** Sombras más pronunciadas con opacidad 0.25-0.3
- **Estado activo:** Sombras reducidas para efecto de presión

### Estados Hover Claros
- **Cambio de color:** Transición a tonos más oscuros
- **Elevación:** Desplazamiento hacia arriba (-2px para primarios, -1px para herramientas)
- **Sombra aumentada:** Mayor profundidad visual
- **Transición suave:** `cubic-bezier(0.4, 0, 0.2, 1)` para movimiento natural

### Estados de Interacción
1. **Normal:** Color base con sombra ligera
2. **Hover:** Color más oscuro, elevación y sombra aumentada
3. **Active:** Retorno a posición base con sombra reducida
4. **Focus:** Anillo de enfoque visible para accesibilidad

---

## 📊 Mejoras Implementadas

### ✅ Consistencia Visual
- Todos los botones siguen la misma estructura de diseño
- Colores corporativos aplicados uniformemente
- Espaciado y tipografía consistentes

### ✅ Accesibilidad
- Contraste adecuado entre texto y fondo
- Estados de enfoque visibles
- Altura mínima de 42px para mejor clickabilidad

### ✅ Experiencia de Usuario
- Feedback visual claro en todas las interacciones
- Transiciones suaves y naturales
- Jerarquía visual clara entre tipos de botones

### ✅ Rendimiento
- Transiciones optimizadas con `cubic-bezier`
- Uso eficiente de sombras y transformaciones
- Sin gradientes complejos que afecten el rendimiento

---

## 🎯 Uso Recomendado

### Botón Primario
- Acciones principales (Guardar, Enviar, Confirmar)
- Llamados a la acción importantes
- Máximo 1-2 por vista

### Botón Secundario
- Acciones alternativas (Cancelar, Volver, Opciones)
- Funciones complementarias
- Acciones de salud y bienestar

### Botón Herramienta
- Herramientas auxiliares
- Funciones de utilidad
- Acciones frecuentes pero secundarias

---

## 📝 Notas de Implementación

- Los estilos están integrados en el archivo `index.html`
- No se requieren archivos CSS externos adicionales
- Compatible con todos los navegadores modernos
- Responsive y adaptable a diferentes tamaños de pantalla

---

**Fecha de Optimización:** 23 de enero de 2026  
**Versión:** 1.0  
**Estado:** ✅ Completado
