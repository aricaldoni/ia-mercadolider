
/**
 * Form validation schemas and utilities
 */

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
}

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
  sanitizedData?: ContactFormData;
}

/**
 * Validates contact form data with comprehensive security checks
 */
export const validateContactForm = (data: any): ValidationResult => {
  const errors: ValidationError[] = [];
  
  // Type and structure validation
  if (!data || typeof data !== 'object') {
    return {
      isValid: false,
      errors: [{ field: 'form', message: 'Datos del formulario inválidos' }]
    };
  }

  // Name validation
  if (!data.name || typeof data.name !== 'string') {
    errors.push({ field: 'name', message: 'El nombre es requerido' });
  } else {
    const nameLength = data.name.trim().length;
    if (nameLength < 2) {
      errors.push({ field: 'name', message: 'El nombre debe tener al menos 2 caracteres' });
    } else if (nameLength > 100) {
      errors.push({ field: 'name', message: 'El nombre no puede exceder 100 caracteres' });
    }
    // Check for suspicious patterns
    if (/[<>\"'`&]/.test(data.name)) {
      errors.push({ field: 'name', message: 'El nombre contiene caracteres no válidos' });
    }
  }

  // Email validation
  if (!data.email || typeof data.email !== 'string') {
    errors.push({ field: 'email', message: 'El email es requerido' });
  } else {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const email = data.email.trim().toLowerCase();
    
    if (!emailRegex.test(email)) {
      errors.push({ field: 'email', message: 'Ingresá un email válido' });
    } else if (email.length > 254) {
      errors.push({ field: 'email', message: 'El email es demasiado largo' });
    }
    // Check for suspicious patterns
    if (/[<>\"'`]/.test(email)) {
      errors.push({ field: 'email', message: 'El email contiene caracteres no válidos' });
    }
  }

  // Phone validation (optional)
  if (data.phone && typeof data.phone === 'string') {
    const phone = data.phone.trim();
    if (phone.length > 0) {
      // Allow digits, spaces, +, -, (, )
      if (!/^[\d\s+()-]+$/.test(phone)) {
        errors.push({ field: 'phone', message: 'El teléfono contiene caracteres no válidos' });
      } else if (phone.length > 20) {
        errors.push({ field: 'phone', message: 'El teléfono es demasiado largo' });
      }
    }
  }

  // Message validation (optional)
  if (data.message && typeof data.message === 'string') {
    const messageLength = data.message.trim().length;
    if (messageLength > 2000) {
      errors.push({ field: 'message', message: 'El mensaje no puede exceder 2000 caracteres' });
    }
  }

  if (errors.length > 0) {
    return { isValid: false, errors };
  }

  // Return sanitized data if validation passes
  const sanitizedData: ContactFormData = {
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    phone: data.phone ? data.phone.trim() : undefined,
    message: data.message ? data.message.trim() : undefined
  };

  return {
    isValid: true,
    errors: [],
    sanitizedData
  };
};
