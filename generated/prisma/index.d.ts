
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model UMLClass
 * 
 */
export type UMLClass = $Result.DefaultSelection<Prisma.$UMLClassPayload>
/**
 * Model UMLAttribute
 * 
 */
export type UMLAttribute = $Result.DefaultSelection<Prisma.$UMLAttributePayload>
/**
 * Model UMLMethod
 * 
 */
export type UMLMethod = $Result.DefaultSelection<Prisma.$UMLMethodPayload>
/**
 * Model UMLRelation
 * 
 */
export type UMLRelation = $Result.DefaultSelection<Prisma.$UMLRelationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Projects
 * const projects = await prisma.project.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.uMLClass`: Exposes CRUD operations for the **UMLClass** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UMLClasses
    * const uMLClasses = await prisma.uMLClass.findMany()
    * ```
    */
  get uMLClass(): Prisma.UMLClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uMLAttribute`: Exposes CRUD operations for the **UMLAttribute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UMLAttributes
    * const uMLAttributes = await prisma.uMLAttribute.findMany()
    * ```
    */
  get uMLAttribute(): Prisma.UMLAttributeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uMLMethod`: Exposes CRUD operations for the **UMLMethod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UMLMethods
    * const uMLMethods = await prisma.uMLMethod.findMany()
    * ```
    */
  get uMLMethod(): Prisma.UMLMethodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uMLRelation`: Exposes CRUD operations for the **UMLRelation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UMLRelations
    * const uMLRelations = await prisma.uMLRelation.findMany()
    * ```
    */
  get uMLRelation(): Prisma.UMLRelationDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Project: 'Project',
    UMLClass: 'UMLClass',
    UMLAttribute: 'UMLAttribute',
    UMLMethod: 'UMLMethod',
    UMLRelation: 'UMLRelation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "project" | "uMLClass" | "uMLAttribute" | "uMLMethod" | "uMLRelation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      UMLClass: {
        payload: Prisma.$UMLClassPayload<ExtArgs>
        fields: Prisma.UMLClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UMLClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UMLClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLClassPayload>
          }
          findFirst: {
            args: Prisma.UMLClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UMLClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLClassPayload>
          }
          findMany: {
            args: Prisma.UMLClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLClassPayload>[]
          }
          create: {
            args: Prisma.UMLClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLClassPayload>
          }
          createMany: {
            args: Prisma.UMLClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UMLClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLClassPayload>[]
          }
          delete: {
            args: Prisma.UMLClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLClassPayload>
          }
          update: {
            args: Prisma.UMLClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLClassPayload>
          }
          deleteMany: {
            args: Prisma.UMLClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UMLClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UMLClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLClassPayload>[]
          }
          upsert: {
            args: Prisma.UMLClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLClassPayload>
          }
          aggregate: {
            args: Prisma.UMLClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUMLClass>
          }
          groupBy: {
            args: Prisma.UMLClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<UMLClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.UMLClassCountArgs<ExtArgs>
            result: $Utils.Optional<UMLClassCountAggregateOutputType> | number
          }
        }
      }
      UMLAttribute: {
        payload: Prisma.$UMLAttributePayload<ExtArgs>
        fields: Prisma.UMLAttributeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UMLAttributeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLAttributePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UMLAttributeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLAttributePayload>
          }
          findFirst: {
            args: Prisma.UMLAttributeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLAttributePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UMLAttributeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLAttributePayload>
          }
          findMany: {
            args: Prisma.UMLAttributeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLAttributePayload>[]
          }
          create: {
            args: Prisma.UMLAttributeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLAttributePayload>
          }
          createMany: {
            args: Prisma.UMLAttributeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UMLAttributeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLAttributePayload>[]
          }
          delete: {
            args: Prisma.UMLAttributeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLAttributePayload>
          }
          update: {
            args: Prisma.UMLAttributeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLAttributePayload>
          }
          deleteMany: {
            args: Prisma.UMLAttributeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UMLAttributeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UMLAttributeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLAttributePayload>[]
          }
          upsert: {
            args: Prisma.UMLAttributeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLAttributePayload>
          }
          aggregate: {
            args: Prisma.UMLAttributeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUMLAttribute>
          }
          groupBy: {
            args: Prisma.UMLAttributeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UMLAttributeGroupByOutputType>[]
          }
          count: {
            args: Prisma.UMLAttributeCountArgs<ExtArgs>
            result: $Utils.Optional<UMLAttributeCountAggregateOutputType> | number
          }
        }
      }
      UMLMethod: {
        payload: Prisma.$UMLMethodPayload<ExtArgs>
        fields: Prisma.UMLMethodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UMLMethodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLMethodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UMLMethodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLMethodPayload>
          }
          findFirst: {
            args: Prisma.UMLMethodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLMethodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UMLMethodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLMethodPayload>
          }
          findMany: {
            args: Prisma.UMLMethodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLMethodPayload>[]
          }
          create: {
            args: Prisma.UMLMethodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLMethodPayload>
          }
          createMany: {
            args: Prisma.UMLMethodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UMLMethodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLMethodPayload>[]
          }
          delete: {
            args: Prisma.UMLMethodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLMethodPayload>
          }
          update: {
            args: Prisma.UMLMethodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLMethodPayload>
          }
          deleteMany: {
            args: Prisma.UMLMethodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UMLMethodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UMLMethodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLMethodPayload>[]
          }
          upsert: {
            args: Prisma.UMLMethodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLMethodPayload>
          }
          aggregate: {
            args: Prisma.UMLMethodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUMLMethod>
          }
          groupBy: {
            args: Prisma.UMLMethodGroupByArgs<ExtArgs>
            result: $Utils.Optional<UMLMethodGroupByOutputType>[]
          }
          count: {
            args: Prisma.UMLMethodCountArgs<ExtArgs>
            result: $Utils.Optional<UMLMethodCountAggregateOutputType> | number
          }
        }
      }
      UMLRelation: {
        payload: Prisma.$UMLRelationPayload<ExtArgs>
        fields: Prisma.UMLRelationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UMLRelationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLRelationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UMLRelationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLRelationPayload>
          }
          findFirst: {
            args: Prisma.UMLRelationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLRelationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UMLRelationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLRelationPayload>
          }
          findMany: {
            args: Prisma.UMLRelationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLRelationPayload>[]
          }
          create: {
            args: Prisma.UMLRelationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLRelationPayload>
          }
          createMany: {
            args: Prisma.UMLRelationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UMLRelationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLRelationPayload>[]
          }
          delete: {
            args: Prisma.UMLRelationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLRelationPayload>
          }
          update: {
            args: Prisma.UMLRelationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLRelationPayload>
          }
          deleteMany: {
            args: Prisma.UMLRelationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UMLRelationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UMLRelationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLRelationPayload>[]
          }
          upsert: {
            args: Prisma.UMLRelationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UMLRelationPayload>
          }
          aggregate: {
            args: Prisma.UMLRelationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUMLRelation>
          }
          groupBy: {
            args: Prisma.UMLRelationGroupByArgs<ExtArgs>
            result: $Utils.Optional<UMLRelationGroupByOutputType>[]
          }
          count: {
            args: Prisma.UMLRelationCountArgs<ExtArgs>
            result: $Utils.Optional<UMLRelationCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    project?: ProjectOmit
    uMLClass?: UMLClassOmit
    uMLAttribute?: UMLAttributeOmit
    uMLMethod?: UMLMethodOmit
    uMLRelation?: UMLRelationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    classes: number
    relations: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | ProjectCountOutputTypeCountClassesArgs
    relations?: boolean | ProjectCountOutputTypeCountRelationsArgs
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
  export type ProjectCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UMLClassWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UMLRelationWhereInput
  }


  /**
   * Count Type UMLClassCountOutputType
   */

  export type UMLClassCountOutputType = {
    attributes: number
    methods: number
  }

  export type UMLClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attributes?: boolean | UMLClassCountOutputTypeCountAttributesArgs
    methods?: boolean | UMLClassCountOutputTypeCountMethodsArgs
  }

  // Custom InputTypes
  /**
   * UMLClassCountOutputType without action
   */
  export type UMLClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLClassCountOutputType
     */
    select?: UMLClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UMLClassCountOutputType without action
   */
  export type UMLClassCountOutputTypeCountAttributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UMLAttributeWhereInput
  }

  /**
   * UMLClassCountOutputType without action
   */
  export type UMLClassCountOutputTypeCountMethodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UMLMethodWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
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
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    classes?: boolean | Project$classesArgs<ExtArgs>
    relations?: boolean | Project$relationsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | Project$classesArgs<ExtArgs>
    relations?: boolean | Project$relationsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      classes: Prisma.$UMLClassPayload<ExtArgs>[]
      relations: Prisma.$UMLRelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
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
    classes<T extends Project$classesArgs<ExtArgs> = {}>(args?: Subset<T, Project$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UMLClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    relations<T extends Project$relationsArgs<ExtArgs> = {}>(args?: Subset<T, Project$relationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UMLRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
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
   * Project.classes
   */
  export type Project$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLClass
     */
    select?: UMLClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLClass
     */
    omit?: UMLClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLClassInclude<ExtArgs> | null
    where?: UMLClassWhereInput
    orderBy?: UMLClassOrderByWithRelationInput | UMLClassOrderByWithRelationInput[]
    cursor?: UMLClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UMLClassScalarFieldEnum | UMLClassScalarFieldEnum[]
  }

  /**
   * Project.relations
   */
  export type Project$relationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLRelation
     */
    select?: UMLRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLRelation
     */
    omit?: UMLRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLRelationInclude<ExtArgs> | null
    where?: UMLRelationWhereInput
    orderBy?: UMLRelationOrderByWithRelationInput | UMLRelationOrderByWithRelationInput[]
    cursor?: UMLRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UMLRelationScalarFieldEnum | UMLRelationScalarFieldEnum[]
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
   * Model UMLClass
   */

  export type AggregateUMLClass = {
    _count: UMLClassCountAggregateOutputType | null
    _avg: UMLClassAvgAggregateOutputType | null
    _sum: UMLClassSumAggregateOutputType | null
    _min: UMLClassMinAggregateOutputType | null
    _max: UMLClassMaxAggregateOutputType | null
  }

  export type UMLClassAvgAggregateOutputType = {
    positionX: number | null
    positionY: number | null
  }

  export type UMLClassSumAggregateOutputType = {
    positionX: number | null
    positionY: number | null
  }

  export type UMLClassMinAggregateOutputType = {
    id: string | null
    name: string | null
    stereotype: string | null
    color: string | null
    positionX: number | null
    positionY: number | null
    projectId: string | null
  }

  export type UMLClassMaxAggregateOutputType = {
    id: string | null
    name: string | null
    stereotype: string | null
    color: string | null
    positionX: number | null
    positionY: number | null
    projectId: string | null
  }

  export type UMLClassCountAggregateOutputType = {
    id: number
    name: number
    stereotype: number
    color: number
    positionX: number
    positionY: number
    projectId: number
    _all: number
  }


  export type UMLClassAvgAggregateInputType = {
    positionX?: true
    positionY?: true
  }

  export type UMLClassSumAggregateInputType = {
    positionX?: true
    positionY?: true
  }

  export type UMLClassMinAggregateInputType = {
    id?: true
    name?: true
    stereotype?: true
    color?: true
    positionX?: true
    positionY?: true
    projectId?: true
  }

  export type UMLClassMaxAggregateInputType = {
    id?: true
    name?: true
    stereotype?: true
    color?: true
    positionX?: true
    positionY?: true
    projectId?: true
  }

  export type UMLClassCountAggregateInputType = {
    id?: true
    name?: true
    stereotype?: true
    color?: true
    positionX?: true
    positionY?: true
    projectId?: true
    _all?: true
  }

  export type UMLClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UMLClass to aggregate.
     */
    where?: UMLClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UMLClasses to fetch.
     */
    orderBy?: UMLClassOrderByWithRelationInput | UMLClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UMLClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UMLClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UMLClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UMLClasses
    **/
    _count?: true | UMLClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UMLClassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UMLClassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UMLClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UMLClassMaxAggregateInputType
  }

  export type GetUMLClassAggregateType<T extends UMLClassAggregateArgs> = {
        [P in keyof T & keyof AggregateUMLClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUMLClass[P]>
      : GetScalarType<T[P], AggregateUMLClass[P]>
  }




  export type UMLClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UMLClassWhereInput
    orderBy?: UMLClassOrderByWithAggregationInput | UMLClassOrderByWithAggregationInput[]
    by: UMLClassScalarFieldEnum[] | UMLClassScalarFieldEnum
    having?: UMLClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UMLClassCountAggregateInputType | true
    _avg?: UMLClassAvgAggregateInputType
    _sum?: UMLClassSumAggregateInputType
    _min?: UMLClassMinAggregateInputType
    _max?: UMLClassMaxAggregateInputType
  }

  export type UMLClassGroupByOutputType = {
    id: string
    name: string
    stereotype: string | null
    color: string
    positionX: number
    positionY: number
    projectId: string
    _count: UMLClassCountAggregateOutputType | null
    _avg: UMLClassAvgAggregateOutputType | null
    _sum: UMLClassSumAggregateOutputType | null
    _min: UMLClassMinAggregateOutputType | null
    _max: UMLClassMaxAggregateOutputType | null
  }

  type GetUMLClassGroupByPayload<T extends UMLClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UMLClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UMLClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UMLClassGroupByOutputType[P]>
            : GetScalarType<T[P], UMLClassGroupByOutputType[P]>
        }
      >
    >


  export type UMLClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stereotype?: boolean
    color?: boolean
    positionX?: boolean
    positionY?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    attributes?: boolean | UMLClass$attributesArgs<ExtArgs>
    methods?: boolean | UMLClass$methodsArgs<ExtArgs>
    _count?: boolean | UMLClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uMLClass"]>

  export type UMLClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stereotype?: boolean
    color?: boolean
    positionX?: boolean
    positionY?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uMLClass"]>

  export type UMLClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stereotype?: boolean
    color?: boolean
    positionX?: boolean
    positionY?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uMLClass"]>

  export type UMLClassSelectScalar = {
    id?: boolean
    name?: boolean
    stereotype?: boolean
    color?: boolean
    positionX?: boolean
    positionY?: boolean
    projectId?: boolean
  }

  export type UMLClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "stereotype" | "color" | "positionX" | "positionY" | "projectId", ExtArgs["result"]["uMLClass"]>
  export type UMLClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    attributes?: boolean | UMLClass$attributesArgs<ExtArgs>
    methods?: boolean | UMLClass$methodsArgs<ExtArgs>
    _count?: boolean | UMLClassCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UMLClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type UMLClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $UMLClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UMLClass"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      attributes: Prisma.$UMLAttributePayload<ExtArgs>[]
      methods: Prisma.$UMLMethodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      stereotype: string | null
      color: string
      positionX: number
      positionY: number
      projectId: string
    }, ExtArgs["result"]["uMLClass"]>
    composites: {}
  }

  type UMLClassGetPayload<S extends boolean | null | undefined | UMLClassDefaultArgs> = $Result.GetResult<Prisma.$UMLClassPayload, S>

  type UMLClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UMLClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UMLClassCountAggregateInputType | true
    }

  export interface UMLClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UMLClass'], meta: { name: 'UMLClass' } }
    /**
     * Find zero or one UMLClass that matches the filter.
     * @param {UMLClassFindUniqueArgs} args - Arguments to find a UMLClass
     * @example
     * // Get one UMLClass
     * const uMLClass = await prisma.uMLClass.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UMLClassFindUniqueArgs>(args: SelectSubset<T, UMLClassFindUniqueArgs<ExtArgs>>): Prisma__UMLClassClient<$Result.GetResult<Prisma.$UMLClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UMLClass that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UMLClassFindUniqueOrThrowArgs} args - Arguments to find a UMLClass
     * @example
     * // Get one UMLClass
     * const uMLClass = await prisma.uMLClass.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UMLClassFindUniqueOrThrowArgs>(args: SelectSubset<T, UMLClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UMLClassClient<$Result.GetResult<Prisma.$UMLClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UMLClass that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UMLClassFindFirstArgs} args - Arguments to find a UMLClass
     * @example
     * // Get one UMLClass
     * const uMLClass = await prisma.uMLClass.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UMLClassFindFirstArgs>(args?: SelectSubset<T, UMLClassFindFirstArgs<ExtArgs>>): Prisma__UMLClassClient<$Result.GetResult<Prisma.$UMLClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UMLClass that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UMLClassFindFirstOrThrowArgs} args - Arguments to find a UMLClass
     * @example
     * // Get one UMLClass
     * const uMLClass = await prisma.uMLClass.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UMLClassFindFirstOrThrowArgs>(args?: SelectSubset<T, UMLClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__UMLClassClient<$Result.GetResult<Prisma.$UMLClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UMLClasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UMLClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UMLClasses
     * const uMLClasses = await prisma.uMLClass.findMany()
     * 
     * // Get first 10 UMLClasses
     * const uMLClasses = await prisma.uMLClass.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uMLClassWithIdOnly = await prisma.uMLClass.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UMLClassFindManyArgs>(args?: SelectSubset<T, UMLClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UMLClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UMLClass.
     * @param {UMLClassCreateArgs} args - Arguments to create a UMLClass.
     * @example
     * // Create one UMLClass
     * const UMLClass = await prisma.uMLClass.create({
     *   data: {
     *     // ... data to create a UMLClass
     *   }
     * })
     * 
     */
    create<T extends UMLClassCreateArgs>(args: SelectSubset<T, UMLClassCreateArgs<ExtArgs>>): Prisma__UMLClassClient<$Result.GetResult<Prisma.$UMLClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UMLClasses.
     * @param {UMLClassCreateManyArgs} args - Arguments to create many UMLClasses.
     * @example
     * // Create many UMLClasses
     * const uMLClass = await prisma.uMLClass.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UMLClassCreateManyArgs>(args?: SelectSubset<T, UMLClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UMLClasses and returns the data saved in the database.
     * @param {UMLClassCreateManyAndReturnArgs} args - Arguments to create many UMLClasses.
     * @example
     * // Create many UMLClasses
     * const uMLClass = await prisma.uMLClass.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UMLClasses and only return the `id`
     * const uMLClassWithIdOnly = await prisma.uMLClass.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UMLClassCreateManyAndReturnArgs>(args?: SelectSubset<T, UMLClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UMLClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UMLClass.
     * @param {UMLClassDeleteArgs} args - Arguments to delete one UMLClass.
     * @example
     * // Delete one UMLClass
     * const UMLClass = await prisma.uMLClass.delete({
     *   where: {
     *     // ... filter to delete one UMLClass
     *   }
     * })
     * 
     */
    delete<T extends UMLClassDeleteArgs>(args: SelectSubset<T, UMLClassDeleteArgs<ExtArgs>>): Prisma__UMLClassClient<$Result.GetResult<Prisma.$UMLClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UMLClass.
     * @param {UMLClassUpdateArgs} args - Arguments to update one UMLClass.
     * @example
     * // Update one UMLClass
     * const uMLClass = await prisma.uMLClass.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UMLClassUpdateArgs>(args: SelectSubset<T, UMLClassUpdateArgs<ExtArgs>>): Prisma__UMLClassClient<$Result.GetResult<Prisma.$UMLClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UMLClasses.
     * @param {UMLClassDeleteManyArgs} args - Arguments to filter UMLClasses to delete.
     * @example
     * // Delete a few UMLClasses
     * const { count } = await prisma.uMLClass.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UMLClassDeleteManyArgs>(args?: SelectSubset<T, UMLClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UMLClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UMLClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UMLClasses
     * const uMLClass = await prisma.uMLClass.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UMLClassUpdateManyArgs>(args: SelectSubset<T, UMLClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UMLClasses and returns the data updated in the database.
     * @param {UMLClassUpdateManyAndReturnArgs} args - Arguments to update many UMLClasses.
     * @example
     * // Update many UMLClasses
     * const uMLClass = await prisma.uMLClass.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UMLClasses and only return the `id`
     * const uMLClassWithIdOnly = await prisma.uMLClass.updateManyAndReturn({
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
    updateManyAndReturn<T extends UMLClassUpdateManyAndReturnArgs>(args: SelectSubset<T, UMLClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UMLClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UMLClass.
     * @param {UMLClassUpsertArgs} args - Arguments to update or create a UMLClass.
     * @example
     * // Update or create a UMLClass
     * const uMLClass = await prisma.uMLClass.upsert({
     *   create: {
     *     // ... data to create a UMLClass
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UMLClass we want to update
     *   }
     * })
     */
    upsert<T extends UMLClassUpsertArgs>(args: SelectSubset<T, UMLClassUpsertArgs<ExtArgs>>): Prisma__UMLClassClient<$Result.GetResult<Prisma.$UMLClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UMLClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UMLClassCountArgs} args - Arguments to filter UMLClasses to count.
     * @example
     * // Count the number of UMLClasses
     * const count = await prisma.uMLClass.count({
     *   where: {
     *     // ... the filter for the UMLClasses we want to count
     *   }
     * })
    **/
    count<T extends UMLClassCountArgs>(
      args?: Subset<T, UMLClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UMLClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UMLClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UMLClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UMLClassAggregateArgs>(args: Subset<T, UMLClassAggregateArgs>): Prisma.PrismaPromise<GetUMLClassAggregateType<T>>

    /**
     * Group by UMLClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UMLClassGroupByArgs} args - Group by arguments.
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
      T extends UMLClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UMLClassGroupByArgs['orderBy'] }
        : { orderBy?: UMLClassGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UMLClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUMLClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UMLClass model
   */
  readonly fields: UMLClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UMLClass.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UMLClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attributes<T extends UMLClass$attributesArgs<ExtArgs> = {}>(args?: Subset<T, UMLClass$attributesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UMLAttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    methods<T extends UMLClass$methodsArgs<ExtArgs> = {}>(args?: Subset<T, UMLClass$methodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UMLMethodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UMLClass model
   */
  interface UMLClassFieldRefs {
    readonly id: FieldRef<"UMLClass", 'String'>
    readonly name: FieldRef<"UMLClass", 'String'>
    readonly stereotype: FieldRef<"UMLClass", 'String'>
    readonly color: FieldRef<"UMLClass", 'String'>
    readonly positionX: FieldRef<"UMLClass", 'Float'>
    readonly positionY: FieldRef<"UMLClass", 'Float'>
    readonly projectId: FieldRef<"UMLClass", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UMLClass findUnique
   */
  export type UMLClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLClass
     */
    select?: UMLClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLClass
     */
    omit?: UMLClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLClassInclude<ExtArgs> | null
    /**
     * Filter, which UMLClass to fetch.
     */
    where: UMLClassWhereUniqueInput
  }

  /**
   * UMLClass findUniqueOrThrow
   */
  export type UMLClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLClass
     */
    select?: UMLClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLClass
     */
    omit?: UMLClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLClassInclude<ExtArgs> | null
    /**
     * Filter, which UMLClass to fetch.
     */
    where: UMLClassWhereUniqueInput
  }

  /**
   * UMLClass findFirst
   */
  export type UMLClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLClass
     */
    select?: UMLClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLClass
     */
    omit?: UMLClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLClassInclude<ExtArgs> | null
    /**
     * Filter, which UMLClass to fetch.
     */
    where?: UMLClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UMLClasses to fetch.
     */
    orderBy?: UMLClassOrderByWithRelationInput | UMLClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UMLClasses.
     */
    cursor?: UMLClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UMLClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UMLClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UMLClasses.
     */
    distinct?: UMLClassScalarFieldEnum | UMLClassScalarFieldEnum[]
  }

  /**
   * UMLClass findFirstOrThrow
   */
  export type UMLClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLClass
     */
    select?: UMLClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLClass
     */
    omit?: UMLClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLClassInclude<ExtArgs> | null
    /**
     * Filter, which UMLClass to fetch.
     */
    where?: UMLClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UMLClasses to fetch.
     */
    orderBy?: UMLClassOrderByWithRelationInput | UMLClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UMLClasses.
     */
    cursor?: UMLClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UMLClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UMLClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UMLClasses.
     */
    distinct?: UMLClassScalarFieldEnum | UMLClassScalarFieldEnum[]
  }

  /**
   * UMLClass findMany
   */
  export type UMLClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLClass
     */
    select?: UMLClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLClass
     */
    omit?: UMLClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLClassInclude<ExtArgs> | null
    /**
     * Filter, which UMLClasses to fetch.
     */
    where?: UMLClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UMLClasses to fetch.
     */
    orderBy?: UMLClassOrderByWithRelationInput | UMLClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UMLClasses.
     */
    cursor?: UMLClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UMLClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UMLClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UMLClasses.
     */
    distinct?: UMLClassScalarFieldEnum | UMLClassScalarFieldEnum[]
  }

  /**
   * UMLClass create
   */
  export type UMLClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLClass
     */
    select?: UMLClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLClass
     */
    omit?: UMLClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLClassInclude<ExtArgs> | null
    /**
     * The data needed to create a UMLClass.
     */
    data: XOR<UMLClassCreateInput, UMLClassUncheckedCreateInput>
  }

  /**
   * UMLClass createMany
   */
  export type UMLClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UMLClasses.
     */
    data: UMLClassCreateManyInput | UMLClassCreateManyInput[]
  }

  /**
   * UMLClass createManyAndReturn
   */
  export type UMLClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLClass
     */
    select?: UMLClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UMLClass
     */
    omit?: UMLClassOmit<ExtArgs> | null
    /**
     * The data used to create many UMLClasses.
     */
    data: UMLClassCreateManyInput | UMLClassCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLClassIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UMLClass update
   */
  export type UMLClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLClass
     */
    select?: UMLClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLClass
     */
    omit?: UMLClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLClassInclude<ExtArgs> | null
    /**
     * The data needed to update a UMLClass.
     */
    data: XOR<UMLClassUpdateInput, UMLClassUncheckedUpdateInput>
    /**
     * Choose, which UMLClass to update.
     */
    where: UMLClassWhereUniqueInput
  }

  /**
   * UMLClass updateMany
   */
  export type UMLClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UMLClasses.
     */
    data: XOR<UMLClassUpdateManyMutationInput, UMLClassUncheckedUpdateManyInput>
    /**
     * Filter which UMLClasses to update
     */
    where?: UMLClassWhereInput
    /**
     * Limit how many UMLClasses to update.
     */
    limit?: number
  }

  /**
   * UMLClass updateManyAndReturn
   */
  export type UMLClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLClass
     */
    select?: UMLClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UMLClass
     */
    omit?: UMLClassOmit<ExtArgs> | null
    /**
     * The data used to update UMLClasses.
     */
    data: XOR<UMLClassUpdateManyMutationInput, UMLClassUncheckedUpdateManyInput>
    /**
     * Filter which UMLClasses to update
     */
    where?: UMLClassWhereInput
    /**
     * Limit how many UMLClasses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLClassIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UMLClass upsert
   */
  export type UMLClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLClass
     */
    select?: UMLClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLClass
     */
    omit?: UMLClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLClassInclude<ExtArgs> | null
    /**
     * The filter to search for the UMLClass to update in case it exists.
     */
    where: UMLClassWhereUniqueInput
    /**
     * In case the UMLClass found by the `where` argument doesn't exist, create a new UMLClass with this data.
     */
    create: XOR<UMLClassCreateInput, UMLClassUncheckedCreateInput>
    /**
     * In case the UMLClass was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UMLClassUpdateInput, UMLClassUncheckedUpdateInput>
  }

  /**
   * UMLClass delete
   */
  export type UMLClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLClass
     */
    select?: UMLClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLClass
     */
    omit?: UMLClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLClassInclude<ExtArgs> | null
    /**
     * Filter which UMLClass to delete.
     */
    where: UMLClassWhereUniqueInput
  }

  /**
   * UMLClass deleteMany
   */
  export type UMLClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UMLClasses to delete
     */
    where?: UMLClassWhereInput
    /**
     * Limit how many UMLClasses to delete.
     */
    limit?: number
  }

  /**
   * UMLClass.attributes
   */
  export type UMLClass$attributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLAttribute
     */
    select?: UMLAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLAttribute
     */
    omit?: UMLAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLAttributeInclude<ExtArgs> | null
    where?: UMLAttributeWhereInput
    orderBy?: UMLAttributeOrderByWithRelationInput | UMLAttributeOrderByWithRelationInput[]
    cursor?: UMLAttributeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UMLAttributeScalarFieldEnum | UMLAttributeScalarFieldEnum[]
  }

  /**
   * UMLClass.methods
   */
  export type UMLClass$methodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLMethod
     */
    select?: UMLMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLMethod
     */
    omit?: UMLMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLMethodInclude<ExtArgs> | null
    where?: UMLMethodWhereInput
    orderBy?: UMLMethodOrderByWithRelationInput | UMLMethodOrderByWithRelationInput[]
    cursor?: UMLMethodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UMLMethodScalarFieldEnum | UMLMethodScalarFieldEnum[]
  }

  /**
   * UMLClass without action
   */
  export type UMLClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLClass
     */
    select?: UMLClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLClass
     */
    omit?: UMLClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLClassInclude<ExtArgs> | null
  }


  /**
   * Model UMLAttribute
   */

  export type AggregateUMLAttribute = {
    _count: UMLAttributeCountAggregateOutputType | null
    _min: UMLAttributeMinAggregateOutputType | null
    _max: UMLAttributeMaxAggregateOutputType | null
  }

  export type UMLAttributeMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    visibility: string | null
    classId: string | null
  }

  export type UMLAttributeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    visibility: string | null
    classId: string | null
  }

  export type UMLAttributeCountAggregateOutputType = {
    id: number
    name: number
    type: number
    visibility: number
    classId: number
    _all: number
  }


  export type UMLAttributeMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    visibility?: true
    classId?: true
  }

  export type UMLAttributeMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    visibility?: true
    classId?: true
  }

  export type UMLAttributeCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    visibility?: true
    classId?: true
    _all?: true
  }

  export type UMLAttributeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UMLAttribute to aggregate.
     */
    where?: UMLAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UMLAttributes to fetch.
     */
    orderBy?: UMLAttributeOrderByWithRelationInput | UMLAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UMLAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UMLAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UMLAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UMLAttributes
    **/
    _count?: true | UMLAttributeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UMLAttributeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UMLAttributeMaxAggregateInputType
  }

  export type GetUMLAttributeAggregateType<T extends UMLAttributeAggregateArgs> = {
        [P in keyof T & keyof AggregateUMLAttribute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUMLAttribute[P]>
      : GetScalarType<T[P], AggregateUMLAttribute[P]>
  }




  export type UMLAttributeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UMLAttributeWhereInput
    orderBy?: UMLAttributeOrderByWithAggregationInput | UMLAttributeOrderByWithAggregationInput[]
    by: UMLAttributeScalarFieldEnum[] | UMLAttributeScalarFieldEnum
    having?: UMLAttributeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UMLAttributeCountAggregateInputType | true
    _min?: UMLAttributeMinAggregateInputType
    _max?: UMLAttributeMaxAggregateInputType
  }

  export type UMLAttributeGroupByOutputType = {
    id: string
    name: string
    type: string
    visibility: string
    classId: string
    _count: UMLAttributeCountAggregateOutputType | null
    _min: UMLAttributeMinAggregateOutputType | null
    _max: UMLAttributeMaxAggregateOutputType | null
  }

  type GetUMLAttributeGroupByPayload<T extends UMLAttributeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UMLAttributeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UMLAttributeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UMLAttributeGroupByOutputType[P]>
            : GetScalarType<T[P], UMLAttributeGroupByOutputType[P]>
        }
      >
    >


  export type UMLAttributeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    visibility?: boolean
    classId?: boolean
    class?: boolean | UMLClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uMLAttribute"]>

  export type UMLAttributeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    visibility?: boolean
    classId?: boolean
    class?: boolean | UMLClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uMLAttribute"]>

  export type UMLAttributeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    visibility?: boolean
    classId?: boolean
    class?: boolean | UMLClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uMLAttribute"]>

  export type UMLAttributeSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    visibility?: boolean
    classId?: boolean
  }

  export type UMLAttributeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "visibility" | "classId", ExtArgs["result"]["uMLAttribute"]>
  export type UMLAttributeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | UMLClassDefaultArgs<ExtArgs>
  }
  export type UMLAttributeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | UMLClassDefaultArgs<ExtArgs>
  }
  export type UMLAttributeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | UMLClassDefaultArgs<ExtArgs>
  }

  export type $UMLAttributePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UMLAttribute"
    objects: {
      class: Prisma.$UMLClassPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      visibility: string
      classId: string
    }, ExtArgs["result"]["uMLAttribute"]>
    composites: {}
  }

  type UMLAttributeGetPayload<S extends boolean | null | undefined | UMLAttributeDefaultArgs> = $Result.GetResult<Prisma.$UMLAttributePayload, S>

  type UMLAttributeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UMLAttributeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UMLAttributeCountAggregateInputType | true
    }

  export interface UMLAttributeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UMLAttribute'], meta: { name: 'UMLAttribute' } }
    /**
     * Find zero or one UMLAttribute that matches the filter.
     * @param {UMLAttributeFindUniqueArgs} args - Arguments to find a UMLAttribute
     * @example
     * // Get one UMLAttribute
     * const uMLAttribute = await prisma.uMLAttribute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UMLAttributeFindUniqueArgs>(args: SelectSubset<T, UMLAttributeFindUniqueArgs<ExtArgs>>): Prisma__UMLAttributeClient<$Result.GetResult<Prisma.$UMLAttributePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UMLAttribute that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UMLAttributeFindUniqueOrThrowArgs} args - Arguments to find a UMLAttribute
     * @example
     * // Get one UMLAttribute
     * const uMLAttribute = await prisma.uMLAttribute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UMLAttributeFindUniqueOrThrowArgs>(args: SelectSubset<T, UMLAttributeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UMLAttributeClient<$Result.GetResult<Prisma.$UMLAttributePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UMLAttribute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UMLAttributeFindFirstArgs} args - Arguments to find a UMLAttribute
     * @example
     * // Get one UMLAttribute
     * const uMLAttribute = await prisma.uMLAttribute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UMLAttributeFindFirstArgs>(args?: SelectSubset<T, UMLAttributeFindFirstArgs<ExtArgs>>): Prisma__UMLAttributeClient<$Result.GetResult<Prisma.$UMLAttributePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UMLAttribute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UMLAttributeFindFirstOrThrowArgs} args - Arguments to find a UMLAttribute
     * @example
     * // Get one UMLAttribute
     * const uMLAttribute = await prisma.uMLAttribute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UMLAttributeFindFirstOrThrowArgs>(args?: SelectSubset<T, UMLAttributeFindFirstOrThrowArgs<ExtArgs>>): Prisma__UMLAttributeClient<$Result.GetResult<Prisma.$UMLAttributePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UMLAttributes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UMLAttributeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UMLAttributes
     * const uMLAttributes = await prisma.uMLAttribute.findMany()
     * 
     * // Get first 10 UMLAttributes
     * const uMLAttributes = await prisma.uMLAttribute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uMLAttributeWithIdOnly = await prisma.uMLAttribute.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UMLAttributeFindManyArgs>(args?: SelectSubset<T, UMLAttributeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UMLAttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UMLAttribute.
     * @param {UMLAttributeCreateArgs} args - Arguments to create a UMLAttribute.
     * @example
     * // Create one UMLAttribute
     * const UMLAttribute = await prisma.uMLAttribute.create({
     *   data: {
     *     // ... data to create a UMLAttribute
     *   }
     * })
     * 
     */
    create<T extends UMLAttributeCreateArgs>(args: SelectSubset<T, UMLAttributeCreateArgs<ExtArgs>>): Prisma__UMLAttributeClient<$Result.GetResult<Prisma.$UMLAttributePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UMLAttributes.
     * @param {UMLAttributeCreateManyArgs} args - Arguments to create many UMLAttributes.
     * @example
     * // Create many UMLAttributes
     * const uMLAttribute = await prisma.uMLAttribute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UMLAttributeCreateManyArgs>(args?: SelectSubset<T, UMLAttributeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UMLAttributes and returns the data saved in the database.
     * @param {UMLAttributeCreateManyAndReturnArgs} args - Arguments to create many UMLAttributes.
     * @example
     * // Create many UMLAttributes
     * const uMLAttribute = await prisma.uMLAttribute.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UMLAttributes and only return the `id`
     * const uMLAttributeWithIdOnly = await prisma.uMLAttribute.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UMLAttributeCreateManyAndReturnArgs>(args?: SelectSubset<T, UMLAttributeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UMLAttributePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UMLAttribute.
     * @param {UMLAttributeDeleteArgs} args - Arguments to delete one UMLAttribute.
     * @example
     * // Delete one UMLAttribute
     * const UMLAttribute = await prisma.uMLAttribute.delete({
     *   where: {
     *     // ... filter to delete one UMLAttribute
     *   }
     * })
     * 
     */
    delete<T extends UMLAttributeDeleteArgs>(args: SelectSubset<T, UMLAttributeDeleteArgs<ExtArgs>>): Prisma__UMLAttributeClient<$Result.GetResult<Prisma.$UMLAttributePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UMLAttribute.
     * @param {UMLAttributeUpdateArgs} args - Arguments to update one UMLAttribute.
     * @example
     * // Update one UMLAttribute
     * const uMLAttribute = await prisma.uMLAttribute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UMLAttributeUpdateArgs>(args: SelectSubset<T, UMLAttributeUpdateArgs<ExtArgs>>): Prisma__UMLAttributeClient<$Result.GetResult<Prisma.$UMLAttributePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UMLAttributes.
     * @param {UMLAttributeDeleteManyArgs} args - Arguments to filter UMLAttributes to delete.
     * @example
     * // Delete a few UMLAttributes
     * const { count } = await prisma.uMLAttribute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UMLAttributeDeleteManyArgs>(args?: SelectSubset<T, UMLAttributeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UMLAttributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UMLAttributeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UMLAttributes
     * const uMLAttribute = await prisma.uMLAttribute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UMLAttributeUpdateManyArgs>(args: SelectSubset<T, UMLAttributeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UMLAttributes and returns the data updated in the database.
     * @param {UMLAttributeUpdateManyAndReturnArgs} args - Arguments to update many UMLAttributes.
     * @example
     * // Update many UMLAttributes
     * const uMLAttribute = await prisma.uMLAttribute.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UMLAttributes and only return the `id`
     * const uMLAttributeWithIdOnly = await prisma.uMLAttribute.updateManyAndReturn({
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
    updateManyAndReturn<T extends UMLAttributeUpdateManyAndReturnArgs>(args: SelectSubset<T, UMLAttributeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UMLAttributePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UMLAttribute.
     * @param {UMLAttributeUpsertArgs} args - Arguments to update or create a UMLAttribute.
     * @example
     * // Update or create a UMLAttribute
     * const uMLAttribute = await prisma.uMLAttribute.upsert({
     *   create: {
     *     // ... data to create a UMLAttribute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UMLAttribute we want to update
     *   }
     * })
     */
    upsert<T extends UMLAttributeUpsertArgs>(args: SelectSubset<T, UMLAttributeUpsertArgs<ExtArgs>>): Prisma__UMLAttributeClient<$Result.GetResult<Prisma.$UMLAttributePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UMLAttributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UMLAttributeCountArgs} args - Arguments to filter UMLAttributes to count.
     * @example
     * // Count the number of UMLAttributes
     * const count = await prisma.uMLAttribute.count({
     *   where: {
     *     // ... the filter for the UMLAttributes we want to count
     *   }
     * })
    **/
    count<T extends UMLAttributeCountArgs>(
      args?: Subset<T, UMLAttributeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UMLAttributeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UMLAttribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UMLAttributeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UMLAttributeAggregateArgs>(args: Subset<T, UMLAttributeAggregateArgs>): Prisma.PrismaPromise<GetUMLAttributeAggregateType<T>>

    /**
     * Group by UMLAttribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UMLAttributeGroupByArgs} args - Group by arguments.
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
      T extends UMLAttributeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UMLAttributeGroupByArgs['orderBy'] }
        : { orderBy?: UMLAttributeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UMLAttributeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUMLAttributeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UMLAttribute model
   */
  readonly fields: UMLAttributeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UMLAttribute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UMLAttributeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends UMLClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UMLClassDefaultArgs<ExtArgs>>): Prisma__UMLClassClient<$Result.GetResult<Prisma.$UMLClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UMLAttribute model
   */
  interface UMLAttributeFieldRefs {
    readonly id: FieldRef<"UMLAttribute", 'String'>
    readonly name: FieldRef<"UMLAttribute", 'String'>
    readonly type: FieldRef<"UMLAttribute", 'String'>
    readonly visibility: FieldRef<"UMLAttribute", 'String'>
    readonly classId: FieldRef<"UMLAttribute", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UMLAttribute findUnique
   */
  export type UMLAttributeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLAttribute
     */
    select?: UMLAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLAttribute
     */
    omit?: UMLAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLAttributeInclude<ExtArgs> | null
    /**
     * Filter, which UMLAttribute to fetch.
     */
    where: UMLAttributeWhereUniqueInput
  }

  /**
   * UMLAttribute findUniqueOrThrow
   */
  export type UMLAttributeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLAttribute
     */
    select?: UMLAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLAttribute
     */
    omit?: UMLAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLAttributeInclude<ExtArgs> | null
    /**
     * Filter, which UMLAttribute to fetch.
     */
    where: UMLAttributeWhereUniqueInput
  }

  /**
   * UMLAttribute findFirst
   */
  export type UMLAttributeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLAttribute
     */
    select?: UMLAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLAttribute
     */
    omit?: UMLAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLAttributeInclude<ExtArgs> | null
    /**
     * Filter, which UMLAttribute to fetch.
     */
    where?: UMLAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UMLAttributes to fetch.
     */
    orderBy?: UMLAttributeOrderByWithRelationInput | UMLAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UMLAttributes.
     */
    cursor?: UMLAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UMLAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UMLAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UMLAttributes.
     */
    distinct?: UMLAttributeScalarFieldEnum | UMLAttributeScalarFieldEnum[]
  }

  /**
   * UMLAttribute findFirstOrThrow
   */
  export type UMLAttributeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLAttribute
     */
    select?: UMLAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLAttribute
     */
    omit?: UMLAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLAttributeInclude<ExtArgs> | null
    /**
     * Filter, which UMLAttribute to fetch.
     */
    where?: UMLAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UMLAttributes to fetch.
     */
    orderBy?: UMLAttributeOrderByWithRelationInput | UMLAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UMLAttributes.
     */
    cursor?: UMLAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UMLAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UMLAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UMLAttributes.
     */
    distinct?: UMLAttributeScalarFieldEnum | UMLAttributeScalarFieldEnum[]
  }

  /**
   * UMLAttribute findMany
   */
  export type UMLAttributeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLAttribute
     */
    select?: UMLAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLAttribute
     */
    omit?: UMLAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLAttributeInclude<ExtArgs> | null
    /**
     * Filter, which UMLAttributes to fetch.
     */
    where?: UMLAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UMLAttributes to fetch.
     */
    orderBy?: UMLAttributeOrderByWithRelationInput | UMLAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UMLAttributes.
     */
    cursor?: UMLAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UMLAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UMLAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UMLAttributes.
     */
    distinct?: UMLAttributeScalarFieldEnum | UMLAttributeScalarFieldEnum[]
  }

  /**
   * UMLAttribute create
   */
  export type UMLAttributeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLAttribute
     */
    select?: UMLAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLAttribute
     */
    omit?: UMLAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLAttributeInclude<ExtArgs> | null
    /**
     * The data needed to create a UMLAttribute.
     */
    data: XOR<UMLAttributeCreateInput, UMLAttributeUncheckedCreateInput>
  }

  /**
   * UMLAttribute createMany
   */
  export type UMLAttributeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UMLAttributes.
     */
    data: UMLAttributeCreateManyInput | UMLAttributeCreateManyInput[]
  }

  /**
   * UMLAttribute createManyAndReturn
   */
  export type UMLAttributeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLAttribute
     */
    select?: UMLAttributeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UMLAttribute
     */
    omit?: UMLAttributeOmit<ExtArgs> | null
    /**
     * The data used to create many UMLAttributes.
     */
    data: UMLAttributeCreateManyInput | UMLAttributeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLAttributeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UMLAttribute update
   */
  export type UMLAttributeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLAttribute
     */
    select?: UMLAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLAttribute
     */
    omit?: UMLAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLAttributeInclude<ExtArgs> | null
    /**
     * The data needed to update a UMLAttribute.
     */
    data: XOR<UMLAttributeUpdateInput, UMLAttributeUncheckedUpdateInput>
    /**
     * Choose, which UMLAttribute to update.
     */
    where: UMLAttributeWhereUniqueInput
  }

  /**
   * UMLAttribute updateMany
   */
  export type UMLAttributeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UMLAttributes.
     */
    data: XOR<UMLAttributeUpdateManyMutationInput, UMLAttributeUncheckedUpdateManyInput>
    /**
     * Filter which UMLAttributes to update
     */
    where?: UMLAttributeWhereInput
    /**
     * Limit how many UMLAttributes to update.
     */
    limit?: number
  }

  /**
   * UMLAttribute updateManyAndReturn
   */
  export type UMLAttributeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLAttribute
     */
    select?: UMLAttributeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UMLAttribute
     */
    omit?: UMLAttributeOmit<ExtArgs> | null
    /**
     * The data used to update UMLAttributes.
     */
    data: XOR<UMLAttributeUpdateManyMutationInput, UMLAttributeUncheckedUpdateManyInput>
    /**
     * Filter which UMLAttributes to update
     */
    where?: UMLAttributeWhereInput
    /**
     * Limit how many UMLAttributes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLAttributeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UMLAttribute upsert
   */
  export type UMLAttributeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLAttribute
     */
    select?: UMLAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLAttribute
     */
    omit?: UMLAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLAttributeInclude<ExtArgs> | null
    /**
     * The filter to search for the UMLAttribute to update in case it exists.
     */
    where: UMLAttributeWhereUniqueInput
    /**
     * In case the UMLAttribute found by the `where` argument doesn't exist, create a new UMLAttribute with this data.
     */
    create: XOR<UMLAttributeCreateInput, UMLAttributeUncheckedCreateInput>
    /**
     * In case the UMLAttribute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UMLAttributeUpdateInput, UMLAttributeUncheckedUpdateInput>
  }

  /**
   * UMLAttribute delete
   */
  export type UMLAttributeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLAttribute
     */
    select?: UMLAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLAttribute
     */
    omit?: UMLAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLAttributeInclude<ExtArgs> | null
    /**
     * Filter which UMLAttribute to delete.
     */
    where: UMLAttributeWhereUniqueInput
  }

  /**
   * UMLAttribute deleteMany
   */
  export type UMLAttributeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UMLAttributes to delete
     */
    where?: UMLAttributeWhereInput
    /**
     * Limit how many UMLAttributes to delete.
     */
    limit?: number
  }

  /**
   * UMLAttribute without action
   */
  export type UMLAttributeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLAttribute
     */
    select?: UMLAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLAttribute
     */
    omit?: UMLAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLAttributeInclude<ExtArgs> | null
  }


  /**
   * Model UMLMethod
   */

  export type AggregateUMLMethod = {
    _count: UMLMethodCountAggregateOutputType | null
    _min: UMLMethodMinAggregateOutputType | null
    _max: UMLMethodMaxAggregateOutputType | null
  }

  export type UMLMethodMinAggregateOutputType = {
    id: string | null
    name: string | null
    returnType: string | null
    visibility: string | null
    classId: string | null
  }

  export type UMLMethodMaxAggregateOutputType = {
    id: string | null
    name: string | null
    returnType: string | null
    visibility: string | null
    classId: string | null
  }

  export type UMLMethodCountAggregateOutputType = {
    id: number
    name: number
    returnType: number
    visibility: number
    classId: number
    _all: number
  }


  export type UMLMethodMinAggregateInputType = {
    id?: true
    name?: true
    returnType?: true
    visibility?: true
    classId?: true
  }

  export type UMLMethodMaxAggregateInputType = {
    id?: true
    name?: true
    returnType?: true
    visibility?: true
    classId?: true
  }

  export type UMLMethodCountAggregateInputType = {
    id?: true
    name?: true
    returnType?: true
    visibility?: true
    classId?: true
    _all?: true
  }

  export type UMLMethodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UMLMethod to aggregate.
     */
    where?: UMLMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UMLMethods to fetch.
     */
    orderBy?: UMLMethodOrderByWithRelationInput | UMLMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UMLMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UMLMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UMLMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UMLMethods
    **/
    _count?: true | UMLMethodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UMLMethodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UMLMethodMaxAggregateInputType
  }

  export type GetUMLMethodAggregateType<T extends UMLMethodAggregateArgs> = {
        [P in keyof T & keyof AggregateUMLMethod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUMLMethod[P]>
      : GetScalarType<T[P], AggregateUMLMethod[P]>
  }




  export type UMLMethodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UMLMethodWhereInput
    orderBy?: UMLMethodOrderByWithAggregationInput | UMLMethodOrderByWithAggregationInput[]
    by: UMLMethodScalarFieldEnum[] | UMLMethodScalarFieldEnum
    having?: UMLMethodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UMLMethodCountAggregateInputType | true
    _min?: UMLMethodMinAggregateInputType
    _max?: UMLMethodMaxAggregateInputType
  }

  export type UMLMethodGroupByOutputType = {
    id: string
    name: string
    returnType: string
    visibility: string
    classId: string
    _count: UMLMethodCountAggregateOutputType | null
    _min: UMLMethodMinAggregateOutputType | null
    _max: UMLMethodMaxAggregateOutputType | null
  }

  type GetUMLMethodGroupByPayload<T extends UMLMethodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UMLMethodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UMLMethodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UMLMethodGroupByOutputType[P]>
            : GetScalarType<T[P], UMLMethodGroupByOutputType[P]>
        }
      >
    >


  export type UMLMethodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    returnType?: boolean
    visibility?: boolean
    classId?: boolean
    class?: boolean | UMLClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uMLMethod"]>

  export type UMLMethodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    returnType?: boolean
    visibility?: boolean
    classId?: boolean
    class?: boolean | UMLClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uMLMethod"]>

  export type UMLMethodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    returnType?: boolean
    visibility?: boolean
    classId?: boolean
    class?: boolean | UMLClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uMLMethod"]>

  export type UMLMethodSelectScalar = {
    id?: boolean
    name?: boolean
    returnType?: boolean
    visibility?: boolean
    classId?: boolean
  }

  export type UMLMethodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "returnType" | "visibility" | "classId", ExtArgs["result"]["uMLMethod"]>
  export type UMLMethodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | UMLClassDefaultArgs<ExtArgs>
  }
  export type UMLMethodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | UMLClassDefaultArgs<ExtArgs>
  }
  export type UMLMethodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | UMLClassDefaultArgs<ExtArgs>
  }

  export type $UMLMethodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UMLMethod"
    objects: {
      class: Prisma.$UMLClassPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      returnType: string
      visibility: string
      classId: string
    }, ExtArgs["result"]["uMLMethod"]>
    composites: {}
  }

  type UMLMethodGetPayload<S extends boolean | null | undefined | UMLMethodDefaultArgs> = $Result.GetResult<Prisma.$UMLMethodPayload, S>

  type UMLMethodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UMLMethodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UMLMethodCountAggregateInputType | true
    }

  export interface UMLMethodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UMLMethod'], meta: { name: 'UMLMethod' } }
    /**
     * Find zero or one UMLMethod that matches the filter.
     * @param {UMLMethodFindUniqueArgs} args - Arguments to find a UMLMethod
     * @example
     * // Get one UMLMethod
     * const uMLMethod = await prisma.uMLMethod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UMLMethodFindUniqueArgs>(args: SelectSubset<T, UMLMethodFindUniqueArgs<ExtArgs>>): Prisma__UMLMethodClient<$Result.GetResult<Prisma.$UMLMethodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UMLMethod that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UMLMethodFindUniqueOrThrowArgs} args - Arguments to find a UMLMethod
     * @example
     * // Get one UMLMethod
     * const uMLMethod = await prisma.uMLMethod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UMLMethodFindUniqueOrThrowArgs>(args: SelectSubset<T, UMLMethodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UMLMethodClient<$Result.GetResult<Prisma.$UMLMethodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UMLMethod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UMLMethodFindFirstArgs} args - Arguments to find a UMLMethod
     * @example
     * // Get one UMLMethod
     * const uMLMethod = await prisma.uMLMethod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UMLMethodFindFirstArgs>(args?: SelectSubset<T, UMLMethodFindFirstArgs<ExtArgs>>): Prisma__UMLMethodClient<$Result.GetResult<Prisma.$UMLMethodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UMLMethod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UMLMethodFindFirstOrThrowArgs} args - Arguments to find a UMLMethod
     * @example
     * // Get one UMLMethod
     * const uMLMethod = await prisma.uMLMethod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UMLMethodFindFirstOrThrowArgs>(args?: SelectSubset<T, UMLMethodFindFirstOrThrowArgs<ExtArgs>>): Prisma__UMLMethodClient<$Result.GetResult<Prisma.$UMLMethodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UMLMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UMLMethodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UMLMethods
     * const uMLMethods = await prisma.uMLMethod.findMany()
     * 
     * // Get first 10 UMLMethods
     * const uMLMethods = await prisma.uMLMethod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uMLMethodWithIdOnly = await prisma.uMLMethod.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UMLMethodFindManyArgs>(args?: SelectSubset<T, UMLMethodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UMLMethodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UMLMethod.
     * @param {UMLMethodCreateArgs} args - Arguments to create a UMLMethod.
     * @example
     * // Create one UMLMethod
     * const UMLMethod = await prisma.uMLMethod.create({
     *   data: {
     *     // ... data to create a UMLMethod
     *   }
     * })
     * 
     */
    create<T extends UMLMethodCreateArgs>(args: SelectSubset<T, UMLMethodCreateArgs<ExtArgs>>): Prisma__UMLMethodClient<$Result.GetResult<Prisma.$UMLMethodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UMLMethods.
     * @param {UMLMethodCreateManyArgs} args - Arguments to create many UMLMethods.
     * @example
     * // Create many UMLMethods
     * const uMLMethod = await prisma.uMLMethod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UMLMethodCreateManyArgs>(args?: SelectSubset<T, UMLMethodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UMLMethods and returns the data saved in the database.
     * @param {UMLMethodCreateManyAndReturnArgs} args - Arguments to create many UMLMethods.
     * @example
     * // Create many UMLMethods
     * const uMLMethod = await prisma.uMLMethod.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UMLMethods and only return the `id`
     * const uMLMethodWithIdOnly = await prisma.uMLMethod.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UMLMethodCreateManyAndReturnArgs>(args?: SelectSubset<T, UMLMethodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UMLMethodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UMLMethod.
     * @param {UMLMethodDeleteArgs} args - Arguments to delete one UMLMethod.
     * @example
     * // Delete one UMLMethod
     * const UMLMethod = await prisma.uMLMethod.delete({
     *   where: {
     *     // ... filter to delete one UMLMethod
     *   }
     * })
     * 
     */
    delete<T extends UMLMethodDeleteArgs>(args: SelectSubset<T, UMLMethodDeleteArgs<ExtArgs>>): Prisma__UMLMethodClient<$Result.GetResult<Prisma.$UMLMethodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UMLMethod.
     * @param {UMLMethodUpdateArgs} args - Arguments to update one UMLMethod.
     * @example
     * // Update one UMLMethod
     * const uMLMethod = await prisma.uMLMethod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UMLMethodUpdateArgs>(args: SelectSubset<T, UMLMethodUpdateArgs<ExtArgs>>): Prisma__UMLMethodClient<$Result.GetResult<Prisma.$UMLMethodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UMLMethods.
     * @param {UMLMethodDeleteManyArgs} args - Arguments to filter UMLMethods to delete.
     * @example
     * // Delete a few UMLMethods
     * const { count } = await prisma.uMLMethod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UMLMethodDeleteManyArgs>(args?: SelectSubset<T, UMLMethodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UMLMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UMLMethodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UMLMethods
     * const uMLMethod = await prisma.uMLMethod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UMLMethodUpdateManyArgs>(args: SelectSubset<T, UMLMethodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UMLMethods and returns the data updated in the database.
     * @param {UMLMethodUpdateManyAndReturnArgs} args - Arguments to update many UMLMethods.
     * @example
     * // Update many UMLMethods
     * const uMLMethod = await prisma.uMLMethod.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UMLMethods and only return the `id`
     * const uMLMethodWithIdOnly = await prisma.uMLMethod.updateManyAndReturn({
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
    updateManyAndReturn<T extends UMLMethodUpdateManyAndReturnArgs>(args: SelectSubset<T, UMLMethodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UMLMethodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UMLMethod.
     * @param {UMLMethodUpsertArgs} args - Arguments to update or create a UMLMethod.
     * @example
     * // Update or create a UMLMethod
     * const uMLMethod = await prisma.uMLMethod.upsert({
     *   create: {
     *     // ... data to create a UMLMethod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UMLMethod we want to update
     *   }
     * })
     */
    upsert<T extends UMLMethodUpsertArgs>(args: SelectSubset<T, UMLMethodUpsertArgs<ExtArgs>>): Prisma__UMLMethodClient<$Result.GetResult<Prisma.$UMLMethodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UMLMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UMLMethodCountArgs} args - Arguments to filter UMLMethods to count.
     * @example
     * // Count the number of UMLMethods
     * const count = await prisma.uMLMethod.count({
     *   where: {
     *     // ... the filter for the UMLMethods we want to count
     *   }
     * })
    **/
    count<T extends UMLMethodCountArgs>(
      args?: Subset<T, UMLMethodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UMLMethodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UMLMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UMLMethodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UMLMethodAggregateArgs>(args: Subset<T, UMLMethodAggregateArgs>): Prisma.PrismaPromise<GetUMLMethodAggregateType<T>>

    /**
     * Group by UMLMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UMLMethodGroupByArgs} args - Group by arguments.
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
      T extends UMLMethodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UMLMethodGroupByArgs['orderBy'] }
        : { orderBy?: UMLMethodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UMLMethodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUMLMethodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UMLMethod model
   */
  readonly fields: UMLMethodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UMLMethod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UMLMethodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends UMLClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UMLClassDefaultArgs<ExtArgs>>): Prisma__UMLClassClient<$Result.GetResult<Prisma.$UMLClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UMLMethod model
   */
  interface UMLMethodFieldRefs {
    readonly id: FieldRef<"UMLMethod", 'String'>
    readonly name: FieldRef<"UMLMethod", 'String'>
    readonly returnType: FieldRef<"UMLMethod", 'String'>
    readonly visibility: FieldRef<"UMLMethod", 'String'>
    readonly classId: FieldRef<"UMLMethod", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UMLMethod findUnique
   */
  export type UMLMethodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLMethod
     */
    select?: UMLMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLMethod
     */
    omit?: UMLMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLMethodInclude<ExtArgs> | null
    /**
     * Filter, which UMLMethod to fetch.
     */
    where: UMLMethodWhereUniqueInput
  }

  /**
   * UMLMethod findUniqueOrThrow
   */
  export type UMLMethodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLMethod
     */
    select?: UMLMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLMethod
     */
    omit?: UMLMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLMethodInclude<ExtArgs> | null
    /**
     * Filter, which UMLMethod to fetch.
     */
    where: UMLMethodWhereUniqueInput
  }

  /**
   * UMLMethod findFirst
   */
  export type UMLMethodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLMethod
     */
    select?: UMLMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLMethod
     */
    omit?: UMLMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLMethodInclude<ExtArgs> | null
    /**
     * Filter, which UMLMethod to fetch.
     */
    where?: UMLMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UMLMethods to fetch.
     */
    orderBy?: UMLMethodOrderByWithRelationInput | UMLMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UMLMethods.
     */
    cursor?: UMLMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UMLMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UMLMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UMLMethods.
     */
    distinct?: UMLMethodScalarFieldEnum | UMLMethodScalarFieldEnum[]
  }

  /**
   * UMLMethod findFirstOrThrow
   */
  export type UMLMethodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLMethod
     */
    select?: UMLMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLMethod
     */
    omit?: UMLMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLMethodInclude<ExtArgs> | null
    /**
     * Filter, which UMLMethod to fetch.
     */
    where?: UMLMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UMLMethods to fetch.
     */
    orderBy?: UMLMethodOrderByWithRelationInput | UMLMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UMLMethods.
     */
    cursor?: UMLMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UMLMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UMLMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UMLMethods.
     */
    distinct?: UMLMethodScalarFieldEnum | UMLMethodScalarFieldEnum[]
  }

  /**
   * UMLMethod findMany
   */
  export type UMLMethodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLMethod
     */
    select?: UMLMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLMethod
     */
    omit?: UMLMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLMethodInclude<ExtArgs> | null
    /**
     * Filter, which UMLMethods to fetch.
     */
    where?: UMLMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UMLMethods to fetch.
     */
    orderBy?: UMLMethodOrderByWithRelationInput | UMLMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UMLMethods.
     */
    cursor?: UMLMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UMLMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UMLMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UMLMethods.
     */
    distinct?: UMLMethodScalarFieldEnum | UMLMethodScalarFieldEnum[]
  }

  /**
   * UMLMethod create
   */
  export type UMLMethodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLMethod
     */
    select?: UMLMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLMethod
     */
    omit?: UMLMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLMethodInclude<ExtArgs> | null
    /**
     * The data needed to create a UMLMethod.
     */
    data: XOR<UMLMethodCreateInput, UMLMethodUncheckedCreateInput>
  }

  /**
   * UMLMethod createMany
   */
  export type UMLMethodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UMLMethods.
     */
    data: UMLMethodCreateManyInput | UMLMethodCreateManyInput[]
  }

  /**
   * UMLMethod createManyAndReturn
   */
  export type UMLMethodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLMethod
     */
    select?: UMLMethodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UMLMethod
     */
    omit?: UMLMethodOmit<ExtArgs> | null
    /**
     * The data used to create many UMLMethods.
     */
    data: UMLMethodCreateManyInput | UMLMethodCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLMethodIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UMLMethod update
   */
  export type UMLMethodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLMethod
     */
    select?: UMLMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLMethod
     */
    omit?: UMLMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLMethodInclude<ExtArgs> | null
    /**
     * The data needed to update a UMLMethod.
     */
    data: XOR<UMLMethodUpdateInput, UMLMethodUncheckedUpdateInput>
    /**
     * Choose, which UMLMethod to update.
     */
    where: UMLMethodWhereUniqueInput
  }

  /**
   * UMLMethod updateMany
   */
  export type UMLMethodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UMLMethods.
     */
    data: XOR<UMLMethodUpdateManyMutationInput, UMLMethodUncheckedUpdateManyInput>
    /**
     * Filter which UMLMethods to update
     */
    where?: UMLMethodWhereInput
    /**
     * Limit how many UMLMethods to update.
     */
    limit?: number
  }

  /**
   * UMLMethod updateManyAndReturn
   */
  export type UMLMethodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLMethod
     */
    select?: UMLMethodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UMLMethod
     */
    omit?: UMLMethodOmit<ExtArgs> | null
    /**
     * The data used to update UMLMethods.
     */
    data: XOR<UMLMethodUpdateManyMutationInput, UMLMethodUncheckedUpdateManyInput>
    /**
     * Filter which UMLMethods to update
     */
    where?: UMLMethodWhereInput
    /**
     * Limit how many UMLMethods to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLMethodIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UMLMethod upsert
   */
  export type UMLMethodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLMethod
     */
    select?: UMLMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLMethod
     */
    omit?: UMLMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLMethodInclude<ExtArgs> | null
    /**
     * The filter to search for the UMLMethod to update in case it exists.
     */
    where: UMLMethodWhereUniqueInput
    /**
     * In case the UMLMethod found by the `where` argument doesn't exist, create a new UMLMethod with this data.
     */
    create: XOR<UMLMethodCreateInput, UMLMethodUncheckedCreateInput>
    /**
     * In case the UMLMethod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UMLMethodUpdateInput, UMLMethodUncheckedUpdateInput>
  }

  /**
   * UMLMethod delete
   */
  export type UMLMethodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLMethod
     */
    select?: UMLMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLMethod
     */
    omit?: UMLMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLMethodInclude<ExtArgs> | null
    /**
     * Filter which UMLMethod to delete.
     */
    where: UMLMethodWhereUniqueInput
  }

  /**
   * UMLMethod deleteMany
   */
  export type UMLMethodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UMLMethods to delete
     */
    where?: UMLMethodWhereInput
    /**
     * Limit how many UMLMethods to delete.
     */
    limit?: number
  }

  /**
   * UMLMethod without action
   */
  export type UMLMethodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLMethod
     */
    select?: UMLMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLMethod
     */
    omit?: UMLMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLMethodInclude<ExtArgs> | null
  }


  /**
   * Model UMLRelation
   */

  export type AggregateUMLRelation = {
    _count: UMLRelationCountAggregateOutputType | null
    _min: UMLRelationMinAggregateOutputType | null
    _max: UMLRelationMaxAggregateOutputType | null
  }

  export type UMLRelationMinAggregateOutputType = {
    id: string | null
    type: string | null
    name: string | null
    sourceLabel: string | null
    targetLabel: string | null
    sourceId: string | null
    targetId: string | null
    projectId: string | null
  }

  export type UMLRelationMaxAggregateOutputType = {
    id: string | null
    type: string | null
    name: string | null
    sourceLabel: string | null
    targetLabel: string | null
    sourceId: string | null
    targetId: string | null
    projectId: string | null
  }

  export type UMLRelationCountAggregateOutputType = {
    id: number
    type: number
    name: number
    sourceLabel: number
    targetLabel: number
    sourceId: number
    targetId: number
    projectId: number
    _all: number
  }


  export type UMLRelationMinAggregateInputType = {
    id?: true
    type?: true
    name?: true
    sourceLabel?: true
    targetLabel?: true
    sourceId?: true
    targetId?: true
    projectId?: true
  }

  export type UMLRelationMaxAggregateInputType = {
    id?: true
    type?: true
    name?: true
    sourceLabel?: true
    targetLabel?: true
    sourceId?: true
    targetId?: true
    projectId?: true
  }

  export type UMLRelationCountAggregateInputType = {
    id?: true
    type?: true
    name?: true
    sourceLabel?: true
    targetLabel?: true
    sourceId?: true
    targetId?: true
    projectId?: true
    _all?: true
  }

  export type UMLRelationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UMLRelation to aggregate.
     */
    where?: UMLRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UMLRelations to fetch.
     */
    orderBy?: UMLRelationOrderByWithRelationInput | UMLRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UMLRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UMLRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UMLRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UMLRelations
    **/
    _count?: true | UMLRelationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UMLRelationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UMLRelationMaxAggregateInputType
  }

  export type GetUMLRelationAggregateType<T extends UMLRelationAggregateArgs> = {
        [P in keyof T & keyof AggregateUMLRelation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUMLRelation[P]>
      : GetScalarType<T[P], AggregateUMLRelation[P]>
  }




  export type UMLRelationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UMLRelationWhereInput
    orderBy?: UMLRelationOrderByWithAggregationInput | UMLRelationOrderByWithAggregationInput[]
    by: UMLRelationScalarFieldEnum[] | UMLRelationScalarFieldEnum
    having?: UMLRelationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UMLRelationCountAggregateInputType | true
    _min?: UMLRelationMinAggregateInputType
    _max?: UMLRelationMaxAggregateInputType
  }

  export type UMLRelationGroupByOutputType = {
    id: string
    type: string
    name: string | null
    sourceLabel: string | null
    targetLabel: string | null
    sourceId: string
    targetId: string
    projectId: string
    _count: UMLRelationCountAggregateOutputType | null
    _min: UMLRelationMinAggregateOutputType | null
    _max: UMLRelationMaxAggregateOutputType | null
  }

  type GetUMLRelationGroupByPayload<T extends UMLRelationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UMLRelationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UMLRelationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UMLRelationGroupByOutputType[P]>
            : GetScalarType<T[P], UMLRelationGroupByOutputType[P]>
        }
      >
    >


  export type UMLRelationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    sourceLabel?: boolean
    targetLabel?: boolean
    sourceId?: boolean
    targetId?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uMLRelation"]>

  export type UMLRelationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    sourceLabel?: boolean
    targetLabel?: boolean
    sourceId?: boolean
    targetId?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uMLRelation"]>

  export type UMLRelationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    sourceLabel?: boolean
    targetLabel?: boolean
    sourceId?: boolean
    targetId?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uMLRelation"]>

  export type UMLRelationSelectScalar = {
    id?: boolean
    type?: boolean
    name?: boolean
    sourceLabel?: boolean
    targetLabel?: boolean
    sourceId?: boolean
    targetId?: boolean
    projectId?: boolean
  }

  export type UMLRelationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "name" | "sourceLabel" | "targetLabel" | "sourceId" | "targetId" | "projectId", ExtArgs["result"]["uMLRelation"]>
  export type UMLRelationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type UMLRelationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type UMLRelationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $UMLRelationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UMLRelation"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      name: string | null
      sourceLabel: string | null
      targetLabel: string | null
      sourceId: string
      targetId: string
      projectId: string
    }, ExtArgs["result"]["uMLRelation"]>
    composites: {}
  }

  type UMLRelationGetPayload<S extends boolean | null | undefined | UMLRelationDefaultArgs> = $Result.GetResult<Prisma.$UMLRelationPayload, S>

  type UMLRelationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UMLRelationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UMLRelationCountAggregateInputType | true
    }

  export interface UMLRelationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UMLRelation'], meta: { name: 'UMLRelation' } }
    /**
     * Find zero or one UMLRelation that matches the filter.
     * @param {UMLRelationFindUniqueArgs} args - Arguments to find a UMLRelation
     * @example
     * // Get one UMLRelation
     * const uMLRelation = await prisma.uMLRelation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UMLRelationFindUniqueArgs>(args: SelectSubset<T, UMLRelationFindUniqueArgs<ExtArgs>>): Prisma__UMLRelationClient<$Result.GetResult<Prisma.$UMLRelationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UMLRelation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UMLRelationFindUniqueOrThrowArgs} args - Arguments to find a UMLRelation
     * @example
     * // Get one UMLRelation
     * const uMLRelation = await prisma.uMLRelation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UMLRelationFindUniqueOrThrowArgs>(args: SelectSubset<T, UMLRelationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UMLRelationClient<$Result.GetResult<Prisma.$UMLRelationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UMLRelation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UMLRelationFindFirstArgs} args - Arguments to find a UMLRelation
     * @example
     * // Get one UMLRelation
     * const uMLRelation = await prisma.uMLRelation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UMLRelationFindFirstArgs>(args?: SelectSubset<T, UMLRelationFindFirstArgs<ExtArgs>>): Prisma__UMLRelationClient<$Result.GetResult<Prisma.$UMLRelationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UMLRelation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UMLRelationFindFirstOrThrowArgs} args - Arguments to find a UMLRelation
     * @example
     * // Get one UMLRelation
     * const uMLRelation = await prisma.uMLRelation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UMLRelationFindFirstOrThrowArgs>(args?: SelectSubset<T, UMLRelationFindFirstOrThrowArgs<ExtArgs>>): Prisma__UMLRelationClient<$Result.GetResult<Prisma.$UMLRelationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UMLRelations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UMLRelationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UMLRelations
     * const uMLRelations = await prisma.uMLRelation.findMany()
     * 
     * // Get first 10 UMLRelations
     * const uMLRelations = await prisma.uMLRelation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uMLRelationWithIdOnly = await prisma.uMLRelation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UMLRelationFindManyArgs>(args?: SelectSubset<T, UMLRelationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UMLRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UMLRelation.
     * @param {UMLRelationCreateArgs} args - Arguments to create a UMLRelation.
     * @example
     * // Create one UMLRelation
     * const UMLRelation = await prisma.uMLRelation.create({
     *   data: {
     *     // ... data to create a UMLRelation
     *   }
     * })
     * 
     */
    create<T extends UMLRelationCreateArgs>(args: SelectSubset<T, UMLRelationCreateArgs<ExtArgs>>): Prisma__UMLRelationClient<$Result.GetResult<Prisma.$UMLRelationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UMLRelations.
     * @param {UMLRelationCreateManyArgs} args - Arguments to create many UMLRelations.
     * @example
     * // Create many UMLRelations
     * const uMLRelation = await prisma.uMLRelation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UMLRelationCreateManyArgs>(args?: SelectSubset<T, UMLRelationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UMLRelations and returns the data saved in the database.
     * @param {UMLRelationCreateManyAndReturnArgs} args - Arguments to create many UMLRelations.
     * @example
     * // Create many UMLRelations
     * const uMLRelation = await prisma.uMLRelation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UMLRelations and only return the `id`
     * const uMLRelationWithIdOnly = await prisma.uMLRelation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UMLRelationCreateManyAndReturnArgs>(args?: SelectSubset<T, UMLRelationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UMLRelationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UMLRelation.
     * @param {UMLRelationDeleteArgs} args - Arguments to delete one UMLRelation.
     * @example
     * // Delete one UMLRelation
     * const UMLRelation = await prisma.uMLRelation.delete({
     *   where: {
     *     // ... filter to delete one UMLRelation
     *   }
     * })
     * 
     */
    delete<T extends UMLRelationDeleteArgs>(args: SelectSubset<T, UMLRelationDeleteArgs<ExtArgs>>): Prisma__UMLRelationClient<$Result.GetResult<Prisma.$UMLRelationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UMLRelation.
     * @param {UMLRelationUpdateArgs} args - Arguments to update one UMLRelation.
     * @example
     * // Update one UMLRelation
     * const uMLRelation = await prisma.uMLRelation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UMLRelationUpdateArgs>(args: SelectSubset<T, UMLRelationUpdateArgs<ExtArgs>>): Prisma__UMLRelationClient<$Result.GetResult<Prisma.$UMLRelationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UMLRelations.
     * @param {UMLRelationDeleteManyArgs} args - Arguments to filter UMLRelations to delete.
     * @example
     * // Delete a few UMLRelations
     * const { count } = await prisma.uMLRelation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UMLRelationDeleteManyArgs>(args?: SelectSubset<T, UMLRelationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UMLRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UMLRelationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UMLRelations
     * const uMLRelation = await prisma.uMLRelation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UMLRelationUpdateManyArgs>(args: SelectSubset<T, UMLRelationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UMLRelations and returns the data updated in the database.
     * @param {UMLRelationUpdateManyAndReturnArgs} args - Arguments to update many UMLRelations.
     * @example
     * // Update many UMLRelations
     * const uMLRelation = await prisma.uMLRelation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UMLRelations and only return the `id`
     * const uMLRelationWithIdOnly = await prisma.uMLRelation.updateManyAndReturn({
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
    updateManyAndReturn<T extends UMLRelationUpdateManyAndReturnArgs>(args: SelectSubset<T, UMLRelationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UMLRelationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UMLRelation.
     * @param {UMLRelationUpsertArgs} args - Arguments to update or create a UMLRelation.
     * @example
     * // Update or create a UMLRelation
     * const uMLRelation = await prisma.uMLRelation.upsert({
     *   create: {
     *     // ... data to create a UMLRelation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UMLRelation we want to update
     *   }
     * })
     */
    upsert<T extends UMLRelationUpsertArgs>(args: SelectSubset<T, UMLRelationUpsertArgs<ExtArgs>>): Prisma__UMLRelationClient<$Result.GetResult<Prisma.$UMLRelationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UMLRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UMLRelationCountArgs} args - Arguments to filter UMLRelations to count.
     * @example
     * // Count the number of UMLRelations
     * const count = await prisma.uMLRelation.count({
     *   where: {
     *     // ... the filter for the UMLRelations we want to count
     *   }
     * })
    **/
    count<T extends UMLRelationCountArgs>(
      args?: Subset<T, UMLRelationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UMLRelationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UMLRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UMLRelationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UMLRelationAggregateArgs>(args: Subset<T, UMLRelationAggregateArgs>): Prisma.PrismaPromise<GetUMLRelationAggregateType<T>>

    /**
     * Group by UMLRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UMLRelationGroupByArgs} args - Group by arguments.
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
      T extends UMLRelationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UMLRelationGroupByArgs['orderBy'] }
        : { orderBy?: UMLRelationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UMLRelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUMLRelationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UMLRelation model
   */
  readonly fields: UMLRelationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UMLRelation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UMLRelationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the UMLRelation model
   */
  interface UMLRelationFieldRefs {
    readonly id: FieldRef<"UMLRelation", 'String'>
    readonly type: FieldRef<"UMLRelation", 'String'>
    readonly name: FieldRef<"UMLRelation", 'String'>
    readonly sourceLabel: FieldRef<"UMLRelation", 'String'>
    readonly targetLabel: FieldRef<"UMLRelation", 'String'>
    readonly sourceId: FieldRef<"UMLRelation", 'String'>
    readonly targetId: FieldRef<"UMLRelation", 'String'>
    readonly projectId: FieldRef<"UMLRelation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UMLRelation findUnique
   */
  export type UMLRelationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLRelation
     */
    select?: UMLRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLRelation
     */
    omit?: UMLRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLRelationInclude<ExtArgs> | null
    /**
     * Filter, which UMLRelation to fetch.
     */
    where: UMLRelationWhereUniqueInput
  }

  /**
   * UMLRelation findUniqueOrThrow
   */
  export type UMLRelationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLRelation
     */
    select?: UMLRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLRelation
     */
    omit?: UMLRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLRelationInclude<ExtArgs> | null
    /**
     * Filter, which UMLRelation to fetch.
     */
    where: UMLRelationWhereUniqueInput
  }

  /**
   * UMLRelation findFirst
   */
  export type UMLRelationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLRelation
     */
    select?: UMLRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLRelation
     */
    omit?: UMLRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLRelationInclude<ExtArgs> | null
    /**
     * Filter, which UMLRelation to fetch.
     */
    where?: UMLRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UMLRelations to fetch.
     */
    orderBy?: UMLRelationOrderByWithRelationInput | UMLRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UMLRelations.
     */
    cursor?: UMLRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UMLRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UMLRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UMLRelations.
     */
    distinct?: UMLRelationScalarFieldEnum | UMLRelationScalarFieldEnum[]
  }

  /**
   * UMLRelation findFirstOrThrow
   */
  export type UMLRelationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLRelation
     */
    select?: UMLRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLRelation
     */
    omit?: UMLRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLRelationInclude<ExtArgs> | null
    /**
     * Filter, which UMLRelation to fetch.
     */
    where?: UMLRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UMLRelations to fetch.
     */
    orderBy?: UMLRelationOrderByWithRelationInput | UMLRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UMLRelations.
     */
    cursor?: UMLRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UMLRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UMLRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UMLRelations.
     */
    distinct?: UMLRelationScalarFieldEnum | UMLRelationScalarFieldEnum[]
  }

  /**
   * UMLRelation findMany
   */
  export type UMLRelationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLRelation
     */
    select?: UMLRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLRelation
     */
    omit?: UMLRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLRelationInclude<ExtArgs> | null
    /**
     * Filter, which UMLRelations to fetch.
     */
    where?: UMLRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UMLRelations to fetch.
     */
    orderBy?: UMLRelationOrderByWithRelationInput | UMLRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UMLRelations.
     */
    cursor?: UMLRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UMLRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UMLRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UMLRelations.
     */
    distinct?: UMLRelationScalarFieldEnum | UMLRelationScalarFieldEnum[]
  }

  /**
   * UMLRelation create
   */
  export type UMLRelationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLRelation
     */
    select?: UMLRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLRelation
     */
    omit?: UMLRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLRelationInclude<ExtArgs> | null
    /**
     * The data needed to create a UMLRelation.
     */
    data: XOR<UMLRelationCreateInput, UMLRelationUncheckedCreateInput>
  }

  /**
   * UMLRelation createMany
   */
  export type UMLRelationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UMLRelations.
     */
    data: UMLRelationCreateManyInput | UMLRelationCreateManyInput[]
  }

  /**
   * UMLRelation createManyAndReturn
   */
  export type UMLRelationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLRelation
     */
    select?: UMLRelationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UMLRelation
     */
    omit?: UMLRelationOmit<ExtArgs> | null
    /**
     * The data used to create many UMLRelations.
     */
    data: UMLRelationCreateManyInput | UMLRelationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLRelationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UMLRelation update
   */
  export type UMLRelationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLRelation
     */
    select?: UMLRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLRelation
     */
    omit?: UMLRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLRelationInclude<ExtArgs> | null
    /**
     * The data needed to update a UMLRelation.
     */
    data: XOR<UMLRelationUpdateInput, UMLRelationUncheckedUpdateInput>
    /**
     * Choose, which UMLRelation to update.
     */
    where: UMLRelationWhereUniqueInput
  }

  /**
   * UMLRelation updateMany
   */
  export type UMLRelationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UMLRelations.
     */
    data: XOR<UMLRelationUpdateManyMutationInput, UMLRelationUncheckedUpdateManyInput>
    /**
     * Filter which UMLRelations to update
     */
    where?: UMLRelationWhereInput
    /**
     * Limit how many UMLRelations to update.
     */
    limit?: number
  }

  /**
   * UMLRelation updateManyAndReturn
   */
  export type UMLRelationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLRelation
     */
    select?: UMLRelationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UMLRelation
     */
    omit?: UMLRelationOmit<ExtArgs> | null
    /**
     * The data used to update UMLRelations.
     */
    data: XOR<UMLRelationUpdateManyMutationInput, UMLRelationUncheckedUpdateManyInput>
    /**
     * Filter which UMLRelations to update
     */
    where?: UMLRelationWhereInput
    /**
     * Limit how many UMLRelations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLRelationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UMLRelation upsert
   */
  export type UMLRelationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLRelation
     */
    select?: UMLRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLRelation
     */
    omit?: UMLRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLRelationInclude<ExtArgs> | null
    /**
     * The filter to search for the UMLRelation to update in case it exists.
     */
    where: UMLRelationWhereUniqueInput
    /**
     * In case the UMLRelation found by the `where` argument doesn't exist, create a new UMLRelation with this data.
     */
    create: XOR<UMLRelationCreateInput, UMLRelationUncheckedCreateInput>
    /**
     * In case the UMLRelation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UMLRelationUpdateInput, UMLRelationUncheckedUpdateInput>
  }

  /**
   * UMLRelation delete
   */
  export type UMLRelationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLRelation
     */
    select?: UMLRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLRelation
     */
    omit?: UMLRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLRelationInclude<ExtArgs> | null
    /**
     * Filter which UMLRelation to delete.
     */
    where: UMLRelationWhereUniqueInput
  }

  /**
   * UMLRelation deleteMany
   */
  export type UMLRelationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UMLRelations to delete
     */
    where?: UMLRelationWhereInput
    /**
     * Limit how many UMLRelations to delete.
     */
    limit?: number
  }

  /**
   * UMLRelation without action
   */
  export type UMLRelationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UMLRelation
     */
    select?: UMLRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UMLRelation
     */
    omit?: UMLRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UMLRelationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const UMLClassScalarFieldEnum: {
    id: 'id',
    name: 'name',
    stereotype: 'stereotype',
    color: 'color',
    positionX: 'positionX',
    positionY: 'positionY',
    projectId: 'projectId'
  };

  export type UMLClassScalarFieldEnum = (typeof UMLClassScalarFieldEnum)[keyof typeof UMLClassScalarFieldEnum]


  export const UMLAttributeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    visibility: 'visibility',
    classId: 'classId'
  };

  export type UMLAttributeScalarFieldEnum = (typeof UMLAttributeScalarFieldEnum)[keyof typeof UMLAttributeScalarFieldEnum]


  export const UMLMethodScalarFieldEnum: {
    id: 'id',
    name: 'name',
    returnType: 'returnType',
    visibility: 'visibility',
    classId: 'classId'
  };

  export type UMLMethodScalarFieldEnum = (typeof UMLMethodScalarFieldEnum)[keyof typeof UMLMethodScalarFieldEnum]


  export const UMLRelationScalarFieldEnum: {
    id: 'id',
    type: 'type',
    name: 'name',
    sourceLabel: 'sourceLabel',
    targetLabel: 'targetLabel',
    sourceId: 'sourceId',
    targetId: 'targetId',
    projectId: 'projectId'
  };

  export type UMLRelationScalarFieldEnum = (typeof UMLRelationScalarFieldEnum)[keyof typeof UMLRelationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    classes?: UMLClassListRelationFilter
    relations?: UMLRelationListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    classes?: UMLClassOrderByRelationAggregateInput
    relations?: UMLRelationOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    classes?: UMLClassListRelationFilter
    relations?: UMLRelationListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type UMLClassWhereInput = {
    AND?: UMLClassWhereInput | UMLClassWhereInput[]
    OR?: UMLClassWhereInput[]
    NOT?: UMLClassWhereInput | UMLClassWhereInput[]
    id?: StringFilter<"UMLClass"> | string
    name?: StringFilter<"UMLClass"> | string
    stereotype?: StringNullableFilter<"UMLClass"> | string | null
    color?: StringFilter<"UMLClass"> | string
    positionX?: FloatFilter<"UMLClass"> | number
    positionY?: FloatFilter<"UMLClass"> | number
    projectId?: StringFilter<"UMLClass"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    attributes?: UMLAttributeListRelationFilter
    methods?: UMLMethodListRelationFilter
  }

  export type UMLClassOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    stereotype?: SortOrderInput | SortOrder
    color?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
    attributes?: UMLAttributeOrderByRelationAggregateInput
    methods?: UMLMethodOrderByRelationAggregateInput
  }

  export type UMLClassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UMLClassWhereInput | UMLClassWhereInput[]
    OR?: UMLClassWhereInput[]
    NOT?: UMLClassWhereInput | UMLClassWhereInput[]
    name?: StringFilter<"UMLClass"> | string
    stereotype?: StringNullableFilter<"UMLClass"> | string | null
    color?: StringFilter<"UMLClass"> | string
    positionX?: FloatFilter<"UMLClass"> | number
    positionY?: FloatFilter<"UMLClass"> | number
    projectId?: StringFilter<"UMLClass"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    attributes?: UMLAttributeListRelationFilter
    methods?: UMLMethodListRelationFilter
  }, "id">

  export type UMLClassOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    stereotype?: SortOrderInput | SortOrder
    color?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    projectId?: SortOrder
    _count?: UMLClassCountOrderByAggregateInput
    _avg?: UMLClassAvgOrderByAggregateInput
    _max?: UMLClassMaxOrderByAggregateInput
    _min?: UMLClassMinOrderByAggregateInput
    _sum?: UMLClassSumOrderByAggregateInput
  }

  export type UMLClassScalarWhereWithAggregatesInput = {
    AND?: UMLClassScalarWhereWithAggregatesInput | UMLClassScalarWhereWithAggregatesInput[]
    OR?: UMLClassScalarWhereWithAggregatesInput[]
    NOT?: UMLClassScalarWhereWithAggregatesInput | UMLClassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UMLClass"> | string
    name?: StringWithAggregatesFilter<"UMLClass"> | string
    stereotype?: StringNullableWithAggregatesFilter<"UMLClass"> | string | null
    color?: StringWithAggregatesFilter<"UMLClass"> | string
    positionX?: FloatWithAggregatesFilter<"UMLClass"> | number
    positionY?: FloatWithAggregatesFilter<"UMLClass"> | number
    projectId?: StringWithAggregatesFilter<"UMLClass"> | string
  }

  export type UMLAttributeWhereInput = {
    AND?: UMLAttributeWhereInput | UMLAttributeWhereInput[]
    OR?: UMLAttributeWhereInput[]
    NOT?: UMLAttributeWhereInput | UMLAttributeWhereInput[]
    id?: StringFilter<"UMLAttribute"> | string
    name?: StringFilter<"UMLAttribute"> | string
    type?: StringFilter<"UMLAttribute"> | string
    visibility?: StringFilter<"UMLAttribute"> | string
    classId?: StringFilter<"UMLAttribute"> | string
    class?: XOR<UMLClassScalarRelationFilter, UMLClassWhereInput>
  }

  export type UMLAttributeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    visibility?: SortOrder
    classId?: SortOrder
    class?: UMLClassOrderByWithRelationInput
  }

  export type UMLAttributeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UMLAttributeWhereInput | UMLAttributeWhereInput[]
    OR?: UMLAttributeWhereInput[]
    NOT?: UMLAttributeWhereInput | UMLAttributeWhereInput[]
    name?: StringFilter<"UMLAttribute"> | string
    type?: StringFilter<"UMLAttribute"> | string
    visibility?: StringFilter<"UMLAttribute"> | string
    classId?: StringFilter<"UMLAttribute"> | string
    class?: XOR<UMLClassScalarRelationFilter, UMLClassWhereInput>
  }, "id">

  export type UMLAttributeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    visibility?: SortOrder
    classId?: SortOrder
    _count?: UMLAttributeCountOrderByAggregateInput
    _max?: UMLAttributeMaxOrderByAggregateInput
    _min?: UMLAttributeMinOrderByAggregateInput
  }

  export type UMLAttributeScalarWhereWithAggregatesInput = {
    AND?: UMLAttributeScalarWhereWithAggregatesInput | UMLAttributeScalarWhereWithAggregatesInput[]
    OR?: UMLAttributeScalarWhereWithAggregatesInput[]
    NOT?: UMLAttributeScalarWhereWithAggregatesInput | UMLAttributeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UMLAttribute"> | string
    name?: StringWithAggregatesFilter<"UMLAttribute"> | string
    type?: StringWithAggregatesFilter<"UMLAttribute"> | string
    visibility?: StringWithAggregatesFilter<"UMLAttribute"> | string
    classId?: StringWithAggregatesFilter<"UMLAttribute"> | string
  }

  export type UMLMethodWhereInput = {
    AND?: UMLMethodWhereInput | UMLMethodWhereInput[]
    OR?: UMLMethodWhereInput[]
    NOT?: UMLMethodWhereInput | UMLMethodWhereInput[]
    id?: StringFilter<"UMLMethod"> | string
    name?: StringFilter<"UMLMethod"> | string
    returnType?: StringFilter<"UMLMethod"> | string
    visibility?: StringFilter<"UMLMethod"> | string
    classId?: StringFilter<"UMLMethod"> | string
    class?: XOR<UMLClassScalarRelationFilter, UMLClassWhereInput>
  }

  export type UMLMethodOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    returnType?: SortOrder
    visibility?: SortOrder
    classId?: SortOrder
    class?: UMLClassOrderByWithRelationInput
  }

  export type UMLMethodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UMLMethodWhereInput | UMLMethodWhereInput[]
    OR?: UMLMethodWhereInput[]
    NOT?: UMLMethodWhereInput | UMLMethodWhereInput[]
    name?: StringFilter<"UMLMethod"> | string
    returnType?: StringFilter<"UMLMethod"> | string
    visibility?: StringFilter<"UMLMethod"> | string
    classId?: StringFilter<"UMLMethod"> | string
    class?: XOR<UMLClassScalarRelationFilter, UMLClassWhereInput>
  }, "id">

  export type UMLMethodOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    returnType?: SortOrder
    visibility?: SortOrder
    classId?: SortOrder
    _count?: UMLMethodCountOrderByAggregateInput
    _max?: UMLMethodMaxOrderByAggregateInput
    _min?: UMLMethodMinOrderByAggregateInput
  }

  export type UMLMethodScalarWhereWithAggregatesInput = {
    AND?: UMLMethodScalarWhereWithAggregatesInput | UMLMethodScalarWhereWithAggregatesInput[]
    OR?: UMLMethodScalarWhereWithAggregatesInput[]
    NOT?: UMLMethodScalarWhereWithAggregatesInput | UMLMethodScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UMLMethod"> | string
    name?: StringWithAggregatesFilter<"UMLMethod"> | string
    returnType?: StringWithAggregatesFilter<"UMLMethod"> | string
    visibility?: StringWithAggregatesFilter<"UMLMethod"> | string
    classId?: StringWithAggregatesFilter<"UMLMethod"> | string
  }

  export type UMLRelationWhereInput = {
    AND?: UMLRelationWhereInput | UMLRelationWhereInput[]
    OR?: UMLRelationWhereInput[]
    NOT?: UMLRelationWhereInput | UMLRelationWhereInput[]
    id?: StringFilter<"UMLRelation"> | string
    type?: StringFilter<"UMLRelation"> | string
    name?: StringNullableFilter<"UMLRelation"> | string | null
    sourceLabel?: StringNullableFilter<"UMLRelation"> | string | null
    targetLabel?: StringNullableFilter<"UMLRelation"> | string | null
    sourceId?: StringFilter<"UMLRelation"> | string
    targetId?: StringFilter<"UMLRelation"> | string
    projectId?: StringFilter<"UMLRelation"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type UMLRelationOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrderInput | SortOrder
    sourceLabel?: SortOrderInput | SortOrder
    targetLabel?: SortOrderInput | SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type UMLRelationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UMLRelationWhereInput | UMLRelationWhereInput[]
    OR?: UMLRelationWhereInput[]
    NOT?: UMLRelationWhereInput | UMLRelationWhereInput[]
    type?: StringFilter<"UMLRelation"> | string
    name?: StringNullableFilter<"UMLRelation"> | string | null
    sourceLabel?: StringNullableFilter<"UMLRelation"> | string | null
    targetLabel?: StringNullableFilter<"UMLRelation"> | string | null
    sourceId?: StringFilter<"UMLRelation"> | string
    targetId?: StringFilter<"UMLRelation"> | string
    projectId?: StringFilter<"UMLRelation"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type UMLRelationOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrderInput | SortOrder
    sourceLabel?: SortOrderInput | SortOrder
    targetLabel?: SortOrderInput | SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    projectId?: SortOrder
    _count?: UMLRelationCountOrderByAggregateInput
    _max?: UMLRelationMaxOrderByAggregateInput
    _min?: UMLRelationMinOrderByAggregateInput
  }

  export type UMLRelationScalarWhereWithAggregatesInput = {
    AND?: UMLRelationScalarWhereWithAggregatesInput | UMLRelationScalarWhereWithAggregatesInput[]
    OR?: UMLRelationScalarWhereWithAggregatesInput[]
    NOT?: UMLRelationScalarWhereWithAggregatesInput | UMLRelationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UMLRelation"> | string
    type?: StringWithAggregatesFilter<"UMLRelation"> | string
    name?: StringNullableWithAggregatesFilter<"UMLRelation"> | string | null
    sourceLabel?: StringNullableWithAggregatesFilter<"UMLRelation"> | string | null
    targetLabel?: StringNullableWithAggregatesFilter<"UMLRelation"> | string | null
    sourceId?: StringWithAggregatesFilter<"UMLRelation"> | string
    targetId?: StringWithAggregatesFilter<"UMLRelation"> | string
    projectId?: StringWithAggregatesFilter<"UMLRelation"> | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    classes?: UMLClassCreateNestedManyWithoutProjectInput
    relations?: UMLRelationCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    classes?: UMLClassUncheckedCreateNestedManyWithoutProjectInput
    relations?: UMLRelationUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: UMLClassUpdateManyWithoutProjectNestedInput
    relations?: UMLRelationUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: UMLClassUncheckedUpdateManyWithoutProjectNestedInput
    relations?: UMLRelationUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UMLClassCreateInput = {
    id?: string
    name: string
    stereotype?: string | null
    color?: string
    positionX?: number
    positionY?: number
    project: ProjectCreateNestedOneWithoutClassesInput
    attributes?: UMLAttributeCreateNestedManyWithoutClassInput
    methods?: UMLMethodCreateNestedManyWithoutClassInput
  }

  export type UMLClassUncheckedCreateInput = {
    id?: string
    name: string
    stereotype?: string | null
    color?: string
    positionX?: number
    positionY?: number
    projectId: string
    attributes?: UMLAttributeUncheckedCreateNestedManyWithoutClassInput
    methods?: UMLMethodUncheckedCreateNestedManyWithoutClassInput
  }

  export type UMLClassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stereotype?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    project?: ProjectUpdateOneRequiredWithoutClassesNestedInput
    attributes?: UMLAttributeUpdateManyWithoutClassNestedInput
    methods?: UMLMethodUpdateManyWithoutClassNestedInput
  }

  export type UMLClassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stereotype?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    projectId?: StringFieldUpdateOperationsInput | string
    attributes?: UMLAttributeUncheckedUpdateManyWithoutClassNestedInput
    methods?: UMLMethodUncheckedUpdateManyWithoutClassNestedInput
  }

  export type UMLClassCreateManyInput = {
    id?: string
    name: string
    stereotype?: string | null
    color?: string
    positionX?: number
    positionY?: number
    projectId: string
  }

  export type UMLClassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stereotype?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
  }

  export type UMLClassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stereotype?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type UMLAttributeCreateInput = {
    id?: string
    name: string
    type: string
    visibility?: string
    class: UMLClassCreateNestedOneWithoutAttributesInput
  }

  export type UMLAttributeUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    visibility?: string
    classId: string
  }

  export type UMLAttributeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    class?: UMLClassUpdateOneRequiredWithoutAttributesNestedInput
  }

  export type UMLAttributeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
  }

  export type UMLAttributeCreateManyInput = {
    id?: string
    name: string
    type: string
    visibility?: string
    classId: string
  }

  export type UMLAttributeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
  }

  export type UMLAttributeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
  }

  export type UMLMethodCreateInput = {
    id?: string
    name: string
    returnType: string
    visibility?: string
    class: UMLClassCreateNestedOneWithoutMethodsInput
  }

  export type UMLMethodUncheckedCreateInput = {
    id?: string
    name: string
    returnType: string
    visibility?: string
    classId: string
  }

  export type UMLMethodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    returnType?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    class?: UMLClassUpdateOneRequiredWithoutMethodsNestedInput
  }

  export type UMLMethodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    returnType?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
  }

  export type UMLMethodCreateManyInput = {
    id?: string
    name: string
    returnType: string
    visibility?: string
    classId: string
  }

  export type UMLMethodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    returnType?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
  }

  export type UMLMethodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    returnType?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
  }

  export type UMLRelationCreateInput = {
    id?: string
    type: string
    name?: string | null
    sourceLabel?: string | null
    targetLabel?: string | null
    sourceId: string
    targetId: string
    project: ProjectCreateNestedOneWithoutRelationsInput
  }

  export type UMLRelationUncheckedCreateInput = {
    id?: string
    type: string
    name?: string | null
    sourceLabel?: string | null
    targetLabel?: string | null
    sourceId: string
    targetId: string
    projectId: string
  }

  export type UMLRelationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sourceLabel?: NullableStringFieldUpdateOperationsInput | string | null
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    sourceId?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutRelationsNestedInput
  }

  export type UMLRelationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sourceLabel?: NullableStringFieldUpdateOperationsInput | string | null
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    sourceId?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type UMLRelationCreateManyInput = {
    id?: string
    type: string
    name?: string | null
    sourceLabel?: string | null
    targetLabel?: string | null
    sourceId: string
    targetId: string
    projectId: string
  }

  export type UMLRelationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sourceLabel?: NullableStringFieldUpdateOperationsInput | string | null
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    sourceId?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
  }

  export type UMLRelationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sourceLabel?: NullableStringFieldUpdateOperationsInput | string | null
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    sourceId?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UMLClassListRelationFilter = {
    every?: UMLClassWhereInput
    some?: UMLClassWhereInput
    none?: UMLClassWhereInput
  }

  export type UMLRelationListRelationFilter = {
    every?: UMLRelationWhereInput
    some?: UMLRelationWhereInput
    none?: UMLRelationWhereInput
  }

  export type UMLClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UMLRelationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type UMLAttributeListRelationFilter = {
    every?: UMLAttributeWhereInput
    some?: UMLAttributeWhereInput
    none?: UMLAttributeWhereInput
  }

  export type UMLMethodListRelationFilter = {
    every?: UMLMethodWhereInput
    some?: UMLMethodWhereInput
    none?: UMLMethodWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UMLAttributeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UMLMethodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UMLClassCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stereotype?: SortOrder
    color?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    projectId?: SortOrder
  }

  export type UMLClassAvgOrderByAggregateInput = {
    positionX?: SortOrder
    positionY?: SortOrder
  }

  export type UMLClassMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stereotype?: SortOrder
    color?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    projectId?: SortOrder
  }

  export type UMLClassMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stereotype?: SortOrder
    color?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    projectId?: SortOrder
  }

  export type UMLClassSumOrderByAggregateInput = {
    positionX?: SortOrder
    positionY?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UMLClassScalarRelationFilter = {
    is?: UMLClassWhereInput
    isNot?: UMLClassWhereInput
  }

  export type UMLAttributeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    visibility?: SortOrder
    classId?: SortOrder
  }

  export type UMLAttributeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    visibility?: SortOrder
    classId?: SortOrder
  }

  export type UMLAttributeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    visibility?: SortOrder
    classId?: SortOrder
  }

  export type UMLMethodCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    returnType?: SortOrder
    visibility?: SortOrder
    classId?: SortOrder
  }

  export type UMLMethodMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    returnType?: SortOrder
    visibility?: SortOrder
    classId?: SortOrder
  }

  export type UMLMethodMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    returnType?: SortOrder
    visibility?: SortOrder
    classId?: SortOrder
  }

  export type UMLRelationCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    sourceLabel?: SortOrder
    targetLabel?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    projectId?: SortOrder
  }

  export type UMLRelationMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    sourceLabel?: SortOrder
    targetLabel?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    projectId?: SortOrder
  }

  export type UMLRelationMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    sourceLabel?: SortOrder
    targetLabel?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    projectId?: SortOrder
  }

  export type UMLClassCreateNestedManyWithoutProjectInput = {
    create?: XOR<UMLClassCreateWithoutProjectInput, UMLClassUncheckedCreateWithoutProjectInput> | UMLClassCreateWithoutProjectInput[] | UMLClassUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UMLClassCreateOrConnectWithoutProjectInput | UMLClassCreateOrConnectWithoutProjectInput[]
    createMany?: UMLClassCreateManyProjectInputEnvelope
    connect?: UMLClassWhereUniqueInput | UMLClassWhereUniqueInput[]
  }

  export type UMLRelationCreateNestedManyWithoutProjectInput = {
    create?: XOR<UMLRelationCreateWithoutProjectInput, UMLRelationUncheckedCreateWithoutProjectInput> | UMLRelationCreateWithoutProjectInput[] | UMLRelationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UMLRelationCreateOrConnectWithoutProjectInput | UMLRelationCreateOrConnectWithoutProjectInput[]
    createMany?: UMLRelationCreateManyProjectInputEnvelope
    connect?: UMLRelationWhereUniqueInput | UMLRelationWhereUniqueInput[]
  }

  export type UMLClassUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<UMLClassCreateWithoutProjectInput, UMLClassUncheckedCreateWithoutProjectInput> | UMLClassCreateWithoutProjectInput[] | UMLClassUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UMLClassCreateOrConnectWithoutProjectInput | UMLClassCreateOrConnectWithoutProjectInput[]
    createMany?: UMLClassCreateManyProjectInputEnvelope
    connect?: UMLClassWhereUniqueInput | UMLClassWhereUniqueInput[]
  }

  export type UMLRelationUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<UMLRelationCreateWithoutProjectInput, UMLRelationUncheckedCreateWithoutProjectInput> | UMLRelationCreateWithoutProjectInput[] | UMLRelationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UMLRelationCreateOrConnectWithoutProjectInput | UMLRelationCreateOrConnectWithoutProjectInput[]
    createMany?: UMLRelationCreateManyProjectInputEnvelope
    connect?: UMLRelationWhereUniqueInput | UMLRelationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UMLClassUpdateManyWithoutProjectNestedInput = {
    create?: XOR<UMLClassCreateWithoutProjectInput, UMLClassUncheckedCreateWithoutProjectInput> | UMLClassCreateWithoutProjectInput[] | UMLClassUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UMLClassCreateOrConnectWithoutProjectInput | UMLClassCreateOrConnectWithoutProjectInput[]
    upsert?: UMLClassUpsertWithWhereUniqueWithoutProjectInput | UMLClassUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: UMLClassCreateManyProjectInputEnvelope
    set?: UMLClassWhereUniqueInput | UMLClassWhereUniqueInput[]
    disconnect?: UMLClassWhereUniqueInput | UMLClassWhereUniqueInput[]
    delete?: UMLClassWhereUniqueInput | UMLClassWhereUniqueInput[]
    connect?: UMLClassWhereUniqueInput | UMLClassWhereUniqueInput[]
    update?: UMLClassUpdateWithWhereUniqueWithoutProjectInput | UMLClassUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: UMLClassUpdateManyWithWhereWithoutProjectInput | UMLClassUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: UMLClassScalarWhereInput | UMLClassScalarWhereInput[]
  }

  export type UMLRelationUpdateManyWithoutProjectNestedInput = {
    create?: XOR<UMLRelationCreateWithoutProjectInput, UMLRelationUncheckedCreateWithoutProjectInput> | UMLRelationCreateWithoutProjectInput[] | UMLRelationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UMLRelationCreateOrConnectWithoutProjectInput | UMLRelationCreateOrConnectWithoutProjectInput[]
    upsert?: UMLRelationUpsertWithWhereUniqueWithoutProjectInput | UMLRelationUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: UMLRelationCreateManyProjectInputEnvelope
    set?: UMLRelationWhereUniqueInput | UMLRelationWhereUniqueInput[]
    disconnect?: UMLRelationWhereUniqueInput | UMLRelationWhereUniqueInput[]
    delete?: UMLRelationWhereUniqueInput | UMLRelationWhereUniqueInput[]
    connect?: UMLRelationWhereUniqueInput | UMLRelationWhereUniqueInput[]
    update?: UMLRelationUpdateWithWhereUniqueWithoutProjectInput | UMLRelationUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: UMLRelationUpdateManyWithWhereWithoutProjectInput | UMLRelationUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: UMLRelationScalarWhereInput | UMLRelationScalarWhereInput[]
  }

  export type UMLClassUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<UMLClassCreateWithoutProjectInput, UMLClassUncheckedCreateWithoutProjectInput> | UMLClassCreateWithoutProjectInput[] | UMLClassUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UMLClassCreateOrConnectWithoutProjectInput | UMLClassCreateOrConnectWithoutProjectInput[]
    upsert?: UMLClassUpsertWithWhereUniqueWithoutProjectInput | UMLClassUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: UMLClassCreateManyProjectInputEnvelope
    set?: UMLClassWhereUniqueInput | UMLClassWhereUniqueInput[]
    disconnect?: UMLClassWhereUniqueInput | UMLClassWhereUniqueInput[]
    delete?: UMLClassWhereUniqueInput | UMLClassWhereUniqueInput[]
    connect?: UMLClassWhereUniqueInput | UMLClassWhereUniqueInput[]
    update?: UMLClassUpdateWithWhereUniqueWithoutProjectInput | UMLClassUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: UMLClassUpdateManyWithWhereWithoutProjectInput | UMLClassUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: UMLClassScalarWhereInput | UMLClassScalarWhereInput[]
  }

  export type UMLRelationUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<UMLRelationCreateWithoutProjectInput, UMLRelationUncheckedCreateWithoutProjectInput> | UMLRelationCreateWithoutProjectInput[] | UMLRelationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UMLRelationCreateOrConnectWithoutProjectInput | UMLRelationCreateOrConnectWithoutProjectInput[]
    upsert?: UMLRelationUpsertWithWhereUniqueWithoutProjectInput | UMLRelationUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: UMLRelationCreateManyProjectInputEnvelope
    set?: UMLRelationWhereUniqueInput | UMLRelationWhereUniqueInput[]
    disconnect?: UMLRelationWhereUniqueInput | UMLRelationWhereUniqueInput[]
    delete?: UMLRelationWhereUniqueInput | UMLRelationWhereUniqueInput[]
    connect?: UMLRelationWhereUniqueInput | UMLRelationWhereUniqueInput[]
    update?: UMLRelationUpdateWithWhereUniqueWithoutProjectInput | UMLRelationUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: UMLRelationUpdateManyWithWhereWithoutProjectInput | UMLRelationUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: UMLRelationScalarWhereInput | UMLRelationScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutClassesInput = {
    create?: XOR<ProjectCreateWithoutClassesInput, ProjectUncheckedCreateWithoutClassesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutClassesInput
    connect?: ProjectWhereUniqueInput
  }

  export type UMLAttributeCreateNestedManyWithoutClassInput = {
    create?: XOR<UMLAttributeCreateWithoutClassInput, UMLAttributeUncheckedCreateWithoutClassInput> | UMLAttributeCreateWithoutClassInput[] | UMLAttributeUncheckedCreateWithoutClassInput[]
    connectOrCreate?: UMLAttributeCreateOrConnectWithoutClassInput | UMLAttributeCreateOrConnectWithoutClassInput[]
    createMany?: UMLAttributeCreateManyClassInputEnvelope
    connect?: UMLAttributeWhereUniqueInput | UMLAttributeWhereUniqueInput[]
  }

  export type UMLMethodCreateNestedManyWithoutClassInput = {
    create?: XOR<UMLMethodCreateWithoutClassInput, UMLMethodUncheckedCreateWithoutClassInput> | UMLMethodCreateWithoutClassInput[] | UMLMethodUncheckedCreateWithoutClassInput[]
    connectOrCreate?: UMLMethodCreateOrConnectWithoutClassInput | UMLMethodCreateOrConnectWithoutClassInput[]
    createMany?: UMLMethodCreateManyClassInputEnvelope
    connect?: UMLMethodWhereUniqueInput | UMLMethodWhereUniqueInput[]
  }

  export type UMLAttributeUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<UMLAttributeCreateWithoutClassInput, UMLAttributeUncheckedCreateWithoutClassInput> | UMLAttributeCreateWithoutClassInput[] | UMLAttributeUncheckedCreateWithoutClassInput[]
    connectOrCreate?: UMLAttributeCreateOrConnectWithoutClassInput | UMLAttributeCreateOrConnectWithoutClassInput[]
    createMany?: UMLAttributeCreateManyClassInputEnvelope
    connect?: UMLAttributeWhereUniqueInput | UMLAttributeWhereUniqueInput[]
  }

  export type UMLMethodUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<UMLMethodCreateWithoutClassInput, UMLMethodUncheckedCreateWithoutClassInput> | UMLMethodCreateWithoutClassInput[] | UMLMethodUncheckedCreateWithoutClassInput[]
    connectOrCreate?: UMLMethodCreateOrConnectWithoutClassInput | UMLMethodCreateOrConnectWithoutClassInput[]
    createMany?: UMLMethodCreateManyClassInputEnvelope
    connect?: UMLMethodWhereUniqueInput | UMLMethodWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUpdateOneRequiredWithoutClassesNestedInput = {
    create?: XOR<ProjectCreateWithoutClassesInput, ProjectUncheckedCreateWithoutClassesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutClassesInput
    upsert?: ProjectUpsertWithoutClassesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutClassesInput, ProjectUpdateWithoutClassesInput>, ProjectUncheckedUpdateWithoutClassesInput>
  }

  export type UMLAttributeUpdateManyWithoutClassNestedInput = {
    create?: XOR<UMLAttributeCreateWithoutClassInput, UMLAttributeUncheckedCreateWithoutClassInput> | UMLAttributeCreateWithoutClassInput[] | UMLAttributeUncheckedCreateWithoutClassInput[]
    connectOrCreate?: UMLAttributeCreateOrConnectWithoutClassInput | UMLAttributeCreateOrConnectWithoutClassInput[]
    upsert?: UMLAttributeUpsertWithWhereUniqueWithoutClassInput | UMLAttributeUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: UMLAttributeCreateManyClassInputEnvelope
    set?: UMLAttributeWhereUniqueInput | UMLAttributeWhereUniqueInput[]
    disconnect?: UMLAttributeWhereUniqueInput | UMLAttributeWhereUniqueInput[]
    delete?: UMLAttributeWhereUniqueInput | UMLAttributeWhereUniqueInput[]
    connect?: UMLAttributeWhereUniqueInput | UMLAttributeWhereUniqueInput[]
    update?: UMLAttributeUpdateWithWhereUniqueWithoutClassInput | UMLAttributeUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: UMLAttributeUpdateManyWithWhereWithoutClassInput | UMLAttributeUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: UMLAttributeScalarWhereInput | UMLAttributeScalarWhereInput[]
  }

  export type UMLMethodUpdateManyWithoutClassNestedInput = {
    create?: XOR<UMLMethodCreateWithoutClassInput, UMLMethodUncheckedCreateWithoutClassInput> | UMLMethodCreateWithoutClassInput[] | UMLMethodUncheckedCreateWithoutClassInput[]
    connectOrCreate?: UMLMethodCreateOrConnectWithoutClassInput | UMLMethodCreateOrConnectWithoutClassInput[]
    upsert?: UMLMethodUpsertWithWhereUniqueWithoutClassInput | UMLMethodUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: UMLMethodCreateManyClassInputEnvelope
    set?: UMLMethodWhereUniqueInput | UMLMethodWhereUniqueInput[]
    disconnect?: UMLMethodWhereUniqueInput | UMLMethodWhereUniqueInput[]
    delete?: UMLMethodWhereUniqueInput | UMLMethodWhereUniqueInput[]
    connect?: UMLMethodWhereUniqueInput | UMLMethodWhereUniqueInput[]
    update?: UMLMethodUpdateWithWhereUniqueWithoutClassInput | UMLMethodUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: UMLMethodUpdateManyWithWhereWithoutClassInput | UMLMethodUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: UMLMethodScalarWhereInput | UMLMethodScalarWhereInput[]
  }

  export type UMLAttributeUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<UMLAttributeCreateWithoutClassInput, UMLAttributeUncheckedCreateWithoutClassInput> | UMLAttributeCreateWithoutClassInput[] | UMLAttributeUncheckedCreateWithoutClassInput[]
    connectOrCreate?: UMLAttributeCreateOrConnectWithoutClassInput | UMLAttributeCreateOrConnectWithoutClassInput[]
    upsert?: UMLAttributeUpsertWithWhereUniqueWithoutClassInput | UMLAttributeUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: UMLAttributeCreateManyClassInputEnvelope
    set?: UMLAttributeWhereUniqueInput | UMLAttributeWhereUniqueInput[]
    disconnect?: UMLAttributeWhereUniqueInput | UMLAttributeWhereUniqueInput[]
    delete?: UMLAttributeWhereUniqueInput | UMLAttributeWhereUniqueInput[]
    connect?: UMLAttributeWhereUniqueInput | UMLAttributeWhereUniqueInput[]
    update?: UMLAttributeUpdateWithWhereUniqueWithoutClassInput | UMLAttributeUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: UMLAttributeUpdateManyWithWhereWithoutClassInput | UMLAttributeUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: UMLAttributeScalarWhereInput | UMLAttributeScalarWhereInput[]
  }

  export type UMLMethodUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<UMLMethodCreateWithoutClassInput, UMLMethodUncheckedCreateWithoutClassInput> | UMLMethodCreateWithoutClassInput[] | UMLMethodUncheckedCreateWithoutClassInput[]
    connectOrCreate?: UMLMethodCreateOrConnectWithoutClassInput | UMLMethodCreateOrConnectWithoutClassInput[]
    upsert?: UMLMethodUpsertWithWhereUniqueWithoutClassInput | UMLMethodUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: UMLMethodCreateManyClassInputEnvelope
    set?: UMLMethodWhereUniqueInput | UMLMethodWhereUniqueInput[]
    disconnect?: UMLMethodWhereUniqueInput | UMLMethodWhereUniqueInput[]
    delete?: UMLMethodWhereUniqueInput | UMLMethodWhereUniqueInput[]
    connect?: UMLMethodWhereUniqueInput | UMLMethodWhereUniqueInput[]
    update?: UMLMethodUpdateWithWhereUniqueWithoutClassInput | UMLMethodUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: UMLMethodUpdateManyWithWhereWithoutClassInput | UMLMethodUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: UMLMethodScalarWhereInput | UMLMethodScalarWhereInput[]
  }

  export type UMLClassCreateNestedOneWithoutAttributesInput = {
    create?: XOR<UMLClassCreateWithoutAttributesInput, UMLClassUncheckedCreateWithoutAttributesInput>
    connectOrCreate?: UMLClassCreateOrConnectWithoutAttributesInput
    connect?: UMLClassWhereUniqueInput
  }

  export type UMLClassUpdateOneRequiredWithoutAttributesNestedInput = {
    create?: XOR<UMLClassCreateWithoutAttributesInput, UMLClassUncheckedCreateWithoutAttributesInput>
    connectOrCreate?: UMLClassCreateOrConnectWithoutAttributesInput
    upsert?: UMLClassUpsertWithoutAttributesInput
    connect?: UMLClassWhereUniqueInput
    update?: XOR<XOR<UMLClassUpdateToOneWithWhereWithoutAttributesInput, UMLClassUpdateWithoutAttributesInput>, UMLClassUncheckedUpdateWithoutAttributesInput>
  }

  export type UMLClassCreateNestedOneWithoutMethodsInput = {
    create?: XOR<UMLClassCreateWithoutMethodsInput, UMLClassUncheckedCreateWithoutMethodsInput>
    connectOrCreate?: UMLClassCreateOrConnectWithoutMethodsInput
    connect?: UMLClassWhereUniqueInput
  }

  export type UMLClassUpdateOneRequiredWithoutMethodsNestedInput = {
    create?: XOR<UMLClassCreateWithoutMethodsInput, UMLClassUncheckedCreateWithoutMethodsInput>
    connectOrCreate?: UMLClassCreateOrConnectWithoutMethodsInput
    upsert?: UMLClassUpsertWithoutMethodsInput
    connect?: UMLClassWhereUniqueInput
    update?: XOR<XOR<UMLClassUpdateToOneWithWhereWithoutMethodsInput, UMLClassUpdateWithoutMethodsInput>, UMLClassUncheckedUpdateWithoutMethodsInput>
  }

  export type ProjectCreateNestedOneWithoutRelationsInput = {
    create?: XOR<ProjectCreateWithoutRelationsInput, ProjectUncheckedCreateWithoutRelationsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutRelationsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutRelationsNestedInput = {
    create?: XOR<ProjectCreateWithoutRelationsInput, ProjectUncheckedCreateWithoutRelationsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutRelationsInput
    upsert?: ProjectUpsertWithoutRelationsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutRelationsInput, ProjectUpdateWithoutRelationsInput>, ProjectUncheckedUpdateWithoutRelationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UMLClassCreateWithoutProjectInput = {
    id?: string
    name: string
    stereotype?: string | null
    color?: string
    positionX?: number
    positionY?: number
    attributes?: UMLAttributeCreateNestedManyWithoutClassInput
    methods?: UMLMethodCreateNestedManyWithoutClassInput
  }

  export type UMLClassUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    stereotype?: string | null
    color?: string
    positionX?: number
    positionY?: number
    attributes?: UMLAttributeUncheckedCreateNestedManyWithoutClassInput
    methods?: UMLMethodUncheckedCreateNestedManyWithoutClassInput
  }

  export type UMLClassCreateOrConnectWithoutProjectInput = {
    where: UMLClassWhereUniqueInput
    create: XOR<UMLClassCreateWithoutProjectInput, UMLClassUncheckedCreateWithoutProjectInput>
  }

  export type UMLClassCreateManyProjectInputEnvelope = {
    data: UMLClassCreateManyProjectInput | UMLClassCreateManyProjectInput[]
  }

  export type UMLRelationCreateWithoutProjectInput = {
    id?: string
    type: string
    name?: string | null
    sourceLabel?: string | null
    targetLabel?: string | null
    sourceId: string
    targetId: string
  }

  export type UMLRelationUncheckedCreateWithoutProjectInput = {
    id?: string
    type: string
    name?: string | null
    sourceLabel?: string | null
    targetLabel?: string | null
    sourceId: string
    targetId: string
  }

  export type UMLRelationCreateOrConnectWithoutProjectInput = {
    where: UMLRelationWhereUniqueInput
    create: XOR<UMLRelationCreateWithoutProjectInput, UMLRelationUncheckedCreateWithoutProjectInput>
  }

  export type UMLRelationCreateManyProjectInputEnvelope = {
    data: UMLRelationCreateManyProjectInput | UMLRelationCreateManyProjectInput[]
  }

  export type UMLClassUpsertWithWhereUniqueWithoutProjectInput = {
    where: UMLClassWhereUniqueInput
    update: XOR<UMLClassUpdateWithoutProjectInput, UMLClassUncheckedUpdateWithoutProjectInput>
    create: XOR<UMLClassCreateWithoutProjectInput, UMLClassUncheckedCreateWithoutProjectInput>
  }

  export type UMLClassUpdateWithWhereUniqueWithoutProjectInput = {
    where: UMLClassWhereUniqueInput
    data: XOR<UMLClassUpdateWithoutProjectInput, UMLClassUncheckedUpdateWithoutProjectInput>
  }

  export type UMLClassUpdateManyWithWhereWithoutProjectInput = {
    where: UMLClassScalarWhereInput
    data: XOR<UMLClassUpdateManyMutationInput, UMLClassUncheckedUpdateManyWithoutProjectInput>
  }

  export type UMLClassScalarWhereInput = {
    AND?: UMLClassScalarWhereInput | UMLClassScalarWhereInput[]
    OR?: UMLClassScalarWhereInput[]
    NOT?: UMLClassScalarWhereInput | UMLClassScalarWhereInput[]
    id?: StringFilter<"UMLClass"> | string
    name?: StringFilter<"UMLClass"> | string
    stereotype?: StringNullableFilter<"UMLClass"> | string | null
    color?: StringFilter<"UMLClass"> | string
    positionX?: FloatFilter<"UMLClass"> | number
    positionY?: FloatFilter<"UMLClass"> | number
    projectId?: StringFilter<"UMLClass"> | string
  }

  export type UMLRelationUpsertWithWhereUniqueWithoutProjectInput = {
    where: UMLRelationWhereUniqueInput
    update: XOR<UMLRelationUpdateWithoutProjectInput, UMLRelationUncheckedUpdateWithoutProjectInput>
    create: XOR<UMLRelationCreateWithoutProjectInput, UMLRelationUncheckedCreateWithoutProjectInput>
  }

  export type UMLRelationUpdateWithWhereUniqueWithoutProjectInput = {
    where: UMLRelationWhereUniqueInput
    data: XOR<UMLRelationUpdateWithoutProjectInput, UMLRelationUncheckedUpdateWithoutProjectInput>
  }

  export type UMLRelationUpdateManyWithWhereWithoutProjectInput = {
    where: UMLRelationScalarWhereInput
    data: XOR<UMLRelationUpdateManyMutationInput, UMLRelationUncheckedUpdateManyWithoutProjectInput>
  }

  export type UMLRelationScalarWhereInput = {
    AND?: UMLRelationScalarWhereInput | UMLRelationScalarWhereInput[]
    OR?: UMLRelationScalarWhereInput[]
    NOT?: UMLRelationScalarWhereInput | UMLRelationScalarWhereInput[]
    id?: StringFilter<"UMLRelation"> | string
    type?: StringFilter<"UMLRelation"> | string
    name?: StringNullableFilter<"UMLRelation"> | string | null
    sourceLabel?: StringNullableFilter<"UMLRelation"> | string | null
    targetLabel?: StringNullableFilter<"UMLRelation"> | string | null
    sourceId?: StringFilter<"UMLRelation"> | string
    targetId?: StringFilter<"UMLRelation"> | string
    projectId?: StringFilter<"UMLRelation"> | string
  }

  export type ProjectCreateWithoutClassesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    relations?: UMLRelationCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutClassesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    relations?: UMLRelationUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutClassesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutClassesInput, ProjectUncheckedCreateWithoutClassesInput>
  }

  export type UMLAttributeCreateWithoutClassInput = {
    id?: string
    name: string
    type: string
    visibility?: string
  }

  export type UMLAttributeUncheckedCreateWithoutClassInput = {
    id?: string
    name: string
    type: string
    visibility?: string
  }

  export type UMLAttributeCreateOrConnectWithoutClassInput = {
    where: UMLAttributeWhereUniqueInput
    create: XOR<UMLAttributeCreateWithoutClassInput, UMLAttributeUncheckedCreateWithoutClassInput>
  }

  export type UMLAttributeCreateManyClassInputEnvelope = {
    data: UMLAttributeCreateManyClassInput | UMLAttributeCreateManyClassInput[]
  }

  export type UMLMethodCreateWithoutClassInput = {
    id?: string
    name: string
    returnType: string
    visibility?: string
  }

  export type UMLMethodUncheckedCreateWithoutClassInput = {
    id?: string
    name: string
    returnType: string
    visibility?: string
  }

  export type UMLMethodCreateOrConnectWithoutClassInput = {
    where: UMLMethodWhereUniqueInput
    create: XOR<UMLMethodCreateWithoutClassInput, UMLMethodUncheckedCreateWithoutClassInput>
  }

  export type UMLMethodCreateManyClassInputEnvelope = {
    data: UMLMethodCreateManyClassInput | UMLMethodCreateManyClassInput[]
  }

  export type ProjectUpsertWithoutClassesInput = {
    update: XOR<ProjectUpdateWithoutClassesInput, ProjectUncheckedUpdateWithoutClassesInput>
    create: XOR<ProjectCreateWithoutClassesInput, ProjectUncheckedCreateWithoutClassesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutClassesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutClassesInput, ProjectUncheckedUpdateWithoutClassesInput>
  }

  export type ProjectUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relations?: UMLRelationUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relations?: UMLRelationUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UMLAttributeUpsertWithWhereUniqueWithoutClassInput = {
    where: UMLAttributeWhereUniqueInput
    update: XOR<UMLAttributeUpdateWithoutClassInput, UMLAttributeUncheckedUpdateWithoutClassInput>
    create: XOR<UMLAttributeCreateWithoutClassInput, UMLAttributeUncheckedCreateWithoutClassInput>
  }

  export type UMLAttributeUpdateWithWhereUniqueWithoutClassInput = {
    where: UMLAttributeWhereUniqueInput
    data: XOR<UMLAttributeUpdateWithoutClassInput, UMLAttributeUncheckedUpdateWithoutClassInput>
  }

  export type UMLAttributeUpdateManyWithWhereWithoutClassInput = {
    where: UMLAttributeScalarWhereInput
    data: XOR<UMLAttributeUpdateManyMutationInput, UMLAttributeUncheckedUpdateManyWithoutClassInput>
  }

  export type UMLAttributeScalarWhereInput = {
    AND?: UMLAttributeScalarWhereInput | UMLAttributeScalarWhereInput[]
    OR?: UMLAttributeScalarWhereInput[]
    NOT?: UMLAttributeScalarWhereInput | UMLAttributeScalarWhereInput[]
    id?: StringFilter<"UMLAttribute"> | string
    name?: StringFilter<"UMLAttribute"> | string
    type?: StringFilter<"UMLAttribute"> | string
    visibility?: StringFilter<"UMLAttribute"> | string
    classId?: StringFilter<"UMLAttribute"> | string
  }

  export type UMLMethodUpsertWithWhereUniqueWithoutClassInput = {
    where: UMLMethodWhereUniqueInput
    update: XOR<UMLMethodUpdateWithoutClassInput, UMLMethodUncheckedUpdateWithoutClassInput>
    create: XOR<UMLMethodCreateWithoutClassInput, UMLMethodUncheckedCreateWithoutClassInput>
  }

  export type UMLMethodUpdateWithWhereUniqueWithoutClassInput = {
    where: UMLMethodWhereUniqueInput
    data: XOR<UMLMethodUpdateWithoutClassInput, UMLMethodUncheckedUpdateWithoutClassInput>
  }

  export type UMLMethodUpdateManyWithWhereWithoutClassInput = {
    where: UMLMethodScalarWhereInput
    data: XOR<UMLMethodUpdateManyMutationInput, UMLMethodUncheckedUpdateManyWithoutClassInput>
  }

  export type UMLMethodScalarWhereInput = {
    AND?: UMLMethodScalarWhereInput | UMLMethodScalarWhereInput[]
    OR?: UMLMethodScalarWhereInput[]
    NOT?: UMLMethodScalarWhereInput | UMLMethodScalarWhereInput[]
    id?: StringFilter<"UMLMethod"> | string
    name?: StringFilter<"UMLMethod"> | string
    returnType?: StringFilter<"UMLMethod"> | string
    visibility?: StringFilter<"UMLMethod"> | string
    classId?: StringFilter<"UMLMethod"> | string
  }

  export type UMLClassCreateWithoutAttributesInput = {
    id?: string
    name: string
    stereotype?: string | null
    color?: string
    positionX?: number
    positionY?: number
    project: ProjectCreateNestedOneWithoutClassesInput
    methods?: UMLMethodCreateNestedManyWithoutClassInput
  }

  export type UMLClassUncheckedCreateWithoutAttributesInput = {
    id?: string
    name: string
    stereotype?: string | null
    color?: string
    positionX?: number
    positionY?: number
    projectId: string
    methods?: UMLMethodUncheckedCreateNestedManyWithoutClassInput
  }

  export type UMLClassCreateOrConnectWithoutAttributesInput = {
    where: UMLClassWhereUniqueInput
    create: XOR<UMLClassCreateWithoutAttributesInput, UMLClassUncheckedCreateWithoutAttributesInput>
  }

  export type UMLClassUpsertWithoutAttributesInput = {
    update: XOR<UMLClassUpdateWithoutAttributesInput, UMLClassUncheckedUpdateWithoutAttributesInput>
    create: XOR<UMLClassCreateWithoutAttributesInput, UMLClassUncheckedCreateWithoutAttributesInput>
    where?: UMLClassWhereInput
  }

  export type UMLClassUpdateToOneWithWhereWithoutAttributesInput = {
    where?: UMLClassWhereInput
    data: XOR<UMLClassUpdateWithoutAttributesInput, UMLClassUncheckedUpdateWithoutAttributesInput>
  }

  export type UMLClassUpdateWithoutAttributesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stereotype?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    project?: ProjectUpdateOneRequiredWithoutClassesNestedInput
    methods?: UMLMethodUpdateManyWithoutClassNestedInput
  }

  export type UMLClassUncheckedUpdateWithoutAttributesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stereotype?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    projectId?: StringFieldUpdateOperationsInput | string
    methods?: UMLMethodUncheckedUpdateManyWithoutClassNestedInput
  }

  export type UMLClassCreateWithoutMethodsInput = {
    id?: string
    name: string
    stereotype?: string | null
    color?: string
    positionX?: number
    positionY?: number
    project: ProjectCreateNestedOneWithoutClassesInput
    attributes?: UMLAttributeCreateNestedManyWithoutClassInput
  }

  export type UMLClassUncheckedCreateWithoutMethodsInput = {
    id?: string
    name: string
    stereotype?: string | null
    color?: string
    positionX?: number
    positionY?: number
    projectId: string
    attributes?: UMLAttributeUncheckedCreateNestedManyWithoutClassInput
  }

  export type UMLClassCreateOrConnectWithoutMethodsInput = {
    where: UMLClassWhereUniqueInput
    create: XOR<UMLClassCreateWithoutMethodsInput, UMLClassUncheckedCreateWithoutMethodsInput>
  }

  export type UMLClassUpsertWithoutMethodsInput = {
    update: XOR<UMLClassUpdateWithoutMethodsInput, UMLClassUncheckedUpdateWithoutMethodsInput>
    create: XOR<UMLClassCreateWithoutMethodsInput, UMLClassUncheckedCreateWithoutMethodsInput>
    where?: UMLClassWhereInput
  }

  export type UMLClassUpdateToOneWithWhereWithoutMethodsInput = {
    where?: UMLClassWhereInput
    data: XOR<UMLClassUpdateWithoutMethodsInput, UMLClassUncheckedUpdateWithoutMethodsInput>
  }

  export type UMLClassUpdateWithoutMethodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stereotype?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    project?: ProjectUpdateOneRequiredWithoutClassesNestedInput
    attributes?: UMLAttributeUpdateManyWithoutClassNestedInput
  }

  export type UMLClassUncheckedUpdateWithoutMethodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stereotype?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    projectId?: StringFieldUpdateOperationsInput | string
    attributes?: UMLAttributeUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ProjectCreateWithoutRelationsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    classes?: UMLClassCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutRelationsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    classes?: UMLClassUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutRelationsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutRelationsInput, ProjectUncheckedCreateWithoutRelationsInput>
  }

  export type ProjectUpsertWithoutRelationsInput = {
    update: XOR<ProjectUpdateWithoutRelationsInput, ProjectUncheckedUpdateWithoutRelationsInput>
    create: XOR<ProjectCreateWithoutRelationsInput, ProjectUncheckedCreateWithoutRelationsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutRelationsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutRelationsInput, ProjectUncheckedUpdateWithoutRelationsInput>
  }

  export type ProjectUpdateWithoutRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: UMLClassUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: UMLClassUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UMLClassCreateManyProjectInput = {
    id?: string
    name: string
    stereotype?: string | null
    color?: string
    positionX?: number
    positionY?: number
  }

  export type UMLRelationCreateManyProjectInput = {
    id?: string
    type: string
    name?: string | null
    sourceLabel?: string | null
    targetLabel?: string | null
    sourceId: string
    targetId: string
  }

  export type UMLClassUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stereotype?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    attributes?: UMLAttributeUpdateManyWithoutClassNestedInput
    methods?: UMLMethodUpdateManyWithoutClassNestedInput
  }

  export type UMLClassUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stereotype?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    attributes?: UMLAttributeUncheckedUpdateManyWithoutClassNestedInput
    methods?: UMLMethodUncheckedUpdateManyWithoutClassNestedInput
  }

  export type UMLClassUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stereotype?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
  }

  export type UMLRelationUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sourceLabel?: NullableStringFieldUpdateOperationsInput | string | null
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    sourceId?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
  }

  export type UMLRelationUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sourceLabel?: NullableStringFieldUpdateOperationsInput | string | null
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    sourceId?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
  }

  export type UMLRelationUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sourceLabel?: NullableStringFieldUpdateOperationsInput | string | null
    targetLabel?: NullableStringFieldUpdateOperationsInput | string | null
    sourceId?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
  }

  export type UMLAttributeCreateManyClassInput = {
    id?: string
    name: string
    type: string
    visibility?: string
  }

  export type UMLMethodCreateManyClassInput = {
    id?: string
    name: string
    returnType: string
    visibility?: string
  }

  export type UMLAttributeUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
  }

  export type UMLAttributeUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
  }

  export type UMLAttributeUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
  }

  export type UMLMethodUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    returnType?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
  }

  export type UMLMethodUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    returnType?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
  }

  export type UMLMethodUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    returnType?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
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