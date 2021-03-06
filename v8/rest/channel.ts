import type {
  APIChannel,
  APIEmbed,
  APIFollowedChannel,
  APIInvite,
  APIMessage,
  APIMessageReference,
  APIOverwrite,
  APIUser,
  ChannelType,
  InviteTargetUserType,
  MessageFlags,
  OverwriteType,
} from "../payloads/index.ts";

// #region TypeDefs

/**
 * https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mention-types
 */
export const enum AllowedMentionsTypes {
  Everyone = "everyone",
  Role = "roles",
  User = "users",
}

/**
 * https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mentions-structure
 */
export interface APIAllowedMentionsSend {
  parse?: AllowedMentionsTypes[];
  roles?: string[];
  users?: string[];
  replied_user?: boolean;
}

// #endregion TypeDefs

/**
 * https://discord.com/developers/docs/resources/channel#modify-channel
 */
export interface RESTPatchAPIChannelJSONBody {
  name?: string;
  type?: ChannelType.GUILD_NEWS | ChannelType.GUILD_TEXT;
  position?: number | null;
  topic?: string | null;
  nsfw?: boolean | null;
  rate_limit_per_user?: number | null;
  bitrate?: number | null;
  user_limit?: number | null;
  permission_overwrites?: APIOverwrite[] | null;
  parent_id?: string | null;
}

export type RESTGetAPIChannelResult = APIChannel;
export type RESTPatchAPIChannelResult = APIChannel;
export type RESTDeleteAPIChannelResult = APIChannel;

/**
 * https://discord.com/developers/docs/resources/channel#get-channel-messages
 */
export interface RESTGetAPIChannelMessagesQuery {
  around?: string;
  before?: string;
  after?: string;
  limit?: number;
}

export type RESTGetAPIChannelMessagesResult = APIMessage[];

export type APIMessageReferenceSend =
  & APIMessageReference
  & Required<Pick<APIMessageReference, "message_id">>;

/**
 * https://discord.com/developers/docs/resources/channel#create-message
 */
export interface RESTPostAPIChannelMessageJSONBody {
  content?: string;
  nonce?: number | string;
  tts?: boolean;
  embed?: APIEmbed;
  allowed_mentions?: APIAllowedMentionsSend;
  message_reference?: APIMessageReferenceSend;
}

/**
 * https://discord.com/developers/docs/resources/channel#create-message
 */
export type RESTPostAPIChannelMessageFormDataBody =
  | {
    /**
			 * JSON stringified message body
			 */
    payload_json?: string;
    /**
			 * The file contents
			 */
    file: unknown;
  }
  | {
    content?: string;
    nonce?: number | string;
    tts?: boolean;
    embed?: APIEmbed;
    allowed_mentions?: APIAllowedMentionsSend;
    message_reference?: APIMessageReferenceSend;
    /**
			 * The file contents
			 */
    file: unknown;
  };

/**
 * https://discord.com/developers/docs/resources/channel#edit-message
 */
export interface RESTPatchAPIChannelMessageJSONBody {
  content?: string | null;
  embed?: APIEmbed | null;
  allowed_mentions?: APIAllowedMentionsSend | null;
  flags?: MessageFlags | null;
}

export type RESTGetAPIChannelMessageResult = APIMessage;
export type RESTPostAPIChannelMessageResult = APIMessage;
export type RESTPatchAPIChannelMessageResult = APIMessage;
export type RESTDeleteAPIChannelMessageResult = never;

/**
 * https://discord.com/developers/docs/resources/channel#get-reactions
 */
export interface RESTGetAPIChannelMessageReactionsQuery {
  before?: string;
  after?: string;
  limit?: number;
}

export type RESTGetAPIChannelMessageReactionsResult = APIUser[];

export type RESTPutAPIChannelMessageReactionResult = never;
export type RESTDeleteAPIChannelMessageReactionResult = never;
export type RESTDeleteAPIChannelAllMessageReactionsResult = never;

/**
 * https://discord.com/developers/docs/resources/channel#bulk-delete-messages
 */
export interface RESTPostAPIChannelMessagesBulkDeleteJSONBody {
  messages: string[];
}

export type RESTPostAPIChannelMessagesBulkDeleteResult = never;

/**
 * https://discord.com/developers/docs/resources/channel#edit-channel-permissions
 */
export interface RESTPutAPIChannelPermissionsJSONBody {
  allow: string;
  deny: string;
  type: OverwriteType;
}

export type RESTPutAPIChannelPermissionsResult = never;
export type RESTDeleteAPIChannelPermissionsResult = never;

/**
 * https://discord.com/developers/docs/resources/channel#get-channel-invites
 */
export type RESTGetAPIChannelInvitesResult = APIInvite[];

export interface RESTPostAPIChannelInviteJSONBody {
  max_age?: number;
  max_uses?: number;
  temporary?: boolean;
  unique?: boolean;
  target_user_id?: string;
  target_user_type?: InviteTargetUserType;
}

/**
 * https://discord.com/developers/docs/resources/channel#trigger-typing-indicator
 */
export type RESTPostAPIChannelTypingResult = never;

/**
 * https://discord.com/developers/docs/resources/channel#get-pinned-messages
 */
export type RESTGetAPIChannelPinsResult = APIMessage[];

/**
 * https://discord.com/developers/docs/resources/channel#add-pinned-channel-message
 */
export type RESTPutAPIChannelPinResult = never;
export type RESTDeleteAPIChannelPinResult = never;

/**
 * https://discord.com/developers/docs/resources/channel#group-dm-add-recipient
 */
export interface RESTPutAPIChannelRecipientJSONBody {
  access_token: string;
  nick?: string;
}

export type RESTPutAPIChannelRecipientResult = unknown;
export type RESTDeleteAPIChannelRecipientResult = unknown;

/**
 * https://discord.com/developers/docs/resources/channel#crosspost-message
 */
export type RESTPostAPIChannelMessageCrosspostResult = APIMessage;

/**
 * https://discord.com/developers/docs/resources/channel#follow-news-channel
 */
export interface RESTPostAPIChannelFollowersJSONBody {
  webhook_channel_id: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#follow-news-channel
 */
export type RESTPostAPIChannelFollowersResult = APIFollowedChannel;
