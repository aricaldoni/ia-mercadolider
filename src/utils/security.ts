/**
 * Security utilities for input sanitization and validation
 */

// HTML entities mapping for XSS prevention
const HTML_ENTITIES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '/': '&#x2F;',
  '`': '&#96;',
  '=': '&#x3D;'
};

/**
 * Sanitizes HTML content to prevent XSS attacks
 */
export const sanitizeHtml = (input: string): string => {
  if (typeof input !== 'string') return '';
  
  return input.replace(/[&<>"'`=/]/g, (match) => HTML_ENTITIES[match] || match);
};

/**
 * Validates and sanitizes email addresses
 */
export const sanitizeEmail = (email: string): string => {
  if (typeof email !== 'string') return '';
  
  // Remove potentially dangerous characters while keeping valid email chars
  const sanitized = email.replace(/[<>"'`]/g, '').trim().toLowerCase();
  
  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  return emailRegex.test(sanitized) ? sanitized : '';
};

/**
 * Validates and sanitizes phone numbers
 */
export const sanitizePhone = (phone: string): string => {
  if (typeof phone !== 'string') return '';
  
  // Remove all non-digit characters except + and spaces
  return phone.replace(/[^\d\s+()-]/g, '').trim();
};

/**
 * Validates and sanitizes general text input
 */
export const sanitizeText = (text: string, maxLength: number = 1000): string => {
  if (typeof text !== 'string') return '';
  
  // Remove HTML tags and limit length
  const sanitized = sanitizeHtml(text).trim();
  
  return sanitized.length > maxLength ? sanitized.substring(0, maxLength) : sanitized;
};

/**
 * Validates form data structure
 */
export const validateFormData = (data: any): data is {
  name: string;
  email: string;
  phone?: string;
  message?: string;
} => {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof data.name === 'string' &&
    typeof data.email === 'string' &&
    data.name.trim().length > 0 &&
    data.email.trim().length > 0
  );
};

/**
 * Rate limiting helper (simple in-memory implementation)
 */
class RateLimiter {
  private attempts: Map<string, { count: number; resetTime: number }> = new Map();
  
  isAllowed(identifier: string, maxAttempts: number = 5, windowMs: number = 300000): boolean {
    const now = Date.now();
    const key = identifier;
    const current = this.attempts.get(key);
    
    if (!current || now > current.resetTime) {
      this.attempts.set(key, { count: 1, resetTime: now + windowMs });
      return true;
    }
    
    if (current.count >= maxAttempts) {
      return false;
    }
    
    current.count++;
    return true;
  }
}

export const rateLimiter = new RateLimiter();
