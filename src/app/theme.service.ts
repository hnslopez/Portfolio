import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeType } from './shared/enum';

/**
 * Servicio encargado del manejo de temas.
 */
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  /**
   * Tema actual.
   */
  private currentTheme: ThemeType = ThemeType.Dark;
  private themeChanged = new BehaviorSubject<ThemeType>(this.currentTheme);

  /**
   * Obtiene el tema actual desde localStorage.
   */
  constructor() {
    const theme = localStorage.getItem('theme');
    if (theme && Object.values(ThemeType).includes(theme as ThemeType)) {
      this.currentTheme = theme as ThemeType;
      this.themeChanged.next(this.currentTheme); 

    }
  }

  /**
   * Obtiene el tipo de tema contrario al actual.
   * @param theme Tema actual.
   * @returns Tipo de tema contrario.
   */
  private reverseTheme(theme: ThemeType): ThemeType {
    return theme === ThemeType.Dark ? ThemeType.Default : ThemeType.Dark;
  }

  /**
   * Elimina el tipo de tema especificado de los elementos del DOM y del head.
   * @param theme Tipo de tema a eliminar.
   */
  private removeUnusedTheme(theme: ThemeType): void {
    document.documentElement.classList.remove(theme);
    const removedThemeStyle = document.getElementById(theme);
    if (removedThemeStyle) {
      document.head.removeChild(removedThemeStyle);
    }
  }

  /**
   * Carga la hoja de estilos del tema actual y lo aplica al DOM.
   * @param firstLoad Indica si es la primera carga.
   * @returns Promesa que se resuelve al cargar la hoja de estilos.
   */
  public loadTheme(firstLoad = true): Promise<Event> {
    const theme = this.currentTheme;
    if (firstLoad) {
      document.documentElement.classList.add(theme);
    }
    return new Promise<Event>((resolve, reject) => {
      this.loadCss(`${theme}.css`, theme).then(
        (e) => {
          if (!firstLoad) {
            document.documentElement.classList.add(theme);
          }
          this.removeUnusedTheme(this.reverseTheme(theme));
          localStorage.setItem('theme', theme);
          resolve(e);
        },
        (e) => reject(e)
      );
    });
  }

  /**
   * Alterna el tema actual y carga la hoja de estilos correspondiente.
   * @returns Promesa que se resuelve al cargar la hoja de estilos.
   */
  public toggleTheme(): Promise<Event> {
    this.currentTheme = this.reverseTheme(this.currentTheme);
    this.themeChanged.next(this.currentTheme); 
    return this.loadTheme(false);
  }

    /**
   * Obtener el tema actual.
   * @returns Retorna el tema actual.
   */
    public getThemeChanged(): BehaviorSubject<ThemeType> {
      return this.themeChanged;
    }

  /**
   * Carga una hoja de estilos de forma asíncrona.
   * @param href Ruta de la hoja de estilos.
   * @param id Identificador único de la hoja de estilos.
   * @returns Promesa que se resuelve al cargar la hoja de estilos.
   */
  private loadCss(href: string, id: string): Promise<Event> {
    return new Promise((resolve, reject) => {
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = href;
      style.id = id;
      style.onload = resolve;
      style.onerror = reject;
      document.head.append(style);
    });
  }
}
