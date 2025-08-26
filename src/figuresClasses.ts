export interface Figure {
  color: string;
  shape: string;
  getArea(): number;
}

// ✅ Classe Triângulo
export class Triangle implements Figure {
  color: string;

  shape = 'triângulo';

  a: number;

  b: number;

  c: number;

  constructor(color: string, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Os lados devem ser maiores que 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Os lados fornecidos não formam um triângulo válido');
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Number(area.toFixed(2));
  }
}

// ✅ Classe Círculo
export class Circle implements Figure {
  color: string;

  shape = 'círculo';

  radius: number;

  constructor(color: string, radius: number) {
    if (radius <= 0) {
      throw new Error('O raio deve ser maior que 0');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Number((Math.PI * this.radius ** 2).toFixed(2));
  }
}

// ✅ Classe Retângulo
export class Rectangle implements Figure {
  color: string;

  shape = 'retângulo';

  width: number;

  height: number;

  constructor(color: string, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('A largura e altura devem ser maiores que 0');
    }
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Number((this.width * this.height).toFixed(2));
  }
}

// ✅ Função utilitária (exportada também)
export function getInfo(fig: Figure): string {
  return `Um ${fig.shape} ${fig.color} - área: ${fig.getArea()}`;
}
