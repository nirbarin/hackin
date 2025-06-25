
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Idea
 * 
 */
export type Idea = $Result.DefaultSelection<Prisma.$IdeaPayload>
/**
 * Model IdeaChat
 * 
 */
export type IdeaChat = $Result.DefaultSelection<Prisma.$IdeaChatPayload>
/**
 * Model Step
 * 
 */
export type Step = $Result.DefaultSelection<Prisma.$StepPayload>
/**
 * Model StepChat
 * 
 */
export type StepChat = $Result.DefaultSelection<Prisma.$StepChatPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model Pitch
 * 
 */
export type Pitch = $Result.DefaultSelection<Prisma.$PitchPayload>
/**
 * Model PitchDialog
 * 
 */
export type PitchDialog = $Result.DefaultSelection<Prisma.$PitchDialogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.idea`: Exposes CRUD operations for the **Idea** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ideas
    * const ideas = await prisma.idea.findMany()
    * ```
    */
  get idea(): Prisma.IdeaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ideaChat`: Exposes CRUD operations for the **IdeaChat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IdeaChats
    * const ideaChats = await prisma.ideaChat.findMany()
    * ```
    */
  get ideaChat(): Prisma.IdeaChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.step`: Exposes CRUD operations for the **Step** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Steps
    * const steps = await prisma.step.findMany()
    * ```
    */
  get step(): Prisma.StepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stepChat`: Exposes CRUD operations for the **StepChat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StepChats
    * const stepChats = await prisma.stepChat.findMany()
    * ```
    */
  get stepChat(): Prisma.StepChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pitch`: Exposes CRUD operations for the **Pitch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pitches
    * const pitches = await prisma.pitch.findMany()
    * ```
    */
  get pitch(): Prisma.PitchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pitchDialog`: Exposes CRUD operations for the **PitchDialog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PitchDialogs
    * const pitchDialogs = await prisma.pitchDialog.findMany()
    * ```
    */
  get pitchDialog(): Prisma.PitchDialogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    Project: 'Project',
    Idea: 'Idea',
    IdeaChat: 'IdeaChat',
    Step: 'Step',
    StepChat: 'StepChat',
    Team: 'Team',
    Pitch: 'Pitch',
    PitchDialog: 'PitchDialog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "project" | "idea" | "ideaChat" | "step" | "stepChat" | "team" | "pitch" | "pitchDialog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Idea: {
        payload: Prisma.$IdeaPayload<ExtArgs>
        fields: Prisma.IdeaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IdeaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IdeaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>
          }
          findFirst: {
            args: Prisma.IdeaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IdeaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>
          }
          findMany: {
            args: Prisma.IdeaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>[]
          }
          create: {
            args: Prisma.IdeaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>
          }
          createMany: {
            args: Prisma.IdeaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IdeaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>[]
          }
          delete: {
            args: Prisma.IdeaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>
          }
          update: {
            args: Prisma.IdeaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>
          }
          deleteMany: {
            args: Prisma.IdeaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IdeaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IdeaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>[]
          }
          upsert: {
            args: Prisma.IdeaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>
          }
          aggregate: {
            args: Prisma.IdeaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdea>
          }
          groupBy: {
            args: Prisma.IdeaGroupByArgs<ExtArgs>
            result: $Utils.Optional<IdeaGroupByOutputType>[]
          }
          count: {
            args: Prisma.IdeaCountArgs<ExtArgs>
            result: $Utils.Optional<IdeaCountAggregateOutputType> | number
          }
        }
      }
      IdeaChat: {
        payload: Prisma.$IdeaChatPayload<ExtArgs>
        fields: Prisma.IdeaChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IdeaChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IdeaChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaChatPayload>
          }
          findFirst: {
            args: Prisma.IdeaChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IdeaChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaChatPayload>
          }
          findMany: {
            args: Prisma.IdeaChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaChatPayload>[]
          }
          create: {
            args: Prisma.IdeaChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaChatPayload>
          }
          createMany: {
            args: Prisma.IdeaChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IdeaChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaChatPayload>[]
          }
          delete: {
            args: Prisma.IdeaChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaChatPayload>
          }
          update: {
            args: Prisma.IdeaChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaChatPayload>
          }
          deleteMany: {
            args: Prisma.IdeaChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IdeaChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IdeaChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaChatPayload>[]
          }
          upsert: {
            args: Prisma.IdeaChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaChatPayload>
          }
          aggregate: {
            args: Prisma.IdeaChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdeaChat>
          }
          groupBy: {
            args: Prisma.IdeaChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<IdeaChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.IdeaChatCountArgs<ExtArgs>
            result: $Utils.Optional<IdeaChatCountAggregateOutputType> | number
          }
        }
      }
      Step: {
        payload: Prisma.$StepPayload<ExtArgs>
        fields: Prisma.StepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          findFirst: {
            args: Prisma.StepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          findMany: {
            args: Prisma.StepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>[]
          }
          create: {
            args: Prisma.StepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          createMany: {
            args: Prisma.StepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>[]
          }
          delete: {
            args: Prisma.StepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          update: {
            args: Prisma.StepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          deleteMany: {
            args: Prisma.StepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>[]
          }
          upsert: {
            args: Prisma.StepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          aggregate: {
            args: Prisma.StepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStep>
          }
          groupBy: {
            args: Prisma.StepGroupByArgs<ExtArgs>
            result: $Utils.Optional<StepGroupByOutputType>[]
          }
          count: {
            args: Prisma.StepCountArgs<ExtArgs>
            result: $Utils.Optional<StepCountAggregateOutputType> | number
          }
        }
      }
      StepChat: {
        payload: Prisma.$StepChatPayload<ExtArgs>
        fields: Prisma.StepChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StepChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StepChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepChatPayload>
          }
          findFirst: {
            args: Prisma.StepChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StepChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepChatPayload>
          }
          findMany: {
            args: Prisma.StepChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepChatPayload>[]
          }
          create: {
            args: Prisma.StepChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepChatPayload>
          }
          createMany: {
            args: Prisma.StepChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StepChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepChatPayload>[]
          }
          delete: {
            args: Prisma.StepChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepChatPayload>
          }
          update: {
            args: Prisma.StepChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepChatPayload>
          }
          deleteMany: {
            args: Prisma.StepChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StepChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StepChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepChatPayload>[]
          }
          upsert: {
            args: Prisma.StepChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepChatPayload>
          }
          aggregate: {
            args: Prisma.StepChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStepChat>
          }
          groupBy: {
            args: Prisma.StepChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<StepChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.StepChatCountArgs<ExtArgs>
            result: $Utils.Optional<StepChatCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      Pitch: {
        payload: Prisma.$PitchPayload<ExtArgs>
        fields: Prisma.PitchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PitchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PitchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload>
          }
          findFirst: {
            args: Prisma.PitchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PitchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload>
          }
          findMany: {
            args: Prisma.PitchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload>[]
          }
          create: {
            args: Prisma.PitchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload>
          }
          createMany: {
            args: Prisma.PitchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PitchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload>[]
          }
          delete: {
            args: Prisma.PitchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload>
          }
          update: {
            args: Prisma.PitchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload>
          }
          deleteMany: {
            args: Prisma.PitchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PitchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PitchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload>[]
          }
          upsert: {
            args: Prisma.PitchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchPayload>
          }
          aggregate: {
            args: Prisma.PitchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePitch>
          }
          groupBy: {
            args: Prisma.PitchGroupByArgs<ExtArgs>
            result: $Utils.Optional<PitchGroupByOutputType>[]
          }
          count: {
            args: Prisma.PitchCountArgs<ExtArgs>
            result: $Utils.Optional<PitchCountAggregateOutputType> | number
          }
        }
      }
      PitchDialog: {
        payload: Prisma.$PitchDialogPayload<ExtArgs>
        fields: Prisma.PitchDialogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PitchDialogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchDialogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PitchDialogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchDialogPayload>
          }
          findFirst: {
            args: Prisma.PitchDialogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchDialogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PitchDialogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchDialogPayload>
          }
          findMany: {
            args: Prisma.PitchDialogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchDialogPayload>[]
          }
          create: {
            args: Prisma.PitchDialogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchDialogPayload>
          }
          createMany: {
            args: Prisma.PitchDialogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PitchDialogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchDialogPayload>[]
          }
          delete: {
            args: Prisma.PitchDialogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchDialogPayload>
          }
          update: {
            args: Prisma.PitchDialogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchDialogPayload>
          }
          deleteMany: {
            args: Prisma.PitchDialogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PitchDialogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PitchDialogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchDialogPayload>[]
          }
          upsert: {
            args: Prisma.PitchDialogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PitchDialogPayload>
          }
          aggregate: {
            args: Prisma.PitchDialogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePitchDialog>
          }
          groupBy: {
            args: Prisma.PitchDialogGroupByArgs<ExtArgs>
            result: $Utils.Optional<PitchDialogGroupByOutputType>[]
          }
          count: {
            args: Prisma.PitchDialogCountArgs<ExtArgs>
            result: $Utils.Optional<PitchDialogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    project?: ProjectOmit
    idea?: IdeaOmit
    ideaChat?: IdeaChatOmit
    step?: StepOmit
    stepChat?: StepChatOmit
    team?: TeamOmit
    pitch?: PitchOmit
    pitchDialog?: PitchDialogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    projects: number
    ideaChats: number
    stepChats: number
    pitchDialogs: number
    teams: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
    ideaChats?: boolean | UserCountOutputTypeCountIdeaChatsArgs
    stepChats?: boolean | UserCountOutputTypeCountStepChatsArgs
    pitchDialogs?: boolean | UserCountOutputTypeCountPitchDialogsArgs
    teams?: boolean | UserCountOutputTypeCountTeamsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIdeaChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdeaChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStepChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPitchDialogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PitchDialogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    ideas: number
    steps: number
    pitch: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ideas?: boolean | ProjectCountOutputTypeCountIdeasArgs
    steps?: boolean | ProjectCountOutputTypeCountStepsArgs
    pitch?: boolean | ProjectCountOutputTypeCountPitchArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountIdeasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdeaWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountPitchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PitchWhereInput
  }


  /**
   * Count Type IdeaCountOutputType
   */

  export type IdeaCountOutputType = {
    chats: number
  }

  export type IdeaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | IdeaCountOutputTypeCountChatsArgs
  }

  // Custom InputTypes
  /**
   * IdeaCountOutputType without action
   */
  export type IdeaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaCountOutputType
     */
    select?: IdeaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IdeaCountOutputType without action
   */
  export type IdeaCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdeaChatWhereInput
  }


  /**
   * Count Type StepCountOutputType
   */

  export type StepCountOutputType = {
    chats: number
  }

  export type StepCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | StepCountOutputTypeCountChatsArgs
  }

  // Custom InputTypes
  /**
   * StepCountOutputType without action
   */
  export type StepCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepCountOutputType
     */
    select?: StepCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StepCountOutputType without action
   */
  export type StepCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepChatWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    members: number
    projects: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | TeamCountOutputTypeCountMembersArgs
    projects?: boolean | TeamCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type PitchCountOutputType
   */

  export type PitchCountOutputType = {
    PitchDialog: number
  }

  export type PitchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PitchDialog?: boolean | PitchCountOutputTypeCountPitchDialogArgs
  }

  // Custom InputTypes
  /**
   * PitchCountOutputType without action
   */
  export type PitchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PitchCountOutputType
     */
    select?: PitchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PitchCountOutputType without action
   */
  export type PitchCountOutputTypeCountPitchDialogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PitchDialogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    githubId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    githubId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    githubId: number | null
    avatar: string | null
    name: string | null
    username: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    githubId: number | null
    avatar: string | null
    name: string | null
    username: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    githubId: number
    avatar: number
    name: number
    username: number
    skills: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    githubId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    githubId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    githubId?: true
    avatar?: true
    name?: true
    username?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    githubId?: true
    avatar?: true
    name?: true
    username?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    githubId?: true
    avatar?: true
    name?: true
    username?: true
    skills?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    githubId: number
    avatar: string | null
    name: string | null
    username: string
    skills: string[]
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    githubId?: boolean
    avatar?: boolean
    name?: boolean
    username?: boolean
    skills?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    ideaChats?: boolean | User$ideaChatsArgs<ExtArgs>
    stepChats?: boolean | User$stepChatsArgs<ExtArgs>
    pitchDialogs?: boolean | User$pitchDialogsArgs<ExtArgs>
    teams?: boolean | User$teamsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    githubId?: boolean
    avatar?: boolean
    name?: boolean
    username?: boolean
    skills?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    githubId?: boolean
    avatar?: boolean
    name?: boolean
    username?: boolean
    skills?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    githubId?: boolean
    avatar?: boolean
    name?: boolean
    username?: boolean
    skills?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "githubId" | "avatar" | "name" | "username" | "skills", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    ideaChats?: boolean | User$ideaChatsArgs<ExtArgs>
    stepChats?: boolean | User$stepChatsArgs<ExtArgs>
    pitchDialogs?: boolean | User$pitchDialogsArgs<ExtArgs>
    teams?: boolean | User$teamsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      ideaChats: Prisma.$IdeaChatPayload<ExtArgs>[]
      stepChats: Prisma.$StepChatPayload<ExtArgs>[]
      pitchDialogs: Prisma.$PitchDialogPayload<ExtArgs>[]
      teams: Prisma.$TeamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      githubId: number
      avatar: string | null
      name: string | null
      username: string
      skills: string[]
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ideaChats<T extends User$ideaChatsArgs<ExtArgs> = {}>(args?: Subset<T, User$ideaChatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdeaChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stepChats<T extends User$stepChatsArgs<ExtArgs> = {}>(args?: Subset<T, User$stepChatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pitchDialogs<T extends User$pitchDialogsArgs<ExtArgs> = {}>(args?: Subset<T, User$pitchDialogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PitchDialogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teams<T extends User$teamsArgs<ExtArgs> = {}>(args?: Subset<T, User$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly githubId: FieldRef<"User", 'Int'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly skills: FieldRef<"User", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.ideaChats
   */
  export type User$ideaChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaChat
     */
    select?: IdeaChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaChat
     */
    omit?: IdeaChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaChatInclude<ExtArgs> | null
    where?: IdeaChatWhereInput
    orderBy?: IdeaChatOrderByWithRelationInput | IdeaChatOrderByWithRelationInput[]
    cursor?: IdeaChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IdeaChatScalarFieldEnum | IdeaChatScalarFieldEnum[]
  }

  /**
   * User.stepChats
   */
  export type User$stepChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepChat
     */
    select?: StepChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepChat
     */
    omit?: StepChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepChatInclude<ExtArgs> | null
    where?: StepChatWhereInput
    orderBy?: StepChatOrderByWithRelationInput | StepChatOrderByWithRelationInput[]
    cursor?: StepChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StepChatScalarFieldEnum | StepChatScalarFieldEnum[]
  }

  /**
   * User.pitchDialogs
   */
  export type User$pitchDialogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PitchDialog
     */
    select?: PitchDialogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PitchDialog
     */
    omit?: PitchDialogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchDialogInclude<ExtArgs> | null
    where?: PitchDialogWhereInput
    orderBy?: PitchDialogOrderByWithRelationInput | PitchDialogOrderByWithRelationInput[]
    cursor?: PitchDialogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PitchDialogScalarFieldEnum | PitchDialogScalarFieldEnum[]
  }

  /**
   * User.teams
   */
  export type User$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    userId: number | null
  }

  export type SessionSumAggregateOutputType = {
    userId: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: number | null
    expiresAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    expiresAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    expiresAt: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    userId?: true
  }

  export type SessionSumAggregateInputType = {
    userId?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: number
    expiresAt: Date
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "expiresAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      expiresAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'Int'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    teamId: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    userId: number | null
    teamId: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    hackathonName: string | null
    theme: string | null
    suggestedTech: string | null
    judgingCriteria: string | null
    additionalData: string | null
    submissionTime: Date | null
    actualTech: string | null
    userId: number | null
    teamId: number | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    hackathonName: string | null
    theme: string | null
    suggestedTech: string | null
    judgingCriteria: string | null
    additionalData: string | null
    submissionTime: Date | null
    actualTech: string | null
    userId: number | null
    teamId: number | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    hackathonName: number
    theme: number
    suggestedTech: number
    judgingCriteria: number
    additionalData: number
    submissionTime: number
    actualTech: number
    userId: number
    teamId: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    hackathonName?: true
    theme?: true
    suggestedTech?: true
    judgingCriteria?: true
    additionalData?: true
    submissionTime?: true
    actualTech?: true
    userId?: true
    teamId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    hackathonName?: true
    theme?: true
    suggestedTech?: true
    judgingCriteria?: true
    additionalData?: true
    submissionTime?: true
    actualTech?: true
    userId?: true
    teamId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    hackathonName?: true
    theme?: true
    suggestedTech?: true
    judgingCriteria?: true
    additionalData?: true
    submissionTime?: true
    actualTech?: true
    userId?: true
    teamId?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    hackathonName: string
    theme: string | null
    suggestedTech: string | null
    judgingCriteria: string | null
    additionalData: string | null
    submissionTime: Date
    actualTech: string | null
    userId: number
    teamId: number | null
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hackathonName?: boolean
    theme?: boolean
    suggestedTech?: boolean
    judgingCriteria?: boolean
    additionalData?: boolean
    submissionTime?: boolean
    actualTech?: boolean
    userId?: boolean
    teamId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | Project$teamArgs<ExtArgs>
    ideas?: boolean | Project$ideasArgs<ExtArgs>
    steps?: boolean | Project$stepsArgs<ExtArgs>
    pitch?: boolean | Project$pitchArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hackathonName?: boolean
    theme?: boolean
    suggestedTech?: boolean
    judgingCriteria?: boolean
    additionalData?: boolean
    submissionTime?: boolean
    actualTech?: boolean
    userId?: boolean
    teamId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | Project$teamArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hackathonName?: boolean
    theme?: boolean
    suggestedTech?: boolean
    judgingCriteria?: boolean
    additionalData?: boolean
    submissionTime?: boolean
    actualTech?: boolean
    userId?: boolean
    teamId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | Project$teamArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    hackathonName?: boolean
    theme?: boolean
    suggestedTech?: boolean
    judgingCriteria?: boolean
    additionalData?: boolean
    submissionTime?: boolean
    actualTech?: boolean
    userId?: boolean
    teamId?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hackathonName" | "theme" | "suggestedTech" | "judgingCriteria" | "additionalData" | "submissionTime" | "actualTech" | "userId" | "teamId", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | Project$teamArgs<ExtArgs>
    ideas?: boolean | Project$ideasArgs<ExtArgs>
    steps?: boolean | Project$stepsArgs<ExtArgs>
    pitch?: boolean | Project$pitchArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | Project$teamArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | Project$teamArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      team: Prisma.$TeamPayload<ExtArgs> | null
      ideas: Prisma.$IdeaPayload<ExtArgs>[]
      steps: Prisma.$StepPayload<ExtArgs>[]
      pitch: Prisma.$PitchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      hackathonName: string
      theme: string | null
      suggestedTech: string | null
      judgingCriteria: string | null
      additionalData: string | null
      submissionTime: Date
      actualTech: string | null
      userId: number
      teamId: number | null
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends Project$teamArgs<ExtArgs> = {}>(args?: Subset<T, Project$teamArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ideas<T extends Project$ideasArgs<ExtArgs> = {}>(args?: Subset<T, Project$ideasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    steps<T extends Project$stepsArgs<ExtArgs> = {}>(args?: Subset<T, Project$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pitch<T extends Project$pitchArgs<ExtArgs> = {}>(args?: Subset<T, Project$pitchArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly hackathonName: FieldRef<"Project", 'String'>
    readonly theme: FieldRef<"Project", 'String'>
    readonly suggestedTech: FieldRef<"Project", 'String'>
    readonly judgingCriteria: FieldRef<"Project", 'String'>
    readonly additionalData: FieldRef<"Project", 'String'>
    readonly submissionTime: FieldRef<"Project", 'DateTime'>
    readonly actualTech: FieldRef<"Project", 'String'>
    readonly userId: FieldRef<"Project", 'Int'>
    readonly teamId: FieldRef<"Project", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.team
   */
  export type Project$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * Project.ideas
   */
  export type Project$ideasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    where?: IdeaWhereInput
    orderBy?: IdeaOrderByWithRelationInput | IdeaOrderByWithRelationInput[]
    cursor?: IdeaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IdeaScalarFieldEnum | IdeaScalarFieldEnum[]
  }

  /**
   * Project.steps
   */
  export type Project$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    where?: StepWhereInput
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    cursor?: StepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Project.pitch
   */
  export type Project$pitchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pitch
     */
    omit?: PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    where?: PitchWhereInput
    orderBy?: PitchOrderByWithRelationInput | PitchOrderByWithRelationInput[]
    cursor?: PitchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PitchScalarFieldEnum | PitchScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Idea
   */

  export type AggregateIdea = {
    _count: IdeaCountAggregateOutputType | null
    _avg: IdeaAvgAggregateOutputType | null
    _sum: IdeaSumAggregateOutputType | null
    _min: IdeaMinAggregateOutputType | null
    _max: IdeaMaxAggregateOutputType | null
  }

  export type IdeaAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type IdeaSumAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type IdeaMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    content: string | null
    isFinal: boolean | null
    projectId: number | null
  }

  export type IdeaMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    content: string | null
    isFinal: boolean | null
    projectId: number | null
  }

  export type IdeaCountAggregateOutputType = {
    id: number
    title: number
    description: number
    content: number
    isFinal: number
    projectId: number
    _all: number
  }


  export type IdeaAvgAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type IdeaSumAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type IdeaMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    content?: true
    isFinal?: true
    projectId?: true
  }

  export type IdeaMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    content?: true
    isFinal?: true
    projectId?: true
  }

  export type IdeaCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    content?: true
    isFinal?: true
    projectId?: true
    _all?: true
  }

  export type IdeaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Idea to aggregate.
     */
    where?: IdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ideas to fetch.
     */
    orderBy?: IdeaOrderByWithRelationInput | IdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ideas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ideas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ideas
    **/
    _count?: true | IdeaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IdeaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IdeaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IdeaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IdeaMaxAggregateInputType
  }

  export type GetIdeaAggregateType<T extends IdeaAggregateArgs> = {
        [P in keyof T & keyof AggregateIdea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdea[P]>
      : GetScalarType<T[P], AggregateIdea[P]>
  }




  export type IdeaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdeaWhereInput
    orderBy?: IdeaOrderByWithAggregationInput | IdeaOrderByWithAggregationInput[]
    by: IdeaScalarFieldEnum[] | IdeaScalarFieldEnum
    having?: IdeaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdeaCountAggregateInputType | true
    _avg?: IdeaAvgAggregateInputType
    _sum?: IdeaSumAggregateInputType
    _min?: IdeaMinAggregateInputType
    _max?: IdeaMaxAggregateInputType
  }

  export type IdeaGroupByOutputType = {
    id: number
    title: string
    description: string
    content: string
    isFinal: boolean
    projectId: number
    _count: IdeaCountAggregateOutputType | null
    _avg: IdeaAvgAggregateOutputType | null
    _sum: IdeaSumAggregateOutputType | null
    _min: IdeaMinAggregateOutputType | null
    _max: IdeaMaxAggregateOutputType | null
  }

  type GetIdeaGroupByPayload<T extends IdeaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdeaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IdeaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IdeaGroupByOutputType[P]>
            : GetScalarType<T[P], IdeaGroupByOutputType[P]>
        }
      >
    >


  export type IdeaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    isFinal?: boolean
    projectId?: boolean
    chats?: boolean | Idea$chatsArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    _count?: boolean | IdeaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idea"]>

  export type IdeaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    isFinal?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idea"]>

  export type IdeaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    isFinal?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idea"]>

  export type IdeaSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    isFinal?: boolean
    projectId?: boolean
  }

  export type IdeaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "content" | "isFinal" | "projectId", ExtArgs["result"]["idea"]>
  export type IdeaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | Idea$chatsArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    _count?: boolean | IdeaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IdeaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type IdeaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $IdeaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Idea"
    objects: {
      chats: Prisma.$IdeaChatPayload<ExtArgs>[]
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      content: string
      isFinal: boolean
      projectId: number
    }, ExtArgs["result"]["idea"]>
    composites: {}
  }

  type IdeaGetPayload<S extends boolean | null | undefined | IdeaDefaultArgs> = $Result.GetResult<Prisma.$IdeaPayload, S>

  type IdeaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IdeaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IdeaCountAggregateInputType | true
    }

  export interface IdeaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Idea'], meta: { name: 'Idea' } }
    /**
     * Find zero or one Idea that matches the filter.
     * @param {IdeaFindUniqueArgs} args - Arguments to find a Idea
     * @example
     * // Get one Idea
     * const idea = await prisma.idea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IdeaFindUniqueArgs>(args: SelectSubset<T, IdeaFindUniqueArgs<ExtArgs>>): Prisma__IdeaClient<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Idea that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IdeaFindUniqueOrThrowArgs} args - Arguments to find a Idea
     * @example
     * // Get one Idea
     * const idea = await prisma.idea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IdeaFindUniqueOrThrowArgs>(args: SelectSubset<T, IdeaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IdeaClient<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaFindFirstArgs} args - Arguments to find a Idea
     * @example
     * // Get one Idea
     * const idea = await prisma.idea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IdeaFindFirstArgs>(args?: SelectSubset<T, IdeaFindFirstArgs<ExtArgs>>): Prisma__IdeaClient<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idea that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaFindFirstOrThrowArgs} args - Arguments to find a Idea
     * @example
     * // Get one Idea
     * const idea = await prisma.idea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IdeaFindFirstOrThrowArgs>(args?: SelectSubset<T, IdeaFindFirstOrThrowArgs<ExtArgs>>): Prisma__IdeaClient<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ideas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ideas
     * const ideas = await prisma.idea.findMany()
     * 
     * // Get first 10 Ideas
     * const ideas = await prisma.idea.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ideaWithIdOnly = await prisma.idea.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IdeaFindManyArgs>(args?: SelectSubset<T, IdeaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Idea.
     * @param {IdeaCreateArgs} args - Arguments to create a Idea.
     * @example
     * // Create one Idea
     * const Idea = await prisma.idea.create({
     *   data: {
     *     // ... data to create a Idea
     *   }
     * })
     * 
     */
    create<T extends IdeaCreateArgs>(args: SelectSubset<T, IdeaCreateArgs<ExtArgs>>): Prisma__IdeaClient<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ideas.
     * @param {IdeaCreateManyArgs} args - Arguments to create many Ideas.
     * @example
     * // Create many Ideas
     * const idea = await prisma.idea.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IdeaCreateManyArgs>(args?: SelectSubset<T, IdeaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ideas and returns the data saved in the database.
     * @param {IdeaCreateManyAndReturnArgs} args - Arguments to create many Ideas.
     * @example
     * // Create many Ideas
     * const idea = await prisma.idea.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ideas and only return the `id`
     * const ideaWithIdOnly = await prisma.idea.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IdeaCreateManyAndReturnArgs>(args?: SelectSubset<T, IdeaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Idea.
     * @param {IdeaDeleteArgs} args - Arguments to delete one Idea.
     * @example
     * // Delete one Idea
     * const Idea = await prisma.idea.delete({
     *   where: {
     *     // ... filter to delete one Idea
     *   }
     * })
     * 
     */
    delete<T extends IdeaDeleteArgs>(args: SelectSubset<T, IdeaDeleteArgs<ExtArgs>>): Prisma__IdeaClient<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Idea.
     * @param {IdeaUpdateArgs} args - Arguments to update one Idea.
     * @example
     * // Update one Idea
     * const idea = await prisma.idea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IdeaUpdateArgs>(args: SelectSubset<T, IdeaUpdateArgs<ExtArgs>>): Prisma__IdeaClient<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ideas.
     * @param {IdeaDeleteManyArgs} args - Arguments to filter Ideas to delete.
     * @example
     * // Delete a few Ideas
     * const { count } = await prisma.idea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IdeaDeleteManyArgs>(args?: SelectSubset<T, IdeaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ideas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ideas
     * const idea = await prisma.idea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IdeaUpdateManyArgs>(args: SelectSubset<T, IdeaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ideas and returns the data updated in the database.
     * @param {IdeaUpdateManyAndReturnArgs} args - Arguments to update many Ideas.
     * @example
     * // Update many Ideas
     * const idea = await prisma.idea.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ideas and only return the `id`
     * const ideaWithIdOnly = await prisma.idea.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IdeaUpdateManyAndReturnArgs>(args: SelectSubset<T, IdeaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Idea.
     * @param {IdeaUpsertArgs} args - Arguments to update or create a Idea.
     * @example
     * // Update or create a Idea
     * const idea = await prisma.idea.upsert({
     *   create: {
     *     // ... data to create a Idea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Idea we want to update
     *   }
     * })
     */
    upsert<T extends IdeaUpsertArgs>(args: SelectSubset<T, IdeaUpsertArgs<ExtArgs>>): Prisma__IdeaClient<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ideas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaCountArgs} args - Arguments to filter Ideas to count.
     * @example
     * // Count the number of Ideas
     * const count = await prisma.idea.count({
     *   where: {
     *     // ... the filter for the Ideas we want to count
     *   }
     * })
    **/
    count<T extends IdeaCountArgs>(
      args?: Subset<T, IdeaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdeaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Idea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IdeaAggregateArgs>(args: Subset<T, IdeaAggregateArgs>): Prisma.PrismaPromise<GetIdeaAggregateType<T>>

    /**
     * Group by Idea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IdeaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IdeaGroupByArgs['orderBy'] }
        : { orderBy?: IdeaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IdeaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdeaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Idea model
   */
  readonly fields: IdeaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Idea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IdeaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chats<T extends Idea$chatsArgs<ExtArgs> = {}>(args?: Subset<T, Idea$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdeaChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Idea model
   */
  interface IdeaFieldRefs {
    readonly id: FieldRef<"Idea", 'Int'>
    readonly title: FieldRef<"Idea", 'String'>
    readonly description: FieldRef<"Idea", 'String'>
    readonly content: FieldRef<"Idea", 'String'>
    readonly isFinal: FieldRef<"Idea", 'Boolean'>
    readonly projectId: FieldRef<"Idea", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Idea findUnique
   */
  export type IdeaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * Filter, which Idea to fetch.
     */
    where: IdeaWhereUniqueInput
  }

  /**
   * Idea findUniqueOrThrow
   */
  export type IdeaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * Filter, which Idea to fetch.
     */
    where: IdeaWhereUniqueInput
  }

  /**
   * Idea findFirst
   */
  export type IdeaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * Filter, which Idea to fetch.
     */
    where?: IdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ideas to fetch.
     */
    orderBy?: IdeaOrderByWithRelationInput | IdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ideas.
     */
    cursor?: IdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ideas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ideas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ideas.
     */
    distinct?: IdeaScalarFieldEnum | IdeaScalarFieldEnum[]
  }

  /**
   * Idea findFirstOrThrow
   */
  export type IdeaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * Filter, which Idea to fetch.
     */
    where?: IdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ideas to fetch.
     */
    orderBy?: IdeaOrderByWithRelationInput | IdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ideas.
     */
    cursor?: IdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ideas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ideas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ideas.
     */
    distinct?: IdeaScalarFieldEnum | IdeaScalarFieldEnum[]
  }

  /**
   * Idea findMany
   */
  export type IdeaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * Filter, which Ideas to fetch.
     */
    where?: IdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ideas to fetch.
     */
    orderBy?: IdeaOrderByWithRelationInput | IdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ideas.
     */
    cursor?: IdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ideas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ideas.
     */
    skip?: number
    distinct?: IdeaScalarFieldEnum | IdeaScalarFieldEnum[]
  }

  /**
   * Idea create
   */
  export type IdeaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * The data needed to create a Idea.
     */
    data: XOR<IdeaCreateInput, IdeaUncheckedCreateInput>
  }

  /**
   * Idea createMany
   */
  export type IdeaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ideas.
     */
    data: IdeaCreateManyInput | IdeaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Idea createManyAndReturn
   */
  export type IdeaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * The data used to create many Ideas.
     */
    data: IdeaCreateManyInput | IdeaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Idea update
   */
  export type IdeaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * The data needed to update a Idea.
     */
    data: XOR<IdeaUpdateInput, IdeaUncheckedUpdateInput>
    /**
     * Choose, which Idea to update.
     */
    where: IdeaWhereUniqueInput
  }

  /**
   * Idea updateMany
   */
  export type IdeaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ideas.
     */
    data: XOR<IdeaUpdateManyMutationInput, IdeaUncheckedUpdateManyInput>
    /**
     * Filter which Ideas to update
     */
    where?: IdeaWhereInput
    /**
     * Limit how many Ideas to update.
     */
    limit?: number
  }

  /**
   * Idea updateManyAndReturn
   */
  export type IdeaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * The data used to update Ideas.
     */
    data: XOR<IdeaUpdateManyMutationInput, IdeaUncheckedUpdateManyInput>
    /**
     * Filter which Ideas to update
     */
    where?: IdeaWhereInput
    /**
     * Limit how many Ideas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Idea upsert
   */
  export type IdeaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * The filter to search for the Idea to update in case it exists.
     */
    where: IdeaWhereUniqueInput
    /**
     * In case the Idea found by the `where` argument doesn't exist, create a new Idea with this data.
     */
    create: XOR<IdeaCreateInput, IdeaUncheckedCreateInput>
    /**
     * In case the Idea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IdeaUpdateInput, IdeaUncheckedUpdateInput>
  }

  /**
   * Idea delete
   */
  export type IdeaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * Filter which Idea to delete.
     */
    where: IdeaWhereUniqueInput
  }

  /**
   * Idea deleteMany
   */
  export type IdeaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ideas to delete
     */
    where?: IdeaWhereInput
    /**
     * Limit how many Ideas to delete.
     */
    limit?: number
  }

  /**
   * Idea.chats
   */
  export type Idea$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaChat
     */
    select?: IdeaChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaChat
     */
    omit?: IdeaChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaChatInclude<ExtArgs> | null
    where?: IdeaChatWhereInput
    orderBy?: IdeaChatOrderByWithRelationInput | IdeaChatOrderByWithRelationInput[]
    cursor?: IdeaChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IdeaChatScalarFieldEnum | IdeaChatScalarFieldEnum[]
  }

  /**
   * Idea without action
   */
  export type IdeaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
  }


  /**
   * Model IdeaChat
   */

  export type AggregateIdeaChat = {
    _count: IdeaChatCountAggregateOutputType | null
    _avg: IdeaChatAvgAggregateOutputType | null
    _sum: IdeaChatSumAggregateOutputType | null
    _min: IdeaChatMinAggregateOutputType | null
    _max: IdeaChatMaxAggregateOutputType | null
  }

  export type IdeaChatAvgAggregateOutputType = {
    id: number | null
    ideaId: number | null
    userId: number | null
  }

  export type IdeaChatSumAggregateOutputType = {
    id: number | null
    ideaId: number | null
    userId: number | null
  }

  export type IdeaChatMinAggregateOutputType = {
    id: number | null
    message: string | null
    createdAt: Date | null
    ideaId: number | null
    userId: number | null
  }

  export type IdeaChatMaxAggregateOutputType = {
    id: number | null
    message: string | null
    createdAt: Date | null
    ideaId: number | null
    userId: number | null
  }

  export type IdeaChatCountAggregateOutputType = {
    id: number
    message: number
    createdAt: number
    ideaId: number
    userId: number
    _all: number
  }


  export type IdeaChatAvgAggregateInputType = {
    id?: true
    ideaId?: true
    userId?: true
  }

  export type IdeaChatSumAggregateInputType = {
    id?: true
    ideaId?: true
    userId?: true
  }

  export type IdeaChatMinAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
    ideaId?: true
    userId?: true
  }

  export type IdeaChatMaxAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
    ideaId?: true
    userId?: true
  }

  export type IdeaChatCountAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
    ideaId?: true
    userId?: true
    _all?: true
  }

  export type IdeaChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdeaChat to aggregate.
     */
    where?: IdeaChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdeaChats to fetch.
     */
    orderBy?: IdeaChatOrderByWithRelationInput | IdeaChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IdeaChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdeaChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdeaChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IdeaChats
    **/
    _count?: true | IdeaChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IdeaChatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IdeaChatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IdeaChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IdeaChatMaxAggregateInputType
  }

  export type GetIdeaChatAggregateType<T extends IdeaChatAggregateArgs> = {
        [P in keyof T & keyof AggregateIdeaChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdeaChat[P]>
      : GetScalarType<T[P], AggregateIdeaChat[P]>
  }




  export type IdeaChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdeaChatWhereInput
    orderBy?: IdeaChatOrderByWithAggregationInput | IdeaChatOrderByWithAggregationInput[]
    by: IdeaChatScalarFieldEnum[] | IdeaChatScalarFieldEnum
    having?: IdeaChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdeaChatCountAggregateInputType | true
    _avg?: IdeaChatAvgAggregateInputType
    _sum?: IdeaChatSumAggregateInputType
    _min?: IdeaChatMinAggregateInputType
    _max?: IdeaChatMaxAggregateInputType
  }

  export type IdeaChatGroupByOutputType = {
    id: number
    message: string
    createdAt: Date
    ideaId: number
    userId: number
    _count: IdeaChatCountAggregateOutputType | null
    _avg: IdeaChatAvgAggregateOutputType | null
    _sum: IdeaChatSumAggregateOutputType | null
    _min: IdeaChatMinAggregateOutputType | null
    _max: IdeaChatMaxAggregateOutputType | null
  }

  type GetIdeaChatGroupByPayload<T extends IdeaChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdeaChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IdeaChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IdeaChatGroupByOutputType[P]>
            : GetScalarType<T[P], IdeaChatGroupByOutputType[P]>
        }
      >
    >


  export type IdeaChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    createdAt?: boolean
    ideaId?: boolean
    userId?: boolean
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ideaChat"]>

  export type IdeaChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    createdAt?: boolean
    ideaId?: boolean
    userId?: boolean
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ideaChat"]>

  export type IdeaChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    createdAt?: boolean
    ideaId?: boolean
    userId?: boolean
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ideaChat"]>

  export type IdeaChatSelectScalar = {
    id?: boolean
    message?: boolean
    createdAt?: boolean
    ideaId?: boolean
    userId?: boolean
  }

  export type IdeaChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "createdAt" | "ideaId" | "userId", ExtArgs["result"]["ideaChat"]>
  export type IdeaChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IdeaChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IdeaChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $IdeaChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IdeaChat"
    objects: {
      idea: Prisma.$IdeaPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      message: string
      createdAt: Date
      ideaId: number
      userId: number
    }, ExtArgs["result"]["ideaChat"]>
    composites: {}
  }

  type IdeaChatGetPayload<S extends boolean | null | undefined | IdeaChatDefaultArgs> = $Result.GetResult<Prisma.$IdeaChatPayload, S>

  type IdeaChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IdeaChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IdeaChatCountAggregateInputType | true
    }

  export interface IdeaChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IdeaChat'], meta: { name: 'IdeaChat' } }
    /**
     * Find zero or one IdeaChat that matches the filter.
     * @param {IdeaChatFindUniqueArgs} args - Arguments to find a IdeaChat
     * @example
     * // Get one IdeaChat
     * const ideaChat = await prisma.ideaChat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IdeaChatFindUniqueArgs>(args: SelectSubset<T, IdeaChatFindUniqueArgs<ExtArgs>>): Prisma__IdeaChatClient<$Result.GetResult<Prisma.$IdeaChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IdeaChat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IdeaChatFindUniqueOrThrowArgs} args - Arguments to find a IdeaChat
     * @example
     * // Get one IdeaChat
     * const ideaChat = await prisma.ideaChat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IdeaChatFindUniqueOrThrowArgs>(args: SelectSubset<T, IdeaChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IdeaChatClient<$Result.GetResult<Prisma.$IdeaChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IdeaChat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaChatFindFirstArgs} args - Arguments to find a IdeaChat
     * @example
     * // Get one IdeaChat
     * const ideaChat = await prisma.ideaChat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IdeaChatFindFirstArgs>(args?: SelectSubset<T, IdeaChatFindFirstArgs<ExtArgs>>): Prisma__IdeaChatClient<$Result.GetResult<Prisma.$IdeaChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IdeaChat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaChatFindFirstOrThrowArgs} args - Arguments to find a IdeaChat
     * @example
     * // Get one IdeaChat
     * const ideaChat = await prisma.ideaChat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IdeaChatFindFirstOrThrowArgs>(args?: SelectSubset<T, IdeaChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__IdeaChatClient<$Result.GetResult<Prisma.$IdeaChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IdeaChats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IdeaChats
     * const ideaChats = await prisma.ideaChat.findMany()
     * 
     * // Get first 10 IdeaChats
     * const ideaChats = await prisma.ideaChat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ideaChatWithIdOnly = await prisma.ideaChat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IdeaChatFindManyArgs>(args?: SelectSubset<T, IdeaChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdeaChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IdeaChat.
     * @param {IdeaChatCreateArgs} args - Arguments to create a IdeaChat.
     * @example
     * // Create one IdeaChat
     * const IdeaChat = await prisma.ideaChat.create({
     *   data: {
     *     // ... data to create a IdeaChat
     *   }
     * })
     * 
     */
    create<T extends IdeaChatCreateArgs>(args: SelectSubset<T, IdeaChatCreateArgs<ExtArgs>>): Prisma__IdeaChatClient<$Result.GetResult<Prisma.$IdeaChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IdeaChats.
     * @param {IdeaChatCreateManyArgs} args - Arguments to create many IdeaChats.
     * @example
     * // Create many IdeaChats
     * const ideaChat = await prisma.ideaChat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IdeaChatCreateManyArgs>(args?: SelectSubset<T, IdeaChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IdeaChats and returns the data saved in the database.
     * @param {IdeaChatCreateManyAndReturnArgs} args - Arguments to create many IdeaChats.
     * @example
     * // Create many IdeaChats
     * const ideaChat = await prisma.ideaChat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IdeaChats and only return the `id`
     * const ideaChatWithIdOnly = await prisma.ideaChat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IdeaChatCreateManyAndReturnArgs>(args?: SelectSubset<T, IdeaChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdeaChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IdeaChat.
     * @param {IdeaChatDeleteArgs} args - Arguments to delete one IdeaChat.
     * @example
     * // Delete one IdeaChat
     * const IdeaChat = await prisma.ideaChat.delete({
     *   where: {
     *     // ... filter to delete one IdeaChat
     *   }
     * })
     * 
     */
    delete<T extends IdeaChatDeleteArgs>(args: SelectSubset<T, IdeaChatDeleteArgs<ExtArgs>>): Prisma__IdeaChatClient<$Result.GetResult<Prisma.$IdeaChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IdeaChat.
     * @param {IdeaChatUpdateArgs} args - Arguments to update one IdeaChat.
     * @example
     * // Update one IdeaChat
     * const ideaChat = await prisma.ideaChat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IdeaChatUpdateArgs>(args: SelectSubset<T, IdeaChatUpdateArgs<ExtArgs>>): Prisma__IdeaChatClient<$Result.GetResult<Prisma.$IdeaChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IdeaChats.
     * @param {IdeaChatDeleteManyArgs} args - Arguments to filter IdeaChats to delete.
     * @example
     * // Delete a few IdeaChats
     * const { count } = await prisma.ideaChat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IdeaChatDeleteManyArgs>(args?: SelectSubset<T, IdeaChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IdeaChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IdeaChats
     * const ideaChat = await prisma.ideaChat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IdeaChatUpdateManyArgs>(args: SelectSubset<T, IdeaChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IdeaChats and returns the data updated in the database.
     * @param {IdeaChatUpdateManyAndReturnArgs} args - Arguments to update many IdeaChats.
     * @example
     * // Update many IdeaChats
     * const ideaChat = await prisma.ideaChat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IdeaChats and only return the `id`
     * const ideaChatWithIdOnly = await prisma.ideaChat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IdeaChatUpdateManyAndReturnArgs>(args: SelectSubset<T, IdeaChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdeaChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IdeaChat.
     * @param {IdeaChatUpsertArgs} args - Arguments to update or create a IdeaChat.
     * @example
     * // Update or create a IdeaChat
     * const ideaChat = await prisma.ideaChat.upsert({
     *   create: {
     *     // ... data to create a IdeaChat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IdeaChat we want to update
     *   }
     * })
     */
    upsert<T extends IdeaChatUpsertArgs>(args: SelectSubset<T, IdeaChatUpsertArgs<ExtArgs>>): Prisma__IdeaChatClient<$Result.GetResult<Prisma.$IdeaChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IdeaChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaChatCountArgs} args - Arguments to filter IdeaChats to count.
     * @example
     * // Count the number of IdeaChats
     * const count = await prisma.ideaChat.count({
     *   where: {
     *     // ... the filter for the IdeaChats we want to count
     *   }
     * })
    **/
    count<T extends IdeaChatCountArgs>(
      args?: Subset<T, IdeaChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdeaChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IdeaChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IdeaChatAggregateArgs>(args: Subset<T, IdeaChatAggregateArgs>): Prisma.PrismaPromise<GetIdeaChatAggregateType<T>>

    /**
     * Group by IdeaChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaChatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IdeaChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IdeaChatGroupByArgs['orderBy'] }
        : { orderBy?: IdeaChatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IdeaChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdeaChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IdeaChat model
   */
  readonly fields: IdeaChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IdeaChat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IdeaChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    idea<T extends IdeaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IdeaDefaultArgs<ExtArgs>>): Prisma__IdeaClient<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IdeaChat model
   */
  interface IdeaChatFieldRefs {
    readonly id: FieldRef<"IdeaChat", 'Int'>
    readonly message: FieldRef<"IdeaChat", 'String'>
    readonly createdAt: FieldRef<"IdeaChat", 'DateTime'>
    readonly ideaId: FieldRef<"IdeaChat", 'Int'>
    readonly userId: FieldRef<"IdeaChat", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * IdeaChat findUnique
   */
  export type IdeaChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaChat
     */
    select?: IdeaChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaChat
     */
    omit?: IdeaChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaChatInclude<ExtArgs> | null
    /**
     * Filter, which IdeaChat to fetch.
     */
    where: IdeaChatWhereUniqueInput
  }

  /**
   * IdeaChat findUniqueOrThrow
   */
  export type IdeaChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaChat
     */
    select?: IdeaChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaChat
     */
    omit?: IdeaChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaChatInclude<ExtArgs> | null
    /**
     * Filter, which IdeaChat to fetch.
     */
    where: IdeaChatWhereUniqueInput
  }

  /**
   * IdeaChat findFirst
   */
  export type IdeaChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaChat
     */
    select?: IdeaChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaChat
     */
    omit?: IdeaChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaChatInclude<ExtArgs> | null
    /**
     * Filter, which IdeaChat to fetch.
     */
    where?: IdeaChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdeaChats to fetch.
     */
    orderBy?: IdeaChatOrderByWithRelationInput | IdeaChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdeaChats.
     */
    cursor?: IdeaChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdeaChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdeaChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdeaChats.
     */
    distinct?: IdeaChatScalarFieldEnum | IdeaChatScalarFieldEnum[]
  }

  /**
   * IdeaChat findFirstOrThrow
   */
  export type IdeaChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaChat
     */
    select?: IdeaChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaChat
     */
    omit?: IdeaChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaChatInclude<ExtArgs> | null
    /**
     * Filter, which IdeaChat to fetch.
     */
    where?: IdeaChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdeaChats to fetch.
     */
    orderBy?: IdeaChatOrderByWithRelationInput | IdeaChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdeaChats.
     */
    cursor?: IdeaChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdeaChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdeaChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdeaChats.
     */
    distinct?: IdeaChatScalarFieldEnum | IdeaChatScalarFieldEnum[]
  }

  /**
   * IdeaChat findMany
   */
  export type IdeaChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaChat
     */
    select?: IdeaChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaChat
     */
    omit?: IdeaChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaChatInclude<ExtArgs> | null
    /**
     * Filter, which IdeaChats to fetch.
     */
    where?: IdeaChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdeaChats to fetch.
     */
    orderBy?: IdeaChatOrderByWithRelationInput | IdeaChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IdeaChats.
     */
    cursor?: IdeaChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdeaChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdeaChats.
     */
    skip?: number
    distinct?: IdeaChatScalarFieldEnum | IdeaChatScalarFieldEnum[]
  }

  /**
   * IdeaChat create
   */
  export type IdeaChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaChat
     */
    select?: IdeaChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaChat
     */
    omit?: IdeaChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaChatInclude<ExtArgs> | null
    /**
     * The data needed to create a IdeaChat.
     */
    data: XOR<IdeaChatCreateInput, IdeaChatUncheckedCreateInput>
  }

  /**
   * IdeaChat createMany
   */
  export type IdeaChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IdeaChats.
     */
    data: IdeaChatCreateManyInput | IdeaChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IdeaChat createManyAndReturn
   */
  export type IdeaChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaChat
     */
    select?: IdeaChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaChat
     */
    omit?: IdeaChatOmit<ExtArgs> | null
    /**
     * The data used to create many IdeaChats.
     */
    data: IdeaChatCreateManyInput | IdeaChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IdeaChat update
   */
  export type IdeaChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaChat
     */
    select?: IdeaChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaChat
     */
    omit?: IdeaChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaChatInclude<ExtArgs> | null
    /**
     * The data needed to update a IdeaChat.
     */
    data: XOR<IdeaChatUpdateInput, IdeaChatUncheckedUpdateInput>
    /**
     * Choose, which IdeaChat to update.
     */
    where: IdeaChatWhereUniqueInput
  }

  /**
   * IdeaChat updateMany
   */
  export type IdeaChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IdeaChats.
     */
    data: XOR<IdeaChatUpdateManyMutationInput, IdeaChatUncheckedUpdateManyInput>
    /**
     * Filter which IdeaChats to update
     */
    where?: IdeaChatWhereInput
    /**
     * Limit how many IdeaChats to update.
     */
    limit?: number
  }

  /**
   * IdeaChat updateManyAndReturn
   */
  export type IdeaChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaChat
     */
    select?: IdeaChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaChat
     */
    omit?: IdeaChatOmit<ExtArgs> | null
    /**
     * The data used to update IdeaChats.
     */
    data: XOR<IdeaChatUpdateManyMutationInput, IdeaChatUncheckedUpdateManyInput>
    /**
     * Filter which IdeaChats to update
     */
    where?: IdeaChatWhereInput
    /**
     * Limit how many IdeaChats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IdeaChat upsert
   */
  export type IdeaChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaChat
     */
    select?: IdeaChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaChat
     */
    omit?: IdeaChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaChatInclude<ExtArgs> | null
    /**
     * The filter to search for the IdeaChat to update in case it exists.
     */
    where: IdeaChatWhereUniqueInput
    /**
     * In case the IdeaChat found by the `where` argument doesn't exist, create a new IdeaChat with this data.
     */
    create: XOR<IdeaChatCreateInput, IdeaChatUncheckedCreateInput>
    /**
     * In case the IdeaChat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IdeaChatUpdateInput, IdeaChatUncheckedUpdateInput>
  }

  /**
   * IdeaChat delete
   */
  export type IdeaChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaChat
     */
    select?: IdeaChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaChat
     */
    omit?: IdeaChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaChatInclude<ExtArgs> | null
    /**
     * Filter which IdeaChat to delete.
     */
    where: IdeaChatWhereUniqueInput
  }

  /**
   * IdeaChat deleteMany
   */
  export type IdeaChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdeaChats to delete
     */
    where?: IdeaChatWhereInput
    /**
     * Limit how many IdeaChats to delete.
     */
    limit?: number
  }

  /**
   * IdeaChat without action
   */
  export type IdeaChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdeaChat
     */
    select?: IdeaChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaChat
     */
    omit?: IdeaChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaChatInclude<ExtArgs> | null
  }


  /**
   * Model Step
   */

  export type AggregateStep = {
    _count: StepCountAggregateOutputType | null
    _avg: StepAvgAggregateOutputType | null
    _sum: StepSumAggregateOutputType | null
    _min: StepMinAggregateOutputType | null
    _max: StepMaxAggregateOutputType | null
  }

  export type StepAvgAggregateOutputType = {
    id: number | null
    order: number | null
    projectId: number | null
  }

  export type StepSumAggregateOutputType = {
    id: number | null
    order: number | null
    projectId: number | null
  }

  export type StepMinAggregateOutputType = {
    id: number | null
    content: string | null
    isDone: boolean | null
    order: number | null
    projectId: number | null
  }

  export type StepMaxAggregateOutputType = {
    id: number | null
    content: string | null
    isDone: boolean | null
    order: number | null
    projectId: number | null
  }

  export type StepCountAggregateOutputType = {
    id: number
    content: number
    isDone: number
    order: number
    projectId: number
    _all: number
  }


  export type StepAvgAggregateInputType = {
    id?: true
    order?: true
    projectId?: true
  }

  export type StepSumAggregateInputType = {
    id?: true
    order?: true
    projectId?: true
  }

  export type StepMinAggregateInputType = {
    id?: true
    content?: true
    isDone?: true
    order?: true
    projectId?: true
  }

  export type StepMaxAggregateInputType = {
    id?: true
    content?: true
    isDone?: true
    order?: true
    projectId?: true
  }

  export type StepCountAggregateInputType = {
    id?: true
    content?: true
    isDone?: true
    order?: true
    projectId?: true
    _all?: true
  }

  export type StepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Step to aggregate.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Steps
    **/
    _count?: true | StepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StepMaxAggregateInputType
  }

  export type GetStepAggregateType<T extends StepAggregateArgs> = {
        [P in keyof T & keyof AggregateStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStep[P]>
      : GetScalarType<T[P], AggregateStep[P]>
  }




  export type StepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepWhereInput
    orderBy?: StepOrderByWithAggregationInput | StepOrderByWithAggregationInput[]
    by: StepScalarFieldEnum[] | StepScalarFieldEnum
    having?: StepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StepCountAggregateInputType | true
    _avg?: StepAvgAggregateInputType
    _sum?: StepSumAggregateInputType
    _min?: StepMinAggregateInputType
    _max?: StepMaxAggregateInputType
  }

  export type StepGroupByOutputType = {
    id: number
    content: string
    isDone: boolean
    order: number | null
    projectId: number
    _count: StepCountAggregateOutputType | null
    _avg: StepAvgAggregateOutputType | null
    _sum: StepSumAggregateOutputType | null
    _min: StepMinAggregateOutputType | null
    _max: StepMaxAggregateOutputType | null
  }

  type GetStepGroupByPayload<T extends StepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StepGroupByOutputType[P]>
            : GetScalarType<T[P], StepGroupByOutputType[P]>
        }
      >
    >


  export type StepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    isDone?: boolean
    order?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    chats?: boolean | Step$chatsArgs<ExtArgs>
    _count?: boolean | StepCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["step"]>

  export type StepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    isDone?: boolean
    order?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["step"]>

  export type StepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    isDone?: boolean
    order?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["step"]>

  export type StepSelectScalar = {
    id?: boolean
    content?: boolean
    isDone?: boolean
    order?: boolean
    projectId?: boolean
  }

  export type StepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "isDone" | "order" | "projectId", ExtArgs["result"]["step"]>
  export type StepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    chats?: boolean | Step$chatsArgs<ExtArgs>
    _count?: boolean | StepCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type StepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $StepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Step"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      chats: Prisma.$StepChatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      isDone: boolean
      order: number | null
      projectId: number
    }, ExtArgs["result"]["step"]>
    composites: {}
  }

  type StepGetPayload<S extends boolean | null | undefined | StepDefaultArgs> = $Result.GetResult<Prisma.$StepPayload, S>

  type StepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StepCountAggregateInputType | true
    }

  export interface StepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Step'], meta: { name: 'Step' } }
    /**
     * Find zero or one Step that matches the filter.
     * @param {StepFindUniqueArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StepFindUniqueArgs>(args: SelectSubset<T, StepFindUniqueArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Step that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StepFindUniqueOrThrowArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StepFindUniqueOrThrowArgs>(args: SelectSubset<T, StepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Step that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindFirstArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StepFindFirstArgs>(args?: SelectSubset<T, StepFindFirstArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Step that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindFirstOrThrowArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StepFindFirstOrThrowArgs>(args?: SelectSubset<T, StepFindFirstOrThrowArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Steps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Steps
     * const steps = await prisma.step.findMany()
     * 
     * // Get first 10 Steps
     * const steps = await prisma.step.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stepWithIdOnly = await prisma.step.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StepFindManyArgs>(args?: SelectSubset<T, StepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Step.
     * @param {StepCreateArgs} args - Arguments to create a Step.
     * @example
     * // Create one Step
     * const Step = await prisma.step.create({
     *   data: {
     *     // ... data to create a Step
     *   }
     * })
     * 
     */
    create<T extends StepCreateArgs>(args: SelectSubset<T, StepCreateArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Steps.
     * @param {StepCreateManyArgs} args - Arguments to create many Steps.
     * @example
     * // Create many Steps
     * const step = await prisma.step.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StepCreateManyArgs>(args?: SelectSubset<T, StepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Steps and returns the data saved in the database.
     * @param {StepCreateManyAndReturnArgs} args - Arguments to create many Steps.
     * @example
     * // Create many Steps
     * const step = await prisma.step.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Steps and only return the `id`
     * const stepWithIdOnly = await prisma.step.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StepCreateManyAndReturnArgs>(args?: SelectSubset<T, StepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Step.
     * @param {StepDeleteArgs} args - Arguments to delete one Step.
     * @example
     * // Delete one Step
     * const Step = await prisma.step.delete({
     *   where: {
     *     // ... filter to delete one Step
     *   }
     * })
     * 
     */
    delete<T extends StepDeleteArgs>(args: SelectSubset<T, StepDeleteArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Step.
     * @param {StepUpdateArgs} args - Arguments to update one Step.
     * @example
     * // Update one Step
     * const step = await prisma.step.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StepUpdateArgs>(args: SelectSubset<T, StepUpdateArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Steps.
     * @param {StepDeleteManyArgs} args - Arguments to filter Steps to delete.
     * @example
     * // Delete a few Steps
     * const { count } = await prisma.step.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StepDeleteManyArgs>(args?: SelectSubset<T, StepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Steps
     * const step = await prisma.step.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StepUpdateManyArgs>(args: SelectSubset<T, StepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Steps and returns the data updated in the database.
     * @param {StepUpdateManyAndReturnArgs} args - Arguments to update many Steps.
     * @example
     * // Update many Steps
     * const step = await prisma.step.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Steps and only return the `id`
     * const stepWithIdOnly = await prisma.step.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StepUpdateManyAndReturnArgs>(args: SelectSubset<T, StepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Step.
     * @param {StepUpsertArgs} args - Arguments to update or create a Step.
     * @example
     * // Update or create a Step
     * const step = await prisma.step.upsert({
     *   create: {
     *     // ... data to create a Step
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Step we want to update
     *   }
     * })
     */
    upsert<T extends StepUpsertArgs>(args: SelectSubset<T, StepUpsertArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepCountArgs} args - Arguments to filter Steps to count.
     * @example
     * // Count the number of Steps
     * const count = await prisma.step.count({
     *   where: {
     *     // ... the filter for the Steps we want to count
     *   }
     * })
    **/
    count<T extends StepCountArgs>(
      args?: Subset<T, StepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Step.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StepAggregateArgs>(args: Subset<T, StepAggregateArgs>): Prisma.PrismaPromise<GetStepAggregateType<T>>

    /**
     * Group by Step.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StepGroupByArgs['orderBy'] }
        : { orderBy?: StepGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Step model
   */
  readonly fields: StepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Step.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chats<T extends Step$chatsArgs<ExtArgs> = {}>(args?: Subset<T, Step$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Step model
   */
  interface StepFieldRefs {
    readonly id: FieldRef<"Step", 'Int'>
    readonly content: FieldRef<"Step", 'String'>
    readonly isDone: FieldRef<"Step", 'Boolean'>
    readonly order: FieldRef<"Step", 'Int'>
    readonly projectId: FieldRef<"Step", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Step findUnique
   */
  export type StepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step findUniqueOrThrow
   */
  export type StepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step findFirst
   */
  export type StepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Steps.
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Steps.
     */
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Step findFirstOrThrow
   */
  export type StepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Steps.
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Steps.
     */
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Step findMany
   */
  export type StepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Steps to fetch.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Steps.
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Step create
   */
  export type StepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * The data needed to create a Step.
     */
    data: XOR<StepCreateInput, StepUncheckedCreateInput>
  }

  /**
   * Step createMany
   */
  export type StepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Steps.
     */
    data: StepCreateManyInput | StepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Step createManyAndReturn
   */
  export type StepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * The data used to create many Steps.
     */
    data: StepCreateManyInput | StepCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Step update
   */
  export type StepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * The data needed to update a Step.
     */
    data: XOR<StepUpdateInput, StepUncheckedUpdateInput>
    /**
     * Choose, which Step to update.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step updateMany
   */
  export type StepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Steps.
     */
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyInput>
    /**
     * Filter which Steps to update
     */
    where?: StepWhereInput
    /**
     * Limit how many Steps to update.
     */
    limit?: number
  }

  /**
   * Step updateManyAndReturn
   */
  export type StepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * The data used to update Steps.
     */
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyInput>
    /**
     * Filter which Steps to update
     */
    where?: StepWhereInput
    /**
     * Limit how many Steps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Step upsert
   */
  export type StepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * The filter to search for the Step to update in case it exists.
     */
    where: StepWhereUniqueInput
    /**
     * In case the Step found by the `where` argument doesn't exist, create a new Step with this data.
     */
    create: XOR<StepCreateInput, StepUncheckedCreateInput>
    /**
     * In case the Step was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StepUpdateInput, StepUncheckedUpdateInput>
  }

  /**
   * Step delete
   */
  export type StepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter which Step to delete.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step deleteMany
   */
  export type StepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Steps to delete
     */
    where?: StepWhereInput
    /**
     * Limit how many Steps to delete.
     */
    limit?: number
  }

  /**
   * Step.chats
   */
  export type Step$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepChat
     */
    select?: StepChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepChat
     */
    omit?: StepChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepChatInclude<ExtArgs> | null
    where?: StepChatWhereInput
    orderBy?: StepChatOrderByWithRelationInput | StepChatOrderByWithRelationInput[]
    cursor?: StepChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StepChatScalarFieldEnum | StepChatScalarFieldEnum[]
  }

  /**
   * Step without action
   */
  export type StepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
  }


  /**
   * Model StepChat
   */

  export type AggregateStepChat = {
    _count: StepChatCountAggregateOutputType | null
    _avg: StepChatAvgAggregateOutputType | null
    _sum: StepChatSumAggregateOutputType | null
    _min: StepChatMinAggregateOutputType | null
    _max: StepChatMaxAggregateOutputType | null
  }

  export type StepChatAvgAggregateOutputType = {
    id: number | null
    stepId: number | null
    userId: number | null
  }

  export type StepChatSumAggregateOutputType = {
    id: number | null
    stepId: number | null
    userId: number | null
  }

  export type StepChatMinAggregateOutputType = {
    id: number | null
    message: string | null
    createdAt: Date | null
    stepId: number | null
    userId: number | null
  }

  export type StepChatMaxAggregateOutputType = {
    id: number | null
    message: string | null
    createdAt: Date | null
    stepId: number | null
    userId: number | null
  }

  export type StepChatCountAggregateOutputType = {
    id: number
    message: number
    createdAt: number
    stepId: number
    userId: number
    _all: number
  }


  export type StepChatAvgAggregateInputType = {
    id?: true
    stepId?: true
    userId?: true
  }

  export type StepChatSumAggregateInputType = {
    id?: true
    stepId?: true
    userId?: true
  }

  export type StepChatMinAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
    stepId?: true
    userId?: true
  }

  export type StepChatMaxAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
    stepId?: true
    userId?: true
  }

  export type StepChatCountAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
    stepId?: true
    userId?: true
    _all?: true
  }

  export type StepChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StepChat to aggregate.
     */
    where?: StepChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StepChats to fetch.
     */
    orderBy?: StepChatOrderByWithRelationInput | StepChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StepChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StepChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StepChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StepChats
    **/
    _count?: true | StepChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StepChatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StepChatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StepChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StepChatMaxAggregateInputType
  }

  export type GetStepChatAggregateType<T extends StepChatAggregateArgs> = {
        [P in keyof T & keyof AggregateStepChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStepChat[P]>
      : GetScalarType<T[P], AggregateStepChat[P]>
  }




  export type StepChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepChatWhereInput
    orderBy?: StepChatOrderByWithAggregationInput | StepChatOrderByWithAggregationInput[]
    by: StepChatScalarFieldEnum[] | StepChatScalarFieldEnum
    having?: StepChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StepChatCountAggregateInputType | true
    _avg?: StepChatAvgAggregateInputType
    _sum?: StepChatSumAggregateInputType
    _min?: StepChatMinAggregateInputType
    _max?: StepChatMaxAggregateInputType
  }

  export type StepChatGroupByOutputType = {
    id: number
    message: string
    createdAt: Date
    stepId: number
    userId: number
    _count: StepChatCountAggregateOutputType | null
    _avg: StepChatAvgAggregateOutputType | null
    _sum: StepChatSumAggregateOutputType | null
    _min: StepChatMinAggregateOutputType | null
    _max: StepChatMaxAggregateOutputType | null
  }

  type GetStepChatGroupByPayload<T extends StepChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StepChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StepChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StepChatGroupByOutputType[P]>
            : GetScalarType<T[P], StepChatGroupByOutputType[P]>
        }
      >
    >


  export type StepChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    createdAt?: boolean
    stepId?: boolean
    userId?: boolean
    step?: boolean | StepDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stepChat"]>

  export type StepChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    createdAt?: boolean
    stepId?: boolean
    userId?: boolean
    step?: boolean | StepDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stepChat"]>

  export type StepChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    createdAt?: boolean
    stepId?: boolean
    userId?: boolean
    step?: boolean | StepDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stepChat"]>

  export type StepChatSelectScalar = {
    id?: boolean
    message?: boolean
    createdAt?: boolean
    stepId?: boolean
    userId?: boolean
  }

  export type StepChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "createdAt" | "stepId" | "userId", ExtArgs["result"]["stepChat"]>
  export type StepChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    step?: boolean | StepDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StepChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    step?: boolean | StepDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StepChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    step?: boolean | StepDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StepChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StepChat"
    objects: {
      step: Prisma.$StepPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      message: string
      createdAt: Date
      stepId: number
      userId: number
    }, ExtArgs["result"]["stepChat"]>
    composites: {}
  }

  type StepChatGetPayload<S extends boolean | null | undefined | StepChatDefaultArgs> = $Result.GetResult<Prisma.$StepChatPayload, S>

  type StepChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StepChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StepChatCountAggregateInputType | true
    }

  export interface StepChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StepChat'], meta: { name: 'StepChat' } }
    /**
     * Find zero or one StepChat that matches the filter.
     * @param {StepChatFindUniqueArgs} args - Arguments to find a StepChat
     * @example
     * // Get one StepChat
     * const stepChat = await prisma.stepChat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StepChatFindUniqueArgs>(args: SelectSubset<T, StepChatFindUniqueArgs<ExtArgs>>): Prisma__StepChatClient<$Result.GetResult<Prisma.$StepChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StepChat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StepChatFindUniqueOrThrowArgs} args - Arguments to find a StepChat
     * @example
     * // Get one StepChat
     * const stepChat = await prisma.stepChat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StepChatFindUniqueOrThrowArgs>(args: SelectSubset<T, StepChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StepChatClient<$Result.GetResult<Prisma.$StepChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StepChat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepChatFindFirstArgs} args - Arguments to find a StepChat
     * @example
     * // Get one StepChat
     * const stepChat = await prisma.stepChat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StepChatFindFirstArgs>(args?: SelectSubset<T, StepChatFindFirstArgs<ExtArgs>>): Prisma__StepChatClient<$Result.GetResult<Prisma.$StepChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StepChat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepChatFindFirstOrThrowArgs} args - Arguments to find a StepChat
     * @example
     * // Get one StepChat
     * const stepChat = await prisma.stepChat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StepChatFindFirstOrThrowArgs>(args?: SelectSubset<T, StepChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__StepChatClient<$Result.GetResult<Prisma.$StepChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StepChats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StepChats
     * const stepChats = await prisma.stepChat.findMany()
     * 
     * // Get first 10 StepChats
     * const stepChats = await prisma.stepChat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stepChatWithIdOnly = await prisma.stepChat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StepChatFindManyArgs>(args?: SelectSubset<T, StepChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StepChat.
     * @param {StepChatCreateArgs} args - Arguments to create a StepChat.
     * @example
     * // Create one StepChat
     * const StepChat = await prisma.stepChat.create({
     *   data: {
     *     // ... data to create a StepChat
     *   }
     * })
     * 
     */
    create<T extends StepChatCreateArgs>(args: SelectSubset<T, StepChatCreateArgs<ExtArgs>>): Prisma__StepChatClient<$Result.GetResult<Prisma.$StepChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StepChats.
     * @param {StepChatCreateManyArgs} args - Arguments to create many StepChats.
     * @example
     * // Create many StepChats
     * const stepChat = await prisma.stepChat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StepChatCreateManyArgs>(args?: SelectSubset<T, StepChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StepChats and returns the data saved in the database.
     * @param {StepChatCreateManyAndReturnArgs} args - Arguments to create many StepChats.
     * @example
     * // Create many StepChats
     * const stepChat = await prisma.stepChat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StepChats and only return the `id`
     * const stepChatWithIdOnly = await prisma.stepChat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StepChatCreateManyAndReturnArgs>(args?: SelectSubset<T, StepChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StepChat.
     * @param {StepChatDeleteArgs} args - Arguments to delete one StepChat.
     * @example
     * // Delete one StepChat
     * const StepChat = await prisma.stepChat.delete({
     *   where: {
     *     // ... filter to delete one StepChat
     *   }
     * })
     * 
     */
    delete<T extends StepChatDeleteArgs>(args: SelectSubset<T, StepChatDeleteArgs<ExtArgs>>): Prisma__StepChatClient<$Result.GetResult<Prisma.$StepChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StepChat.
     * @param {StepChatUpdateArgs} args - Arguments to update one StepChat.
     * @example
     * // Update one StepChat
     * const stepChat = await prisma.stepChat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StepChatUpdateArgs>(args: SelectSubset<T, StepChatUpdateArgs<ExtArgs>>): Prisma__StepChatClient<$Result.GetResult<Prisma.$StepChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StepChats.
     * @param {StepChatDeleteManyArgs} args - Arguments to filter StepChats to delete.
     * @example
     * // Delete a few StepChats
     * const { count } = await prisma.stepChat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StepChatDeleteManyArgs>(args?: SelectSubset<T, StepChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StepChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StepChats
     * const stepChat = await prisma.stepChat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StepChatUpdateManyArgs>(args: SelectSubset<T, StepChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StepChats and returns the data updated in the database.
     * @param {StepChatUpdateManyAndReturnArgs} args - Arguments to update many StepChats.
     * @example
     * // Update many StepChats
     * const stepChat = await prisma.stepChat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StepChats and only return the `id`
     * const stepChatWithIdOnly = await prisma.stepChat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StepChatUpdateManyAndReturnArgs>(args: SelectSubset<T, StepChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StepChat.
     * @param {StepChatUpsertArgs} args - Arguments to update or create a StepChat.
     * @example
     * // Update or create a StepChat
     * const stepChat = await prisma.stepChat.upsert({
     *   create: {
     *     // ... data to create a StepChat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StepChat we want to update
     *   }
     * })
     */
    upsert<T extends StepChatUpsertArgs>(args: SelectSubset<T, StepChatUpsertArgs<ExtArgs>>): Prisma__StepChatClient<$Result.GetResult<Prisma.$StepChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StepChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepChatCountArgs} args - Arguments to filter StepChats to count.
     * @example
     * // Count the number of StepChats
     * const count = await prisma.stepChat.count({
     *   where: {
     *     // ... the filter for the StepChats we want to count
     *   }
     * })
    **/
    count<T extends StepChatCountArgs>(
      args?: Subset<T, StepChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StepChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StepChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StepChatAggregateArgs>(args: Subset<T, StepChatAggregateArgs>): Prisma.PrismaPromise<GetStepChatAggregateType<T>>

    /**
     * Group by StepChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepChatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StepChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StepChatGroupByArgs['orderBy'] }
        : { orderBy?: StepChatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StepChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStepChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StepChat model
   */
  readonly fields: StepChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StepChat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StepChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    step<T extends StepDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StepDefaultArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StepChat model
   */
  interface StepChatFieldRefs {
    readonly id: FieldRef<"StepChat", 'Int'>
    readonly message: FieldRef<"StepChat", 'String'>
    readonly createdAt: FieldRef<"StepChat", 'DateTime'>
    readonly stepId: FieldRef<"StepChat", 'Int'>
    readonly userId: FieldRef<"StepChat", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * StepChat findUnique
   */
  export type StepChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepChat
     */
    select?: StepChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepChat
     */
    omit?: StepChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepChatInclude<ExtArgs> | null
    /**
     * Filter, which StepChat to fetch.
     */
    where: StepChatWhereUniqueInput
  }

  /**
   * StepChat findUniqueOrThrow
   */
  export type StepChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepChat
     */
    select?: StepChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepChat
     */
    omit?: StepChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepChatInclude<ExtArgs> | null
    /**
     * Filter, which StepChat to fetch.
     */
    where: StepChatWhereUniqueInput
  }

  /**
   * StepChat findFirst
   */
  export type StepChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepChat
     */
    select?: StepChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepChat
     */
    omit?: StepChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepChatInclude<ExtArgs> | null
    /**
     * Filter, which StepChat to fetch.
     */
    where?: StepChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StepChats to fetch.
     */
    orderBy?: StepChatOrderByWithRelationInput | StepChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StepChats.
     */
    cursor?: StepChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StepChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StepChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StepChats.
     */
    distinct?: StepChatScalarFieldEnum | StepChatScalarFieldEnum[]
  }

  /**
   * StepChat findFirstOrThrow
   */
  export type StepChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepChat
     */
    select?: StepChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepChat
     */
    omit?: StepChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepChatInclude<ExtArgs> | null
    /**
     * Filter, which StepChat to fetch.
     */
    where?: StepChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StepChats to fetch.
     */
    orderBy?: StepChatOrderByWithRelationInput | StepChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StepChats.
     */
    cursor?: StepChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StepChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StepChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StepChats.
     */
    distinct?: StepChatScalarFieldEnum | StepChatScalarFieldEnum[]
  }

  /**
   * StepChat findMany
   */
  export type StepChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepChat
     */
    select?: StepChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepChat
     */
    omit?: StepChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepChatInclude<ExtArgs> | null
    /**
     * Filter, which StepChats to fetch.
     */
    where?: StepChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StepChats to fetch.
     */
    orderBy?: StepChatOrderByWithRelationInput | StepChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StepChats.
     */
    cursor?: StepChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StepChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StepChats.
     */
    skip?: number
    distinct?: StepChatScalarFieldEnum | StepChatScalarFieldEnum[]
  }

  /**
   * StepChat create
   */
  export type StepChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepChat
     */
    select?: StepChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepChat
     */
    omit?: StepChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepChatInclude<ExtArgs> | null
    /**
     * The data needed to create a StepChat.
     */
    data: XOR<StepChatCreateInput, StepChatUncheckedCreateInput>
  }

  /**
   * StepChat createMany
   */
  export type StepChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StepChats.
     */
    data: StepChatCreateManyInput | StepChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StepChat createManyAndReturn
   */
  export type StepChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepChat
     */
    select?: StepChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StepChat
     */
    omit?: StepChatOmit<ExtArgs> | null
    /**
     * The data used to create many StepChats.
     */
    data: StepChatCreateManyInput | StepChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StepChat update
   */
  export type StepChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepChat
     */
    select?: StepChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepChat
     */
    omit?: StepChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepChatInclude<ExtArgs> | null
    /**
     * The data needed to update a StepChat.
     */
    data: XOR<StepChatUpdateInput, StepChatUncheckedUpdateInput>
    /**
     * Choose, which StepChat to update.
     */
    where: StepChatWhereUniqueInput
  }

  /**
   * StepChat updateMany
   */
  export type StepChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StepChats.
     */
    data: XOR<StepChatUpdateManyMutationInput, StepChatUncheckedUpdateManyInput>
    /**
     * Filter which StepChats to update
     */
    where?: StepChatWhereInput
    /**
     * Limit how many StepChats to update.
     */
    limit?: number
  }

  /**
   * StepChat updateManyAndReturn
   */
  export type StepChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepChat
     */
    select?: StepChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StepChat
     */
    omit?: StepChatOmit<ExtArgs> | null
    /**
     * The data used to update StepChats.
     */
    data: XOR<StepChatUpdateManyMutationInput, StepChatUncheckedUpdateManyInput>
    /**
     * Filter which StepChats to update
     */
    where?: StepChatWhereInput
    /**
     * Limit how many StepChats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StepChat upsert
   */
  export type StepChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepChat
     */
    select?: StepChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepChat
     */
    omit?: StepChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepChatInclude<ExtArgs> | null
    /**
     * The filter to search for the StepChat to update in case it exists.
     */
    where: StepChatWhereUniqueInput
    /**
     * In case the StepChat found by the `where` argument doesn't exist, create a new StepChat with this data.
     */
    create: XOR<StepChatCreateInput, StepChatUncheckedCreateInput>
    /**
     * In case the StepChat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StepChatUpdateInput, StepChatUncheckedUpdateInput>
  }

  /**
   * StepChat delete
   */
  export type StepChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepChat
     */
    select?: StepChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepChat
     */
    omit?: StepChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepChatInclude<ExtArgs> | null
    /**
     * Filter which StepChat to delete.
     */
    where: StepChatWhereUniqueInput
  }

  /**
   * StepChat deleteMany
   */
  export type StepChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StepChats to delete
     */
    where?: StepChatWhereInput
    /**
     * Limit how many StepChats to delete.
     */
    limit?: number
  }

  /**
   * StepChat without action
   */
  export type StepChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepChat
     */
    select?: StepChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepChat
     */
    omit?: StepChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepChatInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    id: number | null
  }

  export type TeamSumAggregateOutputType = {
    id: number | null
  }

  export type TeamMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TeamMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    id?: true
  }

  export type TeamSumAggregateInputType = {
    id?: true
  }

  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: number
    name: string
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    members?: boolean | Team$membersArgs<ExtArgs>
    projects?: boolean | Team$projectsArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Team$membersArgs<ExtArgs>
    projects?: boolean | Team$projectsArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      members: Prisma.$UserPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Team$membersArgs<ExtArgs> = {}>(args?: Subset<T, Team$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends Team$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Team$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'Int'>
    readonly name: FieldRef<"Team", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.members
   */
  export type Team$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Team.projects
   */
  export type Team$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model Pitch
   */

  export type AggregatePitch = {
    _count: PitchCountAggregateOutputType | null
    _avg: PitchAvgAggregateOutputType | null
    _sum: PitchSumAggregateOutputType | null
    _min: PitchMinAggregateOutputType | null
    _max: PitchMaxAggregateOutputType | null
  }

  export type PitchAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type PitchSumAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type PitchMinAggregateOutputType = {
    id: number | null
    pptUrl: string | null
    projectId: number | null
  }

  export type PitchMaxAggregateOutputType = {
    id: number | null
    pptUrl: string | null
    projectId: number | null
  }

  export type PitchCountAggregateOutputType = {
    id: number
    pptUrl: number
    projectId: number
    _all: number
  }


  export type PitchAvgAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type PitchSumAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type PitchMinAggregateInputType = {
    id?: true
    pptUrl?: true
    projectId?: true
  }

  export type PitchMaxAggregateInputType = {
    id?: true
    pptUrl?: true
    projectId?: true
  }

  export type PitchCountAggregateInputType = {
    id?: true
    pptUrl?: true
    projectId?: true
    _all?: true
  }

  export type PitchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pitch to aggregate.
     */
    where?: PitchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pitches to fetch.
     */
    orderBy?: PitchOrderByWithRelationInput | PitchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PitchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pitches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pitches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pitches
    **/
    _count?: true | PitchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PitchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PitchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PitchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PitchMaxAggregateInputType
  }

  export type GetPitchAggregateType<T extends PitchAggregateArgs> = {
        [P in keyof T & keyof AggregatePitch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePitch[P]>
      : GetScalarType<T[P], AggregatePitch[P]>
  }




  export type PitchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PitchWhereInput
    orderBy?: PitchOrderByWithAggregationInput | PitchOrderByWithAggregationInput[]
    by: PitchScalarFieldEnum[] | PitchScalarFieldEnum
    having?: PitchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PitchCountAggregateInputType | true
    _avg?: PitchAvgAggregateInputType
    _sum?: PitchSumAggregateInputType
    _min?: PitchMinAggregateInputType
    _max?: PitchMaxAggregateInputType
  }

  export type PitchGroupByOutputType = {
    id: number
    pptUrl: string | null
    projectId: number
    _count: PitchCountAggregateOutputType | null
    _avg: PitchAvgAggregateOutputType | null
    _sum: PitchSumAggregateOutputType | null
    _min: PitchMinAggregateOutputType | null
    _max: PitchMaxAggregateOutputType | null
  }

  type GetPitchGroupByPayload<T extends PitchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PitchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PitchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PitchGroupByOutputType[P]>
            : GetScalarType<T[P], PitchGroupByOutputType[P]>
        }
      >
    >


  export type PitchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pptUrl?: boolean
    projectId?: boolean
    PitchDialog?: boolean | Pitch$PitchDialogArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    _count?: boolean | PitchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pitch"]>

  export type PitchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pptUrl?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pitch"]>

  export type PitchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pptUrl?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pitch"]>

  export type PitchSelectScalar = {
    id?: boolean
    pptUrl?: boolean
    projectId?: boolean
  }

  export type PitchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pptUrl" | "projectId", ExtArgs["result"]["pitch"]>
  export type PitchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PitchDialog?: boolean | Pitch$PitchDialogArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    _count?: boolean | PitchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PitchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type PitchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $PitchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pitch"
    objects: {
      PitchDialog: Prisma.$PitchDialogPayload<ExtArgs>[]
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pptUrl: string | null
      projectId: number
    }, ExtArgs["result"]["pitch"]>
    composites: {}
  }

  type PitchGetPayload<S extends boolean | null | undefined | PitchDefaultArgs> = $Result.GetResult<Prisma.$PitchPayload, S>

  type PitchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PitchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PitchCountAggregateInputType | true
    }

  export interface PitchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pitch'], meta: { name: 'Pitch' } }
    /**
     * Find zero or one Pitch that matches the filter.
     * @param {PitchFindUniqueArgs} args - Arguments to find a Pitch
     * @example
     * // Get one Pitch
     * const pitch = await prisma.pitch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PitchFindUniqueArgs>(args: SelectSubset<T, PitchFindUniqueArgs<ExtArgs>>): Prisma__PitchClient<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pitch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PitchFindUniqueOrThrowArgs} args - Arguments to find a Pitch
     * @example
     * // Get one Pitch
     * const pitch = await prisma.pitch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PitchFindUniqueOrThrowArgs>(args: SelectSubset<T, PitchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PitchClient<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pitch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchFindFirstArgs} args - Arguments to find a Pitch
     * @example
     * // Get one Pitch
     * const pitch = await prisma.pitch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PitchFindFirstArgs>(args?: SelectSubset<T, PitchFindFirstArgs<ExtArgs>>): Prisma__PitchClient<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pitch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchFindFirstOrThrowArgs} args - Arguments to find a Pitch
     * @example
     * // Get one Pitch
     * const pitch = await prisma.pitch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PitchFindFirstOrThrowArgs>(args?: SelectSubset<T, PitchFindFirstOrThrowArgs<ExtArgs>>): Prisma__PitchClient<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pitches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pitches
     * const pitches = await prisma.pitch.findMany()
     * 
     * // Get first 10 Pitches
     * const pitches = await prisma.pitch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pitchWithIdOnly = await prisma.pitch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PitchFindManyArgs>(args?: SelectSubset<T, PitchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pitch.
     * @param {PitchCreateArgs} args - Arguments to create a Pitch.
     * @example
     * // Create one Pitch
     * const Pitch = await prisma.pitch.create({
     *   data: {
     *     // ... data to create a Pitch
     *   }
     * })
     * 
     */
    create<T extends PitchCreateArgs>(args: SelectSubset<T, PitchCreateArgs<ExtArgs>>): Prisma__PitchClient<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pitches.
     * @param {PitchCreateManyArgs} args - Arguments to create many Pitches.
     * @example
     * // Create many Pitches
     * const pitch = await prisma.pitch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PitchCreateManyArgs>(args?: SelectSubset<T, PitchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pitches and returns the data saved in the database.
     * @param {PitchCreateManyAndReturnArgs} args - Arguments to create many Pitches.
     * @example
     * // Create many Pitches
     * const pitch = await prisma.pitch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pitches and only return the `id`
     * const pitchWithIdOnly = await prisma.pitch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PitchCreateManyAndReturnArgs>(args?: SelectSubset<T, PitchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pitch.
     * @param {PitchDeleteArgs} args - Arguments to delete one Pitch.
     * @example
     * // Delete one Pitch
     * const Pitch = await prisma.pitch.delete({
     *   where: {
     *     // ... filter to delete one Pitch
     *   }
     * })
     * 
     */
    delete<T extends PitchDeleteArgs>(args: SelectSubset<T, PitchDeleteArgs<ExtArgs>>): Prisma__PitchClient<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pitch.
     * @param {PitchUpdateArgs} args - Arguments to update one Pitch.
     * @example
     * // Update one Pitch
     * const pitch = await prisma.pitch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PitchUpdateArgs>(args: SelectSubset<T, PitchUpdateArgs<ExtArgs>>): Prisma__PitchClient<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pitches.
     * @param {PitchDeleteManyArgs} args - Arguments to filter Pitches to delete.
     * @example
     * // Delete a few Pitches
     * const { count } = await prisma.pitch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PitchDeleteManyArgs>(args?: SelectSubset<T, PitchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pitches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pitches
     * const pitch = await prisma.pitch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PitchUpdateManyArgs>(args: SelectSubset<T, PitchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pitches and returns the data updated in the database.
     * @param {PitchUpdateManyAndReturnArgs} args - Arguments to update many Pitches.
     * @example
     * // Update many Pitches
     * const pitch = await prisma.pitch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pitches and only return the `id`
     * const pitchWithIdOnly = await prisma.pitch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PitchUpdateManyAndReturnArgs>(args: SelectSubset<T, PitchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pitch.
     * @param {PitchUpsertArgs} args - Arguments to update or create a Pitch.
     * @example
     * // Update or create a Pitch
     * const pitch = await prisma.pitch.upsert({
     *   create: {
     *     // ... data to create a Pitch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pitch we want to update
     *   }
     * })
     */
    upsert<T extends PitchUpsertArgs>(args: SelectSubset<T, PitchUpsertArgs<ExtArgs>>): Prisma__PitchClient<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pitches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchCountArgs} args - Arguments to filter Pitches to count.
     * @example
     * // Count the number of Pitches
     * const count = await prisma.pitch.count({
     *   where: {
     *     // ... the filter for the Pitches we want to count
     *   }
     * })
    **/
    count<T extends PitchCountArgs>(
      args?: Subset<T, PitchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PitchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pitch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PitchAggregateArgs>(args: Subset<T, PitchAggregateArgs>): Prisma.PrismaPromise<GetPitchAggregateType<T>>

    /**
     * Group by Pitch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PitchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PitchGroupByArgs['orderBy'] }
        : { orderBy?: PitchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PitchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPitchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pitch model
   */
  readonly fields: PitchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pitch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PitchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PitchDialog<T extends Pitch$PitchDialogArgs<ExtArgs> = {}>(args?: Subset<T, Pitch$PitchDialogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PitchDialogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pitch model
   */
  interface PitchFieldRefs {
    readonly id: FieldRef<"Pitch", 'Int'>
    readonly pptUrl: FieldRef<"Pitch", 'String'>
    readonly projectId: FieldRef<"Pitch", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pitch findUnique
   */
  export type PitchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pitch
     */
    omit?: PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    /**
     * Filter, which Pitch to fetch.
     */
    where: PitchWhereUniqueInput
  }

  /**
   * Pitch findUniqueOrThrow
   */
  export type PitchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pitch
     */
    omit?: PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    /**
     * Filter, which Pitch to fetch.
     */
    where: PitchWhereUniqueInput
  }

  /**
   * Pitch findFirst
   */
  export type PitchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pitch
     */
    omit?: PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    /**
     * Filter, which Pitch to fetch.
     */
    where?: PitchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pitches to fetch.
     */
    orderBy?: PitchOrderByWithRelationInput | PitchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pitches.
     */
    cursor?: PitchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pitches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pitches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pitches.
     */
    distinct?: PitchScalarFieldEnum | PitchScalarFieldEnum[]
  }

  /**
   * Pitch findFirstOrThrow
   */
  export type PitchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pitch
     */
    omit?: PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    /**
     * Filter, which Pitch to fetch.
     */
    where?: PitchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pitches to fetch.
     */
    orderBy?: PitchOrderByWithRelationInput | PitchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pitches.
     */
    cursor?: PitchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pitches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pitches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pitches.
     */
    distinct?: PitchScalarFieldEnum | PitchScalarFieldEnum[]
  }

  /**
   * Pitch findMany
   */
  export type PitchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pitch
     */
    omit?: PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    /**
     * Filter, which Pitches to fetch.
     */
    where?: PitchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pitches to fetch.
     */
    orderBy?: PitchOrderByWithRelationInput | PitchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pitches.
     */
    cursor?: PitchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pitches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pitches.
     */
    skip?: number
    distinct?: PitchScalarFieldEnum | PitchScalarFieldEnum[]
  }

  /**
   * Pitch create
   */
  export type PitchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pitch
     */
    omit?: PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    /**
     * The data needed to create a Pitch.
     */
    data: XOR<PitchCreateInput, PitchUncheckedCreateInput>
  }

  /**
   * Pitch createMany
   */
  export type PitchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pitches.
     */
    data: PitchCreateManyInput | PitchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pitch createManyAndReturn
   */
  export type PitchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pitch
     */
    omit?: PitchOmit<ExtArgs> | null
    /**
     * The data used to create many Pitches.
     */
    data: PitchCreateManyInput | PitchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pitch update
   */
  export type PitchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pitch
     */
    omit?: PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    /**
     * The data needed to update a Pitch.
     */
    data: XOR<PitchUpdateInput, PitchUncheckedUpdateInput>
    /**
     * Choose, which Pitch to update.
     */
    where: PitchWhereUniqueInput
  }

  /**
   * Pitch updateMany
   */
  export type PitchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pitches.
     */
    data: XOR<PitchUpdateManyMutationInput, PitchUncheckedUpdateManyInput>
    /**
     * Filter which Pitches to update
     */
    where?: PitchWhereInput
    /**
     * Limit how many Pitches to update.
     */
    limit?: number
  }

  /**
   * Pitch updateManyAndReturn
   */
  export type PitchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pitch
     */
    omit?: PitchOmit<ExtArgs> | null
    /**
     * The data used to update Pitches.
     */
    data: XOR<PitchUpdateManyMutationInput, PitchUncheckedUpdateManyInput>
    /**
     * Filter which Pitches to update
     */
    where?: PitchWhereInput
    /**
     * Limit how many Pitches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pitch upsert
   */
  export type PitchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pitch
     */
    omit?: PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    /**
     * The filter to search for the Pitch to update in case it exists.
     */
    where: PitchWhereUniqueInput
    /**
     * In case the Pitch found by the `where` argument doesn't exist, create a new Pitch with this data.
     */
    create: XOR<PitchCreateInput, PitchUncheckedCreateInput>
    /**
     * In case the Pitch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PitchUpdateInput, PitchUncheckedUpdateInput>
  }

  /**
   * Pitch delete
   */
  export type PitchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pitch
     */
    omit?: PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
    /**
     * Filter which Pitch to delete.
     */
    where: PitchWhereUniqueInput
  }

  /**
   * Pitch deleteMany
   */
  export type PitchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pitches to delete
     */
    where?: PitchWhereInput
    /**
     * Limit how many Pitches to delete.
     */
    limit?: number
  }

  /**
   * Pitch.PitchDialog
   */
  export type Pitch$PitchDialogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PitchDialog
     */
    select?: PitchDialogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PitchDialog
     */
    omit?: PitchDialogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchDialogInclude<ExtArgs> | null
    where?: PitchDialogWhereInput
    orderBy?: PitchDialogOrderByWithRelationInput | PitchDialogOrderByWithRelationInput[]
    cursor?: PitchDialogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PitchDialogScalarFieldEnum | PitchDialogScalarFieldEnum[]
  }

  /**
   * Pitch without action
   */
  export type PitchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pitch
     */
    select?: PitchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pitch
     */
    omit?: PitchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchInclude<ExtArgs> | null
  }


  /**
   * Model PitchDialog
   */

  export type AggregatePitchDialog = {
    _count: PitchDialogCountAggregateOutputType | null
    _avg: PitchDialogAvgAggregateOutputType | null
    _sum: PitchDialogSumAggregateOutputType | null
    _min: PitchDialogMinAggregateOutputType | null
    _max: PitchDialogMaxAggregateOutputType | null
  }

  export type PitchDialogAvgAggregateOutputType = {
    id: number | null
    pitchId: number | null
    userId: number | null
  }

  export type PitchDialogSumAggregateOutputType = {
    id: number | null
    pitchId: number | null
    userId: number | null
  }

  export type PitchDialogMinAggregateOutputType = {
    id: number | null
    message: string | null
    createdAt: Date | null
    pitchId: number | null
    userId: number | null
    aiOrUser: string | null
  }

  export type PitchDialogMaxAggregateOutputType = {
    id: number | null
    message: string | null
    createdAt: Date | null
    pitchId: number | null
    userId: number | null
    aiOrUser: string | null
  }

  export type PitchDialogCountAggregateOutputType = {
    id: number
    message: number
    createdAt: number
    pitchId: number
    userId: number
    aiOrUser: number
    _all: number
  }


  export type PitchDialogAvgAggregateInputType = {
    id?: true
    pitchId?: true
    userId?: true
  }

  export type PitchDialogSumAggregateInputType = {
    id?: true
    pitchId?: true
    userId?: true
  }

  export type PitchDialogMinAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
    pitchId?: true
    userId?: true
    aiOrUser?: true
  }

  export type PitchDialogMaxAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
    pitchId?: true
    userId?: true
    aiOrUser?: true
  }

  export type PitchDialogCountAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
    pitchId?: true
    userId?: true
    aiOrUser?: true
    _all?: true
  }

  export type PitchDialogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PitchDialog to aggregate.
     */
    where?: PitchDialogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PitchDialogs to fetch.
     */
    orderBy?: PitchDialogOrderByWithRelationInput | PitchDialogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PitchDialogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PitchDialogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PitchDialogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PitchDialogs
    **/
    _count?: true | PitchDialogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PitchDialogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PitchDialogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PitchDialogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PitchDialogMaxAggregateInputType
  }

  export type GetPitchDialogAggregateType<T extends PitchDialogAggregateArgs> = {
        [P in keyof T & keyof AggregatePitchDialog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePitchDialog[P]>
      : GetScalarType<T[P], AggregatePitchDialog[P]>
  }




  export type PitchDialogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PitchDialogWhereInput
    orderBy?: PitchDialogOrderByWithAggregationInput | PitchDialogOrderByWithAggregationInput[]
    by: PitchDialogScalarFieldEnum[] | PitchDialogScalarFieldEnum
    having?: PitchDialogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PitchDialogCountAggregateInputType | true
    _avg?: PitchDialogAvgAggregateInputType
    _sum?: PitchDialogSumAggregateInputType
    _min?: PitchDialogMinAggregateInputType
    _max?: PitchDialogMaxAggregateInputType
  }

  export type PitchDialogGroupByOutputType = {
    id: number
    message: string
    createdAt: Date
    pitchId: number
    userId: number
    aiOrUser: string
    _count: PitchDialogCountAggregateOutputType | null
    _avg: PitchDialogAvgAggregateOutputType | null
    _sum: PitchDialogSumAggregateOutputType | null
    _min: PitchDialogMinAggregateOutputType | null
    _max: PitchDialogMaxAggregateOutputType | null
  }

  type GetPitchDialogGroupByPayload<T extends PitchDialogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PitchDialogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PitchDialogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PitchDialogGroupByOutputType[P]>
            : GetScalarType<T[P], PitchDialogGroupByOutputType[P]>
        }
      >
    >


  export type PitchDialogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    createdAt?: boolean
    pitchId?: boolean
    userId?: boolean
    aiOrUser?: boolean
    pitch?: boolean | PitchDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pitchDialog"]>

  export type PitchDialogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    createdAt?: boolean
    pitchId?: boolean
    userId?: boolean
    aiOrUser?: boolean
    pitch?: boolean | PitchDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pitchDialog"]>

  export type PitchDialogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    createdAt?: boolean
    pitchId?: boolean
    userId?: boolean
    aiOrUser?: boolean
    pitch?: boolean | PitchDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pitchDialog"]>

  export type PitchDialogSelectScalar = {
    id?: boolean
    message?: boolean
    createdAt?: boolean
    pitchId?: boolean
    userId?: boolean
    aiOrUser?: boolean
  }

  export type PitchDialogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "createdAt" | "pitchId" | "userId" | "aiOrUser", ExtArgs["result"]["pitchDialog"]>
  export type PitchDialogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pitch?: boolean | PitchDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PitchDialogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pitch?: boolean | PitchDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PitchDialogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pitch?: boolean | PitchDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PitchDialogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PitchDialog"
    objects: {
      pitch: Prisma.$PitchPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      message: string
      createdAt: Date
      pitchId: number
      userId: number
      aiOrUser: string
    }, ExtArgs["result"]["pitchDialog"]>
    composites: {}
  }

  type PitchDialogGetPayload<S extends boolean | null | undefined | PitchDialogDefaultArgs> = $Result.GetResult<Prisma.$PitchDialogPayload, S>

  type PitchDialogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PitchDialogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PitchDialogCountAggregateInputType | true
    }

  export interface PitchDialogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PitchDialog'], meta: { name: 'PitchDialog' } }
    /**
     * Find zero or one PitchDialog that matches the filter.
     * @param {PitchDialogFindUniqueArgs} args - Arguments to find a PitchDialog
     * @example
     * // Get one PitchDialog
     * const pitchDialog = await prisma.pitchDialog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PitchDialogFindUniqueArgs>(args: SelectSubset<T, PitchDialogFindUniqueArgs<ExtArgs>>): Prisma__PitchDialogClient<$Result.GetResult<Prisma.$PitchDialogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PitchDialog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PitchDialogFindUniqueOrThrowArgs} args - Arguments to find a PitchDialog
     * @example
     * // Get one PitchDialog
     * const pitchDialog = await prisma.pitchDialog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PitchDialogFindUniqueOrThrowArgs>(args: SelectSubset<T, PitchDialogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PitchDialogClient<$Result.GetResult<Prisma.$PitchDialogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PitchDialog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchDialogFindFirstArgs} args - Arguments to find a PitchDialog
     * @example
     * // Get one PitchDialog
     * const pitchDialog = await prisma.pitchDialog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PitchDialogFindFirstArgs>(args?: SelectSubset<T, PitchDialogFindFirstArgs<ExtArgs>>): Prisma__PitchDialogClient<$Result.GetResult<Prisma.$PitchDialogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PitchDialog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchDialogFindFirstOrThrowArgs} args - Arguments to find a PitchDialog
     * @example
     * // Get one PitchDialog
     * const pitchDialog = await prisma.pitchDialog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PitchDialogFindFirstOrThrowArgs>(args?: SelectSubset<T, PitchDialogFindFirstOrThrowArgs<ExtArgs>>): Prisma__PitchDialogClient<$Result.GetResult<Prisma.$PitchDialogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PitchDialogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchDialogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PitchDialogs
     * const pitchDialogs = await prisma.pitchDialog.findMany()
     * 
     * // Get first 10 PitchDialogs
     * const pitchDialogs = await prisma.pitchDialog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pitchDialogWithIdOnly = await prisma.pitchDialog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PitchDialogFindManyArgs>(args?: SelectSubset<T, PitchDialogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PitchDialogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PitchDialog.
     * @param {PitchDialogCreateArgs} args - Arguments to create a PitchDialog.
     * @example
     * // Create one PitchDialog
     * const PitchDialog = await prisma.pitchDialog.create({
     *   data: {
     *     // ... data to create a PitchDialog
     *   }
     * })
     * 
     */
    create<T extends PitchDialogCreateArgs>(args: SelectSubset<T, PitchDialogCreateArgs<ExtArgs>>): Prisma__PitchDialogClient<$Result.GetResult<Prisma.$PitchDialogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PitchDialogs.
     * @param {PitchDialogCreateManyArgs} args - Arguments to create many PitchDialogs.
     * @example
     * // Create many PitchDialogs
     * const pitchDialog = await prisma.pitchDialog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PitchDialogCreateManyArgs>(args?: SelectSubset<T, PitchDialogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PitchDialogs and returns the data saved in the database.
     * @param {PitchDialogCreateManyAndReturnArgs} args - Arguments to create many PitchDialogs.
     * @example
     * // Create many PitchDialogs
     * const pitchDialog = await prisma.pitchDialog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PitchDialogs and only return the `id`
     * const pitchDialogWithIdOnly = await prisma.pitchDialog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PitchDialogCreateManyAndReturnArgs>(args?: SelectSubset<T, PitchDialogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PitchDialogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PitchDialog.
     * @param {PitchDialogDeleteArgs} args - Arguments to delete one PitchDialog.
     * @example
     * // Delete one PitchDialog
     * const PitchDialog = await prisma.pitchDialog.delete({
     *   where: {
     *     // ... filter to delete one PitchDialog
     *   }
     * })
     * 
     */
    delete<T extends PitchDialogDeleteArgs>(args: SelectSubset<T, PitchDialogDeleteArgs<ExtArgs>>): Prisma__PitchDialogClient<$Result.GetResult<Prisma.$PitchDialogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PitchDialog.
     * @param {PitchDialogUpdateArgs} args - Arguments to update one PitchDialog.
     * @example
     * // Update one PitchDialog
     * const pitchDialog = await prisma.pitchDialog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PitchDialogUpdateArgs>(args: SelectSubset<T, PitchDialogUpdateArgs<ExtArgs>>): Prisma__PitchDialogClient<$Result.GetResult<Prisma.$PitchDialogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PitchDialogs.
     * @param {PitchDialogDeleteManyArgs} args - Arguments to filter PitchDialogs to delete.
     * @example
     * // Delete a few PitchDialogs
     * const { count } = await prisma.pitchDialog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PitchDialogDeleteManyArgs>(args?: SelectSubset<T, PitchDialogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PitchDialogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchDialogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PitchDialogs
     * const pitchDialog = await prisma.pitchDialog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PitchDialogUpdateManyArgs>(args: SelectSubset<T, PitchDialogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PitchDialogs and returns the data updated in the database.
     * @param {PitchDialogUpdateManyAndReturnArgs} args - Arguments to update many PitchDialogs.
     * @example
     * // Update many PitchDialogs
     * const pitchDialog = await prisma.pitchDialog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PitchDialogs and only return the `id`
     * const pitchDialogWithIdOnly = await prisma.pitchDialog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PitchDialogUpdateManyAndReturnArgs>(args: SelectSubset<T, PitchDialogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PitchDialogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PitchDialog.
     * @param {PitchDialogUpsertArgs} args - Arguments to update or create a PitchDialog.
     * @example
     * // Update or create a PitchDialog
     * const pitchDialog = await prisma.pitchDialog.upsert({
     *   create: {
     *     // ... data to create a PitchDialog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PitchDialog we want to update
     *   }
     * })
     */
    upsert<T extends PitchDialogUpsertArgs>(args: SelectSubset<T, PitchDialogUpsertArgs<ExtArgs>>): Prisma__PitchDialogClient<$Result.GetResult<Prisma.$PitchDialogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PitchDialogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchDialogCountArgs} args - Arguments to filter PitchDialogs to count.
     * @example
     * // Count the number of PitchDialogs
     * const count = await prisma.pitchDialog.count({
     *   where: {
     *     // ... the filter for the PitchDialogs we want to count
     *   }
     * })
    **/
    count<T extends PitchDialogCountArgs>(
      args?: Subset<T, PitchDialogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PitchDialogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PitchDialog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchDialogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PitchDialogAggregateArgs>(args: Subset<T, PitchDialogAggregateArgs>): Prisma.PrismaPromise<GetPitchDialogAggregateType<T>>

    /**
     * Group by PitchDialog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PitchDialogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PitchDialogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PitchDialogGroupByArgs['orderBy'] }
        : { orderBy?: PitchDialogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PitchDialogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPitchDialogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PitchDialog model
   */
  readonly fields: PitchDialogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PitchDialog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PitchDialogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pitch<T extends PitchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PitchDefaultArgs<ExtArgs>>): Prisma__PitchClient<$Result.GetResult<Prisma.$PitchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PitchDialog model
   */
  interface PitchDialogFieldRefs {
    readonly id: FieldRef<"PitchDialog", 'Int'>
    readonly message: FieldRef<"PitchDialog", 'String'>
    readonly createdAt: FieldRef<"PitchDialog", 'DateTime'>
    readonly pitchId: FieldRef<"PitchDialog", 'Int'>
    readonly userId: FieldRef<"PitchDialog", 'Int'>
    readonly aiOrUser: FieldRef<"PitchDialog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PitchDialog findUnique
   */
  export type PitchDialogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PitchDialog
     */
    select?: PitchDialogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PitchDialog
     */
    omit?: PitchDialogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchDialogInclude<ExtArgs> | null
    /**
     * Filter, which PitchDialog to fetch.
     */
    where: PitchDialogWhereUniqueInput
  }

  /**
   * PitchDialog findUniqueOrThrow
   */
  export type PitchDialogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PitchDialog
     */
    select?: PitchDialogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PitchDialog
     */
    omit?: PitchDialogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchDialogInclude<ExtArgs> | null
    /**
     * Filter, which PitchDialog to fetch.
     */
    where: PitchDialogWhereUniqueInput
  }

  /**
   * PitchDialog findFirst
   */
  export type PitchDialogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PitchDialog
     */
    select?: PitchDialogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PitchDialog
     */
    omit?: PitchDialogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchDialogInclude<ExtArgs> | null
    /**
     * Filter, which PitchDialog to fetch.
     */
    where?: PitchDialogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PitchDialogs to fetch.
     */
    orderBy?: PitchDialogOrderByWithRelationInput | PitchDialogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PitchDialogs.
     */
    cursor?: PitchDialogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PitchDialogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PitchDialogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PitchDialogs.
     */
    distinct?: PitchDialogScalarFieldEnum | PitchDialogScalarFieldEnum[]
  }

  /**
   * PitchDialog findFirstOrThrow
   */
  export type PitchDialogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PitchDialog
     */
    select?: PitchDialogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PitchDialog
     */
    omit?: PitchDialogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchDialogInclude<ExtArgs> | null
    /**
     * Filter, which PitchDialog to fetch.
     */
    where?: PitchDialogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PitchDialogs to fetch.
     */
    orderBy?: PitchDialogOrderByWithRelationInput | PitchDialogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PitchDialogs.
     */
    cursor?: PitchDialogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PitchDialogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PitchDialogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PitchDialogs.
     */
    distinct?: PitchDialogScalarFieldEnum | PitchDialogScalarFieldEnum[]
  }

  /**
   * PitchDialog findMany
   */
  export type PitchDialogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PitchDialog
     */
    select?: PitchDialogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PitchDialog
     */
    omit?: PitchDialogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchDialogInclude<ExtArgs> | null
    /**
     * Filter, which PitchDialogs to fetch.
     */
    where?: PitchDialogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PitchDialogs to fetch.
     */
    orderBy?: PitchDialogOrderByWithRelationInput | PitchDialogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PitchDialogs.
     */
    cursor?: PitchDialogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PitchDialogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PitchDialogs.
     */
    skip?: number
    distinct?: PitchDialogScalarFieldEnum | PitchDialogScalarFieldEnum[]
  }

  /**
   * PitchDialog create
   */
  export type PitchDialogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PitchDialog
     */
    select?: PitchDialogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PitchDialog
     */
    omit?: PitchDialogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchDialogInclude<ExtArgs> | null
    /**
     * The data needed to create a PitchDialog.
     */
    data: XOR<PitchDialogCreateInput, PitchDialogUncheckedCreateInput>
  }

  /**
   * PitchDialog createMany
   */
  export type PitchDialogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PitchDialogs.
     */
    data: PitchDialogCreateManyInput | PitchDialogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PitchDialog createManyAndReturn
   */
  export type PitchDialogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PitchDialog
     */
    select?: PitchDialogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PitchDialog
     */
    omit?: PitchDialogOmit<ExtArgs> | null
    /**
     * The data used to create many PitchDialogs.
     */
    data: PitchDialogCreateManyInput | PitchDialogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchDialogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PitchDialog update
   */
  export type PitchDialogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PitchDialog
     */
    select?: PitchDialogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PitchDialog
     */
    omit?: PitchDialogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchDialogInclude<ExtArgs> | null
    /**
     * The data needed to update a PitchDialog.
     */
    data: XOR<PitchDialogUpdateInput, PitchDialogUncheckedUpdateInput>
    /**
     * Choose, which PitchDialog to update.
     */
    where: PitchDialogWhereUniqueInput
  }

  /**
   * PitchDialog updateMany
   */
  export type PitchDialogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PitchDialogs.
     */
    data: XOR<PitchDialogUpdateManyMutationInput, PitchDialogUncheckedUpdateManyInput>
    /**
     * Filter which PitchDialogs to update
     */
    where?: PitchDialogWhereInput
    /**
     * Limit how many PitchDialogs to update.
     */
    limit?: number
  }

  /**
   * PitchDialog updateManyAndReturn
   */
  export type PitchDialogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PitchDialog
     */
    select?: PitchDialogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PitchDialog
     */
    omit?: PitchDialogOmit<ExtArgs> | null
    /**
     * The data used to update PitchDialogs.
     */
    data: XOR<PitchDialogUpdateManyMutationInput, PitchDialogUncheckedUpdateManyInput>
    /**
     * Filter which PitchDialogs to update
     */
    where?: PitchDialogWhereInput
    /**
     * Limit how many PitchDialogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchDialogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PitchDialog upsert
   */
  export type PitchDialogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PitchDialog
     */
    select?: PitchDialogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PitchDialog
     */
    omit?: PitchDialogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchDialogInclude<ExtArgs> | null
    /**
     * The filter to search for the PitchDialog to update in case it exists.
     */
    where: PitchDialogWhereUniqueInput
    /**
     * In case the PitchDialog found by the `where` argument doesn't exist, create a new PitchDialog with this data.
     */
    create: XOR<PitchDialogCreateInput, PitchDialogUncheckedCreateInput>
    /**
     * In case the PitchDialog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PitchDialogUpdateInput, PitchDialogUncheckedUpdateInput>
  }

  /**
   * PitchDialog delete
   */
  export type PitchDialogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PitchDialog
     */
    select?: PitchDialogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PitchDialog
     */
    omit?: PitchDialogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchDialogInclude<ExtArgs> | null
    /**
     * Filter which PitchDialog to delete.
     */
    where: PitchDialogWhereUniqueInput
  }

  /**
   * PitchDialog deleteMany
   */
  export type PitchDialogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PitchDialogs to delete
     */
    where?: PitchDialogWhereInput
    /**
     * Limit how many PitchDialogs to delete.
     */
    limit?: number
  }

  /**
   * PitchDialog without action
   */
  export type PitchDialogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PitchDialog
     */
    select?: PitchDialogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PitchDialog
     */
    omit?: PitchDialogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PitchDialogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    githubId: 'githubId',
    avatar: 'avatar',
    name: 'name',
    username: 'username',
    skills: 'skills'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    expiresAt: 'expiresAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    hackathonName: 'hackathonName',
    theme: 'theme',
    suggestedTech: 'suggestedTech',
    judgingCriteria: 'judgingCriteria',
    additionalData: 'additionalData',
    submissionTime: 'submissionTime',
    actualTech: 'actualTech',
    userId: 'userId',
    teamId: 'teamId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const IdeaScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    content: 'content',
    isFinal: 'isFinal',
    projectId: 'projectId'
  };

  export type IdeaScalarFieldEnum = (typeof IdeaScalarFieldEnum)[keyof typeof IdeaScalarFieldEnum]


  export const IdeaChatScalarFieldEnum: {
    id: 'id',
    message: 'message',
    createdAt: 'createdAt',
    ideaId: 'ideaId',
    userId: 'userId'
  };

  export type IdeaChatScalarFieldEnum = (typeof IdeaChatScalarFieldEnum)[keyof typeof IdeaChatScalarFieldEnum]


  export const StepScalarFieldEnum: {
    id: 'id',
    content: 'content',
    isDone: 'isDone',
    order: 'order',
    projectId: 'projectId'
  };

  export type StepScalarFieldEnum = (typeof StepScalarFieldEnum)[keyof typeof StepScalarFieldEnum]


  export const StepChatScalarFieldEnum: {
    id: 'id',
    message: 'message',
    createdAt: 'createdAt',
    stepId: 'stepId',
    userId: 'userId'
  };

  export type StepChatScalarFieldEnum = (typeof StepChatScalarFieldEnum)[keyof typeof StepChatScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const PitchScalarFieldEnum: {
    id: 'id',
    pptUrl: 'pptUrl',
    projectId: 'projectId'
  };

  export type PitchScalarFieldEnum = (typeof PitchScalarFieldEnum)[keyof typeof PitchScalarFieldEnum]


  export const PitchDialogScalarFieldEnum: {
    id: 'id',
    message: 'message',
    createdAt: 'createdAt',
    pitchId: 'pitchId',
    userId: 'userId',
    aiOrUser: 'aiOrUser'
  };

  export type PitchDialogScalarFieldEnum = (typeof PitchDialogScalarFieldEnum)[keyof typeof PitchDialogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    githubId?: IntFilter<"User"> | number
    avatar?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    username?: StringFilter<"User"> | string
    skills?: StringNullableListFilter<"User">
    sessions?: SessionListRelationFilter
    projects?: ProjectListRelationFilter
    ideaChats?: IdeaChatListRelationFilter
    stepChats?: StepChatListRelationFilter
    pitchDialogs?: PitchDialogListRelationFilter
    teams?: TeamListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    githubId?: SortOrder
    avatar?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrder
    skills?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
    ideaChats?: IdeaChatOrderByRelationAggregateInput
    stepChats?: StepChatOrderByRelationAggregateInput
    pitchDialogs?: PitchDialogOrderByRelationAggregateInput
    teams?: TeamOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    githubId?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    avatar?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    skills?: StringNullableListFilter<"User">
    sessions?: SessionListRelationFilter
    projects?: ProjectListRelationFilter
    ideaChats?: IdeaChatListRelationFilter
    stepChats?: StepChatListRelationFilter
    pitchDialogs?: PitchDialogListRelationFilter
    teams?: TeamListRelationFilter
  }, "id" | "githubId" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    githubId?: SortOrder
    avatar?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrder
    skills?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    githubId?: IntWithAggregatesFilter<"User"> | number
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringWithAggregatesFilter<"User"> | string
    skills?: StringNullableListFilter<"User">
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: IntFilter<"Session"> | number
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: IntFilter<"Session"> | number
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: IntWithAggregatesFilter<"Session"> | number
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    hackathonName?: StringFilter<"Project"> | string
    theme?: StringNullableFilter<"Project"> | string | null
    suggestedTech?: StringNullableFilter<"Project"> | string | null
    judgingCriteria?: StringNullableFilter<"Project"> | string | null
    additionalData?: StringNullableFilter<"Project"> | string | null
    submissionTime?: DateTimeFilter<"Project"> | Date | string
    actualTech?: StringNullableFilter<"Project"> | string | null
    userId?: IntFilter<"Project"> | number
    teamId?: IntNullableFilter<"Project"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    ideas?: IdeaListRelationFilter
    steps?: StepListRelationFilter
    pitch?: PitchListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    hackathonName?: SortOrder
    theme?: SortOrderInput | SortOrder
    suggestedTech?: SortOrderInput | SortOrder
    judgingCriteria?: SortOrderInput | SortOrder
    additionalData?: SortOrderInput | SortOrder
    submissionTime?: SortOrder
    actualTech?: SortOrderInput | SortOrder
    userId?: SortOrder
    teamId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
    ideas?: IdeaOrderByRelationAggregateInput
    steps?: StepOrderByRelationAggregateInput
    pitch?: PitchOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    hackathonName?: StringFilter<"Project"> | string
    theme?: StringNullableFilter<"Project"> | string | null
    suggestedTech?: StringNullableFilter<"Project"> | string | null
    judgingCriteria?: StringNullableFilter<"Project"> | string | null
    additionalData?: StringNullableFilter<"Project"> | string | null
    submissionTime?: DateTimeFilter<"Project"> | Date | string
    actualTech?: StringNullableFilter<"Project"> | string | null
    userId?: IntFilter<"Project"> | number
    teamId?: IntNullableFilter<"Project"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    ideas?: IdeaListRelationFilter
    steps?: StepListRelationFilter
    pitch?: PitchListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    hackathonName?: SortOrder
    theme?: SortOrderInput | SortOrder
    suggestedTech?: SortOrderInput | SortOrder
    judgingCriteria?: SortOrderInput | SortOrder
    additionalData?: SortOrderInput | SortOrder
    submissionTime?: SortOrder
    actualTech?: SortOrderInput | SortOrder
    userId?: SortOrder
    teamId?: SortOrderInput | SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    hackathonName?: StringWithAggregatesFilter<"Project"> | string
    theme?: StringNullableWithAggregatesFilter<"Project"> | string | null
    suggestedTech?: StringNullableWithAggregatesFilter<"Project"> | string | null
    judgingCriteria?: StringNullableWithAggregatesFilter<"Project"> | string | null
    additionalData?: StringNullableWithAggregatesFilter<"Project"> | string | null
    submissionTime?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    actualTech?: StringNullableWithAggregatesFilter<"Project"> | string | null
    userId?: IntWithAggregatesFilter<"Project"> | number
    teamId?: IntNullableWithAggregatesFilter<"Project"> | number | null
  }

  export type IdeaWhereInput = {
    AND?: IdeaWhereInput | IdeaWhereInput[]
    OR?: IdeaWhereInput[]
    NOT?: IdeaWhereInput | IdeaWhereInput[]
    id?: IntFilter<"Idea"> | number
    title?: StringFilter<"Idea"> | string
    description?: StringFilter<"Idea"> | string
    content?: StringFilter<"Idea"> | string
    isFinal?: BoolFilter<"Idea"> | boolean
    projectId?: IntFilter<"Idea"> | number
    chats?: IdeaChatListRelationFilter
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type IdeaOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    isFinal?: SortOrder
    projectId?: SortOrder
    chats?: IdeaChatOrderByRelationAggregateInput
    project?: ProjectOrderByWithRelationInput
  }

  export type IdeaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IdeaWhereInput | IdeaWhereInput[]
    OR?: IdeaWhereInput[]
    NOT?: IdeaWhereInput | IdeaWhereInput[]
    title?: StringFilter<"Idea"> | string
    description?: StringFilter<"Idea"> | string
    content?: StringFilter<"Idea"> | string
    isFinal?: BoolFilter<"Idea"> | boolean
    projectId?: IntFilter<"Idea"> | number
    chats?: IdeaChatListRelationFilter
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type IdeaOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    isFinal?: SortOrder
    projectId?: SortOrder
    _count?: IdeaCountOrderByAggregateInput
    _avg?: IdeaAvgOrderByAggregateInput
    _max?: IdeaMaxOrderByAggregateInput
    _min?: IdeaMinOrderByAggregateInput
    _sum?: IdeaSumOrderByAggregateInput
  }

  export type IdeaScalarWhereWithAggregatesInput = {
    AND?: IdeaScalarWhereWithAggregatesInput | IdeaScalarWhereWithAggregatesInput[]
    OR?: IdeaScalarWhereWithAggregatesInput[]
    NOT?: IdeaScalarWhereWithAggregatesInput | IdeaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Idea"> | number
    title?: StringWithAggregatesFilter<"Idea"> | string
    description?: StringWithAggregatesFilter<"Idea"> | string
    content?: StringWithAggregatesFilter<"Idea"> | string
    isFinal?: BoolWithAggregatesFilter<"Idea"> | boolean
    projectId?: IntWithAggregatesFilter<"Idea"> | number
  }

  export type IdeaChatWhereInput = {
    AND?: IdeaChatWhereInput | IdeaChatWhereInput[]
    OR?: IdeaChatWhereInput[]
    NOT?: IdeaChatWhereInput | IdeaChatWhereInput[]
    id?: IntFilter<"IdeaChat"> | number
    message?: StringFilter<"IdeaChat"> | string
    createdAt?: DateTimeFilter<"IdeaChat"> | Date | string
    ideaId?: IntFilter<"IdeaChat"> | number
    userId?: IntFilter<"IdeaChat"> | number
    idea?: XOR<IdeaScalarRelationFilter, IdeaWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type IdeaChatOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    ideaId?: SortOrder
    userId?: SortOrder
    idea?: IdeaOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type IdeaChatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IdeaChatWhereInput | IdeaChatWhereInput[]
    OR?: IdeaChatWhereInput[]
    NOT?: IdeaChatWhereInput | IdeaChatWhereInput[]
    message?: StringFilter<"IdeaChat"> | string
    createdAt?: DateTimeFilter<"IdeaChat"> | Date | string
    ideaId?: IntFilter<"IdeaChat"> | number
    userId?: IntFilter<"IdeaChat"> | number
    idea?: XOR<IdeaScalarRelationFilter, IdeaWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type IdeaChatOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    ideaId?: SortOrder
    userId?: SortOrder
    _count?: IdeaChatCountOrderByAggregateInput
    _avg?: IdeaChatAvgOrderByAggregateInput
    _max?: IdeaChatMaxOrderByAggregateInput
    _min?: IdeaChatMinOrderByAggregateInput
    _sum?: IdeaChatSumOrderByAggregateInput
  }

  export type IdeaChatScalarWhereWithAggregatesInput = {
    AND?: IdeaChatScalarWhereWithAggregatesInput | IdeaChatScalarWhereWithAggregatesInput[]
    OR?: IdeaChatScalarWhereWithAggregatesInput[]
    NOT?: IdeaChatScalarWhereWithAggregatesInput | IdeaChatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IdeaChat"> | number
    message?: StringWithAggregatesFilter<"IdeaChat"> | string
    createdAt?: DateTimeWithAggregatesFilter<"IdeaChat"> | Date | string
    ideaId?: IntWithAggregatesFilter<"IdeaChat"> | number
    userId?: IntWithAggregatesFilter<"IdeaChat"> | number
  }

  export type StepWhereInput = {
    AND?: StepWhereInput | StepWhereInput[]
    OR?: StepWhereInput[]
    NOT?: StepWhereInput | StepWhereInput[]
    id?: IntFilter<"Step"> | number
    content?: StringFilter<"Step"> | string
    isDone?: BoolFilter<"Step"> | boolean
    order?: IntNullableFilter<"Step"> | number | null
    projectId?: IntFilter<"Step"> | number
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    chats?: StepChatListRelationFilter
  }

  export type StepOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    isDone?: SortOrder
    order?: SortOrderInput | SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
    chats?: StepChatOrderByRelationAggregateInput
  }

  export type StepWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StepWhereInput | StepWhereInput[]
    OR?: StepWhereInput[]
    NOT?: StepWhereInput | StepWhereInput[]
    content?: StringFilter<"Step"> | string
    isDone?: BoolFilter<"Step"> | boolean
    order?: IntNullableFilter<"Step"> | number | null
    projectId?: IntFilter<"Step"> | number
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    chats?: StepChatListRelationFilter
  }, "id">

  export type StepOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    isDone?: SortOrder
    order?: SortOrderInput | SortOrder
    projectId?: SortOrder
    _count?: StepCountOrderByAggregateInput
    _avg?: StepAvgOrderByAggregateInput
    _max?: StepMaxOrderByAggregateInput
    _min?: StepMinOrderByAggregateInput
    _sum?: StepSumOrderByAggregateInput
  }

  export type StepScalarWhereWithAggregatesInput = {
    AND?: StepScalarWhereWithAggregatesInput | StepScalarWhereWithAggregatesInput[]
    OR?: StepScalarWhereWithAggregatesInput[]
    NOT?: StepScalarWhereWithAggregatesInput | StepScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Step"> | number
    content?: StringWithAggregatesFilter<"Step"> | string
    isDone?: BoolWithAggregatesFilter<"Step"> | boolean
    order?: IntNullableWithAggregatesFilter<"Step"> | number | null
    projectId?: IntWithAggregatesFilter<"Step"> | number
  }

  export type StepChatWhereInput = {
    AND?: StepChatWhereInput | StepChatWhereInput[]
    OR?: StepChatWhereInput[]
    NOT?: StepChatWhereInput | StepChatWhereInput[]
    id?: IntFilter<"StepChat"> | number
    message?: StringFilter<"StepChat"> | string
    createdAt?: DateTimeFilter<"StepChat"> | Date | string
    stepId?: IntFilter<"StepChat"> | number
    userId?: IntFilter<"StepChat"> | number
    step?: XOR<StepScalarRelationFilter, StepWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StepChatOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    stepId?: SortOrder
    userId?: SortOrder
    step?: StepOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type StepChatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StepChatWhereInput | StepChatWhereInput[]
    OR?: StepChatWhereInput[]
    NOT?: StepChatWhereInput | StepChatWhereInput[]
    message?: StringFilter<"StepChat"> | string
    createdAt?: DateTimeFilter<"StepChat"> | Date | string
    stepId?: IntFilter<"StepChat"> | number
    userId?: IntFilter<"StepChat"> | number
    step?: XOR<StepScalarRelationFilter, StepWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type StepChatOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    stepId?: SortOrder
    userId?: SortOrder
    _count?: StepChatCountOrderByAggregateInput
    _avg?: StepChatAvgOrderByAggregateInput
    _max?: StepChatMaxOrderByAggregateInput
    _min?: StepChatMinOrderByAggregateInput
    _sum?: StepChatSumOrderByAggregateInput
  }

  export type StepChatScalarWhereWithAggregatesInput = {
    AND?: StepChatScalarWhereWithAggregatesInput | StepChatScalarWhereWithAggregatesInput[]
    OR?: StepChatScalarWhereWithAggregatesInput[]
    NOT?: StepChatScalarWhereWithAggregatesInput | StepChatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StepChat"> | number
    message?: StringWithAggregatesFilter<"StepChat"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StepChat"> | Date | string
    stepId?: IntWithAggregatesFilter<"StepChat"> | number
    userId?: IntWithAggregatesFilter<"StepChat"> | number
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: IntFilter<"Team"> | number
    name?: StringFilter<"Team"> | string
    members?: UserListRelationFilter
    projects?: ProjectListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    members?: UserOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    members?: UserListRelationFilter
    projects?: ProjectListRelationFilter
  }, "id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _avg?: TeamAvgOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
    _sum?: TeamSumOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Team"> | number
    name?: StringWithAggregatesFilter<"Team"> | string
  }

  export type PitchWhereInput = {
    AND?: PitchWhereInput | PitchWhereInput[]
    OR?: PitchWhereInput[]
    NOT?: PitchWhereInput | PitchWhereInput[]
    id?: IntFilter<"Pitch"> | number
    pptUrl?: StringNullableFilter<"Pitch"> | string | null
    projectId?: IntFilter<"Pitch"> | number
    PitchDialog?: PitchDialogListRelationFilter
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type PitchOrderByWithRelationInput = {
    id?: SortOrder
    pptUrl?: SortOrderInput | SortOrder
    projectId?: SortOrder
    PitchDialog?: PitchDialogOrderByRelationAggregateInput
    project?: ProjectOrderByWithRelationInput
  }

  export type PitchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    projectId?: number
    AND?: PitchWhereInput | PitchWhereInput[]
    OR?: PitchWhereInput[]
    NOT?: PitchWhereInput | PitchWhereInput[]
    pptUrl?: StringNullableFilter<"Pitch"> | string | null
    PitchDialog?: PitchDialogListRelationFilter
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "projectId">

  export type PitchOrderByWithAggregationInput = {
    id?: SortOrder
    pptUrl?: SortOrderInput | SortOrder
    projectId?: SortOrder
    _count?: PitchCountOrderByAggregateInput
    _avg?: PitchAvgOrderByAggregateInput
    _max?: PitchMaxOrderByAggregateInput
    _min?: PitchMinOrderByAggregateInput
    _sum?: PitchSumOrderByAggregateInput
  }

  export type PitchScalarWhereWithAggregatesInput = {
    AND?: PitchScalarWhereWithAggregatesInput | PitchScalarWhereWithAggregatesInput[]
    OR?: PitchScalarWhereWithAggregatesInput[]
    NOT?: PitchScalarWhereWithAggregatesInput | PitchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pitch"> | number
    pptUrl?: StringNullableWithAggregatesFilter<"Pitch"> | string | null
    projectId?: IntWithAggregatesFilter<"Pitch"> | number
  }

  export type PitchDialogWhereInput = {
    AND?: PitchDialogWhereInput | PitchDialogWhereInput[]
    OR?: PitchDialogWhereInput[]
    NOT?: PitchDialogWhereInput | PitchDialogWhereInput[]
    id?: IntFilter<"PitchDialog"> | number
    message?: StringFilter<"PitchDialog"> | string
    createdAt?: DateTimeFilter<"PitchDialog"> | Date | string
    pitchId?: IntFilter<"PitchDialog"> | number
    userId?: IntFilter<"PitchDialog"> | number
    aiOrUser?: StringFilter<"PitchDialog"> | string
    pitch?: XOR<PitchScalarRelationFilter, PitchWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PitchDialogOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    pitchId?: SortOrder
    userId?: SortOrder
    aiOrUser?: SortOrder
    pitch?: PitchOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PitchDialogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PitchDialogWhereInput | PitchDialogWhereInput[]
    OR?: PitchDialogWhereInput[]
    NOT?: PitchDialogWhereInput | PitchDialogWhereInput[]
    message?: StringFilter<"PitchDialog"> | string
    createdAt?: DateTimeFilter<"PitchDialog"> | Date | string
    pitchId?: IntFilter<"PitchDialog"> | number
    userId?: IntFilter<"PitchDialog"> | number
    aiOrUser?: StringFilter<"PitchDialog"> | string
    pitch?: XOR<PitchScalarRelationFilter, PitchWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PitchDialogOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    pitchId?: SortOrder
    userId?: SortOrder
    aiOrUser?: SortOrder
    _count?: PitchDialogCountOrderByAggregateInput
    _avg?: PitchDialogAvgOrderByAggregateInput
    _max?: PitchDialogMaxOrderByAggregateInput
    _min?: PitchDialogMinOrderByAggregateInput
    _sum?: PitchDialogSumOrderByAggregateInput
  }

  export type PitchDialogScalarWhereWithAggregatesInput = {
    AND?: PitchDialogScalarWhereWithAggregatesInput | PitchDialogScalarWhereWithAggregatesInput[]
    OR?: PitchDialogScalarWhereWithAggregatesInput[]
    NOT?: PitchDialogScalarWhereWithAggregatesInput | PitchDialogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PitchDialog"> | number
    message?: StringWithAggregatesFilter<"PitchDialog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PitchDialog"> | Date | string
    pitchId?: IntWithAggregatesFilter<"PitchDialog"> | number
    userId?: IntWithAggregatesFilter<"PitchDialog"> | number
    aiOrUser?: StringWithAggregatesFilter<"PitchDialog"> | string
  }

  export type UserCreateInput = {
    githubId: number
    avatar?: string | null
    name?: string | null
    username: string
    skills?: UserCreateskillsInput | string[]
    sessions?: SessionCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    ideaChats?: IdeaChatCreateNestedManyWithoutUserInput
    stepChats?: StepChatCreateNestedManyWithoutUserInput
    pitchDialogs?: PitchDialogCreateNestedManyWithoutUserInput
    teams?: TeamCreateNestedManyWithoutMembersInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    githubId: number
    avatar?: string | null
    name?: string | null
    username: string
    skills?: UserCreateskillsInput | string[]
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    ideaChats?: IdeaChatUncheckedCreateNestedManyWithoutUserInput
    stepChats?: StepChatUncheckedCreateNestedManyWithoutUserInput
    pitchDialogs?: PitchDialogUncheckedCreateNestedManyWithoutUserInput
    teams?: TeamUncheckedCreateNestedManyWithoutMembersInput
  }

  export type UserUpdateInput = {
    githubId?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    skills?: UserUpdateskillsInput | string[]
    sessions?: SessionUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    ideaChats?: IdeaChatUpdateManyWithoutUserNestedInput
    stepChats?: StepChatUpdateManyWithoutUserNestedInput
    pitchDialogs?: PitchDialogUpdateManyWithoutUserNestedInput
    teams?: TeamUpdateManyWithoutMembersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    githubId?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    skills?: UserUpdateskillsInput | string[]
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    ideaChats?: IdeaChatUncheckedUpdateManyWithoutUserNestedInput
    stepChats?: StepChatUncheckedUpdateManyWithoutUserNestedInput
    pitchDialogs?: PitchDialogUncheckedUpdateManyWithoutUserNestedInput
    teams?: TeamUncheckedUpdateManyWithoutMembersNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    githubId: number
    avatar?: string | null
    name?: string | null
    username: string
    skills?: UserCreateskillsInput | string[]
  }

  export type UserUpdateManyMutationInput = {
    githubId?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    skills?: UserUpdateskillsInput | string[]
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    githubId?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    skills?: UserUpdateskillsInput | string[]
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    userId: number
    expiresAt: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id: string
    userId: number
    expiresAt: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    hackathonName: string
    theme?: string | null
    suggestedTech?: string | null
    judgingCriteria?: string | null
    additionalData?: string | null
    submissionTime: Date | string
    actualTech?: string | null
    user: UserCreateNestedOneWithoutProjectsInput
    team?: TeamCreateNestedOneWithoutProjectsInput
    ideas?: IdeaCreateNestedManyWithoutProjectInput
    steps?: StepCreateNestedManyWithoutProjectInput
    pitch?: PitchCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    hackathonName: string
    theme?: string | null
    suggestedTech?: string | null
    judgingCriteria?: string | null
    additionalData?: string | null
    submissionTime: Date | string
    actualTech?: string | null
    userId: number
    teamId?: number | null
    ideas?: IdeaUncheckedCreateNestedManyWithoutProjectInput
    steps?: StepUncheckedCreateNestedManyWithoutProjectInput
    pitch?: PitchUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    hackathonName?: StringFieldUpdateOperationsInput | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedTech?: NullableStringFieldUpdateOperationsInput | string | null
    judgingCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    additionalData?: NullableStringFieldUpdateOperationsInput | string | null
    submissionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualTech?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    team?: TeamUpdateOneWithoutProjectsNestedInput
    ideas?: IdeaUpdateManyWithoutProjectNestedInput
    steps?: StepUpdateManyWithoutProjectNestedInput
    pitch?: PitchUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hackathonName?: StringFieldUpdateOperationsInput | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedTech?: NullableStringFieldUpdateOperationsInput | string | null
    judgingCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    additionalData?: NullableStringFieldUpdateOperationsInput | string | null
    submissionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualTech?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    ideas?: IdeaUncheckedUpdateManyWithoutProjectNestedInput
    steps?: StepUncheckedUpdateManyWithoutProjectNestedInput
    pitch?: PitchUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: number
    hackathonName: string
    theme?: string | null
    suggestedTech?: string | null
    judgingCriteria?: string | null
    additionalData?: string | null
    submissionTime: Date | string
    actualTech?: string | null
    userId: number
    teamId?: number | null
  }

  export type ProjectUpdateManyMutationInput = {
    hackathonName?: StringFieldUpdateOperationsInput | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedTech?: NullableStringFieldUpdateOperationsInput | string | null
    judgingCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    additionalData?: NullableStringFieldUpdateOperationsInput | string | null
    submissionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualTech?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hackathonName?: StringFieldUpdateOperationsInput | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedTech?: NullableStringFieldUpdateOperationsInput | string | null
    judgingCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    additionalData?: NullableStringFieldUpdateOperationsInput | string | null
    submissionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualTech?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IdeaCreateInput = {
    title: string
    description: string
    content: string
    isFinal?: boolean
    chats?: IdeaChatCreateNestedManyWithoutIdeaInput
    project: ProjectCreateNestedOneWithoutIdeasInput
  }

  export type IdeaUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    content: string
    isFinal?: boolean
    projectId: number
    chats?: IdeaChatUncheckedCreateNestedManyWithoutIdeaInput
  }

  export type IdeaUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isFinal?: BoolFieldUpdateOperationsInput | boolean
    chats?: IdeaChatUpdateManyWithoutIdeaNestedInput
    project?: ProjectUpdateOneRequiredWithoutIdeasNestedInput
  }

  export type IdeaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isFinal?: BoolFieldUpdateOperationsInput | boolean
    projectId?: IntFieldUpdateOperationsInput | number
    chats?: IdeaChatUncheckedUpdateManyWithoutIdeaNestedInput
  }

  export type IdeaCreateManyInput = {
    id?: number
    title: string
    description: string
    content: string
    isFinal?: boolean
    projectId: number
  }

  export type IdeaUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isFinal?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IdeaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isFinal?: BoolFieldUpdateOperationsInput | boolean
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type IdeaChatCreateInput = {
    message: string
    createdAt?: Date | string
    idea: IdeaCreateNestedOneWithoutChatsInput
    user: UserCreateNestedOneWithoutIdeaChatsInput
  }

  export type IdeaChatUncheckedCreateInput = {
    id?: number
    message: string
    createdAt?: Date | string
    ideaId: number
    userId: number
  }

  export type IdeaChatUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idea?: IdeaUpdateOneRequiredWithoutChatsNestedInput
    user?: UserUpdateOneRequiredWithoutIdeaChatsNestedInput
  }

  export type IdeaChatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ideaId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IdeaChatCreateManyInput = {
    id?: number
    message: string
    createdAt?: Date | string
    ideaId: number
    userId: number
  }

  export type IdeaChatUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdeaChatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ideaId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type StepCreateInput = {
    content: string
    isDone?: boolean
    order?: number | null
    project: ProjectCreateNestedOneWithoutStepsInput
    chats?: StepChatCreateNestedManyWithoutStepInput
  }

  export type StepUncheckedCreateInput = {
    id?: number
    content: string
    isDone?: boolean
    order?: number | null
    projectId: number
    chats?: StepChatUncheckedCreateNestedManyWithoutStepInput
  }

  export type StepUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    order?: NullableIntFieldUpdateOperationsInput | number | null
    project?: ProjectUpdateOneRequiredWithoutStepsNestedInput
    chats?: StepChatUpdateManyWithoutStepNestedInput
  }

  export type StepUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    order?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: IntFieldUpdateOperationsInput | number
    chats?: StepChatUncheckedUpdateManyWithoutStepNestedInput
  }

  export type StepCreateManyInput = {
    id?: number
    content: string
    isDone?: boolean
    order?: number | null
    projectId: number
  }

  export type StepUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StepUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    order?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type StepChatCreateInput = {
    message: string
    createdAt?: Date | string
    step: StepCreateNestedOneWithoutChatsInput
    user: UserCreateNestedOneWithoutStepChatsInput
  }

  export type StepChatUncheckedCreateInput = {
    id?: number
    message: string
    createdAt?: Date | string
    stepId: number
    userId: number
  }

  export type StepChatUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    step?: StepUpdateOneRequiredWithoutChatsNestedInput
    user?: UserUpdateOneRequiredWithoutStepChatsNestedInput
  }

  export type StepChatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stepId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type StepChatCreateManyInput = {
    id?: number
    message: string
    createdAt?: Date | string
    stepId: number
    userId: number
  }

  export type StepChatUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepChatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stepId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TeamCreateInput = {
    name: string
    members?: UserCreateNestedManyWithoutTeamsInput
    projects?: ProjectCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: number
    name: string
    members?: UserUncheckedCreateNestedManyWithoutTeamsInput
    projects?: ProjectUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    members?: UserUpdateManyWithoutTeamsNestedInput
    projects?: ProjectUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    members?: UserUncheckedUpdateManyWithoutTeamsNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: number
    name: string
  }

  export type TeamUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PitchCreateInput = {
    pptUrl?: string | null
    PitchDialog?: PitchDialogCreateNestedManyWithoutPitchInput
    project: ProjectCreateNestedOneWithoutPitchInput
  }

  export type PitchUncheckedCreateInput = {
    id?: number
    pptUrl?: string | null
    projectId: number
    PitchDialog?: PitchDialogUncheckedCreateNestedManyWithoutPitchInput
  }

  export type PitchUpdateInput = {
    pptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    PitchDialog?: PitchDialogUpdateManyWithoutPitchNestedInput
    project?: ProjectUpdateOneRequiredWithoutPitchNestedInput
  }

  export type PitchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: IntFieldUpdateOperationsInput | number
    PitchDialog?: PitchDialogUncheckedUpdateManyWithoutPitchNestedInput
  }

  export type PitchCreateManyInput = {
    id?: number
    pptUrl?: string | null
    projectId: number
  }

  export type PitchUpdateManyMutationInput = {
    pptUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PitchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type PitchDialogCreateInput = {
    message: string
    createdAt?: Date | string
    aiOrUser: string
    pitch: PitchCreateNestedOneWithoutPitchDialogInput
    user: UserCreateNestedOneWithoutPitchDialogsInput
  }

  export type PitchDialogUncheckedCreateInput = {
    id?: number
    message: string
    createdAt?: Date | string
    pitchId: number
    userId: number
    aiOrUser: string
  }

  export type PitchDialogUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiOrUser?: StringFieldUpdateOperationsInput | string
    pitch?: PitchUpdateOneRequiredWithoutPitchDialogNestedInput
    user?: UserUpdateOneRequiredWithoutPitchDialogsNestedInput
  }

  export type PitchDialogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pitchId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    aiOrUser?: StringFieldUpdateOperationsInput | string
  }

  export type PitchDialogCreateManyInput = {
    id?: number
    message: string
    createdAt?: Date | string
    pitchId: number
    userId: number
    aiOrUser: string
  }

  export type PitchDialogUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiOrUser?: StringFieldUpdateOperationsInput | string
  }

  export type PitchDialogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pitchId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    aiOrUser?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type IdeaChatListRelationFilter = {
    every?: IdeaChatWhereInput
    some?: IdeaChatWhereInput
    none?: IdeaChatWhereInput
  }

  export type StepChatListRelationFilter = {
    every?: StepChatWhereInput
    some?: StepChatWhereInput
    none?: StepChatWhereInput
  }

  export type PitchDialogListRelationFilter = {
    every?: PitchDialogWhereInput
    some?: PitchDialogWhereInput
    none?: PitchDialogWhereInput
  }

  export type TeamListRelationFilter = {
    every?: TeamWhereInput
    some?: TeamWhereInput
    none?: TeamWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IdeaChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StepChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PitchDialogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    githubId?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    username?: SortOrder
    skills?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    githubId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    githubId?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    username?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    githubId?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    username?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    githubId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TeamNullableScalarRelationFilter = {
    is?: TeamWhereInput | null
    isNot?: TeamWhereInput | null
  }

  export type IdeaListRelationFilter = {
    every?: IdeaWhereInput
    some?: IdeaWhereInput
    none?: IdeaWhereInput
  }

  export type StepListRelationFilter = {
    every?: StepWhereInput
    some?: StepWhereInput
    none?: StepWhereInput
  }

  export type PitchListRelationFilter = {
    every?: PitchWhereInput
    some?: PitchWhereInput
    none?: PitchWhereInput
  }

  export type IdeaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PitchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    hackathonName?: SortOrder
    theme?: SortOrder
    suggestedTech?: SortOrder
    judgingCriteria?: SortOrder
    additionalData?: SortOrder
    submissionTime?: SortOrder
    actualTech?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    hackathonName?: SortOrder
    theme?: SortOrder
    suggestedTech?: SortOrder
    judgingCriteria?: SortOrder
    additionalData?: SortOrder
    submissionTime?: SortOrder
    actualTech?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    hackathonName?: SortOrder
    theme?: SortOrder
    suggestedTech?: SortOrder
    judgingCriteria?: SortOrder
    additionalData?: SortOrder
    submissionTime?: SortOrder
    actualTech?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type IdeaCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    isFinal?: SortOrder
    projectId?: SortOrder
  }

  export type IdeaAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type IdeaMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    isFinal?: SortOrder
    projectId?: SortOrder
  }

  export type IdeaMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    isFinal?: SortOrder
    projectId?: SortOrder
  }

  export type IdeaSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IdeaScalarRelationFilter = {
    is?: IdeaWhereInput
    isNot?: IdeaWhereInput
  }

  export type IdeaChatCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    ideaId?: SortOrder
    userId?: SortOrder
  }

  export type IdeaChatAvgOrderByAggregateInput = {
    id?: SortOrder
    ideaId?: SortOrder
    userId?: SortOrder
  }

  export type IdeaChatMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    ideaId?: SortOrder
    userId?: SortOrder
  }

  export type IdeaChatMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    ideaId?: SortOrder
    userId?: SortOrder
  }

  export type IdeaChatSumOrderByAggregateInput = {
    id?: SortOrder
    ideaId?: SortOrder
    userId?: SortOrder
  }

  export type StepCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    isDone?: SortOrder
    order?: SortOrder
    projectId?: SortOrder
  }

  export type StepAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    projectId?: SortOrder
  }

  export type StepMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    isDone?: SortOrder
    order?: SortOrder
    projectId?: SortOrder
  }

  export type StepMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    isDone?: SortOrder
    order?: SortOrder
    projectId?: SortOrder
  }

  export type StepSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    projectId?: SortOrder
  }

  export type StepScalarRelationFilter = {
    is?: StepWhereInput
    isNot?: StepWhereInput
  }

  export type StepChatCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    stepId?: SortOrder
    userId?: SortOrder
  }

  export type StepChatAvgOrderByAggregateInput = {
    id?: SortOrder
    stepId?: SortOrder
    userId?: SortOrder
  }

  export type StepChatMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    stepId?: SortOrder
    userId?: SortOrder
  }

  export type StepChatMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    stepId?: SortOrder
    userId?: SortOrder
  }

  export type StepChatSumOrderByAggregateInput = {
    id?: SortOrder
    stepId?: SortOrder
    userId?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TeamAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TeamSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PitchCountOrderByAggregateInput = {
    id?: SortOrder
    pptUrl?: SortOrder
    projectId?: SortOrder
  }

  export type PitchAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type PitchMaxOrderByAggregateInput = {
    id?: SortOrder
    pptUrl?: SortOrder
    projectId?: SortOrder
  }

  export type PitchMinOrderByAggregateInput = {
    id?: SortOrder
    pptUrl?: SortOrder
    projectId?: SortOrder
  }

  export type PitchSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type PitchScalarRelationFilter = {
    is?: PitchWhereInput
    isNot?: PitchWhereInput
  }

  export type PitchDialogCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    pitchId?: SortOrder
    userId?: SortOrder
    aiOrUser?: SortOrder
  }

  export type PitchDialogAvgOrderByAggregateInput = {
    id?: SortOrder
    pitchId?: SortOrder
    userId?: SortOrder
  }

  export type PitchDialogMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    pitchId?: SortOrder
    userId?: SortOrder
    aiOrUser?: SortOrder
  }

  export type PitchDialogMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    pitchId?: SortOrder
    userId?: SortOrder
    aiOrUser?: SortOrder
  }

  export type PitchDialogSumOrderByAggregateInput = {
    id?: SortOrder
    pitchId?: SortOrder
    userId?: SortOrder
  }

  export type UserCreateskillsInput = {
    set: string[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type IdeaChatCreateNestedManyWithoutUserInput = {
    create?: XOR<IdeaChatCreateWithoutUserInput, IdeaChatUncheckedCreateWithoutUserInput> | IdeaChatCreateWithoutUserInput[] | IdeaChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IdeaChatCreateOrConnectWithoutUserInput | IdeaChatCreateOrConnectWithoutUserInput[]
    createMany?: IdeaChatCreateManyUserInputEnvelope
    connect?: IdeaChatWhereUniqueInput | IdeaChatWhereUniqueInput[]
  }

  export type StepChatCreateNestedManyWithoutUserInput = {
    create?: XOR<StepChatCreateWithoutUserInput, StepChatUncheckedCreateWithoutUserInput> | StepChatCreateWithoutUserInput[] | StepChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StepChatCreateOrConnectWithoutUserInput | StepChatCreateOrConnectWithoutUserInput[]
    createMany?: StepChatCreateManyUserInputEnvelope
    connect?: StepChatWhereUniqueInput | StepChatWhereUniqueInput[]
  }

  export type PitchDialogCreateNestedManyWithoutUserInput = {
    create?: XOR<PitchDialogCreateWithoutUserInput, PitchDialogUncheckedCreateWithoutUserInput> | PitchDialogCreateWithoutUserInput[] | PitchDialogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PitchDialogCreateOrConnectWithoutUserInput | PitchDialogCreateOrConnectWithoutUserInput[]
    createMany?: PitchDialogCreateManyUserInputEnvelope
    connect?: PitchDialogWhereUniqueInput | PitchDialogWhereUniqueInput[]
  }

  export type TeamCreateNestedManyWithoutMembersInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput> | TeamCreateWithoutMembersInput[] | TeamUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput | TeamCreateOrConnectWithoutMembersInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type IdeaChatUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<IdeaChatCreateWithoutUserInput, IdeaChatUncheckedCreateWithoutUserInput> | IdeaChatCreateWithoutUserInput[] | IdeaChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IdeaChatCreateOrConnectWithoutUserInput | IdeaChatCreateOrConnectWithoutUserInput[]
    createMany?: IdeaChatCreateManyUserInputEnvelope
    connect?: IdeaChatWhereUniqueInput | IdeaChatWhereUniqueInput[]
  }

  export type StepChatUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StepChatCreateWithoutUserInput, StepChatUncheckedCreateWithoutUserInput> | StepChatCreateWithoutUserInput[] | StepChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StepChatCreateOrConnectWithoutUserInput | StepChatCreateOrConnectWithoutUserInput[]
    createMany?: StepChatCreateManyUserInputEnvelope
    connect?: StepChatWhereUniqueInput | StepChatWhereUniqueInput[]
  }

  export type PitchDialogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PitchDialogCreateWithoutUserInput, PitchDialogUncheckedCreateWithoutUserInput> | PitchDialogCreateWithoutUserInput[] | PitchDialogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PitchDialogCreateOrConnectWithoutUserInput | PitchDialogCreateOrConnectWithoutUserInput[]
    createMany?: PitchDialogCreateManyUserInputEnvelope
    connect?: PitchDialogWhereUniqueInput | PitchDialogWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutMembersInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput> | TeamCreateWithoutMembersInput[] | TeamUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput | TeamCreateOrConnectWithoutMembersInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type IdeaChatUpdateManyWithoutUserNestedInput = {
    create?: XOR<IdeaChatCreateWithoutUserInput, IdeaChatUncheckedCreateWithoutUserInput> | IdeaChatCreateWithoutUserInput[] | IdeaChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IdeaChatCreateOrConnectWithoutUserInput | IdeaChatCreateOrConnectWithoutUserInput[]
    upsert?: IdeaChatUpsertWithWhereUniqueWithoutUserInput | IdeaChatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IdeaChatCreateManyUserInputEnvelope
    set?: IdeaChatWhereUniqueInput | IdeaChatWhereUniqueInput[]
    disconnect?: IdeaChatWhereUniqueInput | IdeaChatWhereUniqueInput[]
    delete?: IdeaChatWhereUniqueInput | IdeaChatWhereUniqueInput[]
    connect?: IdeaChatWhereUniqueInput | IdeaChatWhereUniqueInput[]
    update?: IdeaChatUpdateWithWhereUniqueWithoutUserInput | IdeaChatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IdeaChatUpdateManyWithWhereWithoutUserInput | IdeaChatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IdeaChatScalarWhereInput | IdeaChatScalarWhereInput[]
  }

  export type StepChatUpdateManyWithoutUserNestedInput = {
    create?: XOR<StepChatCreateWithoutUserInput, StepChatUncheckedCreateWithoutUserInput> | StepChatCreateWithoutUserInput[] | StepChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StepChatCreateOrConnectWithoutUserInput | StepChatCreateOrConnectWithoutUserInput[]
    upsert?: StepChatUpsertWithWhereUniqueWithoutUserInput | StepChatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StepChatCreateManyUserInputEnvelope
    set?: StepChatWhereUniqueInput | StepChatWhereUniqueInput[]
    disconnect?: StepChatWhereUniqueInput | StepChatWhereUniqueInput[]
    delete?: StepChatWhereUniqueInput | StepChatWhereUniqueInput[]
    connect?: StepChatWhereUniqueInput | StepChatWhereUniqueInput[]
    update?: StepChatUpdateWithWhereUniqueWithoutUserInput | StepChatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StepChatUpdateManyWithWhereWithoutUserInput | StepChatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StepChatScalarWhereInput | StepChatScalarWhereInput[]
  }

  export type PitchDialogUpdateManyWithoutUserNestedInput = {
    create?: XOR<PitchDialogCreateWithoutUserInput, PitchDialogUncheckedCreateWithoutUserInput> | PitchDialogCreateWithoutUserInput[] | PitchDialogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PitchDialogCreateOrConnectWithoutUserInput | PitchDialogCreateOrConnectWithoutUserInput[]
    upsert?: PitchDialogUpsertWithWhereUniqueWithoutUserInput | PitchDialogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PitchDialogCreateManyUserInputEnvelope
    set?: PitchDialogWhereUniqueInput | PitchDialogWhereUniqueInput[]
    disconnect?: PitchDialogWhereUniqueInput | PitchDialogWhereUniqueInput[]
    delete?: PitchDialogWhereUniqueInput | PitchDialogWhereUniqueInput[]
    connect?: PitchDialogWhereUniqueInput | PitchDialogWhereUniqueInput[]
    update?: PitchDialogUpdateWithWhereUniqueWithoutUserInput | PitchDialogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PitchDialogUpdateManyWithWhereWithoutUserInput | PitchDialogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PitchDialogScalarWhereInput | PitchDialogScalarWhereInput[]
  }

  export type TeamUpdateManyWithoutMembersNestedInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput> | TeamCreateWithoutMembersInput[] | TeamUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput | TeamCreateOrConnectWithoutMembersInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutMembersInput | TeamUpsertWithWhereUniqueWithoutMembersInput[]
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutMembersInput | TeamUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutMembersInput | TeamUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type IdeaChatUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<IdeaChatCreateWithoutUserInput, IdeaChatUncheckedCreateWithoutUserInput> | IdeaChatCreateWithoutUserInput[] | IdeaChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IdeaChatCreateOrConnectWithoutUserInput | IdeaChatCreateOrConnectWithoutUserInput[]
    upsert?: IdeaChatUpsertWithWhereUniqueWithoutUserInput | IdeaChatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IdeaChatCreateManyUserInputEnvelope
    set?: IdeaChatWhereUniqueInput | IdeaChatWhereUniqueInput[]
    disconnect?: IdeaChatWhereUniqueInput | IdeaChatWhereUniqueInput[]
    delete?: IdeaChatWhereUniqueInput | IdeaChatWhereUniqueInput[]
    connect?: IdeaChatWhereUniqueInput | IdeaChatWhereUniqueInput[]
    update?: IdeaChatUpdateWithWhereUniqueWithoutUserInput | IdeaChatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IdeaChatUpdateManyWithWhereWithoutUserInput | IdeaChatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IdeaChatScalarWhereInput | IdeaChatScalarWhereInput[]
  }

  export type StepChatUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StepChatCreateWithoutUserInput, StepChatUncheckedCreateWithoutUserInput> | StepChatCreateWithoutUserInput[] | StepChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StepChatCreateOrConnectWithoutUserInput | StepChatCreateOrConnectWithoutUserInput[]
    upsert?: StepChatUpsertWithWhereUniqueWithoutUserInput | StepChatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StepChatCreateManyUserInputEnvelope
    set?: StepChatWhereUniqueInput | StepChatWhereUniqueInput[]
    disconnect?: StepChatWhereUniqueInput | StepChatWhereUniqueInput[]
    delete?: StepChatWhereUniqueInput | StepChatWhereUniqueInput[]
    connect?: StepChatWhereUniqueInput | StepChatWhereUniqueInput[]
    update?: StepChatUpdateWithWhereUniqueWithoutUserInput | StepChatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StepChatUpdateManyWithWhereWithoutUserInput | StepChatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StepChatScalarWhereInput | StepChatScalarWhereInput[]
  }

  export type PitchDialogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PitchDialogCreateWithoutUserInput, PitchDialogUncheckedCreateWithoutUserInput> | PitchDialogCreateWithoutUserInput[] | PitchDialogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PitchDialogCreateOrConnectWithoutUserInput | PitchDialogCreateOrConnectWithoutUserInput[]
    upsert?: PitchDialogUpsertWithWhereUniqueWithoutUserInput | PitchDialogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PitchDialogCreateManyUserInputEnvelope
    set?: PitchDialogWhereUniqueInput | PitchDialogWhereUniqueInput[]
    disconnect?: PitchDialogWhereUniqueInput | PitchDialogWhereUniqueInput[]
    delete?: PitchDialogWhereUniqueInput | PitchDialogWhereUniqueInput[]
    connect?: PitchDialogWhereUniqueInput | PitchDialogWhereUniqueInput[]
    update?: PitchDialogUpdateWithWhereUniqueWithoutUserInput | PitchDialogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PitchDialogUpdateManyWithWhereWithoutUserInput | PitchDialogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PitchDialogScalarWhereInput | PitchDialogScalarWhereInput[]
  }

  export type TeamUncheckedUpdateManyWithoutMembersNestedInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput> | TeamCreateWithoutMembersInput[] | TeamUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput | TeamCreateOrConnectWithoutMembersInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutMembersInput | TeamUpsertWithWhereUniqueWithoutMembersInput[]
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutMembersInput | TeamUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutMembersInput | TeamUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutProjectsInput = {
    create?: XOR<TeamCreateWithoutProjectsInput, TeamUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutProjectsInput
    connect?: TeamWhereUniqueInput
  }

  export type IdeaCreateNestedManyWithoutProjectInput = {
    create?: XOR<IdeaCreateWithoutProjectInput, IdeaUncheckedCreateWithoutProjectInput> | IdeaCreateWithoutProjectInput[] | IdeaUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: IdeaCreateOrConnectWithoutProjectInput | IdeaCreateOrConnectWithoutProjectInput[]
    createMany?: IdeaCreateManyProjectInputEnvelope
    connect?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
  }

  export type StepCreateNestedManyWithoutProjectInput = {
    create?: XOR<StepCreateWithoutProjectInput, StepUncheckedCreateWithoutProjectInput> | StepCreateWithoutProjectInput[] | StepUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: StepCreateOrConnectWithoutProjectInput | StepCreateOrConnectWithoutProjectInput[]
    createMany?: StepCreateManyProjectInputEnvelope
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
  }

  export type PitchCreateNestedManyWithoutProjectInput = {
    create?: XOR<PitchCreateWithoutProjectInput, PitchUncheckedCreateWithoutProjectInput> | PitchCreateWithoutProjectInput[] | PitchUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PitchCreateOrConnectWithoutProjectInput | PitchCreateOrConnectWithoutProjectInput[]
    createMany?: PitchCreateManyProjectInputEnvelope
    connect?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
  }

  export type IdeaUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<IdeaCreateWithoutProjectInput, IdeaUncheckedCreateWithoutProjectInput> | IdeaCreateWithoutProjectInput[] | IdeaUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: IdeaCreateOrConnectWithoutProjectInput | IdeaCreateOrConnectWithoutProjectInput[]
    createMany?: IdeaCreateManyProjectInputEnvelope
    connect?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
  }

  export type StepUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<StepCreateWithoutProjectInput, StepUncheckedCreateWithoutProjectInput> | StepCreateWithoutProjectInput[] | StepUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: StepCreateOrConnectWithoutProjectInput | StepCreateOrConnectWithoutProjectInput[]
    createMany?: StepCreateManyProjectInputEnvelope
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
  }

  export type PitchUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<PitchCreateWithoutProjectInput, PitchUncheckedCreateWithoutProjectInput> | PitchCreateWithoutProjectInput[] | PitchUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PitchCreateOrConnectWithoutProjectInput | PitchCreateOrConnectWithoutProjectInput[]
    createMany?: PitchCreateManyProjectInputEnvelope
    connect?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type TeamUpdateOneWithoutProjectsNestedInput = {
    create?: XOR<TeamCreateWithoutProjectsInput, TeamUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutProjectsInput
    upsert?: TeamUpsertWithoutProjectsInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutProjectsInput, TeamUpdateWithoutProjectsInput>, TeamUncheckedUpdateWithoutProjectsInput>
  }

  export type IdeaUpdateManyWithoutProjectNestedInput = {
    create?: XOR<IdeaCreateWithoutProjectInput, IdeaUncheckedCreateWithoutProjectInput> | IdeaCreateWithoutProjectInput[] | IdeaUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: IdeaCreateOrConnectWithoutProjectInput | IdeaCreateOrConnectWithoutProjectInput[]
    upsert?: IdeaUpsertWithWhereUniqueWithoutProjectInput | IdeaUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: IdeaCreateManyProjectInputEnvelope
    set?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    disconnect?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    delete?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    connect?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    update?: IdeaUpdateWithWhereUniqueWithoutProjectInput | IdeaUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: IdeaUpdateManyWithWhereWithoutProjectInput | IdeaUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: IdeaScalarWhereInput | IdeaScalarWhereInput[]
  }

  export type StepUpdateManyWithoutProjectNestedInput = {
    create?: XOR<StepCreateWithoutProjectInput, StepUncheckedCreateWithoutProjectInput> | StepCreateWithoutProjectInput[] | StepUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: StepCreateOrConnectWithoutProjectInput | StepCreateOrConnectWithoutProjectInput[]
    upsert?: StepUpsertWithWhereUniqueWithoutProjectInput | StepUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: StepCreateManyProjectInputEnvelope
    set?: StepWhereUniqueInput | StepWhereUniqueInput[]
    disconnect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    delete?: StepWhereUniqueInput | StepWhereUniqueInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    update?: StepUpdateWithWhereUniqueWithoutProjectInput | StepUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: StepUpdateManyWithWhereWithoutProjectInput | StepUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: StepScalarWhereInput | StepScalarWhereInput[]
  }

  export type PitchUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PitchCreateWithoutProjectInput, PitchUncheckedCreateWithoutProjectInput> | PitchCreateWithoutProjectInput[] | PitchUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PitchCreateOrConnectWithoutProjectInput | PitchCreateOrConnectWithoutProjectInput[]
    upsert?: PitchUpsertWithWhereUniqueWithoutProjectInput | PitchUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: PitchCreateManyProjectInputEnvelope
    set?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    disconnect?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    delete?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    connect?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    update?: PitchUpdateWithWhereUniqueWithoutProjectInput | PitchUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: PitchUpdateManyWithWhereWithoutProjectInput | PitchUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: PitchScalarWhereInput | PitchScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IdeaUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<IdeaCreateWithoutProjectInput, IdeaUncheckedCreateWithoutProjectInput> | IdeaCreateWithoutProjectInput[] | IdeaUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: IdeaCreateOrConnectWithoutProjectInput | IdeaCreateOrConnectWithoutProjectInput[]
    upsert?: IdeaUpsertWithWhereUniqueWithoutProjectInput | IdeaUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: IdeaCreateManyProjectInputEnvelope
    set?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    disconnect?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    delete?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    connect?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    update?: IdeaUpdateWithWhereUniqueWithoutProjectInput | IdeaUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: IdeaUpdateManyWithWhereWithoutProjectInput | IdeaUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: IdeaScalarWhereInput | IdeaScalarWhereInput[]
  }

  export type StepUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<StepCreateWithoutProjectInput, StepUncheckedCreateWithoutProjectInput> | StepCreateWithoutProjectInput[] | StepUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: StepCreateOrConnectWithoutProjectInput | StepCreateOrConnectWithoutProjectInput[]
    upsert?: StepUpsertWithWhereUniqueWithoutProjectInput | StepUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: StepCreateManyProjectInputEnvelope
    set?: StepWhereUniqueInput | StepWhereUniqueInput[]
    disconnect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    delete?: StepWhereUniqueInput | StepWhereUniqueInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    update?: StepUpdateWithWhereUniqueWithoutProjectInput | StepUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: StepUpdateManyWithWhereWithoutProjectInput | StepUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: StepScalarWhereInput | StepScalarWhereInput[]
  }

  export type PitchUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PitchCreateWithoutProjectInput, PitchUncheckedCreateWithoutProjectInput> | PitchCreateWithoutProjectInput[] | PitchUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PitchCreateOrConnectWithoutProjectInput | PitchCreateOrConnectWithoutProjectInput[]
    upsert?: PitchUpsertWithWhereUniqueWithoutProjectInput | PitchUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: PitchCreateManyProjectInputEnvelope
    set?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    disconnect?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    delete?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    connect?: PitchWhereUniqueInput | PitchWhereUniqueInput[]
    update?: PitchUpdateWithWhereUniqueWithoutProjectInput | PitchUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: PitchUpdateManyWithWhereWithoutProjectInput | PitchUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: PitchScalarWhereInput | PitchScalarWhereInput[]
  }

  export type IdeaChatCreateNestedManyWithoutIdeaInput = {
    create?: XOR<IdeaChatCreateWithoutIdeaInput, IdeaChatUncheckedCreateWithoutIdeaInput> | IdeaChatCreateWithoutIdeaInput[] | IdeaChatUncheckedCreateWithoutIdeaInput[]
    connectOrCreate?: IdeaChatCreateOrConnectWithoutIdeaInput | IdeaChatCreateOrConnectWithoutIdeaInput[]
    createMany?: IdeaChatCreateManyIdeaInputEnvelope
    connect?: IdeaChatWhereUniqueInput | IdeaChatWhereUniqueInput[]
  }

  export type ProjectCreateNestedOneWithoutIdeasInput = {
    create?: XOR<ProjectCreateWithoutIdeasInput, ProjectUncheckedCreateWithoutIdeasInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutIdeasInput
    connect?: ProjectWhereUniqueInput
  }

  export type IdeaChatUncheckedCreateNestedManyWithoutIdeaInput = {
    create?: XOR<IdeaChatCreateWithoutIdeaInput, IdeaChatUncheckedCreateWithoutIdeaInput> | IdeaChatCreateWithoutIdeaInput[] | IdeaChatUncheckedCreateWithoutIdeaInput[]
    connectOrCreate?: IdeaChatCreateOrConnectWithoutIdeaInput | IdeaChatCreateOrConnectWithoutIdeaInput[]
    createMany?: IdeaChatCreateManyIdeaInputEnvelope
    connect?: IdeaChatWhereUniqueInput | IdeaChatWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IdeaChatUpdateManyWithoutIdeaNestedInput = {
    create?: XOR<IdeaChatCreateWithoutIdeaInput, IdeaChatUncheckedCreateWithoutIdeaInput> | IdeaChatCreateWithoutIdeaInput[] | IdeaChatUncheckedCreateWithoutIdeaInput[]
    connectOrCreate?: IdeaChatCreateOrConnectWithoutIdeaInput | IdeaChatCreateOrConnectWithoutIdeaInput[]
    upsert?: IdeaChatUpsertWithWhereUniqueWithoutIdeaInput | IdeaChatUpsertWithWhereUniqueWithoutIdeaInput[]
    createMany?: IdeaChatCreateManyIdeaInputEnvelope
    set?: IdeaChatWhereUniqueInput | IdeaChatWhereUniqueInput[]
    disconnect?: IdeaChatWhereUniqueInput | IdeaChatWhereUniqueInput[]
    delete?: IdeaChatWhereUniqueInput | IdeaChatWhereUniqueInput[]
    connect?: IdeaChatWhereUniqueInput | IdeaChatWhereUniqueInput[]
    update?: IdeaChatUpdateWithWhereUniqueWithoutIdeaInput | IdeaChatUpdateWithWhereUniqueWithoutIdeaInput[]
    updateMany?: IdeaChatUpdateManyWithWhereWithoutIdeaInput | IdeaChatUpdateManyWithWhereWithoutIdeaInput[]
    deleteMany?: IdeaChatScalarWhereInput | IdeaChatScalarWhereInput[]
  }

  export type ProjectUpdateOneRequiredWithoutIdeasNestedInput = {
    create?: XOR<ProjectCreateWithoutIdeasInput, ProjectUncheckedCreateWithoutIdeasInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutIdeasInput
    upsert?: ProjectUpsertWithoutIdeasInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutIdeasInput, ProjectUpdateWithoutIdeasInput>, ProjectUncheckedUpdateWithoutIdeasInput>
  }

  export type IdeaChatUncheckedUpdateManyWithoutIdeaNestedInput = {
    create?: XOR<IdeaChatCreateWithoutIdeaInput, IdeaChatUncheckedCreateWithoutIdeaInput> | IdeaChatCreateWithoutIdeaInput[] | IdeaChatUncheckedCreateWithoutIdeaInput[]
    connectOrCreate?: IdeaChatCreateOrConnectWithoutIdeaInput | IdeaChatCreateOrConnectWithoutIdeaInput[]
    upsert?: IdeaChatUpsertWithWhereUniqueWithoutIdeaInput | IdeaChatUpsertWithWhereUniqueWithoutIdeaInput[]
    createMany?: IdeaChatCreateManyIdeaInputEnvelope
    set?: IdeaChatWhereUniqueInput | IdeaChatWhereUniqueInput[]
    disconnect?: IdeaChatWhereUniqueInput | IdeaChatWhereUniqueInput[]
    delete?: IdeaChatWhereUniqueInput | IdeaChatWhereUniqueInput[]
    connect?: IdeaChatWhereUniqueInput | IdeaChatWhereUniqueInput[]
    update?: IdeaChatUpdateWithWhereUniqueWithoutIdeaInput | IdeaChatUpdateWithWhereUniqueWithoutIdeaInput[]
    updateMany?: IdeaChatUpdateManyWithWhereWithoutIdeaInput | IdeaChatUpdateManyWithWhereWithoutIdeaInput[]
    deleteMany?: IdeaChatScalarWhereInput | IdeaChatScalarWhereInput[]
  }

  export type IdeaCreateNestedOneWithoutChatsInput = {
    create?: XOR<IdeaCreateWithoutChatsInput, IdeaUncheckedCreateWithoutChatsInput>
    connectOrCreate?: IdeaCreateOrConnectWithoutChatsInput
    connect?: IdeaWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutIdeaChatsInput = {
    create?: XOR<UserCreateWithoutIdeaChatsInput, UserUncheckedCreateWithoutIdeaChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIdeaChatsInput
    connect?: UserWhereUniqueInput
  }

  export type IdeaUpdateOneRequiredWithoutChatsNestedInput = {
    create?: XOR<IdeaCreateWithoutChatsInput, IdeaUncheckedCreateWithoutChatsInput>
    connectOrCreate?: IdeaCreateOrConnectWithoutChatsInput
    upsert?: IdeaUpsertWithoutChatsInput
    connect?: IdeaWhereUniqueInput
    update?: XOR<XOR<IdeaUpdateToOneWithWhereWithoutChatsInput, IdeaUpdateWithoutChatsInput>, IdeaUncheckedUpdateWithoutChatsInput>
  }

  export type UserUpdateOneRequiredWithoutIdeaChatsNestedInput = {
    create?: XOR<UserCreateWithoutIdeaChatsInput, UserUncheckedCreateWithoutIdeaChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIdeaChatsInput
    upsert?: UserUpsertWithoutIdeaChatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIdeaChatsInput, UserUpdateWithoutIdeaChatsInput>, UserUncheckedUpdateWithoutIdeaChatsInput>
  }

  export type ProjectCreateNestedOneWithoutStepsInput = {
    create?: XOR<ProjectCreateWithoutStepsInput, ProjectUncheckedCreateWithoutStepsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutStepsInput
    connect?: ProjectWhereUniqueInput
  }

  export type StepChatCreateNestedManyWithoutStepInput = {
    create?: XOR<StepChatCreateWithoutStepInput, StepChatUncheckedCreateWithoutStepInput> | StepChatCreateWithoutStepInput[] | StepChatUncheckedCreateWithoutStepInput[]
    connectOrCreate?: StepChatCreateOrConnectWithoutStepInput | StepChatCreateOrConnectWithoutStepInput[]
    createMany?: StepChatCreateManyStepInputEnvelope
    connect?: StepChatWhereUniqueInput | StepChatWhereUniqueInput[]
  }

  export type StepChatUncheckedCreateNestedManyWithoutStepInput = {
    create?: XOR<StepChatCreateWithoutStepInput, StepChatUncheckedCreateWithoutStepInput> | StepChatCreateWithoutStepInput[] | StepChatUncheckedCreateWithoutStepInput[]
    connectOrCreate?: StepChatCreateOrConnectWithoutStepInput | StepChatCreateOrConnectWithoutStepInput[]
    createMany?: StepChatCreateManyStepInputEnvelope
    connect?: StepChatWhereUniqueInput | StepChatWhereUniqueInput[]
  }

  export type ProjectUpdateOneRequiredWithoutStepsNestedInput = {
    create?: XOR<ProjectCreateWithoutStepsInput, ProjectUncheckedCreateWithoutStepsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutStepsInput
    upsert?: ProjectUpsertWithoutStepsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutStepsInput, ProjectUpdateWithoutStepsInput>, ProjectUncheckedUpdateWithoutStepsInput>
  }

  export type StepChatUpdateManyWithoutStepNestedInput = {
    create?: XOR<StepChatCreateWithoutStepInput, StepChatUncheckedCreateWithoutStepInput> | StepChatCreateWithoutStepInput[] | StepChatUncheckedCreateWithoutStepInput[]
    connectOrCreate?: StepChatCreateOrConnectWithoutStepInput | StepChatCreateOrConnectWithoutStepInput[]
    upsert?: StepChatUpsertWithWhereUniqueWithoutStepInput | StepChatUpsertWithWhereUniqueWithoutStepInput[]
    createMany?: StepChatCreateManyStepInputEnvelope
    set?: StepChatWhereUniqueInput | StepChatWhereUniqueInput[]
    disconnect?: StepChatWhereUniqueInput | StepChatWhereUniqueInput[]
    delete?: StepChatWhereUniqueInput | StepChatWhereUniqueInput[]
    connect?: StepChatWhereUniqueInput | StepChatWhereUniqueInput[]
    update?: StepChatUpdateWithWhereUniqueWithoutStepInput | StepChatUpdateWithWhereUniqueWithoutStepInput[]
    updateMany?: StepChatUpdateManyWithWhereWithoutStepInput | StepChatUpdateManyWithWhereWithoutStepInput[]
    deleteMany?: StepChatScalarWhereInput | StepChatScalarWhereInput[]
  }

  export type StepChatUncheckedUpdateManyWithoutStepNestedInput = {
    create?: XOR<StepChatCreateWithoutStepInput, StepChatUncheckedCreateWithoutStepInput> | StepChatCreateWithoutStepInput[] | StepChatUncheckedCreateWithoutStepInput[]
    connectOrCreate?: StepChatCreateOrConnectWithoutStepInput | StepChatCreateOrConnectWithoutStepInput[]
    upsert?: StepChatUpsertWithWhereUniqueWithoutStepInput | StepChatUpsertWithWhereUniqueWithoutStepInput[]
    createMany?: StepChatCreateManyStepInputEnvelope
    set?: StepChatWhereUniqueInput | StepChatWhereUniqueInput[]
    disconnect?: StepChatWhereUniqueInput | StepChatWhereUniqueInput[]
    delete?: StepChatWhereUniqueInput | StepChatWhereUniqueInput[]
    connect?: StepChatWhereUniqueInput | StepChatWhereUniqueInput[]
    update?: StepChatUpdateWithWhereUniqueWithoutStepInput | StepChatUpdateWithWhereUniqueWithoutStepInput[]
    updateMany?: StepChatUpdateManyWithWhereWithoutStepInput | StepChatUpdateManyWithWhereWithoutStepInput[]
    deleteMany?: StepChatScalarWhereInput | StepChatScalarWhereInput[]
  }

  export type StepCreateNestedOneWithoutChatsInput = {
    create?: XOR<StepCreateWithoutChatsInput, StepUncheckedCreateWithoutChatsInput>
    connectOrCreate?: StepCreateOrConnectWithoutChatsInput
    connect?: StepWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStepChatsInput = {
    create?: XOR<UserCreateWithoutStepChatsInput, UserUncheckedCreateWithoutStepChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStepChatsInput
    connect?: UserWhereUniqueInput
  }

  export type StepUpdateOneRequiredWithoutChatsNestedInput = {
    create?: XOR<StepCreateWithoutChatsInput, StepUncheckedCreateWithoutChatsInput>
    connectOrCreate?: StepCreateOrConnectWithoutChatsInput
    upsert?: StepUpsertWithoutChatsInput
    connect?: StepWhereUniqueInput
    update?: XOR<XOR<StepUpdateToOneWithWhereWithoutChatsInput, StepUpdateWithoutChatsInput>, StepUncheckedUpdateWithoutChatsInput>
  }

  export type UserUpdateOneRequiredWithoutStepChatsNestedInput = {
    create?: XOR<UserCreateWithoutStepChatsInput, UserUncheckedCreateWithoutStepChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStepChatsInput
    upsert?: UserUpsertWithoutStepChatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStepChatsInput, UserUpdateWithoutStepChatsInput>, UserUncheckedUpdateWithoutStepChatsInput>
  }

  export type UserCreateNestedManyWithoutTeamsInput = {
    create?: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput> | UserCreateWithoutTeamsInput[] | UserUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput | UserCreateOrConnectWithoutTeamsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutTeamInput = {
    create?: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput> | ProjectCreateWithoutTeamInput[] | ProjectUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamInput | ProjectCreateOrConnectWithoutTeamInput[]
    createMany?: ProjectCreateManyTeamInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTeamsInput = {
    create?: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput> | UserCreateWithoutTeamsInput[] | UserUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput | UserCreateOrConnectWithoutTeamsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput> | ProjectCreateWithoutTeamInput[] | ProjectUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamInput | ProjectCreateOrConnectWithoutTeamInput[]
    createMany?: ProjectCreateManyTeamInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput> | UserCreateWithoutTeamsInput[] | UserUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput | UserCreateOrConnectWithoutTeamsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTeamsInput | UserUpsertWithWhereUniqueWithoutTeamsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTeamsInput | UserUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTeamsInput | UserUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput> | ProjectCreateWithoutTeamInput[] | ProjectUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamInput | ProjectCreateOrConnectWithoutTeamInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutTeamInput | ProjectUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: ProjectCreateManyTeamInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutTeamInput | ProjectUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutTeamInput | ProjectUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput> | UserCreateWithoutTeamsInput[] | UserUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput | UserCreateOrConnectWithoutTeamsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTeamsInput | UserUpsertWithWhereUniqueWithoutTeamsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTeamsInput | UserUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTeamsInput | UserUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput> | ProjectCreateWithoutTeamInput[] | ProjectUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamInput | ProjectCreateOrConnectWithoutTeamInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutTeamInput | ProjectUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: ProjectCreateManyTeamInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutTeamInput | ProjectUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutTeamInput | ProjectUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type PitchDialogCreateNestedManyWithoutPitchInput = {
    create?: XOR<PitchDialogCreateWithoutPitchInput, PitchDialogUncheckedCreateWithoutPitchInput> | PitchDialogCreateWithoutPitchInput[] | PitchDialogUncheckedCreateWithoutPitchInput[]
    connectOrCreate?: PitchDialogCreateOrConnectWithoutPitchInput | PitchDialogCreateOrConnectWithoutPitchInput[]
    createMany?: PitchDialogCreateManyPitchInputEnvelope
    connect?: PitchDialogWhereUniqueInput | PitchDialogWhereUniqueInput[]
  }

  export type ProjectCreateNestedOneWithoutPitchInput = {
    create?: XOR<ProjectCreateWithoutPitchInput, ProjectUncheckedCreateWithoutPitchInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPitchInput
    connect?: ProjectWhereUniqueInput
  }

  export type PitchDialogUncheckedCreateNestedManyWithoutPitchInput = {
    create?: XOR<PitchDialogCreateWithoutPitchInput, PitchDialogUncheckedCreateWithoutPitchInput> | PitchDialogCreateWithoutPitchInput[] | PitchDialogUncheckedCreateWithoutPitchInput[]
    connectOrCreate?: PitchDialogCreateOrConnectWithoutPitchInput | PitchDialogCreateOrConnectWithoutPitchInput[]
    createMany?: PitchDialogCreateManyPitchInputEnvelope
    connect?: PitchDialogWhereUniqueInput | PitchDialogWhereUniqueInput[]
  }

  export type PitchDialogUpdateManyWithoutPitchNestedInput = {
    create?: XOR<PitchDialogCreateWithoutPitchInput, PitchDialogUncheckedCreateWithoutPitchInput> | PitchDialogCreateWithoutPitchInput[] | PitchDialogUncheckedCreateWithoutPitchInput[]
    connectOrCreate?: PitchDialogCreateOrConnectWithoutPitchInput | PitchDialogCreateOrConnectWithoutPitchInput[]
    upsert?: PitchDialogUpsertWithWhereUniqueWithoutPitchInput | PitchDialogUpsertWithWhereUniqueWithoutPitchInput[]
    createMany?: PitchDialogCreateManyPitchInputEnvelope
    set?: PitchDialogWhereUniqueInput | PitchDialogWhereUniqueInput[]
    disconnect?: PitchDialogWhereUniqueInput | PitchDialogWhereUniqueInput[]
    delete?: PitchDialogWhereUniqueInput | PitchDialogWhereUniqueInput[]
    connect?: PitchDialogWhereUniqueInput | PitchDialogWhereUniqueInput[]
    update?: PitchDialogUpdateWithWhereUniqueWithoutPitchInput | PitchDialogUpdateWithWhereUniqueWithoutPitchInput[]
    updateMany?: PitchDialogUpdateManyWithWhereWithoutPitchInput | PitchDialogUpdateManyWithWhereWithoutPitchInput[]
    deleteMany?: PitchDialogScalarWhereInput | PitchDialogScalarWhereInput[]
  }

  export type ProjectUpdateOneRequiredWithoutPitchNestedInput = {
    create?: XOR<ProjectCreateWithoutPitchInput, ProjectUncheckedCreateWithoutPitchInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPitchInput
    upsert?: ProjectUpsertWithoutPitchInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutPitchInput, ProjectUpdateWithoutPitchInput>, ProjectUncheckedUpdateWithoutPitchInput>
  }

  export type PitchDialogUncheckedUpdateManyWithoutPitchNestedInput = {
    create?: XOR<PitchDialogCreateWithoutPitchInput, PitchDialogUncheckedCreateWithoutPitchInput> | PitchDialogCreateWithoutPitchInput[] | PitchDialogUncheckedCreateWithoutPitchInput[]
    connectOrCreate?: PitchDialogCreateOrConnectWithoutPitchInput | PitchDialogCreateOrConnectWithoutPitchInput[]
    upsert?: PitchDialogUpsertWithWhereUniqueWithoutPitchInput | PitchDialogUpsertWithWhereUniqueWithoutPitchInput[]
    createMany?: PitchDialogCreateManyPitchInputEnvelope
    set?: PitchDialogWhereUniqueInput | PitchDialogWhereUniqueInput[]
    disconnect?: PitchDialogWhereUniqueInput | PitchDialogWhereUniqueInput[]
    delete?: PitchDialogWhereUniqueInput | PitchDialogWhereUniqueInput[]
    connect?: PitchDialogWhereUniqueInput | PitchDialogWhereUniqueInput[]
    update?: PitchDialogUpdateWithWhereUniqueWithoutPitchInput | PitchDialogUpdateWithWhereUniqueWithoutPitchInput[]
    updateMany?: PitchDialogUpdateManyWithWhereWithoutPitchInput | PitchDialogUpdateManyWithWhereWithoutPitchInput[]
    deleteMany?: PitchDialogScalarWhereInput | PitchDialogScalarWhereInput[]
  }

  export type PitchCreateNestedOneWithoutPitchDialogInput = {
    create?: XOR<PitchCreateWithoutPitchDialogInput, PitchUncheckedCreateWithoutPitchDialogInput>
    connectOrCreate?: PitchCreateOrConnectWithoutPitchDialogInput
    connect?: PitchWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPitchDialogsInput = {
    create?: XOR<UserCreateWithoutPitchDialogsInput, UserUncheckedCreateWithoutPitchDialogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPitchDialogsInput
    connect?: UserWhereUniqueInput
  }

  export type PitchUpdateOneRequiredWithoutPitchDialogNestedInput = {
    create?: XOR<PitchCreateWithoutPitchDialogInput, PitchUncheckedCreateWithoutPitchDialogInput>
    connectOrCreate?: PitchCreateOrConnectWithoutPitchDialogInput
    upsert?: PitchUpsertWithoutPitchDialogInput
    connect?: PitchWhereUniqueInput
    update?: XOR<XOR<PitchUpdateToOneWithWhereWithoutPitchDialogInput, PitchUpdateWithoutPitchDialogInput>, PitchUncheckedUpdateWithoutPitchDialogInput>
  }

  export type UserUpdateOneRequiredWithoutPitchDialogsNestedInput = {
    create?: XOR<UserCreateWithoutPitchDialogsInput, UserUncheckedCreateWithoutPitchDialogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPitchDialogsInput
    upsert?: UserUpsertWithoutPitchDialogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPitchDialogsInput, UserUpdateWithoutPitchDialogsInput>, UserUncheckedUpdateWithoutPitchDialogsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutUserInput = {
    hackathonName: string
    theme?: string | null
    suggestedTech?: string | null
    judgingCriteria?: string | null
    additionalData?: string | null
    submissionTime: Date | string
    actualTech?: string | null
    team?: TeamCreateNestedOneWithoutProjectsInput
    ideas?: IdeaCreateNestedManyWithoutProjectInput
    steps?: StepCreateNestedManyWithoutProjectInput
    pitch?: PitchCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: number
    hackathonName: string
    theme?: string | null
    suggestedTech?: string | null
    judgingCriteria?: string | null
    additionalData?: string | null
    submissionTime: Date | string
    actualTech?: string | null
    teamId?: number | null
    ideas?: IdeaUncheckedCreateNestedManyWithoutProjectInput
    steps?: StepUncheckedCreateNestedManyWithoutProjectInput
    pitch?: PitchUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type IdeaChatCreateWithoutUserInput = {
    message: string
    createdAt?: Date | string
    idea: IdeaCreateNestedOneWithoutChatsInput
  }

  export type IdeaChatUncheckedCreateWithoutUserInput = {
    id?: number
    message: string
    createdAt?: Date | string
    ideaId: number
  }

  export type IdeaChatCreateOrConnectWithoutUserInput = {
    where: IdeaChatWhereUniqueInput
    create: XOR<IdeaChatCreateWithoutUserInput, IdeaChatUncheckedCreateWithoutUserInput>
  }

  export type IdeaChatCreateManyUserInputEnvelope = {
    data: IdeaChatCreateManyUserInput | IdeaChatCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StepChatCreateWithoutUserInput = {
    message: string
    createdAt?: Date | string
    step: StepCreateNestedOneWithoutChatsInput
  }

  export type StepChatUncheckedCreateWithoutUserInput = {
    id?: number
    message: string
    createdAt?: Date | string
    stepId: number
  }

  export type StepChatCreateOrConnectWithoutUserInput = {
    where: StepChatWhereUniqueInput
    create: XOR<StepChatCreateWithoutUserInput, StepChatUncheckedCreateWithoutUserInput>
  }

  export type StepChatCreateManyUserInputEnvelope = {
    data: StepChatCreateManyUserInput | StepChatCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PitchDialogCreateWithoutUserInput = {
    message: string
    createdAt?: Date | string
    aiOrUser: string
    pitch: PitchCreateNestedOneWithoutPitchDialogInput
  }

  export type PitchDialogUncheckedCreateWithoutUserInput = {
    id?: number
    message: string
    createdAt?: Date | string
    pitchId: number
    aiOrUser: string
  }

  export type PitchDialogCreateOrConnectWithoutUserInput = {
    where: PitchDialogWhereUniqueInput
    create: XOR<PitchDialogCreateWithoutUserInput, PitchDialogUncheckedCreateWithoutUserInput>
  }

  export type PitchDialogCreateManyUserInputEnvelope = {
    data: PitchDialogCreateManyUserInput | PitchDialogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TeamCreateWithoutMembersInput = {
    name: string
    projects?: ProjectCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutMembersInput = {
    id?: number
    name: string
    projects?: ProjectUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutMembersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: IntFilter<"Session"> | number
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: IntFilter<"Project"> | number
    hackathonName?: StringFilter<"Project"> | string
    theme?: StringNullableFilter<"Project"> | string | null
    suggestedTech?: StringNullableFilter<"Project"> | string | null
    judgingCriteria?: StringNullableFilter<"Project"> | string | null
    additionalData?: StringNullableFilter<"Project"> | string | null
    submissionTime?: DateTimeFilter<"Project"> | Date | string
    actualTech?: StringNullableFilter<"Project"> | string | null
    userId?: IntFilter<"Project"> | number
    teamId?: IntNullableFilter<"Project"> | number | null
  }

  export type IdeaChatUpsertWithWhereUniqueWithoutUserInput = {
    where: IdeaChatWhereUniqueInput
    update: XOR<IdeaChatUpdateWithoutUserInput, IdeaChatUncheckedUpdateWithoutUserInput>
    create: XOR<IdeaChatCreateWithoutUserInput, IdeaChatUncheckedCreateWithoutUserInput>
  }

  export type IdeaChatUpdateWithWhereUniqueWithoutUserInput = {
    where: IdeaChatWhereUniqueInput
    data: XOR<IdeaChatUpdateWithoutUserInput, IdeaChatUncheckedUpdateWithoutUserInput>
  }

  export type IdeaChatUpdateManyWithWhereWithoutUserInput = {
    where: IdeaChatScalarWhereInput
    data: XOR<IdeaChatUpdateManyMutationInput, IdeaChatUncheckedUpdateManyWithoutUserInput>
  }

  export type IdeaChatScalarWhereInput = {
    AND?: IdeaChatScalarWhereInput | IdeaChatScalarWhereInput[]
    OR?: IdeaChatScalarWhereInput[]
    NOT?: IdeaChatScalarWhereInput | IdeaChatScalarWhereInput[]
    id?: IntFilter<"IdeaChat"> | number
    message?: StringFilter<"IdeaChat"> | string
    createdAt?: DateTimeFilter<"IdeaChat"> | Date | string
    ideaId?: IntFilter<"IdeaChat"> | number
    userId?: IntFilter<"IdeaChat"> | number
  }

  export type StepChatUpsertWithWhereUniqueWithoutUserInput = {
    where: StepChatWhereUniqueInput
    update: XOR<StepChatUpdateWithoutUserInput, StepChatUncheckedUpdateWithoutUserInput>
    create: XOR<StepChatCreateWithoutUserInput, StepChatUncheckedCreateWithoutUserInput>
  }

  export type StepChatUpdateWithWhereUniqueWithoutUserInput = {
    where: StepChatWhereUniqueInput
    data: XOR<StepChatUpdateWithoutUserInput, StepChatUncheckedUpdateWithoutUserInput>
  }

  export type StepChatUpdateManyWithWhereWithoutUserInput = {
    where: StepChatScalarWhereInput
    data: XOR<StepChatUpdateManyMutationInput, StepChatUncheckedUpdateManyWithoutUserInput>
  }

  export type StepChatScalarWhereInput = {
    AND?: StepChatScalarWhereInput | StepChatScalarWhereInput[]
    OR?: StepChatScalarWhereInput[]
    NOT?: StepChatScalarWhereInput | StepChatScalarWhereInput[]
    id?: IntFilter<"StepChat"> | number
    message?: StringFilter<"StepChat"> | string
    createdAt?: DateTimeFilter<"StepChat"> | Date | string
    stepId?: IntFilter<"StepChat"> | number
    userId?: IntFilter<"StepChat"> | number
  }

  export type PitchDialogUpsertWithWhereUniqueWithoutUserInput = {
    where: PitchDialogWhereUniqueInput
    update: XOR<PitchDialogUpdateWithoutUserInput, PitchDialogUncheckedUpdateWithoutUserInput>
    create: XOR<PitchDialogCreateWithoutUserInput, PitchDialogUncheckedCreateWithoutUserInput>
  }

  export type PitchDialogUpdateWithWhereUniqueWithoutUserInput = {
    where: PitchDialogWhereUniqueInput
    data: XOR<PitchDialogUpdateWithoutUserInput, PitchDialogUncheckedUpdateWithoutUserInput>
  }

  export type PitchDialogUpdateManyWithWhereWithoutUserInput = {
    where: PitchDialogScalarWhereInput
    data: XOR<PitchDialogUpdateManyMutationInput, PitchDialogUncheckedUpdateManyWithoutUserInput>
  }

  export type PitchDialogScalarWhereInput = {
    AND?: PitchDialogScalarWhereInput | PitchDialogScalarWhereInput[]
    OR?: PitchDialogScalarWhereInput[]
    NOT?: PitchDialogScalarWhereInput | PitchDialogScalarWhereInput[]
    id?: IntFilter<"PitchDialog"> | number
    message?: StringFilter<"PitchDialog"> | string
    createdAt?: DateTimeFilter<"PitchDialog"> | Date | string
    pitchId?: IntFilter<"PitchDialog"> | number
    userId?: IntFilter<"PitchDialog"> | number
    aiOrUser?: StringFilter<"PitchDialog"> | string
  }

  export type TeamUpsertWithWhereUniqueWithoutMembersInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutMembersInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type TeamUpdateManyWithWhereWithoutMembersInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutMembersInput>
  }

  export type TeamScalarWhereInput = {
    AND?: TeamScalarWhereInput | TeamScalarWhereInput[]
    OR?: TeamScalarWhereInput[]
    NOT?: TeamScalarWhereInput | TeamScalarWhereInput[]
    id?: IntFilter<"Team"> | number
    name?: StringFilter<"Team"> | string
  }

  export type UserCreateWithoutSessionsInput = {
    githubId: number
    avatar?: string | null
    name?: string | null
    username: string
    skills?: UserCreateskillsInput | string[]
    projects?: ProjectCreateNestedManyWithoutUserInput
    ideaChats?: IdeaChatCreateNestedManyWithoutUserInput
    stepChats?: StepChatCreateNestedManyWithoutUserInput
    pitchDialogs?: PitchDialogCreateNestedManyWithoutUserInput
    teams?: TeamCreateNestedManyWithoutMembersInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: number
    githubId: number
    avatar?: string | null
    name?: string | null
    username: string
    skills?: UserCreateskillsInput | string[]
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    ideaChats?: IdeaChatUncheckedCreateNestedManyWithoutUserInput
    stepChats?: StepChatUncheckedCreateNestedManyWithoutUserInput
    pitchDialogs?: PitchDialogUncheckedCreateNestedManyWithoutUserInput
    teams?: TeamUncheckedCreateNestedManyWithoutMembersInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    githubId?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    skills?: UserUpdateskillsInput | string[]
    projects?: ProjectUpdateManyWithoutUserNestedInput
    ideaChats?: IdeaChatUpdateManyWithoutUserNestedInput
    stepChats?: StepChatUpdateManyWithoutUserNestedInput
    pitchDialogs?: PitchDialogUpdateManyWithoutUserNestedInput
    teams?: TeamUpdateManyWithoutMembersNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    githubId?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    skills?: UserUpdateskillsInput | string[]
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    ideaChats?: IdeaChatUncheckedUpdateManyWithoutUserNestedInput
    stepChats?: StepChatUncheckedUpdateManyWithoutUserNestedInput
    pitchDialogs?: PitchDialogUncheckedUpdateManyWithoutUserNestedInput
    teams?: TeamUncheckedUpdateManyWithoutMembersNestedInput
  }

  export type UserCreateWithoutProjectsInput = {
    githubId: number
    avatar?: string | null
    name?: string | null
    username: string
    skills?: UserCreateskillsInput | string[]
    sessions?: SessionCreateNestedManyWithoutUserInput
    ideaChats?: IdeaChatCreateNestedManyWithoutUserInput
    stepChats?: StepChatCreateNestedManyWithoutUserInput
    pitchDialogs?: PitchDialogCreateNestedManyWithoutUserInput
    teams?: TeamCreateNestedManyWithoutMembersInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: number
    githubId: number
    avatar?: string | null
    name?: string | null
    username: string
    skills?: UserCreateskillsInput | string[]
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    ideaChats?: IdeaChatUncheckedCreateNestedManyWithoutUserInput
    stepChats?: StepChatUncheckedCreateNestedManyWithoutUserInput
    pitchDialogs?: PitchDialogUncheckedCreateNestedManyWithoutUserInput
    teams?: TeamUncheckedCreateNestedManyWithoutMembersInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type TeamCreateWithoutProjectsInput = {
    name: string
    members?: UserCreateNestedManyWithoutTeamsInput
  }

  export type TeamUncheckedCreateWithoutProjectsInput = {
    id?: number
    name: string
    members?: UserUncheckedCreateNestedManyWithoutTeamsInput
  }

  export type TeamCreateOrConnectWithoutProjectsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutProjectsInput, TeamUncheckedCreateWithoutProjectsInput>
  }

  export type IdeaCreateWithoutProjectInput = {
    title: string
    description: string
    content: string
    isFinal?: boolean
    chats?: IdeaChatCreateNestedManyWithoutIdeaInput
  }

  export type IdeaUncheckedCreateWithoutProjectInput = {
    id?: number
    title: string
    description: string
    content: string
    isFinal?: boolean
    chats?: IdeaChatUncheckedCreateNestedManyWithoutIdeaInput
  }

  export type IdeaCreateOrConnectWithoutProjectInput = {
    where: IdeaWhereUniqueInput
    create: XOR<IdeaCreateWithoutProjectInput, IdeaUncheckedCreateWithoutProjectInput>
  }

  export type IdeaCreateManyProjectInputEnvelope = {
    data: IdeaCreateManyProjectInput | IdeaCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type StepCreateWithoutProjectInput = {
    content: string
    isDone?: boolean
    order?: number | null
    chats?: StepChatCreateNestedManyWithoutStepInput
  }

  export type StepUncheckedCreateWithoutProjectInput = {
    id?: number
    content: string
    isDone?: boolean
    order?: number | null
    chats?: StepChatUncheckedCreateNestedManyWithoutStepInput
  }

  export type StepCreateOrConnectWithoutProjectInput = {
    where: StepWhereUniqueInput
    create: XOR<StepCreateWithoutProjectInput, StepUncheckedCreateWithoutProjectInput>
  }

  export type StepCreateManyProjectInputEnvelope = {
    data: StepCreateManyProjectInput | StepCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type PitchCreateWithoutProjectInput = {
    pptUrl?: string | null
    PitchDialog?: PitchDialogCreateNestedManyWithoutPitchInput
  }

  export type PitchUncheckedCreateWithoutProjectInput = {
    id?: number
    pptUrl?: string | null
    PitchDialog?: PitchDialogUncheckedCreateNestedManyWithoutPitchInput
  }

  export type PitchCreateOrConnectWithoutProjectInput = {
    where: PitchWhereUniqueInput
    create: XOR<PitchCreateWithoutProjectInput, PitchUncheckedCreateWithoutProjectInput>
  }

  export type PitchCreateManyProjectInputEnvelope = {
    data: PitchCreateManyProjectInput | PitchCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    githubId?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    skills?: UserUpdateskillsInput | string[]
    sessions?: SessionUpdateManyWithoutUserNestedInput
    ideaChats?: IdeaChatUpdateManyWithoutUserNestedInput
    stepChats?: StepChatUpdateManyWithoutUserNestedInput
    pitchDialogs?: PitchDialogUpdateManyWithoutUserNestedInput
    teams?: TeamUpdateManyWithoutMembersNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    githubId?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    skills?: UserUpdateskillsInput | string[]
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    ideaChats?: IdeaChatUncheckedUpdateManyWithoutUserNestedInput
    stepChats?: StepChatUncheckedUpdateManyWithoutUserNestedInput
    pitchDialogs?: PitchDialogUncheckedUpdateManyWithoutUserNestedInput
    teams?: TeamUncheckedUpdateManyWithoutMembersNestedInput
  }

  export type TeamUpsertWithoutProjectsInput = {
    update: XOR<TeamUpdateWithoutProjectsInput, TeamUncheckedUpdateWithoutProjectsInput>
    create: XOR<TeamCreateWithoutProjectsInput, TeamUncheckedCreateWithoutProjectsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutProjectsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutProjectsInput, TeamUncheckedUpdateWithoutProjectsInput>
  }

  export type TeamUpdateWithoutProjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    members?: UserUpdateManyWithoutTeamsNestedInput
  }

  export type TeamUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    members?: UserUncheckedUpdateManyWithoutTeamsNestedInput
  }

  export type IdeaUpsertWithWhereUniqueWithoutProjectInput = {
    where: IdeaWhereUniqueInput
    update: XOR<IdeaUpdateWithoutProjectInput, IdeaUncheckedUpdateWithoutProjectInput>
    create: XOR<IdeaCreateWithoutProjectInput, IdeaUncheckedCreateWithoutProjectInput>
  }

  export type IdeaUpdateWithWhereUniqueWithoutProjectInput = {
    where: IdeaWhereUniqueInput
    data: XOR<IdeaUpdateWithoutProjectInput, IdeaUncheckedUpdateWithoutProjectInput>
  }

  export type IdeaUpdateManyWithWhereWithoutProjectInput = {
    where: IdeaScalarWhereInput
    data: XOR<IdeaUpdateManyMutationInput, IdeaUncheckedUpdateManyWithoutProjectInput>
  }

  export type IdeaScalarWhereInput = {
    AND?: IdeaScalarWhereInput | IdeaScalarWhereInput[]
    OR?: IdeaScalarWhereInput[]
    NOT?: IdeaScalarWhereInput | IdeaScalarWhereInput[]
    id?: IntFilter<"Idea"> | number
    title?: StringFilter<"Idea"> | string
    description?: StringFilter<"Idea"> | string
    content?: StringFilter<"Idea"> | string
    isFinal?: BoolFilter<"Idea"> | boolean
    projectId?: IntFilter<"Idea"> | number
  }

  export type StepUpsertWithWhereUniqueWithoutProjectInput = {
    where: StepWhereUniqueInput
    update: XOR<StepUpdateWithoutProjectInput, StepUncheckedUpdateWithoutProjectInput>
    create: XOR<StepCreateWithoutProjectInput, StepUncheckedCreateWithoutProjectInput>
  }

  export type StepUpdateWithWhereUniqueWithoutProjectInput = {
    where: StepWhereUniqueInput
    data: XOR<StepUpdateWithoutProjectInput, StepUncheckedUpdateWithoutProjectInput>
  }

  export type StepUpdateManyWithWhereWithoutProjectInput = {
    where: StepScalarWhereInput
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyWithoutProjectInput>
  }

  export type StepScalarWhereInput = {
    AND?: StepScalarWhereInput | StepScalarWhereInput[]
    OR?: StepScalarWhereInput[]
    NOT?: StepScalarWhereInput | StepScalarWhereInput[]
    id?: IntFilter<"Step"> | number
    content?: StringFilter<"Step"> | string
    isDone?: BoolFilter<"Step"> | boolean
    order?: IntNullableFilter<"Step"> | number | null
    projectId?: IntFilter<"Step"> | number
  }

  export type PitchUpsertWithWhereUniqueWithoutProjectInput = {
    where: PitchWhereUniqueInput
    update: XOR<PitchUpdateWithoutProjectInput, PitchUncheckedUpdateWithoutProjectInput>
    create: XOR<PitchCreateWithoutProjectInput, PitchUncheckedCreateWithoutProjectInput>
  }

  export type PitchUpdateWithWhereUniqueWithoutProjectInput = {
    where: PitchWhereUniqueInput
    data: XOR<PitchUpdateWithoutProjectInput, PitchUncheckedUpdateWithoutProjectInput>
  }

  export type PitchUpdateManyWithWhereWithoutProjectInput = {
    where: PitchScalarWhereInput
    data: XOR<PitchUpdateManyMutationInput, PitchUncheckedUpdateManyWithoutProjectInput>
  }

  export type PitchScalarWhereInput = {
    AND?: PitchScalarWhereInput | PitchScalarWhereInput[]
    OR?: PitchScalarWhereInput[]
    NOT?: PitchScalarWhereInput | PitchScalarWhereInput[]
    id?: IntFilter<"Pitch"> | number
    pptUrl?: StringNullableFilter<"Pitch"> | string | null
    projectId?: IntFilter<"Pitch"> | number
  }

  export type IdeaChatCreateWithoutIdeaInput = {
    message: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutIdeaChatsInput
  }

  export type IdeaChatUncheckedCreateWithoutIdeaInput = {
    id?: number
    message: string
    createdAt?: Date | string
    userId: number
  }

  export type IdeaChatCreateOrConnectWithoutIdeaInput = {
    where: IdeaChatWhereUniqueInput
    create: XOR<IdeaChatCreateWithoutIdeaInput, IdeaChatUncheckedCreateWithoutIdeaInput>
  }

  export type IdeaChatCreateManyIdeaInputEnvelope = {
    data: IdeaChatCreateManyIdeaInput | IdeaChatCreateManyIdeaInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutIdeasInput = {
    hackathonName: string
    theme?: string | null
    suggestedTech?: string | null
    judgingCriteria?: string | null
    additionalData?: string | null
    submissionTime: Date | string
    actualTech?: string | null
    user: UserCreateNestedOneWithoutProjectsInput
    team?: TeamCreateNestedOneWithoutProjectsInput
    steps?: StepCreateNestedManyWithoutProjectInput
    pitch?: PitchCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutIdeasInput = {
    id?: number
    hackathonName: string
    theme?: string | null
    suggestedTech?: string | null
    judgingCriteria?: string | null
    additionalData?: string | null
    submissionTime: Date | string
    actualTech?: string | null
    userId: number
    teamId?: number | null
    steps?: StepUncheckedCreateNestedManyWithoutProjectInput
    pitch?: PitchUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutIdeasInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutIdeasInput, ProjectUncheckedCreateWithoutIdeasInput>
  }

  export type IdeaChatUpsertWithWhereUniqueWithoutIdeaInput = {
    where: IdeaChatWhereUniqueInput
    update: XOR<IdeaChatUpdateWithoutIdeaInput, IdeaChatUncheckedUpdateWithoutIdeaInput>
    create: XOR<IdeaChatCreateWithoutIdeaInput, IdeaChatUncheckedCreateWithoutIdeaInput>
  }

  export type IdeaChatUpdateWithWhereUniqueWithoutIdeaInput = {
    where: IdeaChatWhereUniqueInput
    data: XOR<IdeaChatUpdateWithoutIdeaInput, IdeaChatUncheckedUpdateWithoutIdeaInput>
  }

  export type IdeaChatUpdateManyWithWhereWithoutIdeaInput = {
    where: IdeaChatScalarWhereInput
    data: XOR<IdeaChatUpdateManyMutationInput, IdeaChatUncheckedUpdateManyWithoutIdeaInput>
  }

  export type ProjectUpsertWithoutIdeasInput = {
    update: XOR<ProjectUpdateWithoutIdeasInput, ProjectUncheckedUpdateWithoutIdeasInput>
    create: XOR<ProjectCreateWithoutIdeasInput, ProjectUncheckedCreateWithoutIdeasInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutIdeasInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutIdeasInput, ProjectUncheckedUpdateWithoutIdeasInput>
  }

  export type ProjectUpdateWithoutIdeasInput = {
    hackathonName?: StringFieldUpdateOperationsInput | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedTech?: NullableStringFieldUpdateOperationsInput | string | null
    judgingCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    additionalData?: NullableStringFieldUpdateOperationsInput | string | null
    submissionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualTech?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    team?: TeamUpdateOneWithoutProjectsNestedInput
    steps?: StepUpdateManyWithoutProjectNestedInput
    pitch?: PitchUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutIdeasInput = {
    id?: IntFieldUpdateOperationsInput | number
    hackathonName?: StringFieldUpdateOperationsInput | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedTech?: NullableStringFieldUpdateOperationsInput | string | null
    judgingCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    additionalData?: NullableStringFieldUpdateOperationsInput | string | null
    submissionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualTech?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    steps?: StepUncheckedUpdateManyWithoutProjectNestedInput
    pitch?: PitchUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type IdeaCreateWithoutChatsInput = {
    title: string
    description: string
    content: string
    isFinal?: boolean
    project: ProjectCreateNestedOneWithoutIdeasInput
  }

  export type IdeaUncheckedCreateWithoutChatsInput = {
    id?: number
    title: string
    description: string
    content: string
    isFinal?: boolean
    projectId: number
  }

  export type IdeaCreateOrConnectWithoutChatsInput = {
    where: IdeaWhereUniqueInput
    create: XOR<IdeaCreateWithoutChatsInput, IdeaUncheckedCreateWithoutChatsInput>
  }

  export type UserCreateWithoutIdeaChatsInput = {
    githubId: number
    avatar?: string | null
    name?: string | null
    username: string
    skills?: UserCreateskillsInput | string[]
    sessions?: SessionCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    stepChats?: StepChatCreateNestedManyWithoutUserInput
    pitchDialogs?: PitchDialogCreateNestedManyWithoutUserInput
    teams?: TeamCreateNestedManyWithoutMembersInput
  }

  export type UserUncheckedCreateWithoutIdeaChatsInput = {
    id?: number
    githubId: number
    avatar?: string | null
    name?: string | null
    username: string
    skills?: UserCreateskillsInput | string[]
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    stepChats?: StepChatUncheckedCreateNestedManyWithoutUserInput
    pitchDialogs?: PitchDialogUncheckedCreateNestedManyWithoutUserInput
    teams?: TeamUncheckedCreateNestedManyWithoutMembersInput
  }

  export type UserCreateOrConnectWithoutIdeaChatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIdeaChatsInput, UserUncheckedCreateWithoutIdeaChatsInput>
  }

  export type IdeaUpsertWithoutChatsInput = {
    update: XOR<IdeaUpdateWithoutChatsInput, IdeaUncheckedUpdateWithoutChatsInput>
    create: XOR<IdeaCreateWithoutChatsInput, IdeaUncheckedCreateWithoutChatsInput>
    where?: IdeaWhereInput
  }

  export type IdeaUpdateToOneWithWhereWithoutChatsInput = {
    where?: IdeaWhereInput
    data: XOR<IdeaUpdateWithoutChatsInput, IdeaUncheckedUpdateWithoutChatsInput>
  }

  export type IdeaUpdateWithoutChatsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isFinal?: BoolFieldUpdateOperationsInput | boolean
    project?: ProjectUpdateOneRequiredWithoutIdeasNestedInput
  }

  export type IdeaUncheckedUpdateWithoutChatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isFinal?: BoolFieldUpdateOperationsInput | boolean
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutIdeaChatsInput = {
    update: XOR<UserUpdateWithoutIdeaChatsInput, UserUncheckedUpdateWithoutIdeaChatsInput>
    create: XOR<UserCreateWithoutIdeaChatsInput, UserUncheckedCreateWithoutIdeaChatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIdeaChatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIdeaChatsInput, UserUncheckedUpdateWithoutIdeaChatsInput>
  }

  export type UserUpdateWithoutIdeaChatsInput = {
    githubId?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    skills?: UserUpdateskillsInput | string[]
    sessions?: SessionUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    stepChats?: StepChatUpdateManyWithoutUserNestedInput
    pitchDialogs?: PitchDialogUpdateManyWithoutUserNestedInput
    teams?: TeamUpdateManyWithoutMembersNestedInput
  }

  export type UserUncheckedUpdateWithoutIdeaChatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    githubId?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    skills?: UserUpdateskillsInput | string[]
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    stepChats?: StepChatUncheckedUpdateManyWithoutUserNestedInput
    pitchDialogs?: PitchDialogUncheckedUpdateManyWithoutUserNestedInput
    teams?: TeamUncheckedUpdateManyWithoutMembersNestedInput
  }

  export type ProjectCreateWithoutStepsInput = {
    hackathonName: string
    theme?: string | null
    suggestedTech?: string | null
    judgingCriteria?: string | null
    additionalData?: string | null
    submissionTime: Date | string
    actualTech?: string | null
    user: UserCreateNestedOneWithoutProjectsInput
    team?: TeamCreateNestedOneWithoutProjectsInput
    ideas?: IdeaCreateNestedManyWithoutProjectInput
    pitch?: PitchCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutStepsInput = {
    id?: number
    hackathonName: string
    theme?: string | null
    suggestedTech?: string | null
    judgingCriteria?: string | null
    additionalData?: string | null
    submissionTime: Date | string
    actualTech?: string | null
    userId: number
    teamId?: number | null
    ideas?: IdeaUncheckedCreateNestedManyWithoutProjectInput
    pitch?: PitchUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutStepsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutStepsInput, ProjectUncheckedCreateWithoutStepsInput>
  }

  export type StepChatCreateWithoutStepInput = {
    message: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutStepChatsInput
  }

  export type StepChatUncheckedCreateWithoutStepInput = {
    id?: number
    message: string
    createdAt?: Date | string
    userId: number
  }

  export type StepChatCreateOrConnectWithoutStepInput = {
    where: StepChatWhereUniqueInput
    create: XOR<StepChatCreateWithoutStepInput, StepChatUncheckedCreateWithoutStepInput>
  }

  export type StepChatCreateManyStepInputEnvelope = {
    data: StepChatCreateManyStepInput | StepChatCreateManyStepInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutStepsInput = {
    update: XOR<ProjectUpdateWithoutStepsInput, ProjectUncheckedUpdateWithoutStepsInput>
    create: XOR<ProjectCreateWithoutStepsInput, ProjectUncheckedCreateWithoutStepsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutStepsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutStepsInput, ProjectUncheckedUpdateWithoutStepsInput>
  }

  export type ProjectUpdateWithoutStepsInput = {
    hackathonName?: StringFieldUpdateOperationsInput | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedTech?: NullableStringFieldUpdateOperationsInput | string | null
    judgingCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    additionalData?: NullableStringFieldUpdateOperationsInput | string | null
    submissionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualTech?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    team?: TeamUpdateOneWithoutProjectsNestedInput
    ideas?: IdeaUpdateManyWithoutProjectNestedInput
    pitch?: PitchUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutStepsInput = {
    id?: IntFieldUpdateOperationsInput | number
    hackathonName?: StringFieldUpdateOperationsInput | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedTech?: NullableStringFieldUpdateOperationsInput | string | null
    judgingCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    additionalData?: NullableStringFieldUpdateOperationsInput | string | null
    submissionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualTech?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    ideas?: IdeaUncheckedUpdateManyWithoutProjectNestedInput
    pitch?: PitchUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type StepChatUpsertWithWhereUniqueWithoutStepInput = {
    where: StepChatWhereUniqueInput
    update: XOR<StepChatUpdateWithoutStepInput, StepChatUncheckedUpdateWithoutStepInput>
    create: XOR<StepChatCreateWithoutStepInput, StepChatUncheckedCreateWithoutStepInput>
  }

  export type StepChatUpdateWithWhereUniqueWithoutStepInput = {
    where: StepChatWhereUniqueInput
    data: XOR<StepChatUpdateWithoutStepInput, StepChatUncheckedUpdateWithoutStepInput>
  }

  export type StepChatUpdateManyWithWhereWithoutStepInput = {
    where: StepChatScalarWhereInput
    data: XOR<StepChatUpdateManyMutationInput, StepChatUncheckedUpdateManyWithoutStepInput>
  }

  export type StepCreateWithoutChatsInput = {
    content: string
    isDone?: boolean
    order?: number | null
    project: ProjectCreateNestedOneWithoutStepsInput
  }

  export type StepUncheckedCreateWithoutChatsInput = {
    id?: number
    content: string
    isDone?: boolean
    order?: number | null
    projectId: number
  }

  export type StepCreateOrConnectWithoutChatsInput = {
    where: StepWhereUniqueInput
    create: XOR<StepCreateWithoutChatsInput, StepUncheckedCreateWithoutChatsInput>
  }

  export type UserCreateWithoutStepChatsInput = {
    githubId: number
    avatar?: string | null
    name?: string | null
    username: string
    skills?: UserCreateskillsInput | string[]
    sessions?: SessionCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    ideaChats?: IdeaChatCreateNestedManyWithoutUserInput
    pitchDialogs?: PitchDialogCreateNestedManyWithoutUserInput
    teams?: TeamCreateNestedManyWithoutMembersInput
  }

  export type UserUncheckedCreateWithoutStepChatsInput = {
    id?: number
    githubId: number
    avatar?: string | null
    name?: string | null
    username: string
    skills?: UserCreateskillsInput | string[]
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    ideaChats?: IdeaChatUncheckedCreateNestedManyWithoutUserInput
    pitchDialogs?: PitchDialogUncheckedCreateNestedManyWithoutUserInput
    teams?: TeamUncheckedCreateNestedManyWithoutMembersInput
  }

  export type UserCreateOrConnectWithoutStepChatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStepChatsInput, UserUncheckedCreateWithoutStepChatsInput>
  }

  export type StepUpsertWithoutChatsInput = {
    update: XOR<StepUpdateWithoutChatsInput, StepUncheckedUpdateWithoutChatsInput>
    create: XOR<StepCreateWithoutChatsInput, StepUncheckedCreateWithoutChatsInput>
    where?: StepWhereInput
  }

  export type StepUpdateToOneWithWhereWithoutChatsInput = {
    where?: StepWhereInput
    data: XOR<StepUpdateWithoutChatsInput, StepUncheckedUpdateWithoutChatsInput>
  }

  export type StepUpdateWithoutChatsInput = {
    content?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    order?: NullableIntFieldUpdateOperationsInput | number | null
    project?: ProjectUpdateOneRequiredWithoutStepsNestedInput
  }

  export type StepUncheckedUpdateWithoutChatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    order?: NullableIntFieldUpdateOperationsInput | number | null
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutStepChatsInput = {
    update: XOR<UserUpdateWithoutStepChatsInput, UserUncheckedUpdateWithoutStepChatsInput>
    create: XOR<UserCreateWithoutStepChatsInput, UserUncheckedCreateWithoutStepChatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStepChatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStepChatsInput, UserUncheckedUpdateWithoutStepChatsInput>
  }

  export type UserUpdateWithoutStepChatsInput = {
    githubId?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    skills?: UserUpdateskillsInput | string[]
    sessions?: SessionUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    ideaChats?: IdeaChatUpdateManyWithoutUserNestedInput
    pitchDialogs?: PitchDialogUpdateManyWithoutUserNestedInput
    teams?: TeamUpdateManyWithoutMembersNestedInput
  }

  export type UserUncheckedUpdateWithoutStepChatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    githubId?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    skills?: UserUpdateskillsInput | string[]
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    ideaChats?: IdeaChatUncheckedUpdateManyWithoutUserNestedInput
    pitchDialogs?: PitchDialogUncheckedUpdateManyWithoutUserNestedInput
    teams?: TeamUncheckedUpdateManyWithoutMembersNestedInput
  }

  export type UserCreateWithoutTeamsInput = {
    githubId: number
    avatar?: string | null
    name?: string | null
    username: string
    skills?: UserCreateskillsInput | string[]
    sessions?: SessionCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    ideaChats?: IdeaChatCreateNestedManyWithoutUserInput
    stepChats?: StepChatCreateNestedManyWithoutUserInput
    pitchDialogs?: PitchDialogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeamsInput = {
    id?: number
    githubId: number
    avatar?: string | null
    name?: string | null
    username: string
    skills?: UserCreateskillsInput | string[]
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    ideaChats?: IdeaChatUncheckedCreateNestedManyWithoutUserInput
    stepChats?: StepChatUncheckedCreateNestedManyWithoutUserInput
    pitchDialogs?: PitchDialogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeamsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
  }

  export type ProjectCreateWithoutTeamInput = {
    hackathonName: string
    theme?: string | null
    suggestedTech?: string | null
    judgingCriteria?: string | null
    additionalData?: string | null
    submissionTime: Date | string
    actualTech?: string | null
    user: UserCreateNestedOneWithoutProjectsInput
    ideas?: IdeaCreateNestedManyWithoutProjectInput
    steps?: StepCreateNestedManyWithoutProjectInput
    pitch?: PitchCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTeamInput = {
    id?: number
    hackathonName: string
    theme?: string | null
    suggestedTech?: string | null
    judgingCriteria?: string | null
    additionalData?: string | null
    submissionTime: Date | string
    actualTech?: string | null
    userId: number
    ideas?: IdeaUncheckedCreateNestedManyWithoutProjectInput
    steps?: StepUncheckedCreateNestedManyWithoutProjectInput
    pitch?: PitchUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTeamInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput>
  }

  export type ProjectCreateManyTeamInputEnvelope = {
    data: ProjectCreateManyTeamInput | ProjectCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutTeamsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTeamsInput, UserUncheckedUpdateWithoutTeamsInput>
    create: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTeamsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTeamsInput, UserUncheckedUpdateWithoutTeamsInput>
  }

  export type UserUpdateManyWithWhereWithoutTeamsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTeamsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    githubId?: IntFilter<"User"> | number
    avatar?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    username?: StringFilter<"User"> | string
    skills?: StringNullableListFilter<"User">
  }

  export type ProjectUpsertWithWhereUniqueWithoutTeamInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutTeamInput, ProjectUncheckedUpdateWithoutTeamInput>
    create: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutTeamInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutTeamInput, ProjectUncheckedUpdateWithoutTeamInput>
  }

  export type ProjectUpdateManyWithWhereWithoutTeamInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutTeamInput>
  }

  export type PitchDialogCreateWithoutPitchInput = {
    message: string
    createdAt?: Date | string
    aiOrUser: string
    user: UserCreateNestedOneWithoutPitchDialogsInput
  }

  export type PitchDialogUncheckedCreateWithoutPitchInput = {
    id?: number
    message: string
    createdAt?: Date | string
    userId: number
    aiOrUser: string
  }

  export type PitchDialogCreateOrConnectWithoutPitchInput = {
    where: PitchDialogWhereUniqueInput
    create: XOR<PitchDialogCreateWithoutPitchInput, PitchDialogUncheckedCreateWithoutPitchInput>
  }

  export type PitchDialogCreateManyPitchInputEnvelope = {
    data: PitchDialogCreateManyPitchInput | PitchDialogCreateManyPitchInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutPitchInput = {
    hackathonName: string
    theme?: string | null
    suggestedTech?: string | null
    judgingCriteria?: string | null
    additionalData?: string | null
    submissionTime: Date | string
    actualTech?: string | null
    user: UserCreateNestedOneWithoutProjectsInput
    team?: TeamCreateNestedOneWithoutProjectsInput
    ideas?: IdeaCreateNestedManyWithoutProjectInput
    steps?: StepCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutPitchInput = {
    id?: number
    hackathonName: string
    theme?: string | null
    suggestedTech?: string | null
    judgingCriteria?: string | null
    additionalData?: string | null
    submissionTime: Date | string
    actualTech?: string | null
    userId: number
    teamId?: number | null
    ideas?: IdeaUncheckedCreateNestedManyWithoutProjectInput
    steps?: StepUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutPitchInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutPitchInput, ProjectUncheckedCreateWithoutPitchInput>
  }

  export type PitchDialogUpsertWithWhereUniqueWithoutPitchInput = {
    where: PitchDialogWhereUniqueInput
    update: XOR<PitchDialogUpdateWithoutPitchInput, PitchDialogUncheckedUpdateWithoutPitchInput>
    create: XOR<PitchDialogCreateWithoutPitchInput, PitchDialogUncheckedCreateWithoutPitchInput>
  }

  export type PitchDialogUpdateWithWhereUniqueWithoutPitchInput = {
    where: PitchDialogWhereUniqueInput
    data: XOR<PitchDialogUpdateWithoutPitchInput, PitchDialogUncheckedUpdateWithoutPitchInput>
  }

  export type PitchDialogUpdateManyWithWhereWithoutPitchInput = {
    where: PitchDialogScalarWhereInput
    data: XOR<PitchDialogUpdateManyMutationInput, PitchDialogUncheckedUpdateManyWithoutPitchInput>
  }

  export type ProjectUpsertWithoutPitchInput = {
    update: XOR<ProjectUpdateWithoutPitchInput, ProjectUncheckedUpdateWithoutPitchInput>
    create: XOR<ProjectCreateWithoutPitchInput, ProjectUncheckedCreateWithoutPitchInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutPitchInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutPitchInput, ProjectUncheckedUpdateWithoutPitchInput>
  }

  export type ProjectUpdateWithoutPitchInput = {
    hackathonName?: StringFieldUpdateOperationsInput | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedTech?: NullableStringFieldUpdateOperationsInput | string | null
    judgingCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    additionalData?: NullableStringFieldUpdateOperationsInput | string | null
    submissionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualTech?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    team?: TeamUpdateOneWithoutProjectsNestedInput
    ideas?: IdeaUpdateManyWithoutProjectNestedInput
    steps?: StepUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutPitchInput = {
    id?: IntFieldUpdateOperationsInput | number
    hackathonName?: StringFieldUpdateOperationsInput | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedTech?: NullableStringFieldUpdateOperationsInput | string | null
    judgingCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    additionalData?: NullableStringFieldUpdateOperationsInput | string | null
    submissionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualTech?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    ideas?: IdeaUncheckedUpdateManyWithoutProjectNestedInput
    steps?: StepUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type PitchCreateWithoutPitchDialogInput = {
    pptUrl?: string | null
    project: ProjectCreateNestedOneWithoutPitchInput
  }

  export type PitchUncheckedCreateWithoutPitchDialogInput = {
    id?: number
    pptUrl?: string | null
    projectId: number
  }

  export type PitchCreateOrConnectWithoutPitchDialogInput = {
    where: PitchWhereUniqueInput
    create: XOR<PitchCreateWithoutPitchDialogInput, PitchUncheckedCreateWithoutPitchDialogInput>
  }

  export type UserCreateWithoutPitchDialogsInput = {
    githubId: number
    avatar?: string | null
    name?: string | null
    username: string
    skills?: UserCreateskillsInput | string[]
    sessions?: SessionCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    ideaChats?: IdeaChatCreateNestedManyWithoutUserInput
    stepChats?: StepChatCreateNestedManyWithoutUserInput
    teams?: TeamCreateNestedManyWithoutMembersInput
  }

  export type UserUncheckedCreateWithoutPitchDialogsInput = {
    id?: number
    githubId: number
    avatar?: string | null
    name?: string | null
    username: string
    skills?: UserCreateskillsInput | string[]
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    ideaChats?: IdeaChatUncheckedCreateNestedManyWithoutUserInput
    stepChats?: StepChatUncheckedCreateNestedManyWithoutUserInput
    teams?: TeamUncheckedCreateNestedManyWithoutMembersInput
  }

  export type UserCreateOrConnectWithoutPitchDialogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPitchDialogsInput, UserUncheckedCreateWithoutPitchDialogsInput>
  }

  export type PitchUpsertWithoutPitchDialogInput = {
    update: XOR<PitchUpdateWithoutPitchDialogInput, PitchUncheckedUpdateWithoutPitchDialogInput>
    create: XOR<PitchCreateWithoutPitchDialogInput, PitchUncheckedCreateWithoutPitchDialogInput>
    where?: PitchWhereInput
  }

  export type PitchUpdateToOneWithWhereWithoutPitchDialogInput = {
    where?: PitchWhereInput
    data: XOR<PitchUpdateWithoutPitchDialogInput, PitchUncheckedUpdateWithoutPitchDialogInput>
  }

  export type PitchUpdateWithoutPitchDialogInput = {
    pptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUpdateOneRequiredWithoutPitchNestedInput
  }

  export type PitchUncheckedUpdateWithoutPitchDialogInput = {
    id?: IntFieldUpdateOperationsInput | number
    pptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutPitchDialogsInput = {
    update: XOR<UserUpdateWithoutPitchDialogsInput, UserUncheckedUpdateWithoutPitchDialogsInput>
    create: XOR<UserCreateWithoutPitchDialogsInput, UserUncheckedCreateWithoutPitchDialogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPitchDialogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPitchDialogsInput, UserUncheckedUpdateWithoutPitchDialogsInput>
  }

  export type UserUpdateWithoutPitchDialogsInput = {
    githubId?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    skills?: UserUpdateskillsInput | string[]
    sessions?: SessionUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    ideaChats?: IdeaChatUpdateManyWithoutUserNestedInput
    stepChats?: StepChatUpdateManyWithoutUserNestedInput
    teams?: TeamUpdateManyWithoutMembersNestedInput
  }

  export type UserUncheckedUpdateWithoutPitchDialogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    githubId?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    skills?: UserUpdateskillsInput | string[]
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    ideaChats?: IdeaChatUncheckedUpdateManyWithoutUserNestedInput
    stepChats?: StepChatUncheckedUpdateManyWithoutUserNestedInput
    teams?: TeamUncheckedUpdateManyWithoutMembersNestedInput
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
  }

  export type ProjectCreateManyUserInput = {
    id?: number
    hackathonName: string
    theme?: string | null
    suggestedTech?: string | null
    judgingCriteria?: string | null
    additionalData?: string | null
    submissionTime: Date | string
    actualTech?: string | null
    teamId?: number | null
  }

  export type IdeaChatCreateManyUserInput = {
    id?: number
    message: string
    createdAt?: Date | string
    ideaId: number
  }

  export type StepChatCreateManyUserInput = {
    id?: number
    message: string
    createdAt?: Date | string
    stepId: number
  }

  export type PitchDialogCreateManyUserInput = {
    id?: number
    message: string
    createdAt?: Date | string
    pitchId: number
    aiOrUser: string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutUserInput = {
    hackathonName?: StringFieldUpdateOperationsInput | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedTech?: NullableStringFieldUpdateOperationsInput | string | null
    judgingCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    additionalData?: NullableStringFieldUpdateOperationsInput | string | null
    submissionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualTech?: NullableStringFieldUpdateOperationsInput | string | null
    team?: TeamUpdateOneWithoutProjectsNestedInput
    ideas?: IdeaUpdateManyWithoutProjectNestedInput
    steps?: StepUpdateManyWithoutProjectNestedInput
    pitch?: PitchUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    hackathonName?: StringFieldUpdateOperationsInput | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedTech?: NullableStringFieldUpdateOperationsInput | string | null
    judgingCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    additionalData?: NullableStringFieldUpdateOperationsInput | string | null
    submissionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualTech?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
    ideas?: IdeaUncheckedUpdateManyWithoutProjectNestedInput
    steps?: StepUncheckedUpdateManyWithoutProjectNestedInput
    pitch?: PitchUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    hackathonName?: StringFieldUpdateOperationsInput | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedTech?: NullableStringFieldUpdateOperationsInput | string | null
    judgingCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    additionalData?: NullableStringFieldUpdateOperationsInput | string | null
    submissionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualTech?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IdeaChatUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idea?: IdeaUpdateOneRequiredWithoutChatsNestedInput
  }

  export type IdeaChatUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ideaId?: IntFieldUpdateOperationsInput | number
  }

  export type IdeaChatUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ideaId?: IntFieldUpdateOperationsInput | number
  }

  export type StepChatUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    step?: StepUpdateOneRequiredWithoutChatsNestedInput
  }

  export type StepChatUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stepId?: IntFieldUpdateOperationsInput | number
  }

  export type StepChatUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stepId?: IntFieldUpdateOperationsInput | number
  }

  export type PitchDialogUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiOrUser?: StringFieldUpdateOperationsInput | string
    pitch?: PitchUpdateOneRequiredWithoutPitchDialogNestedInput
  }

  export type PitchDialogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pitchId?: IntFieldUpdateOperationsInput | number
    aiOrUser?: StringFieldUpdateOperationsInput | string
  }

  export type PitchDialogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pitchId?: IntFieldUpdateOperationsInput | number
    aiOrUser?: StringFieldUpdateOperationsInput | string
  }

  export type TeamUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IdeaCreateManyProjectInput = {
    id?: number
    title: string
    description: string
    content: string
    isFinal?: boolean
  }

  export type StepCreateManyProjectInput = {
    id?: number
    content: string
    isDone?: boolean
    order?: number | null
  }

  export type PitchCreateManyProjectInput = {
    id?: number
    pptUrl?: string | null
  }

  export type IdeaUpdateWithoutProjectInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isFinal?: BoolFieldUpdateOperationsInput | boolean
    chats?: IdeaChatUpdateManyWithoutIdeaNestedInput
  }

  export type IdeaUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isFinal?: BoolFieldUpdateOperationsInput | boolean
    chats?: IdeaChatUncheckedUpdateManyWithoutIdeaNestedInput
  }

  export type IdeaUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isFinal?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StepUpdateWithoutProjectInput = {
    content?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    order?: NullableIntFieldUpdateOperationsInput | number | null
    chats?: StepChatUpdateManyWithoutStepNestedInput
  }

  export type StepUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    order?: NullableIntFieldUpdateOperationsInput | number | null
    chats?: StepChatUncheckedUpdateManyWithoutStepNestedInput
  }

  export type StepUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PitchUpdateWithoutProjectInput = {
    pptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    PitchDialog?: PitchDialogUpdateManyWithoutPitchNestedInput
  }

  export type PitchUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    pptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    PitchDialog?: PitchDialogUncheckedUpdateManyWithoutPitchNestedInput
  }

  export type PitchUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    pptUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IdeaChatCreateManyIdeaInput = {
    id?: number
    message: string
    createdAt?: Date | string
    userId: number
  }

  export type IdeaChatUpdateWithoutIdeaInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutIdeaChatsNestedInput
  }

  export type IdeaChatUncheckedUpdateWithoutIdeaInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IdeaChatUncheckedUpdateManyWithoutIdeaInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type StepChatCreateManyStepInput = {
    id?: number
    message: string
    createdAt?: Date | string
    userId: number
  }

  export type StepChatUpdateWithoutStepInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStepChatsNestedInput
  }

  export type StepChatUncheckedUpdateWithoutStepInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type StepChatUncheckedUpdateManyWithoutStepInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectCreateManyTeamInput = {
    id?: number
    hackathonName: string
    theme?: string | null
    suggestedTech?: string | null
    judgingCriteria?: string | null
    additionalData?: string | null
    submissionTime: Date | string
    actualTech?: string | null
    userId: number
  }

  export type UserUpdateWithoutTeamsInput = {
    githubId?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    skills?: UserUpdateskillsInput | string[]
    sessions?: SessionUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    ideaChats?: IdeaChatUpdateManyWithoutUserNestedInput
    stepChats?: StepChatUpdateManyWithoutUserNestedInput
    pitchDialogs?: PitchDialogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    githubId?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    skills?: UserUpdateskillsInput | string[]
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    ideaChats?: IdeaChatUncheckedUpdateManyWithoutUserNestedInput
    stepChats?: StepChatUncheckedUpdateManyWithoutUserNestedInput
    pitchDialogs?: PitchDialogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTeamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    githubId?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    skills?: UserUpdateskillsInput | string[]
  }

  export type ProjectUpdateWithoutTeamInput = {
    hackathonName?: StringFieldUpdateOperationsInput | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedTech?: NullableStringFieldUpdateOperationsInput | string | null
    judgingCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    additionalData?: NullableStringFieldUpdateOperationsInput | string | null
    submissionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualTech?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    ideas?: IdeaUpdateManyWithoutProjectNestedInput
    steps?: StepUpdateManyWithoutProjectNestedInput
    pitch?: PitchUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    hackathonName?: StringFieldUpdateOperationsInput | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedTech?: NullableStringFieldUpdateOperationsInput | string | null
    judgingCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    additionalData?: NullableStringFieldUpdateOperationsInput | string | null
    submissionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualTech?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    ideas?: IdeaUncheckedUpdateManyWithoutProjectNestedInput
    steps?: StepUncheckedUpdateManyWithoutProjectNestedInput
    pitch?: PitchUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    hackathonName?: StringFieldUpdateOperationsInput | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedTech?: NullableStringFieldUpdateOperationsInput | string | null
    judgingCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    additionalData?: NullableStringFieldUpdateOperationsInput | string | null
    submissionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualTech?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PitchDialogCreateManyPitchInput = {
    id?: number
    message: string
    createdAt?: Date | string
    userId: number
    aiOrUser: string
  }

  export type PitchDialogUpdateWithoutPitchInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiOrUser?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPitchDialogsNestedInput
  }

  export type PitchDialogUncheckedUpdateWithoutPitchInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    aiOrUser?: StringFieldUpdateOperationsInput | string
  }

  export type PitchDialogUncheckedUpdateManyWithoutPitchInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    aiOrUser?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}