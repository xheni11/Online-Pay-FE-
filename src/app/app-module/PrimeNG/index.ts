import { ConfirmationService, MessageService } from "primeng/api";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { MessageModule } from "primeng/message";
import { MessagesModule } from "primeng/messages";
import { PanelModule } from "primeng/panel";
import { TabMenuModule } from "primeng/tabmenu";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { ToastModule } from "primeng/toast";
import { ContextMenuModule } from "primeng/contextmenu";
export const modules: any[] = [
  ScrollPanelModule,
  ConfirmDialogModule,
  MessagesModule,
  MessageModule,
  ToastModule,
  DynamicDialogModule,
  ConfirmDialogModule,
  MessagesModule,
  MessageModule,
  DynamicDialogModule,
  PanelModule,
  ToastModule,
  ConfirmDialogModule,
  TabMenuModule,
  ContextMenuModule,
];

export const services: any[] = [MessageService, ConfirmationService];
