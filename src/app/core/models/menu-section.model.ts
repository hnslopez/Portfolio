import { MenuItem } from "./menu-item.model";

/**
 * Define la estructura de los elementos del menú.
 * @param name - Nombre de la sección.
 * @param route - Ruta a la que apunta la sección.
 * @param icon - Icono que se muestra junto a la sección.
 * @param children - Hijos de la sección.
 */
export interface MenuSection  {
    name: string;
    route?: string;
    icon: string;
    children: MenuItem[];
    isOpen?:boolean;
  }