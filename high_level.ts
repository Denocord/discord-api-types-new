/**
 * Higher-level Discord API abstractions for Denocord
 */

import type * as lowLevel from "./v6/index.ts";

export const DATA_SYMBOL = Symbol("Denocord::Data");
export enum DataTypes {
  USER,
  GUILD,
  ROLE,
  CHANNEL,
  MEMBER,
  MESSAGE,
  WEBHOOK,
  INVITE,
  UNKNOWN,
}

export interface SnowflakeBase {
  id: string;
  [DATA_SYMBOL]: DataTypes;
}

type HighLevelWrap<O, N> = Omit<O, keyof N> & N;
type PickOptionalType<T, P extends keyof T> = Required<Pick<T, P>>[P];

type GuildVoiceState = PickOptionalType<
  lowLevel.APIGuild,
  "voice_states"
>[number];

export type Guild = HighLevelWrap<lowLevel.APIGuild, {
  roles: Map<string, Role>;
  voice_states?: Map<string, GuildVoiceState>;
  members?: Map<string, GuildMember>;
  channels?: Map<string, Channel>;
  presences?: Map<string, lowLevel.GatewayPresenceUpdate>;

  [DATA_SYMBOL]: DataTypes.GUILD;
}>;

export interface Channel extends lowLevel.APIChannel {
  recipients?: User[];
  [DATA_SYMBOL]: DataTypes.CHANNEL;
}

export interface User extends lowLevel.APIUser {
  [DATA_SYMBOL]: DataTypes.USER;
}

export interface GuildMember extends lowLevel.APIGuildMember {
  user?: User;
  [DATA_SYMBOL]: DataTypes.MEMBER;
}

export interface Message extends lowLevel.APIMessage {
  author: User;
  member?: GuildMember;
  mentions: MessageMention[];

  [DATA_SYMBOL]: DataTypes.MESSAGE;
}

export interface Role extends lowLevel.APIRole {
  [DATA_SYMBOL]: DataTypes.ROLE;
}

export interface Webhook extends lowLevel.APIWebhook {
  user?: User;

  [DATA_SYMBOL]: DataTypes.WEBHOOK;
}

export type Invite = HighLevelWrap<lowLevel.APIInvite, {
  guild?: Pick<Guild, "id" | "name" | "icon" | "splash" | typeof DATA_SYMBOL>;
  channel?: Pick<Channel, "id" | "type" | "name" | typeof DATA_SYMBOL>;
  inviter?: User;
  target_user?: User;

  [DATA_SYMBOL]: DataTypes.INVITE;
}>;

export interface Ban extends lowLevel.APIBan {
  user: User;
}

export type MessageMention = User & { member?: Omit<GuildMember, "user"> };
export interface MessageCreatePayload
  extends lowLevel.RESTPostAPIChannelMessageJSONBody {
  files?: File[];
}

export interface WebhookExecutePayload
  extends
    lowLevel.RESTPostAPIWebhookWithTokenJSONBody,
    lowLevel.RESTPostAPIWebhookWithTokenQuery {
  files?: File[];
}

export * from "./v6/index.ts";
