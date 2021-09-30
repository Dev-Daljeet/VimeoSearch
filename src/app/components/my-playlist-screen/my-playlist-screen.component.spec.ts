import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlaylistScreenComponent } from './my-playlist-screen.component';

describe('MyPlaylistScreenComponent', () => {
  let component: MyPlaylistScreenComponent;
  let fixture: ComponentFixture<MyPlaylistScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPlaylistScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPlaylistScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
