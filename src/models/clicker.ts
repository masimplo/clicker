'use strict';

import { Click } from './';

// Represents a single Clicker
export class Clicker {

  private id: string;
  private name: string;
  private clicks: Array<Click>;
  private icon: string;

  constructor(id: string, name: string, availableIcons: Array<string> = [
      'globe',
      'grid',
      'images',
      'power',
      'locked',
      'mail',
      'moon',
      'paper-plane']) {
    this.id = id;
    this.name = name;
    this.clicks = [];
    this.icon = availableIcons[this.getRandomInt(0, availableIcons.length - 1)];
  }

  public doClick(): void {
    this.clicks.push(new Click());
  }

  public addClick(click: Click): void {
    this.clicks.push(click);
  }

  public getCount(): number {
    return this.clicks.length;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getIcon(): string {
    return this.icon;
  }

  /**
   * Returns a random integer between min (inclusive) and max (inclusive)
   * Using Math.round() will give you a non-uniform distribution!
   */
  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
