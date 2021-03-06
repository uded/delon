import { ComponentFixture } from '@angular/core/testing';

import { builder, TestFormComponent, SFPage } from '../../../spec/base.spec';
import { SFSchema } from '../../../src/schema/index';

describe('form: widget: checkbox', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let page: SFPage;
  const widget = 'checkbox';
  const labelCls = '.ant-form-item-label';
  const chekcWrapCls = '.ant-checkbox-wrapper';

  beforeEach(() => ({ fixture, page } = builder({ detectChanges: false })));

  it('#working', () => {
    const s: SFSchema = {
      properties: { a: { type: 'string', ui: { widget }, default: true } },
    };
    page.newSchema(s).checkValue('a', true);
  });

  it('#visibleIf', () => {
    const s: SFSchema = {
      properties: {
        a: { type: 'string', ui: { widget } },
        b: { type: 'string', ui: { widget, visibleIf: { a: [true] } } },
      },
    };
    page
      .newSchema(s)
      .checkCount(chekcWrapCls, 1)
      .click(chekcWrapCls)
      .checkCount(chekcWrapCls, 2);
  });

  it('should be ingore title when not array data', () => {
    const title = 'test';
    const s: SFSchema = {
      properties: { a: { type: 'string', title, ui: { widget } } },
    };
    page
      .newSchema(s)
      .checkElText(labelCls, '')
      .checkElText(chekcWrapCls, title);
  });

  it('should be show title when is array data', done => {
    const title = 'test';
    const s: SFSchema = {
      properties: {
        a: { type: 'string', title, ui: { widget }, enum: ['item1', 'item2'] },
      },
    };
    page.newSchema(s);
    fixture.whenStable().then(() => {
      page.checkElText(labelCls, title);
      page.checkElText(chekcWrapCls, 'item1');
      done();
    });
  });
});
