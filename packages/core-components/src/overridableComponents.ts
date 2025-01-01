/*
 * Copyright 2021 The Devtools Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Overrides } from '@material-ui/core/styles/overrides';
import { StyleRules } from '@material-ui/core/styles/withStyles';

import {
  AvatarClassKey,
  DependencyGraphDefaultLabelClassKey,
  DependencyGraphDefaultNodeClassKey,
  DependencyGraphEdgeClassKey,
  DependencyGraphNodeClassKey,
  DismissableBannerClassKey,
  EmptyStateClassKey,
  EmptyStateImageClassKey,
  ErrorPanelClassKey,
  FeatureCalloutCircleClassKey,
  HeaderIconLinkRowClassKey,
  IconLinkVerticalClassKey,
  HorizontalScrollGridClassKey,
  LifecycleClassKey,
  MarkdownContentClassKey,
  LoginRequestListItemClassKey,
  LogViewerClassKey,
  OAuthRequestDialogClassKey,
  OverflowTooltipClassKey,
  GaugeClassKey,
  GaugeCardClassKey,
  ResponseErrorPanelClassKey,
  SelectInputBaseClassKey,
  SelectClassKey,
  ClosedDropdownClassKey,
  OpenedDropdownClassKey,
  SimpleStepperFooterClassKey,
  SimpleStepperStepClassKey,
  StatusClassKey,
  MetadataTableTitleCellClassKey,
  MetadataTableCellClassKey,
  MetadataTableListClassKey,
  MetadataTableListItemClassKey,
  StructuredMetadataTableListClassKey,
  StructuredMetadataTableNestedListClassKey,
  SupportButtonClassKey,
  TableFiltersClassKey,
  SubvalueCellClassKey,
  TableHeaderClassKey,
  TableToolbarClassKey,
  FiltersContainerClassKey,
  TableClassKey,
  WarningPanelClassKey,
  LinkClassKey,
  FavoriteToggleIconClassKey,
} from './components';

import {
  BottomLinkClassKey,
  BreadcrumbsClickableTextClassKey,
  BreadcrumbsStyledBoxClassKey,
  DevtoolsContentClassKey,
  ContentHeaderClassKey,
  ErrorPageClassKey,
  MicDropClassKey,
  HeaderClassKey,
  HeaderLabelClassKey,
  HeaderTabsClassKey,
  InfoCardClassKey,
  CardActionsTopRightClassKey,
  ItemCardGridClassKey,
  ItemCardHeaderClassKey,
  PageClassKey,
  SidebarClassKey,
  SidebarSpaceClassKey,
  SidebarSpacerClassKey,
  SidebarDividerClassKey,
  SidebarItemClassKey,
  SidebarPageClassKey,
  CustomProviderClassKey,
  SignInPageClassKey,
  TabbedCardClassKey,
  BoldHeaderClassKey,
  CardTabClassKey,
  SidebarSubmenuClassKey,
  SidebarSubmenuItemClassKey,
  StackDetailsClassKey,
  BreadcrumbsCurrentPageClassKey,
} from './layout';

type DevtoolsComponentsNameToClassKey = {
  DevtoolsAvatar: AvatarClassKey;
  DevtoolsDependencyGraphDefaultLabel: DependencyGraphDefaultLabelClassKey;
  DevtoolsDependencyGraphDefaultNode: DependencyGraphDefaultNodeClassKey;
  DevtoolsDependencyGraphEdge: DependencyGraphEdgeClassKey;
  DevtoolsDependencyGraphNode: DependencyGraphNodeClassKey;
  DevtoolsDismissableBanner: DismissableBannerClassKey;
  DevtoolsEmptyState: EmptyStateClassKey;
  DevtoolsEmptyStateImage: EmptyStateImageClassKey;
  DevtoolsErrorPanel: ErrorPanelClassKey;
  DevtoolsFeatureCalloutCircular: FeatureCalloutCircleClassKey;
  DevtoolsHeaderIconLinkRow: HeaderIconLinkRowClassKey;
  DevtoolsIconLinkVertical: IconLinkVerticalClassKey;
  DevtoolsHorizontalScrollGrid: HorizontalScrollGridClassKey;
  DevtoolsLifecycle: LifecycleClassKey;
  DevtoolsMarkdownContent: MarkdownContentClassKey;
  DevtoolsLoginRequestListItem: LoginRequestListItemClassKey;
  DevtoolsLogViewer: LogViewerClassKey;
  DevtoolsOAuthRequestDialog: OAuthRequestDialogClassKey;
  DevtoolsOverflowTooltip: OverflowTooltipClassKey;
  DevtoolsGauge: GaugeClassKey;
  DevtoolsGaugeCard: GaugeCardClassKey;
  DevtoolsResponseErrorPanel: ResponseErrorPanelClassKey;
  DevtoolsSelectInputBase: SelectInputBaseClassKey;
  DevtoolsSelect: SelectClassKey;
  DevtoolsClosedDropdown: ClosedDropdownClassKey;
  DevtoolsOpenedDropdown: OpenedDropdownClassKey;
  DevtoolsSimpleStepperFooter: SimpleStepperFooterClassKey;
  SimpleStepperStep: SimpleStepperStepClassKey;
  DevtoolsStatus: StatusClassKey;
  DevtoolsMetadataTableTitleCell: MetadataTableTitleCellClassKey;
  DevtoolsMetadataTableCell: MetadataTableCellClassKey;
  DevtoolsMetadataTableList: MetadataTableListClassKey;
  DevtoolsMetadataTableListItem: MetadataTableListItemClassKey;
  DevtoolsStructuredMetadataTableList: StructuredMetadataTableListClassKey;
  DevtoolsStructuredMetadataTableNestedList: StructuredMetadataTableNestedListClassKey;
  DevtoolsSupportButton: SupportButtonClassKey;
  DevtoolsTableFilters: TableFiltersClassKey;
  DevtoolsSubvalueCell: SubvalueCellClassKey;
  DevtoolsTableHeader: TableHeaderClassKey;
  DevtoolsTableToolbar: TableToolbarClassKey;
  DevtoolsTableFiltersContainer: FiltersContainerClassKey;
  DevtoolsTable: TableClassKey;
  DevtoolsWarningPanel: WarningPanelClassKey;
  DevtoolsBottomLink: BottomLinkClassKey;
  DevtoolsBreadcrumbsClickableText: BreadcrumbsClickableTextClassKey;
  DevtoolsBreadcrumbsStyledBox: BreadcrumbsStyledBoxClassKey;
  BreadcrumbsCurrentPage: BreadcrumbsCurrentPageClassKey;
  DevtoolsContent: DevtoolsContentClassKey;
  DevtoolsContentHeader: ContentHeaderClassKey;
  DevtoolsErrorPage: ErrorPageClassKey;
  DevtoolsErrorPageMicDrop: MicDropClassKey;
  DevtoolsErrorPageStackDetails: StackDetailsClassKey;
  DevtoolsHeader: HeaderClassKey;
  DevtoolsHeaderLabel: HeaderLabelClassKey;
  DevtoolsHeaderTabs: HeaderTabsClassKey;
  DevtoolsInfoCard: InfoCardClassKey;
  DevtoolsInfoCardCardActionsTopRight: CardActionsTopRightClassKey;
  DevtoolsItemCardGrid: ItemCardGridClassKey;
  DevtoolsItemCardHeader: ItemCardHeaderClassKey;
  DevtoolsPage: PageClassKey;
  DevtoolsSidebar: SidebarClassKey;
  DevtoolsSidebarSpace: SidebarSpaceClassKey;
  DevtoolsSidebarSpacer: SidebarSpacerClassKey;
  DevtoolsSidebarDivider: SidebarDividerClassKey;
  DevtoolsSidebarItem: SidebarItemClassKey;
  DevtoolsSidebarSubmenu: SidebarSubmenuClassKey;
  DevtoolsSidebarSubmenuItem: SidebarSubmenuItemClassKey;
  DevtoolsSidebarPage: SidebarPageClassKey;
  DevtoolsCustomProvider: CustomProviderClassKey;
  DevtoolsSignInPage: SignInPageClassKey;
  DevtoolsTabbedCard: TabbedCardClassKey;
  DevtoolsTabbedCardBoldHeader: BoldHeaderClassKey;
  DevtoolsCardTab: CardTabClassKey;
  DevtoolsLink: LinkClassKey;
  DevtoolsFavoriteToggleIcon: FavoriteToggleIconClassKey;
};

/** @public */
export type DevtoolsOverrides = Overrides & {
  [Name in keyof DevtoolsComponentsNameToClassKey]?: Partial<
    StyleRules<DevtoolsComponentsNameToClassKey[Name]>
  >;
};

declare module '@devtools/theme' {
  interface OverrideComponentNameToClassKeys
    extends DevtoolsComponentsNameToClassKey {}
}
