'use strict';

import { Clicker } from './clicker';

describe('Clicker', () => {

  it('initialises with the correct name', () => {
    let clicker: Clicker = new Clicker('12434', 'testClicker');
    expect(clicker.getName()).toEqual('testClicker');
  });

  describe('icon', function (): void {
    it('gives icons from the provided list of icons, if given one', function (): void {
      const providedIcons: Array<string> = ['icon1', 'icon2'];
      let clicker1: Clicker = new Clicker('12434', 'testClicker', providedIcons);
      expect(providedIcons).toContain(clicker1.getIcon());
      expect(providedIcons.indexOf(clicker1.getIcon())).toBeGreaterThan(-1); // same as above
    });

    it('is randomly generated', function (): void {
      let clicker1: Clicker = new Clicker('12434', 'testClicker');
      let icon1: string = clicker1.getIcon();
      let clicker2: Clicker = new Clicker('2345', 'testClicker2');
      let icon2: string = clicker2.getIcon();
      // What is the problem with this test?
      expect(icon1).not.toEqual(icon2);
    });

    it('is not changed when read', function (): void {
      let clicker: Clicker = new Clicker('12434', 'testClicker');
      expect(clicker.getIcon()).toBeDefined();
      expect(clicker.getIcon()).toEqual(clicker.getIcon());
      expect(clicker.getIcon()).toEqual(clicker.getIcon());
    });
  });
});
