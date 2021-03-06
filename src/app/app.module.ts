import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PagesAddpostPage } from '../pages/addpost/pages-addpost';
import { PagesViewpostPage } from '../pages/pages-viewpost/pages-viewpost';
import { PagesViewprofilePage } from '../pages/pages-viewprofile/pages-viewprofile';
import { PagesCommentModalPage } from '../pages/pages-comment-modal/pages-comment-modal';
import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PostProvider } from '../providers/post/post';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { PagesChatPage } from '../pages/pages-chat/pages-chat';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { ChatProvider } from '../providers/chat/chat';
import { PagesEditprofilePage } from '../pages/pages-editprofile/pages-editprofile'
import { PagesPersonalchatbubblePage } from '../pages/pages-personalchatbubble/pages-personalchatbubble';
import { PagesStoryViewerPage } from '../pages/pages-story-viewer/pages-story-viewer';
import { Camera } from '@ionic-native/camera';
const config: SocketIoConfig = { url: 'https://sociomediaapp-server.herokuapp.com', options: {} };
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { DatePipe } from '@angular/common';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { MessageProvider } from '../providers/message/message';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { EmojiPickerModule } from 'ionic-emoji-picker';
import { DatePicker } from '@ionic-native/date-picker';
import { ModalController } from 'ionic-angular';
import { TimeAgoPipe } from 'time-ago-pipe';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { IonicSwipeAllModule } from 'ionic-swipe-all';
import { LongPressModule } from 'ionic-long-press';
import { CameraPreview } from '@ionic-native/camera-preview';
import { PagesCameratestPage } from '../pages/pages-cameratest/pages-cameratest'
import { SocialSharing } from '@ionic-native/social-sharing';
import { ContentLoaderModule } from '@netbasal/ngx-content-loader';
import { Geolocation } from "@ionic-native/geolocation";
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesNotificationsPage } from '../pages/pages-notifications/pages-notifications';
import { PagesSearchfriendsPage } from '../pages/pages-searchfriends/pages-searchfriends';
import { Network } from '@ionic-native/network';
import { FriendProvider } from '../providers/friend/friend';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    PagesAddpostPage,
    PagesViewpostPage,
    PagesEditprofilePage,
    PagesNotificationsPage,
    PagesSearchfriendsPage,
    PagesViewprofilePage,
    PagesCommentModalPage,
    PagesChatPage,
    PagesStoryViewerPage,
    TimeAgoPipe,
    PagesPersonalchatbubblePage,
    PagesCameratestPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    }),
    SocketIoModule.forRoot(config),
    HttpClientModule,
    ContentLoaderModule,
    IonicSwipeAllModule,
    LongPressModule,
    BrowserAnimationsModule,
    EmojiPickerModule.forRoot(),
    IonicImageViewerModule],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PagesStoryViewerPage,
    HomePage,
    TabsPage,
    PagesChatPage,
    PagesNotificationsPage,
    PagesSearchfriendsPage,
    PagesEditprofilePage,
    PagesAddpostPage,
    PagesViewprofilePage,
    PagesCommentModalPage,
    PagesViewpostPage,
    PagesPersonalchatbubblePage,
    PagesCameratestPage
  ],
  providers: [
    StatusBar,
    Network,
    Geolocation,
    NativeGeocoder,
    SocialSharing,
    CameraPreview,
    DatePipe,
    FingerprintAIO,
    Camera,
    ModalController,
    DatePicker,
    PhotoViewer,
    ChatProvider,
    LocalNotifications,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PostProvider,
    AuthenticationProvider,
    MessageProvider,
    FriendProvider

  ],
  exports: [PagesAddpostPage, PagesStoryViewerPage, PagesCameratestPage, PagesCommentModalPage]
})
export class AppModule { }

