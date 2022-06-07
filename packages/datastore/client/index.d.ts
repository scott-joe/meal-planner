
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Meal
 * 
 */
export type Meal = {
  id: string
  user: string
  planId: string | null
}

/**
 * Model plan_meals
 * 
 */
export type plan_meals = {
  id: string
  plan_id: string
  meal_id: string
}

/**
 * Model Plan
 * 
 */
export type Plan = {
  id: string
  user: string
}

/**
 * Model Recipe
 * 
 */
export type Recipe = {
  id: string
  ingredients: string
  steps: string
  name: string | null
  user: string
  mealId: string | null
}

/**
 * Model User
 * 
 */
export type User = {
  id: string
  username: string | null
  email: string | null
  firstName: string | null
  lastName: string | null
  created: Date
  updated: Date
  lastActive: Date
  enabled: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Meals
 * const meals = await prisma.meal.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Meals
   * const meals = await prisma.meal.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.meal`: Exposes CRUD operations for the **Meal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meals
    * const meals = await prisma.meal.findMany()
    * ```
    */
  get meal(): Prisma.MealDelegate<GlobalReject>;

  /**
   * `prisma.plan_meals`: Exposes CRUD operations for the **plan_meals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plan_meals
    * const plan_meals = await prisma.plan_meals.findMany()
    * ```
    */
  get plan_meals(): Prisma.plan_mealsDelegate<GlobalReject>;

  /**
   * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plan.findMany()
    * ```
    */
  get plan(): Prisma.PlanDelegate<GlobalReject>;

  /**
   * `prisma.recipe`: Exposes CRUD operations for the **Recipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipe.findMany()
    * ```
    */
  get recipe(): Prisma.RecipeDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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

  /**
   * Prisma Client JS version: 3.14.0
   * Query Engine version: 2b0c12756921c891fec4f68d9444e18c7d5d4a6a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Meal: 'Meal',
    plan_meals: 'plan_meals',
    Plan: 'Plan',
    Recipe: 'Recipe',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MealCountOutputType
   */


  export type MealCountOutputType = {
    recipes: number
  }

  export type MealCountOutputTypeSelect = {
    recipes?: boolean
  }

  export type MealCountOutputTypeGetPayload<
    S extends boolean | null | undefined | MealCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? MealCountOutputType
    : S extends undefined
    ? never
    : S extends MealCountOutputTypeArgs
    ?'include' extends U
    ? MealCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof MealCountOutputType ? MealCountOutputType[P] : never
  } 
    : MealCountOutputType
  : MealCountOutputType




  // Custom InputTypes

  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the MealCountOutputType
     * 
    **/
    select?: MealCountOutputTypeSelect | null
  }



  /**
   * Count Type PlanCountOutputType
   */


  export type PlanCountOutputType = {
    meals: number
  }

  export type PlanCountOutputTypeSelect = {
    meals?: boolean
  }

  export type PlanCountOutputTypeGetPayload<
    S extends boolean | null | undefined | PlanCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? PlanCountOutputType
    : S extends undefined
    ? never
    : S extends PlanCountOutputTypeArgs
    ?'include' extends U
    ? PlanCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof PlanCountOutputType ? PlanCountOutputType[P] : never
  } 
    : PlanCountOutputType
  : PlanCountOutputType




  // Custom InputTypes

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PlanCountOutputType
     * 
    **/
    select?: PlanCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Meal
   */


  export type AggregateMeal = {
    _count: MealCountAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  export type MealMinAggregateOutputType = {
    id: string | null
    user: string | null
    planId: string | null
  }

  export type MealMaxAggregateOutputType = {
    id: string | null
    user: string | null
    planId: string | null
  }

  export type MealCountAggregateOutputType = {
    id: number
    user: number
    planId: number
    _all: number
  }


  export type MealMinAggregateInputType = {
    id?: true
    user?: true
    planId?: true
  }

  export type MealMaxAggregateInputType = {
    id?: true
    user?: true
    planId?: true
  }

  export type MealCountAggregateInputType = {
    id?: true
    user?: true
    planId?: true
    _all?: true
  }

  export type MealAggregateArgs = {
    /**
     * Filter which Meal to aggregate.
     * 
    **/
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     * 
    **/
    orderBy?: Enumerable<MealOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meals
    **/
    _count?: true | MealCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealMaxAggregateInputType
  }

  export type GetMealAggregateType<T extends MealAggregateArgs> = {
        [P in keyof T & keyof AggregateMeal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeal[P]>
      : GetScalarType<T[P], AggregateMeal[P]>
  }




  export type MealGroupByArgs = {
    where?: MealWhereInput
    orderBy?: Enumerable<MealOrderByWithAggregationInput>
    by: Array<MealScalarFieldEnum>
    having?: MealScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealCountAggregateInputType | true
    _min?: MealMinAggregateInputType
    _max?: MealMaxAggregateInputType
  }


  export type MealGroupByOutputType = {
    id: string
    user: string
    planId: string | null
    _count: MealCountAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  type GetMealGroupByPayload<T extends MealGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MealGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealGroupByOutputType[P]>
            : GetScalarType<T[P], MealGroupByOutputType[P]>
        }
      >
    >


  export type MealSelect = {
    id?: boolean
    recipes?: boolean | RecipeFindManyArgs
    user?: boolean
    Plan?: boolean | PlanArgs
    planId?: boolean
    _count?: boolean | MealCountOutputTypeArgs
  }

  export type MealInclude = {
    recipes?: boolean | RecipeFindManyArgs
    Plan?: boolean | PlanArgs
    _count?: boolean | MealCountOutputTypeArgs
  }

  export type MealGetPayload<
    S extends boolean | null | undefined | MealArgs,
    U = keyof S
      > = S extends true
        ? Meal
    : S extends undefined
    ? never
    : S extends MealArgs | MealFindManyArgs
    ?'include' extends U
    ? Meal  & {
    [P in TrueKeys<S['include']>]:
        P extends 'recipes' ? Array < RecipeGetPayload<S['include'][P]>>  :
        P extends 'Plan' ? PlanGetPayload<S['include'][P]> | null :
        P extends '_count' ? MealCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'recipes' ? Array < RecipeGetPayload<S['select'][P]>>  :
        P extends 'Plan' ? PlanGetPayload<S['select'][P]> | null :
        P extends '_count' ? MealCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Meal ? Meal[P] : never
  } 
    : Meal
  : Meal


  type MealCountArgs = Merge<
    Omit<MealFindManyArgs, 'select' | 'include'> & {
      select?: MealCountAggregateInputType | true
    }
  >

  export interface MealDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Meal that matches the filter.
     * @param {MealFindUniqueArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MealFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MealFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Meal'> extends True ? CheckSelect<T, Prisma__MealClient<Meal>, Prisma__MealClient<MealGetPayload<T>>> : CheckSelect<T, Prisma__MealClient<Meal | null >, Prisma__MealClient<MealGetPayload<T> | null >>

    /**
     * Find the first Meal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MealFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MealFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Meal'> extends True ? CheckSelect<T, Prisma__MealClient<Meal>, Prisma__MealClient<MealGetPayload<T>>> : CheckSelect<T, Prisma__MealClient<Meal | null >, Prisma__MealClient<MealGetPayload<T> | null >>

    /**
     * Find zero or more Meals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meals
     * const meals = await prisma.meal.findMany()
     * 
     * // Get first 10 Meals
     * const meals = await prisma.meal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealWithIdOnly = await prisma.meal.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MealFindManyArgs>(
      args?: SelectSubset<T, MealFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Meal>>, PrismaPromise<Array<MealGetPayload<T>>>>

    /**
     * Create a Meal.
     * @param {MealCreateArgs} args - Arguments to create a Meal.
     * @example
     * // Create one Meal
     * const Meal = await prisma.meal.create({
     *   data: {
     *     // ... data to create a Meal
     *   }
     * })
     * 
    **/
    create<T extends MealCreateArgs>(
      args: SelectSubset<T, MealCreateArgs>
    ): CheckSelect<T, Prisma__MealClient<Meal>, Prisma__MealClient<MealGetPayload<T>>>

    /**
     * Delete a Meal.
     * @param {MealDeleteArgs} args - Arguments to delete one Meal.
     * @example
     * // Delete one Meal
     * const Meal = await prisma.meal.delete({
     *   where: {
     *     // ... filter to delete one Meal
     *   }
     * })
     * 
    **/
    delete<T extends MealDeleteArgs>(
      args: SelectSubset<T, MealDeleteArgs>
    ): CheckSelect<T, Prisma__MealClient<Meal>, Prisma__MealClient<MealGetPayload<T>>>

    /**
     * Update one Meal.
     * @param {MealUpdateArgs} args - Arguments to update one Meal.
     * @example
     * // Update one Meal
     * const meal = await prisma.meal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MealUpdateArgs>(
      args: SelectSubset<T, MealUpdateArgs>
    ): CheckSelect<T, Prisma__MealClient<Meal>, Prisma__MealClient<MealGetPayload<T>>>

    /**
     * Delete zero or more Meals.
     * @param {MealDeleteManyArgs} args - Arguments to filter Meals to delete.
     * @example
     * // Delete a few Meals
     * const { count } = await prisma.meal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MealDeleteManyArgs>(
      args?: SelectSubset<T, MealDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MealUpdateManyArgs>(
      args: SelectSubset<T, MealUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Meal.
     * @param {MealUpsertArgs} args - Arguments to update or create a Meal.
     * @example
     * // Update or create a Meal
     * const meal = await prisma.meal.upsert({
     *   create: {
     *     // ... data to create a Meal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meal we want to update
     *   }
     * })
    **/
    upsert<T extends MealUpsertArgs>(
      args: SelectSubset<T, MealUpsertArgs>
    ): CheckSelect<T, Prisma__MealClient<Meal>, Prisma__MealClient<MealGetPayload<T>>>

    /**
     * Count the number of Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealCountArgs} args - Arguments to filter Meals to count.
     * @example
     * // Count the number of Meals
     * const count = await prisma.meal.count({
     *   where: {
     *     // ... the filter for the Meals we want to count
     *   }
     * })
    **/
    count<T extends MealCountArgs>(
      args?: Subset<T, MealCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MealAggregateArgs>(args: Subset<T, MealAggregateArgs>): PrismaPromise<GetMealAggregateType<T>>

    /**
     * Group by Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealGroupByArgs} args - Group by arguments.
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
      T extends MealGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealGroupByArgs['orderBy'] }
        : { orderBy?: MealGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MealGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MealClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    recipes<T extends RecipeFindManyArgs = {}>(args?: Subset<T, RecipeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Recipe>>, PrismaPromise<Array<RecipeGetPayload<T>>>>;

    Plan<T extends PlanArgs = {}>(args?: Subset<T, PlanArgs>): CheckSelect<T, Prisma__PlanClient<Plan | null >, Prisma__PlanClient<PlanGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Meal findUnique
   */
  export type MealFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Meal
     * 
    **/
    select?: MealSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MealInclude | null
    /**
     * Throw an Error if a Meal can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Meal to fetch.
     * 
    **/
    where: MealWhereUniqueInput
  }


  /**
   * Meal findFirst
   */
  export type MealFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Meal
     * 
    **/
    select?: MealSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MealInclude | null
    /**
     * Throw an Error if a Meal can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Meal to fetch.
     * 
    **/
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     * 
    **/
    orderBy?: Enumerable<MealOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     * 
    **/
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     * 
    **/
    distinct?: Enumerable<MealScalarFieldEnum>
  }


  /**
   * Meal findMany
   */
  export type MealFindManyArgs = {
    /**
     * Select specific fields to fetch from the Meal
     * 
    **/
    select?: MealSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MealInclude | null
    /**
     * Filter, which Meals to fetch.
     * 
    **/
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     * 
    **/
    orderBy?: Enumerable<MealOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meals.
     * 
    **/
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MealScalarFieldEnum>
  }


  /**
   * Meal create
   */
  export type MealCreateArgs = {
    /**
     * Select specific fields to fetch from the Meal
     * 
    **/
    select?: MealSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MealInclude | null
    /**
     * The data needed to create a Meal.
     * 
    **/
    data: XOR<MealCreateInput, MealUncheckedCreateInput>
  }


  /**
   * Meal update
   */
  export type MealUpdateArgs = {
    /**
     * Select specific fields to fetch from the Meal
     * 
    **/
    select?: MealSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MealInclude | null
    /**
     * The data needed to update a Meal.
     * 
    **/
    data: XOR<MealUpdateInput, MealUncheckedUpdateInput>
    /**
     * Choose, which Meal to update.
     * 
    **/
    where: MealWhereUniqueInput
  }


  /**
   * Meal updateMany
   */
  export type MealUpdateManyArgs = {
    /**
     * The data used to update Meals.
     * 
    **/
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     * 
    **/
    where?: MealWhereInput
  }


  /**
   * Meal upsert
   */
  export type MealUpsertArgs = {
    /**
     * Select specific fields to fetch from the Meal
     * 
    **/
    select?: MealSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MealInclude | null
    /**
     * The filter to search for the Meal to update in case it exists.
     * 
    **/
    where: MealWhereUniqueInput
    /**
     * In case the Meal found by the `where` argument doesn't exist, create a new Meal with this data.
     * 
    **/
    create: XOR<MealCreateInput, MealUncheckedCreateInput>
    /**
     * In case the Meal was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MealUpdateInput, MealUncheckedUpdateInput>
  }


  /**
   * Meal delete
   */
  export type MealDeleteArgs = {
    /**
     * Select specific fields to fetch from the Meal
     * 
    **/
    select?: MealSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MealInclude | null
    /**
     * Filter which Meal to delete.
     * 
    **/
    where: MealWhereUniqueInput
  }


  /**
   * Meal deleteMany
   */
  export type MealDeleteManyArgs = {
    /**
     * Filter which Meals to delete
     * 
    **/
    where?: MealWhereInput
  }


  /**
   * Meal without action
   */
  export type MealArgs = {
    /**
     * Select specific fields to fetch from the Meal
     * 
    **/
    select?: MealSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MealInclude | null
  }



  /**
   * Model plan_meals
   */


  export type AggregatePlan_meals = {
    _count: Plan_mealsCountAggregateOutputType | null
    _min: Plan_mealsMinAggregateOutputType | null
    _max: Plan_mealsMaxAggregateOutputType | null
  }

  export type Plan_mealsMinAggregateOutputType = {
    id: string | null
    plan_id: string | null
    meal_id: string | null
  }

  export type Plan_mealsMaxAggregateOutputType = {
    id: string | null
    plan_id: string | null
    meal_id: string | null
  }

  export type Plan_mealsCountAggregateOutputType = {
    id: number
    plan_id: number
    meal_id: number
    _all: number
  }


  export type Plan_mealsMinAggregateInputType = {
    id?: true
    plan_id?: true
    meal_id?: true
  }

  export type Plan_mealsMaxAggregateInputType = {
    id?: true
    plan_id?: true
    meal_id?: true
  }

  export type Plan_mealsCountAggregateInputType = {
    id?: true
    plan_id?: true
    meal_id?: true
    _all?: true
  }

  export type Plan_mealsAggregateArgs = {
    /**
     * Filter which plan_meals to aggregate.
     * 
    **/
    where?: plan_mealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plan_meals to fetch.
     * 
    **/
    orderBy?: Enumerable<plan_mealsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: plan_mealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plan_meals from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plan_meals.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned plan_meals
    **/
    _count?: true | Plan_mealsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Plan_mealsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Plan_mealsMaxAggregateInputType
  }

  export type GetPlan_mealsAggregateType<T extends Plan_mealsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan_meals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan_meals[P]>
      : GetScalarType<T[P], AggregatePlan_meals[P]>
  }




  export type Plan_mealsGroupByArgs = {
    where?: plan_mealsWhereInput
    orderBy?: Enumerable<plan_mealsOrderByWithAggregationInput>
    by: Array<Plan_mealsScalarFieldEnum>
    having?: plan_mealsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Plan_mealsCountAggregateInputType | true
    _min?: Plan_mealsMinAggregateInputType
    _max?: Plan_mealsMaxAggregateInputType
  }


  export type Plan_mealsGroupByOutputType = {
    id: string
    plan_id: string
    meal_id: string
    _count: Plan_mealsCountAggregateOutputType | null
    _min: Plan_mealsMinAggregateOutputType | null
    _max: Plan_mealsMaxAggregateOutputType | null
  }

  type GetPlan_mealsGroupByPayload<T extends Plan_mealsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Plan_mealsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Plan_mealsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Plan_mealsGroupByOutputType[P]>
            : GetScalarType<T[P], Plan_mealsGroupByOutputType[P]>
        }
      >
    >


  export type plan_mealsSelect = {
    id?: boolean
    plan_id?: boolean
    meal_id?: boolean
  }

  export type plan_mealsGetPayload<
    S extends boolean | null | undefined | plan_mealsArgs,
    U = keyof S
      > = S extends true
        ? plan_meals
    : S extends undefined
    ? never
    : S extends plan_mealsArgs | plan_mealsFindManyArgs
    ?'include' extends U
    ? plan_meals 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof plan_meals ? plan_meals[P] : never
  } 
    : plan_meals
  : plan_meals


  type plan_mealsCountArgs = Merge<
    Omit<plan_mealsFindManyArgs, 'select' | 'include'> & {
      select?: Plan_mealsCountAggregateInputType | true
    }
  >

  export interface plan_mealsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Plan_meals that matches the filter.
     * @param {plan_mealsFindUniqueArgs} args - Arguments to find a Plan_meals
     * @example
     * // Get one Plan_meals
     * const plan_meals = await prisma.plan_meals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends plan_mealsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, plan_mealsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'plan_meals'> extends True ? CheckSelect<T, Prisma__plan_mealsClient<plan_meals>, Prisma__plan_mealsClient<plan_mealsGetPayload<T>>> : CheckSelect<T, Prisma__plan_mealsClient<plan_meals | null >, Prisma__plan_mealsClient<plan_mealsGetPayload<T> | null >>

    /**
     * Find the first Plan_meals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plan_mealsFindFirstArgs} args - Arguments to find a Plan_meals
     * @example
     * // Get one Plan_meals
     * const plan_meals = await prisma.plan_meals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends plan_mealsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, plan_mealsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'plan_meals'> extends True ? CheckSelect<T, Prisma__plan_mealsClient<plan_meals>, Prisma__plan_mealsClient<plan_mealsGetPayload<T>>> : CheckSelect<T, Prisma__plan_mealsClient<plan_meals | null >, Prisma__plan_mealsClient<plan_mealsGetPayload<T> | null >>

    /**
     * Find zero or more Plan_meals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plan_mealsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plan_meals
     * const plan_meals = await prisma.plan_meals.findMany()
     * 
     * // Get first 10 Plan_meals
     * const plan_meals = await prisma.plan_meals.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plan_mealsWithIdOnly = await prisma.plan_meals.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends plan_mealsFindManyArgs>(
      args?: SelectSubset<T, plan_mealsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<plan_meals>>, PrismaPromise<Array<plan_mealsGetPayload<T>>>>

    /**
     * Create a Plan_meals.
     * @param {plan_mealsCreateArgs} args - Arguments to create a Plan_meals.
     * @example
     * // Create one Plan_meals
     * const Plan_meals = await prisma.plan_meals.create({
     *   data: {
     *     // ... data to create a Plan_meals
     *   }
     * })
     * 
    **/
    create<T extends plan_mealsCreateArgs>(
      args: SelectSubset<T, plan_mealsCreateArgs>
    ): CheckSelect<T, Prisma__plan_mealsClient<plan_meals>, Prisma__plan_mealsClient<plan_mealsGetPayload<T>>>

    /**
     * Delete a Plan_meals.
     * @param {plan_mealsDeleteArgs} args - Arguments to delete one Plan_meals.
     * @example
     * // Delete one Plan_meals
     * const Plan_meals = await prisma.plan_meals.delete({
     *   where: {
     *     // ... filter to delete one Plan_meals
     *   }
     * })
     * 
    **/
    delete<T extends plan_mealsDeleteArgs>(
      args: SelectSubset<T, plan_mealsDeleteArgs>
    ): CheckSelect<T, Prisma__plan_mealsClient<plan_meals>, Prisma__plan_mealsClient<plan_mealsGetPayload<T>>>

    /**
     * Update one Plan_meals.
     * @param {plan_mealsUpdateArgs} args - Arguments to update one Plan_meals.
     * @example
     * // Update one Plan_meals
     * const plan_meals = await prisma.plan_meals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends plan_mealsUpdateArgs>(
      args: SelectSubset<T, plan_mealsUpdateArgs>
    ): CheckSelect<T, Prisma__plan_mealsClient<plan_meals>, Prisma__plan_mealsClient<plan_mealsGetPayload<T>>>

    /**
     * Delete zero or more Plan_meals.
     * @param {plan_mealsDeleteManyArgs} args - Arguments to filter Plan_meals to delete.
     * @example
     * // Delete a few Plan_meals
     * const { count } = await prisma.plan_meals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends plan_mealsDeleteManyArgs>(
      args?: SelectSubset<T, plan_mealsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plan_meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plan_mealsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plan_meals
     * const plan_meals = await prisma.plan_meals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends plan_mealsUpdateManyArgs>(
      args: SelectSubset<T, plan_mealsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Plan_meals.
     * @param {plan_mealsUpsertArgs} args - Arguments to update or create a Plan_meals.
     * @example
     * // Update or create a Plan_meals
     * const plan_meals = await prisma.plan_meals.upsert({
     *   create: {
     *     // ... data to create a Plan_meals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan_meals we want to update
     *   }
     * })
    **/
    upsert<T extends plan_mealsUpsertArgs>(
      args: SelectSubset<T, plan_mealsUpsertArgs>
    ): CheckSelect<T, Prisma__plan_mealsClient<plan_meals>, Prisma__plan_mealsClient<plan_mealsGetPayload<T>>>

    /**
     * Count the number of Plan_meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plan_mealsCountArgs} args - Arguments to filter Plan_meals to count.
     * @example
     * // Count the number of Plan_meals
     * const count = await prisma.plan_meals.count({
     *   where: {
     *     // ... the filter for the Plan_meals we want to count
     *   }
     * })
    **/
    count<T extends plan_mealsCountArgs>(
      args?: Subset<T, plan_mealsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Plan_mealsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan_meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Plan_mealsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Plan_mealsAggregateArgs>(args: Subset<T, Plan_mealsAggregateArgs>): PrismaPromise<GetPlan_mealsAggregateType<T>>

    /**
     * Group by Plan_meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Plan_mealsGroupByArgs} args - Group by arguments.
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
      T extends Plan_mealsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Plan_mealsGroupByArgs['orderBy'] }
        : { orderBy?: Plan_mealsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Plan_mealsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlan_mealsGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for plan_meals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__plan_mealsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * plan_meals findUnique
   */
  export type plan_mealsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the plan_meals
     * 
    **/
    select?: plan_mealsSelect | null
    /**
     * Throw an Error if a plan_meals can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which plan_meals to fetch.
     * 
    **/
    where: plan_mealsWhereUniqueInput
  }


  /**
   * plan_meals findFirst
   */
  export type plan_mealsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the plan_meals
     * 
    **/
    select?: plan_mealsSelect | null
    /**
     * Throw an Error if a plan_meals can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which plan_meals to fetch.
     * 
    **/
    where?: plan_mealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plan_meals to fetch.
     * 
    **/
    orderBy?: Enumerable<plan_mealsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for plan_meals.
     * 
    **/
    cursor?: plan_mealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plan_meals from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plan_meals.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of plan_meals.
     * 
    **/
    distinct?: Enumerable<Plan_mealsScalarFieldEnum>
  }


  /**
   * plan_meals findMany
   */
  export type plan_mealsFindManyArgs = {
    /**
     * Select specific fields to fetch from the plan_meals
     * 
    **/
    select?: plan_mealsSelect | null
    /**
     * Filter, which plan_meals to fetch.
     * 
    **/
    where?: plan_mealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plan_meals to fetch.
     * 
    **/
    orderBy?: Enumerable<plan_mealsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing plan_meals.
     * 
    **/
    cursor?: plan_mealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plan_meals from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plan_meals.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Plan_mealsScalarFieldEnum>
  }


  /**
   * plan_meals create
   */
  export type plan_mealsCreateArgs = {
    /**
     * Select specific fields to fetch from the plan_meals
     * 
    **/
    select?: plan_mealsSelect | null
    /**
     * The data needed to create a plan_meals.
     * 
    **/
    data: XOR<plan_mealsCreateInput, plan_mealsUncheckedCreateInput>
  }


  /**
   * plan_meals update
   */
  export type plan_mealsUpdateArgs = {
    /**
     * Select specific fields to fetch from the plan_meals
     * 
    **/
    select?: plan_mealsSelect | null
    /**
     * The data needed to update a plan_meals.
     * 
    **/
    data: XOR<plan_mealsUpdateInput, plan_mealsUncheckedUpdateInput>
    /**
     * Choose, which plan_meals to update.
     * 
    **/
    where: plan_mealsWhereUniqueInput
  }


  /**
   * plan_meals updateMany
   */
  export type plan_mealsUpdateManyArgs = {
    /**
     * The data used to update plan_meals.
     * 
    **/
    data: XOR<plan_mealsUpdateManyMutationInput, plan_mealsUncheckedUpdateManyInput>
    /**
     * Filter which plan_meals to update
     * 
    **/
    where?: plan_mealsWhereInput
  }


  /**
   * plan_meals upsert
   */
  export type plan_mealsUpsertArgs = {
    /**
     * Select specific fields to fetch from the plan_meals
     * 
    **/
    select?: plan_mealsSelect | null
    /**
     * The filter to search for the plan_meals to update in case it exists.
     * 
    **/
    where: plan_mealsWhereUniqueInput
    /**
     * In case the plan_meals found by the `where` argument doesn't exist, create a new plan_meals with this data.
     * 
    **/
    create: XOR<plan_mealsCreateInput, plan_mealsUncheckedCreateInput>
    /**
     * In case the plan_meals was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<plan_mealsUpdateInput, plan_mealsUncheckedUpdateInput>
  }


  /**
   * plan_meals delete
   */
  export type plan_mealsDeleteArgs = {
    /**
     * Select specific fields to fetch from the plan_meals
     * 
    **/
    select?: plan_mealsSelect | null
    /**
     * Filter which plan_meals to delete.
     * 
    **/
    where: plan_mealsWhereUniqueInput
  }


  /**
   * plan_meals deleteMany
   */
  export type plan_mealsDeleteManyArgs = {
    /**
     * Filter which plan_meals to delete
     * 
    **/
    where?: plan_mealsWhereInput
  }


  /**
   * plan_meals without action
   */
  export type plan_mealsArgs = {
    /**
     * Select specific fields to fetch from the plan_meals
     * 
    **/
    select?: plan_mealsSelect | null
  }



  /**
   * Model Plan
   */


  export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  export type PlanMinAggregateOutputType = {
    id: string | null
    user: string | null
  }

  export type PlanMaxAggregateOutputType = {
    id: string | null
    user: string | null
  }

  export type PlanCountAggregateOutputType = {
    id: number
    user: number
    _all: number
  }


  export type PlanMinAggregateInputType = {
    id?: true
    user?: true
  }

  export type PlanMaxAggregateInputType = {
    id?: true
    user?: true
  }

  export type PlanCountAggregateInputType = {
    id?: true
    user?: true
    _all?: true
  }

  export type PlanAggregateArgs = {
    /**
     * Filter which Plan to aggregate.
     * 
    **/
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     * 
    **/
    orderBy?: Enumerable<PlanOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMaxAggregateInputType
  }

  export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan[P]>
      : GetScalarType<T[P], AggregatePlan[P]>
  }




  export type PlanGroupByArgs = {
    where?: PlanWhereInput
    orderBy?: Enumerable<PlanOrderByWithAggregationInput>
    by: Array<PlanScalarFieldEnum>
    having?: PlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanCountAggregateInputType | true
    _min?: PlanMinAggregateInputType
    _max?: PlanMaxAggregateInputType
  }


  export type PlanGroupByOutputType = {
    id: string
    user: string
    _count: PlanCountAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  type GetPlanGroupByPayload<T extends PlanGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanGroupByOutputType[P]>
            : GetScalarType<T[P], PlanGroupByOutputType[P]>
        }
      >
    >


  export type PlanSelect = {
    id?: boolean
    meals?: boolean | MealFindManyArgs
    user?: boolean
    _count?: boolean | PlanCountOutputTypeArgs
  }

  export type PlanInclude = {
    meals?: boolean | MealFindManyArgs
    _count?: boolean | PlanCountOutputTypeArgs
  }

  export type PlanGetPayload<
    S extends boolean | null | undefined | PlanArgs,
    U = keyof S
      > = S extends true
        ? Plan
    : S extends undefined
    ? never
    : S extends PlanArgs | PlanFindManyArgs
    ?'include' extends U
    ? Plan  & {
    [P in TrueKeys<S['include']>]:
        P extends 'meals' ? Array < MealGetPayload<S['include'][P]>>  :
        P extends '_count' ? PlanCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'meals' ? Array < MealGetPayload<S['select'][P]>>  :
        P extends '_count' ? PlanCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Plan ? Plan[P] : never
  } 
    : Plan
  : Plan


  type PlanCountArgs = Merge<
    Omit<PlanFindManyArgs, 'select' | 'include'> & {
      select?: PlanCountAggregateInputType | true
    }
  >

  export interface PlanDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlanFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PlanFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Plan'> extends True ? CheckSelect<T, Prisma__PlanClient<Plan>, Prisma__PlanClient<PlanGetPayload<T>>> : CheckSelect<T, Prisma__PlanClient<Plan | null >, Prisma__PlanClient<PlanGetPayload<T> | null >>

    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlanFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PlanFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Plan'> extends True ? CheckSelect<T, Prisma__PlanClient<Plan>, Prisma__PlanClient<PlanGetPayload<T>>> : CheckSelect<T, Prisma__PlanClient<Plan | null >, Prisma__PlanClient<PlanGetPayload<T> | null >>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planWithIdOnly = await prisma.plan.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlanFindManyArgs>(
      args?: SelectSubset<T, PlanFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Plan>>, PrismaPromise<Array<PlanGetPayload<T>>>>

    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     * 
    **/
    create<T extends PlanCreateArgs>(
      args: SelectSubset<T, PlanCreateArgs>
    ): CheckSelect<T, Prisma__PlanClient<Plan>, Prisma__PlanClient<PlanGetPayload<T>>>

    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     * 
    **/
    delete<T extends PlanDeleteArgs>(
      args: SelectSubset<T, PlanDeleteArgs>
    ): CheckSelect<T, Prisma__PlanClient<Plan>, Prisma__PlanClient<PlanGetPayload<T>>>

    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlanUpdateArgs>(
      args: SelectSubset<T, PlanUpdateArgs>
    ): CheckSelect<T, Prisma__PlanClient<Plan>, Prisma__PlanClient<PlanGetPayload<T>>>

    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlanDeleteManyArgs>(
      args?: SelectSubset<T, PlanDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlanUpdateManyArgs>(
      args: SelectSubset<T, PlanUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
    **/
    upsert<T extends PlanUpsertArgs>(
      args: SelectSubset<T, PlanUpsertArgs>
    ): CheckSelect<T, Prisma__PlanClient<Plan>, Prisma__PlanClient<PlanGetPayload<T>>>

    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlanCountArgs>(
      args?: Subset<T, PlanCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanAggregateArgs>(args: Subset<T, PlanAggregateArgs>): PrismaPromise<GetPlanAggregateType<T>>

    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
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
      T extends PlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanGroupByArgs['orderBy'] }
        : { orderBy?: PlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PlanClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    meals<T extends MealFindManyArgs = {}>(args?: Subset<T, MealFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Meal>>, PrismaPromise<Array<MealGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Plan findUnique
   */
  export type PlanFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Plan
     * 
    **/
    select?: PlanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlanInclude | null
    /**
     * Throw an Error if a Plan can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Plan to fetch.
     * 
    **/
    where: PlanWhereUniqueInput
  }


  /**
   * Plan findFirst
   */
  export type PlanFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Plan
     * 
    **/
    select?: PlanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlanInclude | null
    /**
     * Throw an Error if a Plan can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Plan to fetch.
     * 
    **/
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     * 
    **/
    orderBy?: Enumerable<PlanOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     * 
    **/
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     * 
    **/
    distinct?: Enumerable<PlanScalarFieldEnum>
  }


  /**
   * Plan findMany
   */
  export type PlanFindManyArgs = {
    /**
     * Select specific fields to fetch from the Plan
     * 
    **/
    select?: PlanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlanInclude | null
    /**
     * Filter, which Plans to fetch.
     * 
    **/
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     * 
    **/
    orderBy?: Enumerable<PlanOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     * 
    **/
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PlanScalarFieldEnum>
  }


  /**
   * Plan create
   */
  export type PlanCreateArgs = {
    /**
     * Select specific fields to fetch from the Plan
     * 
    **/
    select?: PlanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlanInclude | null
    /**
     * The data needed to create a Plan.
     * 
    **/
    data: XOR<PlanCreateInput, PlanUncheckedCreateInput>
  }


  /**
   * Plan update
   */
  export type PlanUpdateArgs = {
    /**
     * Select specific fields to fetch from the Plan
     * 
    **/
    select?: PlanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlanInclude | null
    /**
     * The data needed to update a Plan.
     * 
    **/
    data: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
    /**
     * Choose, which Plan to update.
     * 
    **/
    where: PlanWhereUniqueInput
  }


  /**
   * Plan updateMany
   */
  export type PlanUpdateManyArgs = {
    /**
     * The data used to update Plans.
     * 
    **/
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     * 
    **/
    where?: PlanWhereInput
  }


  /**
   * Plan upsert
   */
  export type PlanUpsertArgs = {
    /**
     * Select specific fields to fetch from the Plan
     * 
    **/
    select?: PlanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlanInclude | null
    /**
     * The filter to search for the Plan to update in case it exists.
     * 
    **/
    where: PlanWhereUniqueInput
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     * 
    **/
    create: XOR<PlanCreateInput, PlanUncheckedCreateInput>
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
  }


  /**
   * Plan delete
   */
  export type PlanDeleteArgs = {
    /**
     * Select specific fields to fetch from the Plan
     * 
    **/
    select?: PlanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlanInclude | null
    /**
     * Filter which Plan to delete.
     * 
    **/
    where: PlanWhereUniqueInput
  }


  /**
   * Plan deleteMany
   */
  export type PlanDeleteManyArgs = {
    /**
     * Filter which Plans to delete
     * 
    **/
    where?: PlanWhereInput
  }


  /**
   * Plan without action
   */
  export type PlanArgs = {
    /**
     * Select specific fields to fetch from the Plan
     * 
    **/
    select?: PlanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PlanInclude | null
  }



  /**
   * Model Recipe
   */


  export type AggregateRecipe = {
    _count: RecipeCountAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  export type RecipeMinAggregateOutputType = {
    id: string | null
    ingredients: string | null
    steps: string | null
    name: string | null
    user: string | null
    mealId: string | null
  }

  export type RecipeMaxAggregateOutputType = {
    id: string | null
    ingredients: string | null
    steps: string | null
    name: string | null
    user: string | null
    mealId: string | null
  }

  export type RecipeCountAggregateOutputType = {
    id: number
    ingredients: number
    steps: number
    name: number
    user: number
    mealId: number
    _all: number
  }


  export type RecipeMinAggregateInputType = {
    id?: true
    ingredients?: true
    steps?: true
    name?: true
    user?: true
    mealId?: true
  }

  export type RecipeMaxAggregateInputType = {
    id?: true
    ingredients?: true
    steps?: true
    name?: true
    user?: true
    mealId?: true
  }

  export type RecipeCountAggregateInputType = {
    id?: true
    ingredients?: true
    steps?: true
    name?: true
    user?: true
    mealId?: true
    _all?: true
  }

  export type RecipeAggregateArgs = {
    /**
     * Filter which Recipe to aggregate.
     * 
    **/
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     * 
    **/
    orderBy?: Enumerable<RecipeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipes
    **/
    _count?: true | RecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeMaxAggregateInputType
  }

  export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe[P]>
      : GetScalarType<T[P], AggregateRecipe[P]>
  }




  export type RecipeGroupByArgs = {
    where?: RecipeWhereInput
    orderBy?: Enumerable<RecipeOrderByWithAggregationInput>
    by: Array<RecipeScalarFieldEnum>
    having?: RecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeCountAggregateInputType | true
    _min?: RecipeMinAggregateInputType
    _max?: RecipeMaxAggregateInputType
  }


  export type RecipeGroupByOutputType = {
    id: string
    ingredients: string
    steps: string
    name: string | null
    user: string
    mealId: string | null
    _count: RecipeCountAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  type GetRecipeGroupByPayload<T extends RecipeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeGroupByOutputType[P]>
        }
      >
    >


  export type RecipeSelect = {
    id?: boolean
    ingredients?: boolean
    steps?: boolean
    name?: boolean
    user?: boolean
    Meal?: boolean | MealArgs
    mealId?: boolean
  }

  export type RecipeInclude = {
    Meal?: boolean | MealArgs
  }

  export type RecipeGetPayload<
    S extends boolean | null | undefined | RecipeArgs,
    U = keyof S
      > = S extends true
        ? Recipe
    : S extends undefined
    ? never
    : S extends RecipeArgs | RecipeFindManyArgs
    ?'include' extends U
    ? Recipe  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Meal' ? MealGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Meal' ? MealGetPayload<S['select'][P]> | null :  P extends keyof Recipe ? Recipe[P] : never
  } 
    : Recipe
  : Recipe


  type RecipeCountArgs = Merge<
    Omit<RecipeFindManyArgs, 'select' | 'include'> & {
      select?: RecipeCountAggregateInputType | true
    }
  >

  export interface RecipeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Recipe that matches the filter.
     * @param {RecipeFindUniqueArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RecipeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RecipeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Recipe'> extends True ? CheckSelect<T, Prisma__RecipeClient<Recipe>, Prisma__RecipeClient<RecipeGetPayload<T>>> : CheckSelect<T, Prisma__RecipeClient<Recipe | null >, Prisma__RecipeClient<RecipeGetPayload<T> | null >>

    /**
     * Find the first Recipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RecipeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RecipeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Recipe'> extends True ? CheckSelect<T, Prisma__RecipeClient<Recipe>, Prisma__RecipeClient<RecipeGetPayload<T>>> : CheckSelect<T, Prisma__RecipeClient<Recipe | null >, Prisma__RecipeClient<RecipeGetPayload<T> | null >>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipe.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeWithIdOnly = await prisma.recipe.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RecipeFindManyArgs>(
      args?: SelectSubset<T, RecipeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Recipe>>, PrismaPromise<Array<RecipeGetPayload<T>>>>

    /**
     * Create a Recipe.
     * @param {RecipeCreateArgs} args - Arguments to create a Recipe.
     * @example
     * // Create one Recipe
     * const Recipe = await prisma.recipe.create({
     *   data: {
     *     // ... data to create a Recipe
     *   }
     * })
     * 
    **/
    create<T extends RecipeCreateArgs>(
      args: SelectSubset<T, RecipeCreateArgs>
    ): CheckSelect<T, Prisma__RecipeClient<Recipe>, Prisma__RecipeClient<RecipeGetPayload<T>>>

    /**
     * Delete a Recipe.
     * @param {RecipeDeleteArgs} args - Arguments to delete one Recipe.
     * @example
     * // Delete one Recipe
     * const Recipe = await prisma.recipe.delete({
     *   where: {
     *     // ... filter to delete one Recipe
     *   }
     * })
     * 
    **/
    delete<T extends RecipeDeleteArgs>(
      args: SelectSubset<T, RecipeDeleteArgs>
    ): CheckSelect<T, Prisma__RecipeClient<Recipe>, Prisma__RecipeClient<RecipeGetPayload<T>>>

    /**
     * Update one Recipe.
     * @param {RecipeUpdateArgs} args - Arguments to update one Recipe.
     * @example
     * // Update one Recipe
     * const recipe = await prisma.recipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RecipeUpdateArgs>(
      args: SelectSubset<T, RecipeUpdateArgs>
    ): CheckSelect<T, Prisma__RecipeClient<Recipe>, Prisma__RecipeClient<RecipeGetPayload<T>>>

    /**
     * Delete zero or more Recipes.
     * @param {RecipeDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RecipeDeleteManyArgs>(
      args?: SelectSubset<T, RecipeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RecipeUpdateManyArgs>(
      args: SelectSubset<T, RecipeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Recipe.
     * @param {RecipeUpsertArgs} args - Arguments to update or create a Recipe.
     * @example
     * // Update or create a Recipe
     * const recipe = await prisma.recipe.upsert({
     *   create: {
     *     // ... data to create a Recipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe we want to update
     *   }
     * })
    **/
    upsert<T extends RecipeUpsertArgs>(
      args: SelectSubset<T, RecipeUpsertArgs>
    ): CheckSelect<T, Prisma__RecipeClient<Recipe>, Prisma__RecipeClient<RecipeGetPayload<T>>>

    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipe.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends RecipeCountArgs>(
      args?: Subset<T, RecipeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecipeAggregateArgs>(args: Subset<T, RecipeAggregateArgs>): PrismaPromise<GetRecipeAggregateType<T>>

    /**
     * Group by Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupByArgs} args - Group by arguments.
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
      T extends RecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeGroupByArgs['orderBy'] }
        : { orderBy?: RecipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RecipeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Meal<T extends MealArgs = {}>(args?: Subset<T, MealArgs>): CheckSelect<T, Prisma__MealClient<Meal | null >, Prisma__MealClient<MealGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Recipe findUnique
   */
  export type RecipeFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
    /**
     * Throw an Error if a Recipe can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Recipe to fetch.
     * 
    **/
    where: RecipeWhereUniqueInput
  }


  /**
   * Recipe findFirst
   */
  export type RecipeFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
    /**
     * Throw an Error if a Recipe can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Recipe to fetch.
     * 
    **/
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     * 
    **/
    orderBy?: Enumerable<RecipeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     * 
    **/
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     * 
    **/
    distinct?: Enumerable<RecipeScalarFieldEnum>
  }


  /**
   * Recipe findMany
   */
  export type RecipeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
    /**
     * Filter, which Recipes to fetch.
     * 
    **/
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     * 
    **/
    orderBy?: Enumerable<RecipeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipes.
     * 
    **/
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RecipeScalarFieldEnum>
  }


  /**
   * Recipe create
   */
  export type RecipeCreateArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
    /**
     * The data needed to create a Recipe.
     * 
    **/
    data: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
  }


  /**
   * Recipe update
   */
  export type RecipeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
    /**
     * The data needed to update a Recipe.
     * 
    **/
    data: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
    /**
     * Choose, which Recipe to update.
     * 
    **/
    where: RecipeWhereUniqueInput
  }


  /**
   * Recipe updateMany
   */
  export type RecipeUpdateManyArgs = {
    /**
     * The data used to update Recipes.
     * 
    **/
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     * 
    **/
    where?: RecipeWhereInput
  }


  /**
   * Recipe upsert
   */
  export type RecipeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
    /**
     * The filter to search for the Recipe to update in case it exists.
     * 
    **/
    where: RecipeWhereUniqueInput
    /**
     * In case the Recipe found by the `where` argument doesn't exist, create a new Recipe with this data.
     * 
    **/
    create: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
    /**
     * In case the Recipe was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
  }


  /**
   * Recipe delete
   */
  export type RecipeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
    /**
     * Filter which Recipe to delete.
     * 
    **/
    where: RecipeWhereUniqueInput
  }


  /**
   * Recipe deleteMany
   */
  export type RecipeDeleteManyArgs = {
    /**
     * Filter which Recipes to delete
     * 
    **/
    where?: RecipeWhereInput
  }


  /**
   * Recipe without action
   */
  export type RecipeArgs = {
    /**
     * Select specific fields to fetch from the Recipe
     * 
    **/
    select?: RecipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecipeInclude | null
  }



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
    enabled: number | null
  }

  export type UserSumAggregateOutputType = {
    enabled: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    created: Date | null
    updated: Date | null
    lastActive: Date | null
    enabled: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    created: Date | null
    updated: Date | null
    lastActive: Date | null
    enabled: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    firstName: number
    lastName: number
    created: number
    updated: number
    lastActive: number
    enabled: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    enabled?: true
  }

  export type UserSumAggregateInputType = {
    enabled?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    firstName?: true
    lastName?: true
    created?: true
    updated?: true
    lastActive?: true
    enabled?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    firstName?: true
    lastName?: true
    created?: true
    updated?: true
    lastActive?: true
    enabled?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    firstName?: true
    lastName?: true
    created?: true
    updated?: true
    lastActive?: true
    enabled?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
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




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
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
    id: string
    username: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    created: Date
    updated: Date
    lastActive: Date
    enabled: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    username?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    created?: boolean
    updated?: boolean
    lastActive?: boolean
    enabled?: boolean
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
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
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

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
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

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
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    ): PrismaPromise<
      T extends _Record<'select', any>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

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
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const MealScalarFieldEnum: {
    id: 'id',
    user: 'user',
    planId: 'planId'
  };

  export type MealScalarFieldEnum = (typeof MealScalarFieldEnum)[keyof typeof MealScalarFieldEnum]


  export const Plan_mealsScalarFieldEnum: {
    id: 'id',
    plan_id: 'plan_id',
    meal_id: 'meal_id'
  };

  export type Plan_mealsScalarFieldEnum = (typeof Plan_mealsScalarFieldEnum)[keyof typeof Plan_mealsScalarFieldEnum]


  export const PlanScalarFieldEnum: {
    id: 'id',
    user: 'user'
  };

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


  export const RecipeScalarFieldEnum: {
    id: 'id',
    ingredients: 'ingredients',
    steps: 'steps',
    name: 'name',
    user: 'user',
    mealId: 'mealId'
  };

  export type RecipeScalarFieldEnum = (typeof RecipeScalarFieldEnum)[keyof typeof RecipeScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    created: 'created',
    updated: 'updated',
    lastActive: 'lastActive',
    enabled: 'enabled'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type MealWhereInput = {
    AND?: Enumerable<MealWhereInput>
    OR?: Enumerable<MealWhereInput>
    NOT?: Enumerable<MealWhereInput>
    id?: StringFilter | string
    recipes?: RecipeListRelationFilter
    user?: StringFilter | string
    Plan?: XOR<PlanRelationFilter, PlanWhereInput> | null
    planId?: StringNullableFilter | string | null
  }

  export type MealOrderByWithRelationInput = {
    id?: SortOrder
    recipes?: RecipeOrderByRelationAggregateInput
    user?: SortOrder
    Plan?: PlanOrderByWithRelationInput
    planId?: SortOrder
  }

  export type MealWhereUniqueInput = {
    id?: string
  }

  export type MealOrderByWithAggregationInput = {
    id?: SortOrder
    user?: SortOrder
    planId?: SortOrder
    _count?: MealCountOrderByAggregateInput
    _max?: MealMaxOrderByAggregateInput
    _min?: MealMinOrderByAggregateInput
  }

  export type MealScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MealScalarWhereWithAggregatesInput>
    OR?: Enumerable<MealScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MealScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    user?: StringWithAggregatesFilter | string
    planId?: StringNullableWithAggregatesFilter | string | null
  }

  export type plan_mealsWhereInput = {
    AND?: Enumerable<plan_mealsWhereInput>
    OR?: Enumerable<plan_mealsWhereInput>
    NOT?: Enumerable<plan_mealsWhereInput>
    id?: StringFilter | string
    plan_id?: StringFilter | string
    meal_id?: StringFilter | string
  }

  export type plan_mealsOrderByWithRelationInput = {
    id?: SortOrder
    plan_id?: SortOrder
    meal_id?: SortOrder
  }

  export type plan_mealsWhereUniqueInput = {
    id?: string
  }

  export type plan_mealsOrderByWithAggregationInput = {
    id?: SortOrder
    plan_id?: SortOrder
    meal_id?: SortOrder
    _count?: plan_mealsCountOrderByAggregateInput
    _max?: plan_mealsMaxOrderByAggregateInput
    _min?: plan_mealsMinOrderByAggregateInput
  }

  export type plan_mealsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<plan_mealsScalarWhereWithAggregatesInput>
    OR?: Enumerable<plan_mealsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<plan_mealsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    plan_id?: StringWithAggregatesFilter | string
    meal_id?: StringWithAggregatesFilter | string
  }

  export type PlanWhereInput = {
    AND?: Enumerable<PlanWhereInput>
    OR?: Enumerable<PlanWhereInput>
    NOT?: Enumerable<PlanWhereInput>
    id?: StringFilter | string
    meals?: MealListRelationFilter
    user?: StringFilter | string
  }

  export type PlanOrderByWithRelationInput = {
    id?: SortOrder
    meals?: MealOrderByRelationAggregateInput
    user?: SortOrder
  }

  export type PlanWhereUniqueInput = {
    id?: string
  }

  export type PlanOrderByWithAggregationInput = {
    id?: SortOrder
    user?: SortOrder
    _count?: PlanCountOrderByAggregateInput
    _max?: PlanMaxOrderByAggregateInput
    _min?: PlanMinOrderByAggregateInput
  }

  export type PlanScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PlanScalarWhereWithAggregatesInput>
    OR?: Enumerable<PlanScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PlanScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    user?: StringWithAggregatesFilter | string
  }

  export type RecipeWhereInput = {
    AND?: Enumerable<RecipeWhereInput>
    OR?: Enumerable<RecipeWhereInput>
    NOT?: Enumerable<RecipeWhereInput>
    id?: StringFilter | string
    ingredients?: StringFilter | string
    steps?: StringFilter | string
    name?: StringNullableFilter | string | null
    user?: StringFilter | string
    Meal?: XOR<MealRelationFilter, MealWhereInput> | null
    mealId?: StringNullableFilter | string | null
  }

  export type RecipeOrderByWithRelationInput = {
    id?: SortOrder
    ingredients?: SortOrder
    steps?: SortOrder
    name?: SortOrder
    user?: SortOrder
    Meal?: MealOrderByWithRelationInput
    mealId?: SortOrder
  }

  export type RecipeWhereUniqueInput = {
    id?: string
  }

  export type RecipeOrderByWithAggregationInput = {
    id?: SortOrder
    ingredients?: SortOrder
    steps?: SortOrder
    name?: SortOrder
    user?: SortOrder
    mealId?: SortOrder
    _count?: RecipeCountOrderByAggregateInput
    _max?: RecipeMaxOrderByAggregateInput
    _min?: RecipeMinOrderByAggregateInput
  }

  export type RecipeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RecipeScalarWhereWithAggregatesInput>
    OR?: Enumerable<RecipeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RecipeScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    ingredients?: StringWithAggregatesFilter | string
    steps?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    user?: StringWithAggregatesFilter | string
    mealId?: StringNullableWithAggregatesFilter | string | null
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    username?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    firstName?: StringNullableFilter | string | null
    lastName?: StringNullableFilter | string | null
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
    lastActive?: DateTimeFilter | Date | string
    enabled?: IntFilter | number
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    lastActive?: SortOrder
    enabled?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    lastActive?: SortOrder
    enabled?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    username?: StringNullableWithAggregatesFilter | string | null
    email?: StringNullableWithAggregatesFilter | string | null
    firstName?: StringNullableWithAggregatesFilter | string | null
    lastName?: StringNullableWithAggregatesFilter | string | null
    created?: DateTimeWithAggregatesFilter | Date | string
    updated?: DateTimeWithAggregatesFilter | Date | string
    lastActive?: DateTimeWithAggregatesFilter | Date | string
    enabled?: IntWithAggregatesFilter | number
  }

  export type MealCreateInput = {
    id?: string
    recipes?: RecipeCreateNestedManyWithoutMealInput
    user: string
    Plan?: PlanCreateNestedOneWithoutMealsInput
  }

  export type MealUncheckedCreateInput = {
    id?: string
    recipes?: RecipeUncheckedCreateNestedManyWithoutMealInput
    user: string
    planId?: string | null
  }

  export type MealUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeUpdateManyWithoutMealInput
    user?: StringFieldUpdateOperationsInput | string
    Plan?: PlanUpdateOneWithoutMealsInput
  }

  export type MealUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeUncheckedUpdateManyWithoutMealInput
    user?: StringFieldUpdateOperationsInput | string
    planId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MealUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
  }

  export type MealUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    planId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type plan_mealsCreateInput = {
    id?: string
    plan_id: string
    meal_id: string
  }

  export type plan_mealsUncheckedCreateInput = {
    id?: string
    plan_id: string
    meal_id: string
  }

  export type plan_mealsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan_id?: StringFieldUpdateOperationsInput | string
    meal_id?: StringFieldUpdateOperationsInput | string
  }

  export type plan_mealsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan_id?: StringFieldUpdateOperationsInput | string
    meal_id?: StringFieldUpdateOperationsInput | string
  }

  export type plan_mealsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan_id?: StringFieldUpdateOperationsInput | string
    meal_id?: StringFieldUpdateOperationsInput | string
  }

  export type plan_mealsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan_id?: StringFieldUpdateOperationsInput | string
    meal_id?: StringFieldUpdateOperationsInput | string
  }

  export type PlanCreateInput = {
    id?: string
    meals?: MealCreateNestedManyWithoutPlanInput
    user: string
  }

  export type PlanUncheckedCreateInput = {
    id?: string
    meals?: MealUncheckedCreateNestedManyWithoutPlanInput
    user: string
  }

  export type PlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    meals?: MealUpdateManyWithoutPlanInput
    user?: StringFieldUpdateOperationsInput | string
  }

  export type PlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    meals?: MealUncheckedUpdateManyWithoutPlanInput
    user?: StringFieldUpdateOperationsInput | string
  }

  export type PlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
  }

  export type PlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeCreateInput = {
    id?: string
    ingredients: string
    steps: string
    name?: string | null
    user: string
    Meal?: MealCreateNestedOneWithoutRecipesInput
  }

  export type RecipeUncheckedCreateInput = {
    id?: string
    ingredients: string
    steps: string
    name?: string | null
    user: string
    mealId?: string | null
  }

  export type RecipeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredients?: StringFieldUpdateOperationsInput | string
    steps?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    user?: StringFieldUpdateOperationsInput | string
    Meal?: MealUpdateOneWithoutRecipesInput
  }

  export type RecipeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredients?: StringFieldUpdateOperationsInput | string
    steps?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    user?: StringFieldUpdateOperationsInput | string
    mealId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredients?: StringFieldUpdateOperationsInput | string
    steps?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    user?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredients?: StringFieldUpdateOperationsInput | string
    steps?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    user?: StringFieldUpdateOperationsInput | string
    mealId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    username?: string | null
    email?: string | null
    firstName?: string | null
    lastName?: string | null
    created?: Date | string
    updated?: Date | string
    lastActive?: Date | string
    enabled?: number
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username?: string | null
    email?: string | null
    firstName?: string | null
    lastName?: string | null
    created?: Date | string
    updated?: Date | string
    lastActive?: Date | string
    enabled?: number
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type RecipeListRelationFilter = {
    every?: RecipeWhereInput
    some?: RecipeWhereInput
    none?: RecipeWhereInput
  }

  export type PlanRelationFilter = {
    is?: PlanWhereInput | null
    isNot?: PlanWhereInput | null
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type RecipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MealCountOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    planId?: SortOrder
  }

  export type MealMaxOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    planId?: SortOrder
  }

  export type MealMinOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    planId?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type plan_mealsCountOrderByAggregateInput = {
    id?: SortOrder
    plan_id?: SortOrder
    meal_id?: SortOrder
  }

  export type plan_mealsMaxOrderByAggregateInput = {
    id?: SortOrder
    plan_id?: SortOrder
    meal_id?: SortOrder
  }

  export type plan_mealsMinOrderByAggregateInput = {
    id?: SortOrder
    plan_id?: SortOrder
    meal_id?: SortOrder
  }

  export type MealListRelationFilter = {
    every?: MealWhereInput
    some?: MealWhereInput
    none?: MealWhereInput
  }

  export type MealOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanCountOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
  }

  export type PlanMaxOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
  }

  export type PlanMinOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
  }

  export type MealRelationFilter = {
    is?: MealWhereInput | null
    isNot?: MealWhereInput | null
  }

  export type RecipeCountOrderByAggregateInput = {
    id?: SortOrder
    ingredients?: SortOrder
    steps?: SortOrder
    name?: SortOrder
    user?: SortOrder
    mealId?: SortOrder
  }

  export type RecipeMaxOrderByAggregateInput = {
    id?: SortOrder
    ingredients?: SortOrder
    steps?: SortOrder
    name?: SortOrder
    user?: SortOrder
    mealId?: SortOrder
  }

  export type RecipeMinOrderByAggregateInput = {
    id?: SortOrder
    ingredients?: SortOrder
    steps?: SortOrder
    name?: SortOrder
    user?: SortOrder
    mealId?: SortOrder
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    lastActive?: SortOrder
    enabled?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    enabled?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    lastActive?: SortOrder
    enabled?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    lastActive?: SortOrder
    enabled?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    enabled?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type RecipeCreateNestedManyWithoutMealInput = {
    create?: XOR<Enumerable<RecipeCreateWithoutMealInput>, Enumerable<RecipeUncheckedCreateWithoutMealInput>>
    connectOrCreate?: Enumerable<RecipeCreateOrConnectWithoutMealInput>
    connect?: Enumerable<RecipeWhereUniqueInput>
  }

  export type PlanCreateNestedOneWithoutMealsInput = {
    create?: XOR<PlanCreateWithoutMealsInput, PlanUncheckedCreateWithoutMealsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutMealsInput
    connect?: PlanWhereUniqueInput
  }

  export type RecipeUncheckedCreateNestedManyWithoutMealInput = {
    create?: XOR<Enumerable<RecipeCreateWithoutMealInput>, Enumerable<RecipeUncheckedCreateWithoutMealInput>>
    connectOrCreate?: Enumerable<RecipeCreateOrConnectWithoutMealInput>
    connect?: Enumerable<RecipeWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type RecipeUpdateManyWithoutMealInput = {
    create?: XOR<Enumerable<RecipeCreateWithoutMealInput>, Enumerable<RecipeUncheckedCreateWithoutMealInput>>
    connectOrCreate?: Enumerable<RecipeCreateOrConnectWithoutMealInput>
    upsert?: Enumerable<RecipeUpsertWithWhereUniqueWithoutMealInput>
    set?: Enumerable<RecipeWhereUniqueInput>
    disconnect?: Enumerable<RecipeWhereUniqueInput>
    delete?: Enumerable<RecipeWhereUniqueInput>
    connect?: Enumerable<RecipeWhereUniqueInput>
    update?: Enumerable<RecipeUpdateWithWhereUniqueWithoutMealInput>
    updateMany?: Enumerable<RecipeUpdateManyWithWhereWithoutMealInput>
    deleteMany?: Enumerable<RecipeScalarWhereInput>
  }

  export type PlanUpdateOneWithoutMealsInput = {
    create?: XOR<PlanCreateWithoutMealsInput, PlanUncheckedCreateWithoutMealsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutMealsInput
    upsert?: PlanUpsertWithoutMealsInput
    disconnect?: boolean
    delete?: boolean
    connect?: PlanWhereUniqueInput
    update?: XOR<PlanUpdateWithoutMealsInput, PlanUncheckedUpdateWithoutMealsInput>
  }

  export type RecipeUncheckedUpdateManyWithoutMealInput = {
    create?: XOR<Enumerable<RecipeCreateWithoutMealInput>, Enumerable<RecipeUncheckedCreateWithoutMealInput>>
    connectOrCreate?: Enumerable<RecipeCreateOrConnectWithoutMealInput>
    upsert?: Enumerable<RecipeUpsertWithWhereUniqueWithoutMealInput>
    set?: Enumerable<RecipeWhereUniqueInput>
    disconnect?: Enumerable<RecipeWhereUniqueInput>
    delete?: Enumerable<RecipeWhereUniqueInput>
    connect?: Enumerable<RecipeWhereUniqueInput>
    update?: Enumerable<RecipeUpdateWithWhereUniqueWithoutMealInput>
    updateMany?: Enumerable<RecipeUpdateManyWithWhereWithoutMealInput>
    deleteMany?: Enumerable<RecipeScalarWhereInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MealCreateNestedManyWithoutPlanInput = {
    create?: XOR<Enumerable<MealCreateWithoutPlanInput>, Enumerable<MealUncheckedCreateWithoutPlanInput>>
    connectOrCreate?: Enumerable<MealCreateOrConnectWithoutPlanInput>
    connect?: Enumerable<MealWhereUniqueInput>
  }

  export type MealUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<Enumerable<MealCreateWithoutPlanInput>, Enumerable<MealUncheckedCreateWithoutPlanInput>>
    connectOrCreate?: Enumerable<MealCreateOrConnectWithoutPlanInput>
    connect?: Enumerable<MealWhereUniqueInput>
  }

  export type MealUpdateManyWithoutPlanInput = {
    create?: XOR<Enumerable<MealCreateWithoutPlanInput>, Enumerable<MealUncheckedCreateWithoutPlanInput>>
    connectOrCreate?: Enumerable<MealCreateOrConnectWithoutPlanInput>
    upsert?: Enumerable<MealUpsertWithWhereUniqueWithoutPlanInput>
    set?: Enumerable<MealWhereUniqueInput>
    disconnect?: Enumerable<MealWhereUniqueInput>
    delete?: Enumerable<MealWhereUniqueInput>
    connect?: Enumerable<MealWhereUniqueInput>
    update?: Enumerable<MealUpdateWithWhereUniqueWithoutPlanInput>
    updateMany?: Enumerable<MealUpdateManyWithWhereWithoutPlanInput>
    deleteMany?: Enumerable<MealScalarWhereInput>
  }

  export type MealUncheckedUpdateManyWithoutPlanInput = {
    create?: XOR<Enumerable<MealCreateWithoutPlanInput>, Enumerable<MealUncheckedCreateWithoutPlanInput>>
    connectOrCreate?: Enumerable<MealCreateOrConnectWithoutPlanInput>
    upsert?: Enumerable<MealUpsertWithWhereUniqueWithoutPlanInput>
    set?: Enumerable<MealWhereUniqueInput>
    disconnect?: Enumerable<MealWhereUniqueInput>
    delete?: Enumerable<MealWhereUniqueInput>
    connect?: Enumerable<MealWhereUniqueInput>
    update?: Enumerable<MealUpdateWithWhereUniqueWithoutPlanInput>
    updateMany?: Enumerable<MealUpdateManyWithWhereWithoutPlanInput>
    deleteMany?: Enumerable<MealScalarWhereInput>
  }

  export type MealCreateNestedOneWithoutRecipesInput = {
    create?: XOR<MealCreateWithoutRecipesInput, MealUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: MealCreateOrConnectWithoutRecipesInput
    connect?: MealWhereUniqueInput
  }

  export type MealUpdateOneWithoutRecipesInput = {
    create?: XOR<MealCreateWithoutRecipesInput, MealUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: MealCreateOrConnectWithoutRecipesInput
    upsert?: MealUpsertWithoutRecipesInput
    disconnect?: boolean
    delete?: boolean
    connect?: MealWhereUniqueInput
    update?: XOR<MealUpdateWithoutRecipesInput, MealUncheckedUpdateWithoutRecipesInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type RecipeCreateWithoutMealInput = {
    id?: string
    ingredients: string
    steps: string
    name?: string | null
    user: string
  }

  export type RecipeUncheckedCreateWithoutMealInput = {
    id?: string
    ingredients: string
    steps: string
    name?: string | null
    user: string
  }

  export type RecipeCreateOrConnectWithoutMealInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutMealInput, RecipeUncheckedCreateWithoutMealInput>
  }

  export type PlanCreateWithoutMealsInput = {
    id?: string
    user: string
  }

  export type PlanUncheckedCreateWithoutMealsInput = {
    id?: string
    user: string
  }

  export type PlanCreateOrConnectWithoutMealsInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutMealsInput, PlanUncheckedCreateWithoutMealsInput>
  }

  export type RecipeUpsertWithWhereUniqueWithoutMealInput = {
    where: RecipeWhereUniqueInput
    update: XOR<RecipeUpdateWithoutMealInput, RecipeUncheckedUpdateWithoutMealInput>
    create: XOR<RecipeCreateWithoutMealInput, RecipeUncheckedCreateWithoutMealInput>
  }

  export type RecipeUpdateWithWhereUniqueWithoutMealInput = {
    where: RecipeWhereUniqueInput
    data: XOR<RecipeUpdateWithoutMealInput, RecipeUncheckedUpdateWithoutMealInput>
  }

  export type RecipeUpdateManyWithWhereWithoutMealInput = {
    where: RecipeScalarWhereInput
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyWithoutRecipesInput>
  }

  export type RecipeScalarWhereInput = {
    AND?: Enumerable<RecipeScalarWhereInput>
    OR?: Enumerable<RecipeScalarWhereInput>
    NOT?: Enumerable<RecipeScalarWhereInput>
    id?: StringFilter | string
    ingredients?: StringFilter | string
    steps?: StringFilter | string
    name?: StringNullableFilter | string | null
    user?: StringFilter | string
    mealId?: StringNullableFilter | string | null
  }

  export type PlanUpsertWithoutMealsInput = {
    update: XOR<PlanUpdateWithoutMealsInput, PlanUncheckedUpdateWithoutMealsInput>
    create: XOR<PlanCreateWithoutMealsInput, PlanUncheckedCreateWithoutMealsInput>
  }

  export type PlanUpdateWithoutMealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
  }

  export type PlanUncheckedUpdateWithoutMealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
  }

  export type MealCreateWithoutPlanInput = {
    id?: string
    recipes?: RecipeCreateNestedManyWithoutMealInput
    user: string
  }

  export type MealUncheckedCreateWithoutPlanInput = {
    id?: string
    recipes?: RecipeUncheckedCreateNestedManyWithoutMealInput
    user: string
  }

  export type MealCreateOrConnectWithoutPlanInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutPlanInput, MealUncheckedCreateWithoutPlanInput>
  }

  export type MealUpsertWithWhereUniqueWithoutPlanInput = {
    where: MealWhereUniqueInput
    update: XOR<MealUpdateWithoutPlanInput, MealUncheckedUpdateWithoutPlanInput>
    create: XOR<MealCreateWithoutPlanInput, MealUncheckedCreateWithoutPlanInput>
  }

  export type MealUpdateWithWhereUniqueWithoutPlanInput = {
    where: MealWhereUniqueInput
    data: XOR<MealUpdateWithoutPlanInput, MealUncheckedUpdateWithoutPlanInput>
  }

  export type MealUpdateManyWithWhereWithoutPlanInput = {
    where: MealScalarWhereInput
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyWithoutMealsInput>
  }

  export type MealScalarWhereInput = {
    AND?: Enumerable<MealScalarWhereInput>
    OR?: Enumerable<MealScalarWhereInput>
    NOT?: Enumerable<MealScalarWhereInput>
    id?: StringFilter | string
    user?: StringFilter | string
    planId?: StringNullableFilter | string | null
  }

  export type MealCreateWithoutRecipesInput = {
    id?: string
    user: string
    Plan?: PlanCreateNestedOneWithoutMealsInput
  }

  export type MealUncheckedCreateWithoutRecipesInput = {
    id?: string
    user: string
    planId?: string | null
  }

  export type MealCreateOrConnectWithoutRecipesInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutRecipesInput, MealUncheckedCreateWithoutRecipesInput>
  }

  export type MealUpsertWithoutRecipesInput = {
    update: XOR<MealUpdateWithoutRecipesInput, MealUncheckedUpdateWithoutRecipesInput>
    create: XOR<MealCreateWithoutRecipesInput, MealUncheckedCreateWithoutRecipesInput>
  }

  export type MealUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    Plan?: PlanUpdateOneWithoutMealsInput
  }

  export type MealUncheckedUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    planId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeUpdateWithoutMealInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredients?: StringFieldUpdateOperationsInput | string
    steps?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    user?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeUncheckedUpdateWithoutMealInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredients?: StringFieldUpdateOperationsInput | string
    steps?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    user?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeUncheckedUpdateManyWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredients?: StringFieldUpdateOperationsInput | string
    steps?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    user?: StringFieldUpdateOperationsInput | string
  }

  export type MealUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeUpdateManyWithoutMealInput
    user?: StringFieldUpdateOperationsInput | string
  }

  export type MealUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeUncheckedUpdateManyWithoutMealInput
    user?: StringFieldUpdateOperationsInput | string
  }

  export type MealUncheckedUpdateManyWithoutMealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
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
  export const dmmf: runtime.DMMF.Document;
}