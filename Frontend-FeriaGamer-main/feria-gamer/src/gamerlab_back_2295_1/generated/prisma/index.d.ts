
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
 * Model criterio
 * 
 */
export type criterio = $Result.DefaultSelection<Prisma.$criterioPayload>
/**
 * Model criterio_evaluacion
 * 
 */
export type criterio_evaluacion = $Result.DefaultSelection<Prisma.$criterio_evaluacionPayload>
/**
 * Model equipo
 * 
 */
export type equipo = $Result.DefaultSelection<Prisma.$equipoPayload>
/**
 * Model estado
 * 
 */
export type estado = $Result.DefaultSelection<Prisma.$estadoPayload>
/**
 * Model evaluacion
 * 
 */
export type evaluacion = $Result.DefaultSelection<Prisma.$evaluacionPayload>
/**
 * Model integrante
 * 
 */
export type integrante = $Result.DefaultSelection<Prisma.$integrantePayload>
/**
 * Model integrante_nrc
 * 
 */
export type integrante_nrc = $Result.DefaultSelection<Prisma.$integrante_nrcPayload>
/**
 * Model materia
 * 
 */
export type materia = $Result.DefaultSelection<Prisma.$materiaPayload>
/**
 * Model nrc
 * 
 */
export type nrc = $Result.DefaultSelection<Prisma.$nrcPayload>
/**
 * Model rol
 * 
 */
export type rol = $Result.DefaultSelection<Prisma.$rolPayload>
/**
 * Model servicio
 * 
 */
export type servicio = $Result.DefaultSelection<Prisma.$servicioPayload>
/**
 * Model rol_servicio
 * 
 */
export type rol_servicio = $Result.DefaultSelection<Prisma.$rol_servicioPayload>
/**
 * Model usuario
 * 
 */
export type usuario = $Result.DefaultSelection<Prisma.$usuarioPayload>
/**
 * Model usuario_rol
 * 
 */
export type usuario_rol = $Result.DefaultSelection<Prisma.$usuario_rolPayload>
/**
 * Model videojuego
 * 
 */
export type videojuego = $Result.DefaultSelection<Prisma.$videojuegoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Criterios
 * const criterios = await prisma.criterio.findMany()
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
   * // Fetch zero or more Criterios
   * const criterios = await prisma.criterio.findMany()
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
   * `prisma.criterio`: Exposes CRUD operations for the **criterio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Criterios
    * const criterios = await prisma.criterio.findMany()
    * ```
    */
  get criterio(): Prisma.criterioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.criterio_evaluacion`: Exposes CRUD operations for the **criterio_evaluacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Criterio_evaluacions
    * const criterio_evaluacions = await prisma.criterio_evaluacion.findMany()
    * ```
    */
  get criterio_evaluacion(): Prisma.criterio_evaluacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipo`: Exposes CRUD operations for the **equipo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipos
    * const equipos = await prisma.equipo.findMany()
    * ```
    */
  get equipo(): Prisma.equipoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estado`: Exposes CRUD operations for the **estado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estados
    * const estados = await prisma.estado.findMany()
    * ```
    */
  get estado(): Prisma.estadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evaluacion`: Exposes CRUD operations for the **evaluacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Evaluacions
    * const evaluacions = await prisma.evaluacion.findMany()
    * ```
    */
  get evaluacion(): Prisma.evaluacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.integrante`: Exposes CRUD operations for the **integrante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Integrantes
    * const integrantes = await prisma.integrante.findMany()
    * ```
    */
  get integrante(): Prisma.integranteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.integrante_nrc`: Exposes CRUD operations for the **integrante_nrc** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Integrante_nrcs
    * const integrante_nrcs = await prisma.integrante_nrc.findMany()
    * ```
    */
  get integrante_nrc(): Prisma.integrante_nrcDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materia`: Exposes CRUD operations for the **materia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materias
    * const materias = await prisma.materia.findMany()
    * ```
    */
  get materia(): Prisma.materiaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nrc`: Exposes CRUD operations for the **nrc** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nrcs
    * const nrcs = await prisma.nrc.findMany()
    * ```
    */
  get nrc(): Prisma.nrcDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rol`: Exposes CRUD operations for the **rol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rols
    * const rols = await prisma.rol.findMany()
    * ```
    */
  get rol(): Prisma.rolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servicio`: Exposes CRUD operations for the **servicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicios
    * const servicios = await prisma.servicio.findMany()
    * ```
    */
  get servicio(): Prisma.servicioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rol_servicio`: Exposes CRUD operations for the **rol_servicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rol_servicios
    * const rol_servicios = await prisma.rol_servicio.findMany()
    * ```
    */
  get rol_servicio(): Prisma.rol_servicioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.usuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario_rol`: Exposes CRUD operations for the **usuario_rol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuario_rols
    * const usuario_rols = await prisma.usuario_rol.findMany()
    * ```
    */
  get usuario_rol(): Prisma.usuario_rolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videojuego`: Exposes CRUD operations for the **videojuego** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videojuegos
    * const videojuegos = await prisma.videojuego.findMany()
    * ```
    */
  get videojuego(): Prisma.videojuegoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    criterio: 'criterio',
    criterio_evaluacion: 'criterio_evaluacion',
    equipo: 'equipo',
    estado: 'estado',
    evaluacion: 'evaluacion',
    integrante: 'integrante',
    integrante_nrc: 'integrante_nrc',
    materia: 'materia',
    nrc: 'nrc',
    rol: 'rol',
    servicio: 'servicio',
    rol_servicio: 'rol_servicio',
    usuario: 'usuario',
    usuario_rol: 'usuario_rol',
    videojuego: 'videojuego'
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
      modelProps: "criterio" | "criterio_evaluacion" | "equipo" | "estado" | "evaluacion" | "integrante" | "integrante_nrc" | "materia" | "nrc" | "rol" | "servicio" | "rol_servicio" | "usuario" | "usuario_rol" | "videojuego"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      criterio: {
        payload: Prisma.$criterioPayload<ExtArgs>
        fields: Prisma.criterioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.criterioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criterioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.criterioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criterioPayload>
          }
          findFirst: {
            args: Prisma.criterioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criterioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.criterioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criterioPayload>
          }
          findMany: {
            args: Prisma.criterioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criterioPayload>[]
          }
          create: {
            args: Prisma.criterioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criterioPayload>
          }
          createMany: {
            args: Prisma.criterioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.criterioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criterioPayload>[]
          }
          delete: {
            args: Prisma.criterioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criterioPayload>
          }
          update: {
            args: Prisma.criterioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criterioPayload>
          }
          deleteMany: {
            args: Prisma.criterioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.criterioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.criterioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criterioPayload>[]
          }
          upsert: {
            args: Prisma.criterioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criterioPayload>
          }
          aggregate: {
            args: Prisma.CriterioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCriterio>
          }
          groupBy: {
            args: Prisma.criterioGroupByArgs<ExtArgs>
            result: $Utils.Optional<CriterioGroupByOutputType>[]
          }
          count: {
            args: Prisma.criterioCountArgs<ExtArgs>
            result: $Utils.Optional<CriterioCountAggregateOutputType> | number
          }
        }
      }
      criterio_evaluacion: {
        payload: Prisma.$criterio_evaluacionPayload<ExtArgs>
        fields: Prisma.criterio_evaluacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.criterio_evaluacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criterio_evaluacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.criterio_evaluacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criterio_evaluacionPayload>
          }
          findFirst: {
            args: Prisma.criterio_evaluacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criterio_evaluacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.criterio_evaluacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criterio_evaluacionPayload>
          }
          findMany: {
            args: Prisma.criterio_evaluacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criterio_evaluacionPayload>[]
          }
          create: {
            args: Prisma.criterio_evaluacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criterio_evaluacionPayload>
          }
          createMany: {
            args: Prisma.criterio_evaluacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.criterio_evaluacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criterio_evaluacionPayload>[]
          }
          delete: {
            args: Prisma.criterio_evaluacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criterio_evaluacionPayload>
          }
          update: {
            args: Prisma.criterio_evaluacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criterio_evaluacionPayload>
          }
          deleteMany: {
            args: Prisma.criterio_evaluacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.criterio_evaluacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.criterio_evaluacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criterio_evaluacionPayload>[]
          }
          upsert: {
            args: Prisma.criterio_evaluacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$criterio_evaluacionPayload>
          }
          aggregate: {
            args: Prisma.Criterio_evaluacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCriterio_evaluacion>
          }
          groupBy: {
            args: Prisma.criterio_evaluacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Criterio_evaluacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.criterio_evaluacionCountArgs<ExtArgs>
            result: $Utils.Optional<Criterio_evaluacionCountAggregateOutputType> | number
          }
        }
      }
      equipo: {
        payload: Prisma.$equipoPayload<ExtArgs>
        fields: Prisma.equipoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.equipoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.equipoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipoPayload>
          }
          findFirst: {
            args: Prisma.equipoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.equipoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipoPayload>
          }
          findMany: {
            args: Prisma.equipoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipoPayload>[]
          }
          create: {
            args: Prisma.equipoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipoPayload>
          }
          createMany: {
            args: Prisma.equipoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.equipoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipoPayload>[]
          }
          delete: {
            args: Prisma.equipoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipoPayload>
          }
          update: {
            args: Prisma.equipoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipoPayload>
          }
          deleteMany: {
            args: Prisma.equipoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.equipoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.equipoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipoPayload>[]
          }
          upsert: {
            args: Prisma.equipoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipoPayload>
          }
          aggregate: {
            args: Prisma.EquipoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipo>
          }
          groupBy: {
            args: Prisma.equipoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipoGroupByOutputType>[]
          }
          count: {
            args: Prisma.equipoCountArgs<ExtArgs>
            result: $Utils.Optional<EquipoCountAggregateOutputType> | number
          }
        }
      }
      estado: {
        payload: Prisma.$estadoPayload<ExtArgs>
        fields: Prisma.estadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.estadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.estadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>
          }
          findFirst: {
            args: Prisma.estadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.estadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>
          }
          findMany: {
            args: Prisma.estadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>[]
          }
          create: {
            args: Prisma.estadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>
          }
          createMany: {
            args: Prisma.estadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.estadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>[]
          }
          delete: {
            args: Prisma.estadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>
          }
          update: {
            args: Prisma.estadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>
          }
          deleteMany: {
            args: Prisma.estadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.estadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.estadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>[]
          }
          upsert: {
            args: Prisma.estadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>
          }
          aggregate: {
            args: Prisma.EstadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstado>
          }
          groupBy: {
            args: Prisma.estadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.estadoCountArgs<ExtArgs>
            result: $Utils.Optional<EstadoCountAggregateOutputType> | number
          }
        }
      }
      evaluacion: {
        payload: Prisma.$evaluacionPayload<ExtArgs>
        fields: Prisma.evaluacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.evaluacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.evaluacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluacionPayload>
          }
          findFirst: {
            args: Prisma.evaluacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.evaluacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluacionPayload>
          }
          findMany: {
            args: Prisma.evaluacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluacionPayload>[]
          }
          create: {
            args: Prisma.evaluacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluacionPayload>
          }
          createMany: {
            args: Prisma.evaluacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.evaluacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluacionPayload>[]
          }
          delete: {
            args: Prisma.evaluacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluacionPayload>
          }
          update: {
            args: Prisma.evaluacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluacionPayload>
          }
          deleteMany: {
            args: Prisma.evaluacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.evaluacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.evaluacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluacionPayload>[]
          }
          upsert: {
            args: Prisma.evaluacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluacionPayload>
          }
          aggregate: {
            args: Prisma.EvaluacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvaluacion>
          }
          groupBy: {
            args: Prisma.evaluacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvaluacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.evaluacionCountArgs<ExtArgs>
            result: $Utils.Optional<EvaluacionCountAggregateOutputType> | number
          }
        }
      }
      integrante: {
        payload: Prisma.$integrantePayload<ExtArgs>
        fields: Prisma.integranteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.integranteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$integrantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.integranteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$integrantePayload>
          }
          findFirst: {
            args: Prisma.integranteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$integrantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.integranteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$integrantePayload>
          }
          findMany: {
            args: Prisma.integranteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$integrantePayload>[]
          }
          create: {
            args: Prisma.integranteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$integrantePayload>
          }
          createMany: {
            args: Prisma.integranteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.integranteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$integrantePayload>[]
          }
          delete: {
            args: Prisma.integranteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$integrantePayload>
          }
          update: {
            args: Prisma.integranteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$integrantePayload>
          }
          deleteMany: {
            args: Prisma.integranteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.integranteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.integranteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$integrantePayload>[]
          }
          upsert: {
            args: Prisma.integranteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$integrantePayload>
          }
          aggregate: {
            args: Prisma.IntegranteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntegrante>
          }
          groupBy: {
            args: Prisma.integranteGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntegranteGroupByOutputType>[]
          }
          count: {
            args: Prisma.integranteCountArgs<ExtArgs>
            result: $Utils.Optional<IntegranteCountAggregateOutputType> | number
          }
        }
      }
      integrante_nrc: {
        payload: Prisma.$integrante_nrcPayload<ExtArgs>
        fields: Prisma.integrante_nrcFieldRefs
        operations: {
          findUnique: {
            args: Prisma.integrante_nrcFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$integrante_nrcPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.integrante_nrcFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$integrante_nrcPayload>
          }
          findFirst: {
            args: Prisma.integrante_nrcFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$integrante_nrcPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.integrante_nrcFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$integrante_nrcPayload>
          }
          findMany: {
            args: Prisma.integrante_nrcFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$integrante_nrcPayload>[]
          }
          create: {
            args: Prisma.integrante_nrcCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$integrante_nrcPayload>
          }
          createMany: {
            args: Prisma.integrante_nrcCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.integrante_nrcCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$integrante_nrcPayload>[]
          }
          delete: {
            args: Prisma.integrante_nrcDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$integrante_nrcPayload>
          }
          update: {
            args: Prisma.integrante_nrcUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$integrante_nrcPayload>
          }
          deleteMany: {
            args: Prisma.integrante_nrcDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.integrante_nrcUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.integrante_nrcUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$integrante_nrcPayload>[]
          }
          upsert: {
            args: Prisma.integrante_nrcUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$integrante_nrcPayload>
          }
          aggregate: {
            args: Prisma.Integrante_nrcAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntegrante_nrc>
          }
          groupBy: {
            args: Prisma.integrante_nrcGroupByArgs<ExtArgs>
            result: $Utils.Optional<Integrante_nrcGroupByOutputType>[]
          }
          count: {
            args: Prisma.integrante_nrcCountArgs<ExtArgs>
            result: $Utils.Optional<Integrante_nrcCountAggregateOutputType> | number
          }
        }
      }
      materia: {
        payload: Prisma.$materiaPayload<ExtArgs>
        fields: Prisma.materiaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.materiaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materiaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.materiaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materiaPayload>
          }
          findFirst: {
            args: Prisma.materiaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materiaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.materiaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materiaPayload>
          }
          findMany: {
            args: Prisma.materiaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materiaPayload>[]
          }
          create: {
            args: Prisma.materiaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materiaPayload>
          }
          createMany: {
            args: Prisma.materiaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.materiaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materiaPayload>[]
          }
          delete: {
            args: Prisma.materiaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materiaPayload>
          }
          update: {
            args: Prisma.materiaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materiaPayload>
          }
          deleteMany: {
            args: Prisma.materiaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.materiaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.materiaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materiaPayload>[]
          }
          upsert: {
            args: Prisma.materiaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materiaPayload>
          }
          aggregate: {
            args: Prisma.MateriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMateria>
          }
          groupBy: {
            args: Prisma.materiaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MateriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.materiaCountArgs<ExtArgs>
            result: $Utils.Optional<MateriaCountAggregateOutputType> | number
          }
        }
      }
      nrc: {
        payload: Prisma.$nrcPayload<ExtArgs>
        fields: Prisma.nrcFieldRefs
        operations: {
          findUnique: {
            args: Prisma.nrcFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nrcPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.nrcFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nrcPayload>
          }
          findFirst: {
            args: Prisma.nrcFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nrcPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.nrcFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nrcPayload>
          }
          findMany: {
            args: Prisma.nrcFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nrcPayload>[]
          }
          create: {
            args: Prisma.nrcCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nrcPayload>
          }
          createMany: {
            args: Prisma.nrcCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.nrcCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nrcPayload>[]
          }
          delete: {
            args: Prisma.nrcDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nrcPayload>
          }
          update: {
            args: Prisma.nrcUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nrcPayload>
          }
          deleteMany: {
            args: Prisma.nrcDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.nrcUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.nrcUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nrcPayload>[]
          }
          upsert: {
            args: Prisma.nrcUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nrcPayload>
          }
          aggregate: {
            args: Prisma.NrcAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNrc>
          }
          groupBy: {
            args: Prisma.nrcGroupByArgs<ExtArgs>
            result: $Utils.Optional<NrcGroupByOutputType>[]
          }
          count: {
            args: Prisma.nrcCountArgs<ExtArgs>
            result: $Utils.Optional<NrcCountAggregateOutputType> | number
          }
        }
      }
      rol: {
        payload: Prisma.$rolPayload<ExtArgs>
        fields: Prisma.rolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          findFirst: {
            args: Prisma.rolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          findMany: {
            args: Prisma.rolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>[]
          }
          create: {
            args: Prisma.rolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          createMany: {
            args: Prisma.rolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>[]
          }
          delete: {
            args: Prisma.rolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          update: {
            args: Prisma.rolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          deleteMany: {
            args: Prisma.rolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>[]
          }
          upsert: {
            args: Prisma.rolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          aggregate: {
            args: Prisma.RolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRol>
          }
          groupBy: {
            args: Prisma.rolGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolCountArgs<ExtArgs>
            result: $Utils.Optional<RolCountAggregateOutputType> | number
          }
        }
      }
      servicio: {
        payload: Prisma.$servicioPayload<ExtArgs>
        fields: Prisma.servicioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.servicioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.servicioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicioPayload>
          }
          findFirst: {
            args: Prisma.servicioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.servicioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicioPayload>
          }
          findMany: {
            args: Prisma.servicioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicioPayload>[]
          }
          create: {
            args: Prisma.servicioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicioPayload>
          }
          createMany: {
            args: Prisma.servicioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.servicioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicioPayload>[]
          }
          delete: {
            args: Prisma.servicioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicioPayload>
          }
          update: {
            args: Prisma.servicioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicioPayload>
          }
          deleteMany: {
            args: Prisma.servicioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.servicioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.servicioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicioPayload>[]
          }
          upsert: {
            args: Prisma.servicioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicioPayload>
          }
          aggregate: {
            args: Prisma.ServicioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicio>
          }
          groupBy: {
            args: Prisma.servicioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicioGroupByOutputType>[]
          }
          count: {
            args: Prisma.servicioCountArgs<ExtArgs>
            result: $Utils.Optional<ServicioCountAggregateOutputType> | number
          }
        }
      }
      rol_servicio: {
        payload: Prisma.$rol_servicioPayload<ExtArgs>
        fields: Prisma.rol_servicioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rol_servicioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rol_servicioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rol_servicioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rol_servicioPayload>
          }
          findFirst: {
            args: Prisma.rol_servicioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rol_servicioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rol_servicioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rol_servicioPayload>
          }
          findMany: {
            args: Prisma.rol_servicioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rol_servicioPayload>[]
          }
          create: {
            args: Prisma.rol_servicioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rol_servicioPayload>
          }
          createMany: {
            args: Prisma.rol_servicioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rol_servicioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rol_servicioPayload>[]
          }
          delete: {
            args: Prisma.rol_servicioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rol_servicioPayload>
          }
          update: {
            args: Prisma.rol_servicioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rol_servicioPayload>
          }
          deleteMany: {
            args: Prisma.rol_servicioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rol_servicioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rol_servicioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rol_servicioPayload>[]
          }
          upsert: {
            args: Prisma.rol_servicioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rol_servicioPayload>
          }
          aggregate: {
            args: Prisma.Rol_servicioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRol_servicio>
          }
          groupBy: {
            args: Prisma.rol_servicioGroupByArgs<ExtArgs>
            result: $Utils.Optional<Rol_servicioGroupByOutputType>[]
          }
          count: {
            args: Prisma.rol_servicioCountArgs<ExtArgs>
            result: $Utils.Optional<Rol_servicioCountAggregateOutputType> | number
          }
        }
      }
      usuario: {
        payload: Prisma.$usuarioPayload<ExtArgs>
        fields: Prisma.usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findFirst: {
            args: Prisma.usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findMany: {
            args: Prisma.usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          create: {
            args: Prisma.usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          createMany: {
            args: Prisma.usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          delete: {
            args: Prisma.usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          update: {
            args: Prisma.usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          deleteMany: {
            args: Prisma.usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          upsert: {
            args: Prisma.usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      usuario_rol: {
        payload: Prisma.$usuario_rolPayload<ExtArgs>
        fields: Prisma.usuario_rolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuario_rolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuario_rolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload>
          }
          findFirst: {
            args: Prisma.usuario_rolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuario_rolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload>
          }
          findMany: {
            args: Prisma.usuario_rolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload>[]
          }
          create: {
            args: Prisma.usuario_rolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload>
          }
          createMany: {
            args: Prisma.usuario_rolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuario_rolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload>[]
          }
          delete: {
            args: Prisma.usuario_rolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload>
          }
          update: {
            args: Prisma.usuario_rolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload>
          }
          deleteMany: {
            args: Prisma.usuario_rolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuario_rolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuario_rolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload>[]
          }
          upsert: {
            args: Prisma.usuario_rolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload>
          }
          aggregate: {
            args: Prisma.Usuario_rolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario_rol>
          }
          groupBy: {
            args: Prisma.usuario_rolGroupByArgs<ExtArgs>
            result: $Utils.Optional<Usuario_rolGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuario_rolCountArgs<ExtArgs>
            result: $Utils.Optional<Usuario_rolCountAggregateOutputType> | number
          }
        }
      }
      videojuego: {
        payload: Prisma.$videojuegoPayload<ExtArgs>
        fields: Prisma.videojuegoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.videojuegoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videojuegoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.videojuegoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videojuegoPayload>
          }
          findFirst: {
            args: Prisma.videojuegoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videojuegoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.videojuegoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videojuegoPayload>
          }
          findMany: {
            args: Prisma.videojuegoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videojuegoPayload>[]
          }
          create: {
            args: Prisma.videojuegoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videojuegoPayload>
          }
          createMany: {
            args: Prisma.videojuegoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.videojuegoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videojuegoPayload>[]
          }
          delete: {
            args: Prisma.videojuegoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videojuegoPayload>
          }
          update: {
            args: Prisma.videojuegoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videojuegoPayload>
          }
          deleteMany: {
            args: Prisma.videojuegoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.videojuegoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.videojuegoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videojuegoPayload>[]
          }
          upsert: {
            args: Prisma.videojuegoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videojuegoPayload>
          }
          aggregate: {
            args: Prisma.VideojuegoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideojuego>
          }
          groupBy: {
            args: Prisma.videojuegoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideojuegoGroupByOutputType>[]
          }
          count: {
            args: Prisma.videojuegoCountArgs<ExtArgs>
            result: $Utils.Optional<VideojuegoCountAggregateOutputType> | number
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
    criterio?: criterioOmit
    criterio_evaluacion?: criterio_evaluacionOmit
    equipo?: equipoOmit
    estado?: estadoOmit
    evaluacion?: evaluacionOmit
    integrante?: integranteOmit
    integrante_nrc?: integrante_nrcOmit
    materia?: materiaOmit
    nrc?: nrcOmit
    rol?: rolOmit
    servicio?: servicioOmit
    rol_servicio?: rol_servicioOmit
    usuario?: usuarioOmit
    usuario_rol?: usuario_rolOmit
    videojuego?: videojuegoOmit
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
   * Count Type CriterioCountOutputType
   */

  export type CriterioCountOutputType = {
    criterio_evaluacion: number
  }

  export type CriterioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criterio_evaluacion?: boolean | CriterioCountOutputTypeCountCriterio_evaluacionArgs
  }

  // Custom InputTypes
  /**
   * CriterioCountOutputType without action
   */
  export type CriterioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CriterioCountOutputType
     */
    select?: CriterioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CriterioCountOutputType without action
   */
  export type CriterioCountOutputTypeCountCriterio_evaluacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: criterio_evaluacionWhereInput
  }


  /**
   * Count Type EquipoCountOutputType
   */

  export type EquipoCountOutputType = {
    integrante: number
    videojuego: number
  }

  export type EquipoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    integrante?: boolean | EquipoCountOutputTypeCountIntegranteArgs
    videojuego?: boolean | EquipoCountOutputTypeCountVideojuegoArgs
  }

  // Custom InputTypes
  /**
   * EquipoCountOutputType without action
   */
  export type EquipoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipoCountOutputType
     */
    select?: EquipoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipoCountOutputType without action
   */
  export type EquipoCountOutputTypeCountIntegranteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: integranteWhereInput
  }

  /**
   * EquipoCountOutputType without action
   */
  export type EquipoCountOutputTypeCountVideojuegoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: videojuegoWhereInput
  }


  /**
   * Count Type EstadoCountOutputType
   */

  export type EstadoCountOutputType = {
    equipos: number
  }

  export type EstadoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipos?: boolean | EstadoCountOutputTypeCountEquiposArgs
  }

  // Custom InputTypes
  /**
   * EstadoCountOutputType without action
   */
  export type EstadoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCountOutputType
     */
    select?: EstadoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstadoCountOutputType without action
   */
  export type EstadoCountOutputTypeCountEquiposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: equipoWhereInput
  }


  /**
   * Count Type EvaluacionCountOutputType
   */

  export type EvaluacionCountOutputType = {
    criterio_evaluacion: number
  }

  export type EvaluacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criterio_evaluacion?: boolean | EvaluacionCountOutputTypeCountCriterio_evaluacionArgs
  }

  // Custom InputTypes
  /**
   * EvaluacionCountOutputType without action
   */
  export type EvaluacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluacionCountOutputType
     */
    select?: EvaluacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EvaluacionCountOutputType without action
   */
  export type EvaluacionCountOutputTypeCountCriterio_evaluacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: criterio_evaluacionWhereInput
  }


  /**
   * Count Type IntegranteCountOutputType
   */

  export type IntegranteCountOutputType = {
    integrante_nrc: number
  }

  export type IntegranteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    integrante_nrc?: boolean | IntegranteCountOutputTypeCountIntegrante_nrcArgs
  }

  // Custom InputTypes
  /**
   * IntegranteCountOutputType without action
   */
  export type IntegranteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegranteCountOutputType
     */
    select?: IntegranteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IntegranteCountOutputType without action
   */
  export type IntegranteCountOutputTypeCountIntegrante_nrcArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: integrante_nrcWhereInput
  }


  /**
   * Count Type MateriaCountOutputType
   */

  export type MateriaCountOutputType = {
    nrc: number
  }

  export type MateriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nrc?: boolean | MateriaCountOutputTypeCountNrcArgs
  }

  // Custom InputTypes
  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaCountOutputType
     */
    select?: MateriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeCountNrcArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nrcWhereInput
  }


  /**
   * Count Type NrcCountOutputType
   */

  export type NrcCountOutputType = {
    integrante_nrc: number
  }

  export type NrcCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    integrante_nrc?: boolean | NrcCountOutputTypeCountIntegrante_nrcArgs
  }

  // Custom InputTypes
  /**
   * NrcCountOutputType without action
   */
  export type NrcCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NrcCountOutputType
     */
    select?: NrcCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NrcCountOutputType without action
   */
  export type NrcCountOutputTypeCountIntegrante_nrcArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: integrante_nrcWhereInput
  }


  /**
   * Count Type RolCountOutputType
   */

  export type RolCountOutputType = {
    rol_servicio: number
    usuario_rol: number
  }

  export type RolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol_servicio?: boolean | RolCountOutputTypeCountRol_servicioArgs
    usuario_rol?: boolean | RolCountOutputTypeCountUsuario_rolArgs
  }

  // Custom InputTypes
  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolCountOutputType
     */
    select?: RolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountRol_servicioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rol_servicioWhereInput
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountUsuario_rolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuario_rolWhereInput
  }


  /**
   * Count Type ServicioCountOutputType
   */

  export type ServicioCountOutputType = {
    rol_servicio: number
  }

  export type ServicioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol_servicio?: boolean | ServicioCountOutputTypeCountRol_servicioArgs
  }

  // Custom InputTypes
  /**
   * ServicioCountOutputType without action
   */
  export type ServicioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioCountOutputType
     */
    select?: ServicioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServicioCountOutputType without action
   */
  export type ServicioCountOutputTypeCountRol_servicioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rol_servicioWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    evaluacion: number
    nrc: number
    usuario_rol: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluacion?: boolean | UsuarioCountOutputTypeCountEvaluacionArgs
    nrc?: boolean | UsuarioCountOutputTypeCountNrcArgs
    usuario_rol?: boolean | UsuarioCountOutputTypeCountUsuario_rolArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountEvaluacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: evaluacionWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountNrcArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nrcWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountUsuario_rolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuario_rolWhereInput
  }


  /**
   * Count Type VideojuegoCountOutputType
   */

  export type VideojuegoCountOutputType = {
    evaluacion: number
  }

  export type VideojuegoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluacion?: boolean | VideojuegoCountOutputTypeCountEvaluacionArgs
  }

  // Custom InputTypes
  /**
   * VideojuegoCountOutputType without action
   */
  export type VideojuegoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideojuegoCountOutputType
     */
    select?: VideojuegoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VideojuegoCountOutputType without action
   */
  export type VideojuegoCountOutputTypeCountEvaluacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: evaluacionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model criterio
   */

  export type AggregateCriterio = {
    _count: CriterioCountAggregateOutputType | null
    _avg: CriterioAvgAggregateOutputType | null
    _sum: CriterioSumAggregateOutputType | null
    _min: CriterioMinAggregateOutputType | null
    _max: CriterioMaxAggregateOutputType | null
  }

  export type CriterioAvgAggregateOutputType = {
    id_criterio: number | null
    porcentaje: number | null
  }

  export type CriterioSumAggregateOutputType = {
    id_criterio: number | null
    porcentaje: number | null
  }

  export type CriterioMinAggregateOutputType = {
    id_criterio: number | null
    nombre: string | null
    descripcion: string | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    estado: boolean | null
    porcentaje: number | null
  }

  export type CriterioMaxAggregateOutputType = {
    id_criterio: number | null
    nombre: string | null
    descripcion: string | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    estado: boolean | null
    porcentaje: number | null
  }

  export type CriterioCountAggregateOutputType = {
    id_criterio: number
    nombre: number
    descripcion: number
    fecha_creacion: number
    fecha_actualizacion: number
    estado: number
    porcentaje: number
    _all: number
  }


  export type CriterioAvgAggregateInputType = {
    id_criterio?: true
    porcentaje?: true
  }

  export type CriterioSumAggregateInputType = {
    id_criterio?: true
    porcentaje?: true
  }

  export type CriterioMinAggregateInputType = {
    id_criterio?: true
    nombre?: true
    descripcion?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
    porcentaje?: true
  }

  export type CriterioMaxAggregateInputType = {
    id_criterio?: true
    nombre?: true
    descripcion?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
    porcentaje?: true
  }

  export type CriterioCountAggregateInputType = {
    id_criterio?: true
    nombre?: true
    descripcion?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
    porcentaje?: true
    _all?: true
  }

  export type CriterioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which criterio to aggregate.
     */
    where?: criterioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of criterios to fetch.
     */
    orderBy?: criterioOrderByWithRelationInput | criterioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: criterioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` criterios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` criterios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned criterios
    **/
    _count?: true | CriterioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CriterioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CriterioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CriterioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CriterioMaxAggregateInputType
  }

  export type GetCriterioAggregateType<T extends CriterioAggregateArgs> = {
        [P in keyof T & keyof AggregateCriterio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCriterio[P]>
      : GetScalarType<T[P], AggregateCriterio[P]>
  }




  export type criterioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: criterioWhereInput
    orderBy?: criterioOrderByWithAggregationInput | criterioOrderByWithAggregationInput[]
    by: CriterioScalarFieldEnum[] | CriterioScalarFieldEnum
    having?: criterioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CriterioCountAggregateInputType | true
    _avg?: CriterioAvgAggregateInputType
    _sum?: CriterioSumAggregateInputType
    _min?: CriterioMinAggregateInputType
    _max?: CriterioMaxAggregateInputType
  }

  export type CriterioGroupByOutputType = {
    id_criterio: number
    nombre: string
    descripcion: string
    fecha_creacion: Date
    fecha_actualizacion: Date | null
    estado: boolean
    porcentaje: number
    _count: CriterioCountAggregateOutputType | null
    _avg: CriterioAvgAggregateOutputType | null
    _sum: CriterioSumAggregateOutputType | null
    _min: CriterioMinAggregateOutputType | null
    _max: CriterioMaxAggregateOutputType | null
  }

  type GetCriterioGroupByPayload<T extends criterioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CriterioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CriterioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CriterioGroupByOutputType[P]>
            : GetScalarType<T[P], CriterioGroupByOutputType[P]>
        }
      >
    >


  export type criterioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_criterio?: boolean
    nombre?: boolean
    descripcion?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    porcentaje?: boolean
    criterio_evaluacion?: boolean | criterio$criterio_evaluacionArgs<ExtArgs>
    _count?: boolean | CriterioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["criterio"]>

  export type criterioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_criterio?: boolean
    nombre?: boolean
    descripcion?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    porcentaje?: boolean
  }, ExtArgs["result"]["criterio"]>

  export type criterioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_criterio?: boolean
    nombre?: boolean
    descripcion?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    porcentaje?: boolean
  }, ExtArgs["result"]["criterio"]>

  export type criterioSelectScalar = {
    id_criterio?: boolean
    nombre?: boolean
    descripcion?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    porcentaje?: boolean
  }

  export type criterioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_criterio" | "nombre" | "descripcion" | "fecha_creacion" | "fecha_actualizacion" | "estado" | "porcentaje", ExtArgs["result"]["criterio"]>
  export type criterioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criterio_evaluacion?: boolean | criterio$criterio_evaluacionArgs<ExtArgs>
    _count?: boolean | CriterioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type criterioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type criterioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $criterioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "criterio"
    objects: {
      criterio_evaluacion: Prisma.$criterio_evaluacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_criterio: number
      nombre: string
      descripcion: string
      fecha_creacion: Date
      fecha_actualizacion: Date | null
      estado: boolean
      porcentaje: number
    }, ExtArgs["result"]["criterio"]>
    composites: {}
  }

  type criterioGetPayload<S extends boolean | null | undefined | criterioDefaultArgs> = $Result.GetResult<Prisma.$criterioPayload, S>

  type criterioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<criterioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CriterioCountAggregateInputType | true
    }

  export interface criterioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['criterio'], meta: { name: 'criterio' } }
    /**
     * Find zero or one Criterio that matches the filter.
     * @param {criterioFindUniqueArgs} args - Arguments to find a Criterio
     * @example
     * // Get one Criterio
     * const criterio = await prisma.criterio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends criterioFindUniqueArgs>(args: SelectSubset<T, criterioFindUniqueArgs<ExtArgs>>): Prisma__criterioClient<$Result.GetResult<Prisma.$criterioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Criterio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {criterioFindUniqueOrThrowArgs} args - Arguments to find a Criterio
     * @example
     * // Get one Criterio
     * const criterio = await prisma.criterio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends criterioFindUniqueOrThrowArgs>(args: SelectSubset<T, criterioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__criterioClient<$Result.GetResult<Prisma.$criterioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Criterio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {criterioFindFirstArgs} args - Arguments to find a Criterio
     * @example
     * // Get one Criterio
     * const criterio = await prisma.criterio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends criterioFindFirstArgs>(args?: SelectSubset<T, criterioFindFirstArgs<ExtArgs>>): Prisma__criterioClient<$Result.GetResult<Prisma.$criterioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Criterio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {criterioFindFirstOrThrowArgs} args - Arguments to find a Criterio
     * @example
     * // Get one Criterio
     * const criterio = await prisma.criterio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends criterioFindFirstOrThrowArgs>(args?: SelectSubset<T, criterioFindFirstOrThrowArgs<ExtArgs>>): Prisma__criterioClient<$Result.GetResult<Prisma.$criterioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Criterios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {criterioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Criterios
     * const criterios = await prisma.criterio.findMany()
     * 
     * // Get first 10 Criterios
     * const criterios = await prisma.criterio.findMany({ take: 10 })
     * 
     * // Only select the `id_criterio`
     * const criterioWithId_criterioOnly = await prisma.criterio.findMany({ select: { id_criterio: true } })
     * 
     */
    findMany<T extends criterioFindManyArgs>(args?: SelectSubset<T, criterioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$criterioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Criterio.
     * @param {criterioCreateArgs} args - Arguments to create a Criterio.
     * @example
     * // Create one Criterio
     * const Criterio = await prisma.criterio.create({
     *   data: {
     *     // ... data to create a Criterio
     *   }
     * })
     * 
     */
    create<T extends criterioCreateArgs>(args: SelectSubset<T, criterioCreateArgs<ExtArgs>>): Prisma__criterioClient<$Result.GetResult<Prisma.$criterioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Criterios.
     * @param {criterioCreateManyArgs} args - Arguments to create many Criterios.
     * @example
     * // Create many Criterios
     * const criterio = await prisma.criterio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends criterioCreateManyArgs>(args?: SelectSubset<T, criterioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Criterios and returns the data saved in the database.
     * @param {criterioCreateManyAndReturnArgs} args - Arguments to create many Criterios.
     * @example
     * // Create many Criterios
     * const criterio = await prisma.criterio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Criterios and only return the `id_criterio`
     * const criterioWithId_criterioOnly = await prisma.criterio.createManyAndReturn({
     *   select: { id_criterio: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends criterioCreateManyAndReturnArgs>(args?: SelectSubset<T, criterioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$criterioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Criterio.
     * @param {criterioDeleteArgs} args - Arguments to delete one Criterio.
     * @example
     * // Delete one Criterio
     * const Criterio = await prisma.criterio.delete({
     *   where: {
     *     // ... filter to delete one Criterio
     *   }
     * })
     * 
     */
    delete<T extends criterioDeleteArgs>(args: SelectSubset<T, criterioDeleteArgs<ExtArgs>>): Prisma__criterioClient<$Result.GetResult<Prisma.$criterioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Criterio.
     * @param {criterioUpdateArgs} args - Arguments to update one Criterio.
     * @example
     * // Update one Criterio
     * const criterio = await prisma.criterio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends criterioUpdateArgs>(args: SelectSubset<T, criterioUpdateArgs<ExtArgs>>): Prisma__criterioClient<$Result.GetResult<Prisma.$criterioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Criterios.
     * @param {criterioDeleteManyArgs} args - Arguments to filter Criterios to delete.
     * @example
     * // Delete a few Criterios
     * const { count } = await prisma.criterio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends criterioDeleteManyArgs>(args?: SelectSubset<T, criterioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Criterios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {criterioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Criterios
     * const criterio = await prisma.criterio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends criterioUpdateManyArgs>(args: SelectSubset<T, criterioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Criterios and returns the data updated in the database.
     * @param {criterioUpdateManyAndReturnArgs} args - Arguments to update many Criterios.
     * @example
     * // Update many Criterios
     * const criterio = await prisma.criterio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Criterios and only return the `id_criterio`
     * const criterioWithId_criterioOnly = await prisma.criterio.updateManyAndReturn({
     *   select: { id_criterio: true },
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
    updateManyAndReturn<T extends criterioUpdateManyAndReturnArgs>(args: SelectSubset<T, criterioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$criterioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Criterio.
     * @param {criterioUpsertArgs} args - Arguments to update or create a Criterio.
     * @example
     * // Update or create a Criterio
     * const criterio = await prisma.criterio.upsert({
     *   create: {
     *     // ... data to create a Criterio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Criterio we want to update
     *   }
     * })
     */
    upsert<T extends criterioUpsertArgs>(args: SelectSubset<T, criterioUpsertArgs<ExtArgs>>): Prisma__criterioClient<$Result.GetResult<Prisma.$criterioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Criterios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {criterioCountArgs} args - Arguments to filter Criterios to count.
     * @example
     * // Count the number of Criterios
     * const count = await prisma.criterio.count({
     *   where: {
     *     // ... the filter for the Criterios we want to count
     *   }
     * })
    **/
    count<T extends criterioCountArgs>(
      args?: Subset<T, criterioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CriterioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Criterio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriterioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CriterioAggregateArgs>(args: Subset<T, CriterioAggregateArgs>): Prisma.PrismaPromise<GetCriterioAggregateType<T>>

    /**
     * Group by Criterio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {criterioGroupByArgs} args - Group by arguments.
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
      T extends criterioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: criterioGroupByArgs['orderBy'] }
        : { orderBy?: criterioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, criterioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCriterioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the criterio model
   */
  readonly fields: criterioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for criterio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__criterioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    criterio_evaluacion<T extends criterio$criterio_evaluacionArgs<ExtArgs> = {}>(args?: Subset<T, criterio$criterio_evaluacionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$criterio_evaluacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the criterio model
   */
  interface criterioFieldRefs {
    readonly id_criterio: FieldRef<"criterio", 'Int'>
    readonly nombre: FieldRef<"criterio", 'String'>
    readonly descripcion: FieldRef<"criterio", 'String'>
    readonly fecha_creacion: FieldRef<"criterio", 'DateTime'>
    readonly fecha_actualizacion: FieldRef<"criterio", 'DateTime'>
    readonly estado: FieldRef<"criterio", 'Boolean'>
    readonly porcentaje: FieldRef<"criterio", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * criterio findUnique
   */
  export type criterioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criterio
     */
    select?: criterioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criterio
     */
    omit?: criterioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criterioInclude<ExtArgs> | null
    /**
     * Filter, which criterio to fetch.
     */
    where: criterioWhereUniqueInput
  }

  /**
   * criterio findUniqueOrThrow
   */
  export type criterioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criterio
     */
    select?: criterioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criterio
     */
    omit?: criterioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criterioInclude<ExtArgs> | null
    /**
     * Filter, which criterio to fetch.
     */
    where: criterioWhereUniqueInput
  }

  /**
   * criterio findFirst
   */
  export type criterioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criterio
     */
    select?: criterioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criterio
     */
    omit?: criterioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criterioInclude<ExtArgs> | null
    /**
     * Filter, which criterio to fetch.
     */
    where?: criterioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of criterios to fetch.
     */
    orderBy?: criterioOrderByWithRelationInput | criterioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for criterios.
     */
    cursor?: criterioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` criterios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` criterios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of criterios.
     */
    distinct?: CriterioScalarFieldEnum | CriterioScalarFieldEnum[]
  }

  /**
   * criterio findFirstOrThrow
   */
  export type criterioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criterio
     */
    select?: criterioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criterio
     */
    omit?: criterioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criterioInclude<ExtArgs> | null
    /**
     * Filter, which criterio to fetch.
     */
    where?: criterioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of criterios to fetch.
     */
    orderBy?: criterioOrderByWithRelationInput | criterioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for criterios.
     */
    cursor?: criterioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` criterios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` criterios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of criterios.
     */
    distinct?: CriterioScalarFieldEnum | CriterioScalarFieldEnum[]
  }

  /**
   * criterio findMany
   */
  export type criterioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criterio
     */
    select?: criterioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criterio
     */
    omit?: criterioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criterioInclude<ExtArgs> | null
    /**
     * Filter, which criterios to fetch.
     */
    where?: criterioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of criterios to fetch.
     */
    orderBy?: criterioOrderByWithRelationInput | criterioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing criterios.
     */
    cursor?: criterioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` criterios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` criterios.
     */
    skip?: number
    distinct?: CriterioScalarFieldEnum | CriterioScalarFieldEnum[]
  }

  /**
   * criterio create
   */
  export type criterioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criterio
     */
    select?: criterioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criterio
     */
    omit?: criterioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criterioInclude<ExtArgs> | null
    /**
     * The data needed to create a criterio.
     */
    data: XOR<criterioCreateInput, criterioUncheckedCreateInput>
  }

  /**
   * criterio createMany
   */
  export type criterioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many criterios.
     */
    data: criterioCreateManyInput | criterioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * criterio createManyAndReturn
   */
  export type criterioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criterio
     */
    select?: criterioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the criterio
     */
    omit?: criterioOmit<ExtArgs> | null
    /**
     * The data used to create many criterios.
     */
    data: criterioCreateManyInput | criterioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * criterio update
   */
  export type criterioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criterio
     */
    select?: criterioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criterio
     */
    omit?: criterioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criterioInclude<ExtArgs> | null
    /**
     * The data needed to update a criterio.
     */
    data: XOR<criterioUpdateInput, criterioUncheckedUpdateInput>
    /**
     * Choose, which criterio to update.
     */
    where: criterioWhereUniqueInput
  }

  /**
   * criterio updateMany
   */
  export type criterioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update criterios.
     */
    data: XOR<criterioUpdateManyMutationInput, criterioUncheckedUpdateManyInput>
    /**
     * Filter which criterios to update
     */
    where?: criterioWhereInput
    /**
     * Limit how many criterios to update.
     */
    limit?: number
  }

  /**
   * criterio updateManyAndReturn
   */
  export type criterioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criterio
     */
    select?: criterioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the criterio
     */
    omit?: criterioOmit<ExtArgs> | null
    /**
     * The data used to update criterios.
     */
    data: XOR<criterioUpdateManyMutationInput, criterioUncheckedUpdateManyInput>
    /**
     * Filter which criterios to update
     */
    where?: criterioWhereInput
    /**
     * Limit how many criterios to update.
     */
    limit?: number
  }

  /**
   * criterio upsert
   */
  export type criterioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criterio
     */
    select?: criterioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criterio
     */
    omit?: criterioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criterioInclude<ExtArgs> | null
    /**
     * The filter to search for the criterio to update in case it exists.
     */
    where: criterioWhereUniqueInput
    /**
     * In case the criterio found by the `where` argument doesn't exist, create a new criterio with this data.
     */
    create: XOR<criterioCreateInput, criterioUncheckedCreateInput>
    /**
     * In case the criterio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<criterioUpdateInput, criterioUncheckedUpdateInput>
  }

  /**
   * criterio delete
   */
  export type criterioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criterio
     */
    select?: criterioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criterio
     */
    omit?: criterioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criterioInclude<ExtArgs> | null
    /**
     * Filter which criterio to delete.
     */
    where: criterioWhereUniqueInput
  }

  /**
   * criterio deleteMany
   */
  export type criterioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which criterios to delete
     */
    where?: criterioWhereInput
    /**
     * Limit how many criterios to delete.
     */
    limit?: number
  }

  /**
   * criterio.criterio_evaluacion
   */
  export type criterio$criterio_evaluacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criterio_evaluacion
     */
    select?: criterio_evaluacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criterio_evaluacion
     */
    omit?: criterio_evaluacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criterio_evaluacionInclude<ExtArgs> | null
    where?: criterio_evaluacionWhereInput
    orderBy?: criterio_evaluacionOrderByWithRelationInput | criterio_evaluacionOrderByWithRelationInput[]
    cursor?: criterio_evaluacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Criterio_evaluacionScalarFieldEnum | Criterio_evaluacionScalarFieldEnum[]
  }

  /**
   * criterio without action
   */
  export type criterioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criterio
     */
    select?: criterioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criterio
     */
    omit?: criterioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criterioInclude<ExtArgs> | null
  }


  /**
   * Model criterio_evaluacion
   */

  export type AggregateCriterio_evaluacion = {
    _count: Criterio_evaluacionCountAggregateOutputType | null
    _avg: Criterio_evaluacionAvgAggregateOutputType | null
    _sum: Criterio_evaluacionSumAggregateOutputType | null
    _min: Criterio_evaluacionMinAggregateOutputType | null
    _max: Criterio_evaluacionMaxAggregateOutputType | null
  }

  export type Criterio_evaluacionAvgAggregateOutputType = {
    id_criterio: number | null
    id_evaluacion: number | null
  }

  export type Criterio_evaluacionSumAggregateOutputType = {
    id_criterio: number | null
    id_evaluacion: number | null
  }

  export type Criterio_evaluacionMinAggregateOutputType = {
    id_criterio: number | null
    id_evaluacion: number | null
    valoracion: string | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    estado: boolean | null
  }

  export type Criterio_evaluacionMaxAggregateOutputType = {
    id_criterio: number | null
    id_evaluacion: number | null
    valoracion: string | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    estado: boolean | null
  }

  export type Criterio_evaluacionCountAggregateOutputType = {
    id_criterio: number
    id_evaluacion: number
    valoracion: number
    fecha_creacion: number
    fecha_actualizacion: number
    estado: number
    _all: number
  }


  export type Criterio_evaluacionAvgAggregateInputType = {
    id_criterio?: true
    id_evaluacion?: true
  }

  export type Criterio_evaluacionSumAggregateInputType = {
    id_criterio?: true
    id_evaluacion?: true
  }

  export type Criterio_evaluacionMinAggregateInputType = {
    id_criterio?: true
    id_evaluacion?: true
    valoracion?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
  }

  export type Criterio_evaluacionMaxAggregateInputType = {
    id_criterio?: true
    id_evaluacion?: true
    valoracion?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
  }

  export type Criterio_evaluacionCountAggregateInputType = {
    id_criterio?: true
    id_evaluacion?: true
    valoracion?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
    _all?: true
  }

  export type Criterio_evaluacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which criterio_evaluacion to aggregate.
     */
    where?: criterio_evaluacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of criterio_evaluacions to fetch.
     */
    orderBy?: criterio_evaluacionOrderByWithRelationInput | criterio_evaluacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: criterio_evaluacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` criterio_evaluacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` criterio_evaluacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned criterio_evaluacions
    **/
    _count?: true | Criterio_evaluacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Criterio_evaluacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Criterio_evaluacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Criterio_evaluacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Criterio_evaluacionMaxAggregateInputType
  }

  export type GetCriterio_evaluacionAggregateType<T extends Criterio_evaluacionAggregateArgs> = {
        [P in keyof T & keyof AggregateCriterio_evaluacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCriterio_evaluacion[P]>
      : GetScalarType<T[P], AggregateCriterio_evaluacion[P]>
  }




  export type criterio_evaluacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: criterio_evaluacionWhereInput
    orderBy?: criterio_evaluacionOrderByWithAggregationInput | criterio_evaluacionOrderByWithAggregationInput[]
    by: Criterio_evaluacionScalarFieldEnum[] | Criterio_evaluacionScalarFieldEnum
    having?: criterio_evaluacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Criterio_evaluacionCountAggregateInputType | true
    _avg?: Criterio_evaluacionAvgAggregateInputType
    _sum?: Criterio_evaluacionSumAggregateInputType
    _min?: Criterio_evaluacionMinAggregateInputType
    _max?: Criterio_evaluacionMaxAggregateInputType
  }

  export type Criterio_evaluacionGroupByOutputType = {
    id_criterio: number
    id_evaluacion: number
    valoracion: string
    fecha_creacion: Date
    fecha_actualizacion: Date | null
    estado: boolean
    _count: Criterio_evaluacionCountAggregateOutputType | null
    _avg: Criterio_evaluacionAvgAggregateOutputType | null
    _sum: Criterio_evaluacionSumAggregateOutputType | null
    _min: Criterio_evaluacionMinAggregateOutputType | null
    _max: Criterio_evaluacionMaxAggregateOutputType | null
  }

  type GetCriterio_evaluacionGroupByPayload<T extends criterio_evaluacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Criterio_evaluacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Criterio_evaluacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Criterio_evaluacionGroupByOutputType[P]>
            : GetScalarType<T[P], Criterio_evaluacionGroupByOutputType[P]>
        }
      >
    >


  export type criterio_evaluacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_criterio?: boolean
    id_evaluacion?: boolean
    valoracion?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    criterio?: boolean | criterioDefaultArgs<ExtArgs>
    evaluacion?: boolean | evaluacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["criterio_evaluacion"]>

  export type criterio_evaluacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_criterio?: boolean
    id_evaluacion?: boolean
    valoracion?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    criterio?: boolean | criterioDefaultArgs<ExtArgs>
    evaluacion?: boolean | evaluacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["criterio_evaluacion"]>

  export type criterio_evaluacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_criterio?: boolean
    id_evaluacion?: boolean
    valoracion?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    criterio?: boolean | criterioDefaultArgs<ExtArgs>
    evaluacion?: boolean | evaluacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["criterio_evaluacion"]>

  export type criterio_evaluacionSelectScalar = {
    id_criterio?: boolean
    id_evaluacion?: boolean
    valoracion?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
  }

  export type criterio_evaluacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_criterio" | "id_evaluacion" | "valoracion" | "fecha_creacion" | "fecha_actualizacion" | "estado", ExtArgs["result"]["criterio_evaluacion"]>
  export type criterio_evaluacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criterio?: boolean | criterioDefaultArgs<ExtArgs>
    evaluacion?: boolean | evaluacionDefaultArgs<ExtArgs>
  }
  export type criterio_evaluacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criterio?: boolean | criterioDefaultArgs<ExtArgs>
    evaluacion?: boolean | evaluacionDefaultArgs<ExtArgs>
  }
  export type criterio_evaluacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criterio?: boolean | criterioDefaultArgs<ExtArgs>
    evaluacion?: boolean | evaluacionDefaultArgs<ExtArgs>
  }

  export type $criterio_evaluacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "criterio_evaluacion"
    objects: {
      criterio: Prisma.$criterioPayload<ExtArgs>
      evaluacion: Prisma.$evaluacionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_criterio: number
      id_evaluacion: number
      valoracion: string
      fecha_creacion: Date
      fecha_actualizacion: Date | null
      estado: boolean
    }, ExtArgs["result"]["criterio_evaluacion"]>
    composites: {}
  }

  type criterio_evaluacionGetPayload<S extends boolean | null | undefined | criterio_evaluacionDefaultArgs> = $Result.GetResult<Prisma.$criterio_evaluacionPayload, S>

  type criterio_evaluacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<criterio_evaluacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Criterio_evaluacionCountAggregateInputType | true
    }

  export interface criterio_evaluacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['criterio_evaluacion'], meta: { name: 'criterio_evaluacion' } }
    /**
     * Find zero or one Criterio_evaluacion that matches the filter.
     * @param {criterio_evaluacionFindUniqueArgs} args - Arguments to find a Criterio_evaluacion
     * @example
     * // Get one Criterio_evaluacion
     * const criterio_evaluacion = await prisma.criterio_evaluacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends criterio_evaluacionFindUniqueArgs>(args: SelectSubset<T, criterio_evaluacionFindUniqueArgs<ExtArgs>>): Prisma__criterio_evaluacionClient<$Result.GetResult<Prisma.$criterio_evaluacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Criterio_evaluacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {criterio_evaluacionFindUniqueOrThrowArgs} args - Arguments to find a Criterio_evaluacion
     * @example
     * // Get one Criterio_evaluacion
     * const criterio_evaluacion = await prisma.criterio_evaluacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends criterio_evaluacionFindUniqueOrThrowArgs>(args: SelectSubset<T, criterio_evaluacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__criterio_evaluacionClient<$Result.GetResult<Prisma.$criterio_evaluacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Criterio_evaluacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {criterio_evaluacionFindFirstArgs} args - Arguments to find a Criterio_evaluacion
     * @example
     * // Get one Criterio_evaluacion
     * const criterio_evaluacion = await prisma.criterio_evaluacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends criterio_evaluacionFindFirstArgs>(args?: SelectSubset<T, criterio_evaluacionFindFirstArgs<ExtArgs>>): Prisma__criterio_evaluacionClient<$Result.GetResult<Prisma.$criterio_evaluacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Criterio_evaluacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {criterio_evaluacionFindFirstOrThrowArgs} args - Arguments to find a Criterio_evaluacion
     * @example
     * // Get one Criterio_evaluacion
     * const criterio_evaluacion = await prisma.criterio_evaluacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends criterio_evaluacionFindFirstOrThrowArgs>(args?: SelectSubset<T, criterio_evaluacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__criterio_evaluacionClient<$Result.GetResult<Prisma.$criterio_evaluacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Criterio_evaluacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {criterio_evaluacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Criterio_evaluacions
     * const criterio_evaluacions = await prisma.criterio_evaluacion.findMany()
     * 
     * // Get first 10 Criterio_evaluacions
     * const criterio_evaluacions = await prisma.criterio_evaluacion.findMany({ take: 10 })
     * 
     * // Only select the `id_criterio`
     * const criterio_evaluacionWithId_criterioOnly = await prisma.criterio_evaluacion.findMany({ select: { id_criterio: true } })
     * 
     */
    findMany<T extends criterio_evaluacionFindManyArgs>(args?: SelectSubset<T, criterio_evaluacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$criterio_evaluacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Criterio_evaluacion.
     * @param {criterio_evaluacionCreateArgs} args - Arguments to create a Criterio_evaluacion.
     * @example
     * // Create one Criterio_evaluacion
     * const Criterio_evaluacion = await prisma.criterio_evaluacion.create({
     *   data: {
     *     // ... data to create a Criterio_evaluacion
     *   }
     * })
     * 
     */
    create<T extends criterio_evaluacionCreateArgs>(args: SelectSubset<T, criterio_evaluacionCreateArgs<ExtArgs>>): Prisma__criterio_evaluacionClient<$Result.GetResult<Prisma.$criterio_evaluacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Criterio_evaluacions.
     * @param {criterio_evaluacionCreateManyArgs} args - Arguments to create many Criterio_evaluacions.
     * @example
     * // Create many Criterio_evaluacions
     * const criterio_evaluacion = await prisma.criterio_evaluacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends criterio_evaluacionCreateManyArgs>(args?: SelectSubset<T, criterio_evaluacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Criterio_evaluacions and returns the data saved in the database.
     * @param {criterio_evaluacionCreateManyAndReturnArgs} args - Arguments to create many Criterio_evaluacions.
     * @example
     * // Create many Criterio_evaluacions
     * const criterio_evaluacion = await prisma.criterio_evaluacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Criterio_evaluacions and only return the `id_criterio`
     * const criterio_evaluacionWithId_criterioOnly = await prisma.criterio_evaluacion.createManyAndReturn({
     *   select: { id_criterio: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends criterio_evaluacionCreateManyAndReturnArgs>(args?: SelectSubset<T, criterio_evaluacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$criterio_evaluacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Criterio_evaluacion.
     * @param {criterio_evaluacionDeleteArgs} args - Arguments to delete one Criterio_evaluacion.
     * @example
     * // Delete one Criterio_evaluacion
     * const Criterio_evaluacion = await prisma.criterio_evaluacion.delete({
     *   where: {
     *     // ... filter to delete one Criterio_evaluacion
     *   }
     * })
     * 
     */
    delete<T extends criterio_evaluacionDeleteArgs>(args: SelectSubset<T, criterio_evaluacionDeleteArgs<ExtArgs>>): Prisma__criterio_evaluacionClient<$Result.GetResult<Prisma.$criterio_evaluacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Criterio_evaluacion.
     * @param {criterio_evaluacionUpdateArgs} args - Arguments to update one Criterio_evaluacion.
     * @example
     * // Update one Criterio_evaluacion
     * const criterio_evaluacion = await prisma.criterio_evaluacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends criterio_evaluacionUpdateArgs>(args: SelectSubset<T, criterio_evaluacionUpdateArgs<ExtArgs>>): Prisma__criterio_evaluacionClient<$Result.GetResult<Prisma.$criterio_evaluacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Criterio_evaluacions.
     * @param {criterio_evaluacionDeleteManyArgs} args - Arguments to filter Criterio_evaluacions to delete.
     * @example
     * // Delete a few Criterio_evaluacions
     * const { count } = await prisma.criterio_evaluacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends criterio_evaluacionDeleteManyArgs>(args?: SelectSubset<T, criterio_evaluacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Criterio_evaluacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {criterio_evaluacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Criterio_evaluacions
     * const criterio_evaluacion = await prisma.criterio_evaluacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends criterio_evaluacionUpdateManyArgs>(args: SelectSubset<T, criterio_evaluacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Criterio_evaluacions and returns the data updated in the database.
     * @param {criterio_evaluacionUpdateManyAndReturnArgs} args - Arguments to update many Criterio_evaluacions.
     * @example
     * // Update many Criterio_evaluacions
     * const criterio_evaluacion = await prisma.criterio_evaluacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Criterio_evaluacions and only return the `id_criterio`
     * const criterio_evaluacionWithId_criterioOnly = await prisma.criterio_evaluacion.updateManyAndReturn({
     *   select: { id_criterio: true },
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
    updateManyAndReturn<T extends criterio_evaluacionUpdateManyAndReturnArgs>(args: SelectSubset<T, criterio_evaluacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$criterio_evaluacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Criterio_evaluacion.
     * @param {criterio_evaluacionUpsertArgs} args - Arguments to update or create a Criterio_evaluacion.
     * @example
     * // Update or create a Criterio_evaluacion
     * const criterio_evaluacion = await prisma.criterio_evaluacion.upsert({
     *   create: {
     *     // ... data to create a Criterio_evaluacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Criterio_evaluacion we want to update
     *   }
     * })
     */
    upsert<T extends criterio_evaluacionUpsertArgs>(args: SelectSubset<T, criterio_evaluacionUpsertArgs<ExtArgs>>): Prisma__criterio_evaluacionClient<$Result.GetResult<Prisma.$criterio_evaluacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Criterio_evaluacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {criterio_evaluacionCountArgs} args - Arguments to filter Criterio_evaluacions to count.
     * @example
     * // Count the number of Criterio_evaluacions
     * const count = await prisma.criterio_evaluacion.count({
     *   where: {
     *     // ... the filter for the Criterio_evaluacions we want to count
     *   }
     * })
    **/
    count<T extends criterio_evaluacionCountArgs>(
      args?: Subset<T, criterio_evaluacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Criterio_evaluacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Criterio_evaluacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Criterio_evaluacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Criterio_evaluacionAggregateArgs>(args: Subset<T, Criterio_evaluacionAggregateArgs>): Prisma.PrismaPromise<GetCriterio_evaluacionAggregateType<T>>

    /**
     * Group by Criterio_evaluacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {criterio_evaluacionGroupByArgs} args - Group by arguments.
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
      T extends criterio_evaluacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: criterio_evaluacionGroupByArgs['orderBy'] }
        : { orderBy?: criterio_evaluacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, criterio_evaluacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCriterio_evaluacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the criterio_evaluacion model
   */
  readonly fields: criterio_evaluacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for criterio_evaluacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__criterio_evaluacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    criterio<T extends criterioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, criterioDefaultArgs<ExtArgs>>): Prisma__criterioClient<$Result.GetResult<Prisma.$criterioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    evaluacion<T extends evaluacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, evaluacionDefaultArgs<ExtArgs>>): Prisma__evaluacionClient<$Result.GetResult<Prisma.$evaluacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the criterio_evaluacion model
   */
  interface criterio_evaluacionFieldRefs {
    readonly id_criterio: FieldRef<"criterio_evaluacion", 'Int'>
    readonly id_evaluacion: FieldRef<"criterio_evaluacion", 'Int'>
    readonly valoracion: FieldRef<"criterio_evaluacion", 'String'>
    readonly fecha_creacion: FieldRef<"criterio_evaluacion", 'DateTime'>
    readonly fecha_actualizacion: FieldRef<"criterio_evaluacion", 'DateTime'>
    readonly estado: FieldRef<"criterio_evaluacion", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * criterio_evaluacion findUnique
   */
  export type criterio_evaluacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criterio_evaluacion
     */
    select?: criterio_evaluacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criterio_evaluacion
     */
    omit?: criterio_evaluacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criterio_evaluacionInclude<ExtArgs> | null
    /**
     * Filter, which criterio_evaluacion to fetch.
     */
    where: criterio_evaluacionWhereUniqueInput
  }

  /**
   * criterio_evaluacion findUniqueOrThrow
   */
  export type criterio_evaluacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criterio_evaluacion
     */
    select?: criterio_evaluacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criterio_evaluacion
     */
    omit?: criterio_evaluacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criterio_evaluacionInclude<ExtArgs> | null
    /**
     * Filter, which criterio_evaluacion to fetch.
     */
    where: criterio_evaluacionWhereUniqueInput
  }

  /**
   * criterio_evaluacion findFirst
   */
  export type criterio_evaluacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criterio_evaluacion
     */
    select?: criterio_evaluacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criterio_evaluacion
     */
    omit?: criterio_evaluacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criterio_evaluacionInclude<ExtArgs> | null
    /**
     * Filter, which criterio_evaluacion to fetch.
     */
    where?: criterio_evaluacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of criterio_evaluacions to fetch.
     */
    orderBy?: criterio_evaluacionOrderByWithRelationInput | criterio_evaluacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for criterio_evaluacions.
     */
    cursor?: criterio_evaluacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` criterio_evaluacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` criterio_evaluacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of criterio_evaluacions.
     */
    distinct?: Criterio_evaluacionScalarFieldEnum | Criterio_evaluacionScalarFieldEnum[]
  }

  /**
   * criterio_evaluacion findFirstOrThrow
   */
  export type criterio_evaluacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criterio_evaluacion
     */
    select?: criterio_evaluacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criterio_evaluacion
     */
    omit?: criterio_evaluacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criterio_evaluacionInclude<ExtArgs> | null
    /**
     * Filter, which criterio_evaluacion to fetch.
     */
    where?: criterio_evaluacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of criterio_evaluacions to fetch.
     */
    orderBy?: criterio_evaluacionOrderByWithRelationInput | criterio_evaluacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for criterio_evaluacions.
     */
    cursor?: criterio_evaluacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` criterio_evaluacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` criterio_evaluacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of criterio_evaluacions.
     */
    distinct?: Criterio_evaluacionScalarFieldEnum | Criterio_evaluacionScalarFieldEnum[]
  }

  /**
   * criterio_evaluacion findMany
   */
  export type criterio_evaluacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criterio_evaluacion
     */
    select?: criterio_evaluacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criterio_evaluacion
     */
    omit?: criterio_evaluacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criterio_evaluacionInclude<ExtArgs> | null
    /**
     * Filter, which criterio_evaluacions to fetch.
     */
    where?: criterio_evaluacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of criterio_evaluacions to fetch.
     */
    orderBy?: criterio_evaluacionOrderByWithRelationInput | criterio_evaluacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing criterio_evaluacions.
     */
    cursor?: criterio_evaluacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` criterio_evaluacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` criterio_evaluacions.
     */
    skip?: number
    distinct?: Criterio_evaluacionScalarFieldEnum | Criterio_evaluacionScalarFieldEnum[]
  }

  /**
   * criterio_evaluacion create
   */
  export type criterio_evaluacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criterio_evaluacion
     */
    select?: criterio_evaluacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criterio_evaluacion
     */
    omit?: criterio_evaluacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criterio_evaluacionInclude<ExtArgs> | null
    /**
     * The data needed to create a criterio_evaluacion.
     */
    data: XOR<criterio_evaluacionCreateInput, criterio_evaluacionUncheckedCreateInput>
  }

  /**
   * criterio_evaluacion createMany
   */
  export type criterio_evaluacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many criterio_evaluacions.
     */
    data: criterio_evaluacionCreateManyInput | criterio_evaluacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * criterio_evaluacion createManyAndReturn
   */
  export type criterio_evaluacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criterio_evaluacion
     */
    select?: criterio_evaluacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the criterio_evaluacion
     */
    omit?: criterio_evaluacionOmit<ExtArgs> | null
    /**
     * The data used to create many criterio_evaluacions.
     */
    data: criterio_evaluacionCreateManyInput | criterio_evaluacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criterio_evaluacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * criterio_evaluacion update
   */
  export type criterio_evaluacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criterio_evaluacion
     */
    select?: criterio_evaluacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criterio_evaluacion
     */
    omit?: criterio_evaluacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criterio_evaluacionInclude<ExtArgs> | null
    /**
     * The data needed to update a criterio_evaluacion.
     */
    data: XOR<criterio_evaluacionUpdateInput, criterio_evaluacionUncheckedUpdateInput>
    /**
     * Choose, which criterio_evaluacion to update.
     */
    where: criterio_evaluacionWhereUniqueInput
  }

  /**
   * criterio_evaluacion updateMany
   */
  export type criterio_evaluacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update criterio_evaluacions.
     */
    data: XOR<criterio_evaluacionUpdateManyMutationInput, criterio_evaluacionUncheckedUpdateManyInput>
    /**
     * Filter which criterio_evaluacions to update
     */
    where?: criterio_evaluacionWhereInput
    /**
     * Limit how many criterio_evaluacions to update.
     */
    limit?: number
  }

  /**
   * criterio_evaluacion updateManyAndReturn
   */
  export type criterio_evaluacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criterio_evaluacion
     */
    select?: criterio_evaluacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the criterio_evaluacion
     */
    omit?: criterio_evaluacionOmit<ExtArgs> | null
    /**
     * The data used to update criterio_evaluacions.
     */
    data: XOR<criterio_evaluacionUpdateManyMutationInput, criterio_evaluacionUncheckedUpdateManyInput>
    /**
     * Filter which criterio_evaluacions to update
     */
    where?: criterio_evaluacionWhereInput
    /**
     * Limit how many criterio_evaluacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criterio_evaluacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * criterio_evaluacion upsert
   */
  export type criterio_evaluacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criterio_evaluacion
     */
    select?: criterio_evaluacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criterio_evaluacion
     */
    omit?: criterio_evaluacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criterio_evaluacionInclude<ExtArgs> | null
    /**
     * The filter to search for the criterio_evaluacion to update in case it exists.
     */
    where: criterio_evaluacionWhereUniqueInput
    /**
     * In case the criterio_evaluacion found by the `where` argument doesn't exist, create a new criterio_evaluacion with this data.
     */
    create: XOR<criterio_evaluacionCreateInput, criterio_evaluacionUncheckedCreateInput>
    /**
     * In case the criterio_evaluacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<criterio_evaluacionUpdateInput, criterio_evaluacionUncheckedUpdateInput>
  }

  /**
   * criterio_evaluacion delete
   */
  export type criterio_evaluacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criterio_evaluacion
     */
    select?: criterio_evaluacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criterio_evaluacion
     */
    omit?: criterio_evaluacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criterio_evaluacionInclude<ExtArgs> | null
    /**
     * Filter which criterio_evaluacion to delete.
     */
    where: criterio_evaluacionWhereUniqueInput
  }

  /**
   * criterio_evaluacion deleteMany
   */
  export type criterio_evaluacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which criterio_evaluacions to delete
     */
    where?: criterio_evaluacionWhereInput
    /**
     * Limit how many criterio_evaluacions to delete.
     */
    limit?: number
  }

  /**
   * criterio_evaluacion without action
   */
  export type criterio_evaluacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criterio_evaluacion
     */
    select?: criterio_evaluacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criterio_evaluacion
     */
    omit?: criterio_evaluacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criterio_evaluacionInclude<ExtArgs> | null
  }


  /**
   * Model equipo
   */

  export type AggregateEquipo = {
    _count: EquipoCountAggregateOutputType | null
    _avg: EquipoAvgAggregateOutputType | null
    _sum: EquipoSumAggregateOutputType | null
    _min: EquipoMinAggregateOutputType | null
    _max: EquipoMaxAggregateOutputType | null
  }

  export type EquipoAvgAggregateOutputType = {
    id_equipo: number | null
    id_estado: number | null
  }

  export type EquipoSumAggregateOutputType = {
    id_equipo: number | null
    id_estado: number | null
  }

  export type EquipoMinAggregateOutputType = {
    id_equipo: number | null
    nombre: string | null
    id_estado: number | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    estado: boolean | null
  }

  export type EquipoMaxAggregateOutputType = {
    id_equipo: number | null
    nombre: string | null
    id_estado: number | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    estado: boolean | null
  }

  export type EquipoCountAggregateOutputType = {
    id_equipo: number
    nombre: number
    id_estado: number
    fecha_creacion: number
    fecha_actualizacion: number
    estado: number
    _all: number
  }


  export type EquipoAvgAggregateInputType = {
    id_equipo?: true
    id_estado?: true
  }

  export type EquipoSumAggregateInputType = {
    id_equipo?: true
    id_estado?: true
  }

  export type EquipoMinAggregateInputType = {
    id_equipo?: true
    nombre?: true
    id_estado?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
  }

  export type EquipoMaxAggregateInputType = {
    id_equipo?: true
    nombre?: true
    id_estado?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
  }

  export type EquipoCountAggregateInputType = {
    id_equipo?: true
    nombre?: true
    id_estado?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
    _all?: true
  }

  export type EquipoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which equipo to aggregate.
     */
    where?: equipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of equipos to fetch.
     */
    orderBy?: equipoOrderByWithRelationInput | equipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: equipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` equipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned equipos
    **/
    _count?: true | EquipoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipoMaxAggregateInputType
  }

  export type GetEquipoAggregateType<T extends EquipoAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipo[P]>
      : GetScalarType<T[P], AggregateEquipo[P]>
  }




  export type equipoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: equipoWhereInput
    orderBy?: equipoOrderByWithAggregationInput | equipoOrderByWithAggregationInput[]
    by: EquipoScalarFieldEnum[] | EquipoScalarFieldEnum
    having?: equipoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipoCountAggregateInputType | true
    _avg?: EquipoAvgAggregateInputType
    _sum?: EquipoSumAggregateInputType
    _min?: EquipoMinAggregateInputType
    _max?: EquipoMaxAggregateInputType
  }

  export type EquipoGroupByOutputType = {
    id_equipo: number
    nombre: string
    id_estado: number
    fecha_creacion: Date
    fecha_actualizacion: Date | null
    estado: boolean
    _count: EquipoCountAggregateOutputType | null
    _avg: EquipoAvgAggregateOutputType | null
    _sum: EquipoSumAggregateOutputType | null
    _min: EquipoMinAggregateOutputType | null
    _max: EquipoMaxAggregateOutputType | null
  }

  type GetEquipoGroupByPayload<T extends equipoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipoGroupByOutputType[P]>
            : GetScalarType<T[P], EquipoGroupByOutputType[P]>
        }
      >
    >


  export type equipoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_equipo?: boolean
    nombre?: boolean
    id_estado?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    estado_equipo?: boolean | estadoDefaultArgs<ExtArgs>
    integrante?: boolean | equipo$integranteArgs<ExtArgs>
    videojuego?: boolean | equipo$videojuegoArgs<ExtArgs>
    _count?: boolean | EquipoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipo"]>

  export type equipoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_equipo?: boolean
    nombre?: boolean
    id_estado?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    estado_equipo?: boolean | estadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipo"]>

  export type equipoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_equipo?: boolean
    nombre?: boolean
    id_estado?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    estado_equipo?: boolean | estadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipo"]>

  export type equipoSelectScalar = {
    id_equipo?: boolean
    nombre?: boolean
    id_estado?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
  }

  export type equipoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_equipo" | "nombre" | "id_estado" | "fecha_creacion" | "fecha_actualizacion" | "estado", ExtArgs["result"]["equipo"]>
  export type equipoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estado_equipo?: boolean | estadoDefaultArgs<ExtArgs>
    integrante?: boolean | equipo$integranteArgs<ExtArgs>
    videojuego?: boolean | equipo$videojuegoArgs<ExtArgs>
    _count?: boolean | EquipoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type equipoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estado_equipo?: boolean | estadoDefaultArgs<ExtArgs>
  }
  export type equipoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estado_equipo?: boolean | estadoDefaultArgs<ExtArgs>
  }

  export type $equipoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "equipo"
    objects: {
      estado_equipo: Prisma.$estadoPayload<ExtArgs>
      integrante: Prisma.$integrantePayload<ExtArgs>[]
      videojuego: Prisma.$videojuegoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_equipo: number
      nombre: string
      id_estado: number
      fecha_creacion: Date
      fecha_actualizacion: Date | null
      estado: boolean
    }, ExtArgs["result"]["equipo"]>
    composites: {}
  }

  type equipoGetPayload<S extends boolean | null | undefined | equipoDefaultArgs> = $Result.GetResult<Prisma.$equipoPayload, S>

  type equipoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<equipoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipoCountAggregateInputType | true
    }

  export interface equipoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['equipo'], meta: { name: 'equipo' } }
    /**
     * Find zero or one Equipo that matches the filter.
     * @param {equipoFindUniqueArgs} args - Arguments to find a Equipo
     * @example
     * // Get one Equipo
     * const equipo = await prisma.equipo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends equipoFindUniqueArgs>(args: SelectSubset<T, equipoFindUniqueArgs<ExtArgs>>): Prisma__equipoClient<$Result.GetResult<Prisma.$equipoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {equipoFindUniqueOrThrowArgs} args - Arguments to find a Equipo
     * @example
     * // Get one Equipo
     * const equipo = await prisma.equipo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends equipoFindUniqueOrThrowArgs>(args: SelectSubset<T, equipoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__equipoClient<$Result.GetResult<Prisma.$equipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipoFindFirstArgs} args - Arguments to find a Equipo
     * @example
     * // Get one Equipo
     * const equipo = await prisma.equipo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends equipoFindFirstArgs>(args?: SelectSubset<T, equipoFindFirstArgs<ExtArgs>>): Prisma__equipoClient<$Result.GetResult<Prisma.$equipoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipoFindFirstOrThrowArgs} args - Arguments to find a Equipo
     * @example
     * // Get one Equipo
     * const equipo = await prisma.equipo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends equipoFindFirstOrThrowArgs>(args?: SelectSubset<T, equipoFindFirstOrThrowArgs<ExtArgs>>): Prisma__equipoClient<$Result.GetResult<Prisma.$equipoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipos
     * const equipos = await prisma.equipo.findMany()
     * 
     * // Get first 10 Equipos
     * const equipos = await prisma.equipo.findMany({ take: 10 })
     * 
     * // Only select the `id_equipo`
     * const equipoWithId_equipoOnly = await prisma.equipo.findMany({ select: { id_equipo: true } })
     * 
     */
    findMany<T extends equipoFindManyArgs>(args?: SelectSubset<T, equipoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$equipoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipo.
     * @param {equipoCreateArgs} args - Arguments to create a Equipo.
     * @example
     * // Create one Equipo
     * const Equipo = await prisma.equipo.create({
     *   data: {
     *     // ... data to create a Equipo
     *   }
     * })
     * 
     */
    create<T extends equipoCreateArgs>(args: SelectSubset<T, equipoCreateArgs<ExtArgs>>): Prisma__equipoClient<$Result.GetResult<Prisma.$equipoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipos.
     * @param {equipoCreateManyArgs} args - Arguments to create many Equipos.
     * @example
     * // Create many Equipos
     * const equipo = await prisma.equipo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends equipoCreateManyArgs>(args?: SelectSubset<T, equipoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipos and returns the data saved in the database.
     * @param {equipoCreateManyAndReturnArgs} args - Arguments to create many Equipos.
     * @example
     * // Create many Equipos
     * const equipo = await prisma.equipo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipos and only return the `id_equipo`
     * const equipoWithId_equipoOnly = await prisma.equipo.createManyAndReturn({
     *   select: { id_equipo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends equipoCreateManyAndReturnArgs>(args?: SelectSubset<T, equipoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$equipoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Equipo.
     * @param {equipoDeleteArgs} args - Arguments to delete one Equipo.
     * @example
     * // Delete one Equipo
     * const Equipo = await prisma.equipo.delete({
     *   where: {
     *     // ... filter to delete one Equipo
     *   }
     * })
     * 
     */
    delete<T extends equipoDeleteArgs>(args: SelectSubset<T, equipoDeleteArgs<ExtArgs>>): Prisma__equipoClient<$Result.GetResult<Prisma.$equipoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipo.
     * @param {equipoUpdateArgs} args - Arguments to update one Equipo.
     * @example
     * // Update one Equipo
     * const equipo = await prisma.equipo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends equipoUpdateArgs>(args: SelectSubset<T, equipoUpdateArgs<ExtArgs>>): Prisma__equipoClient<$Result.GetResult<Prisma.$equipoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipos.
     * @param {equipoDeleteManyArgs} args - Arguments to filter Equipos to delete.
     * @example
     * // Delete a few Equipos
     * const { count } = await prisma.equipo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends equipoDeleteManyArgs>(args?: SelectSubset<T, equipoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipos
     * const equipo = await prisma.equipo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends equipoUpdateManyArgs>(args: SelectSubset<T, equipoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipos and returns the data updated in the database.
     * @param {equipoUpdateManyAndReturnArgs} args - Arguments to update many Equipos.
     * @example
     * // Update many Equipos
     * const equipo = await prisma.equipo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipos and only return the `id_equipo`
     * const equipoWithId_equipoOnly = await prisma.equipo.updateManyAndReturn({
     *   select: { id_equipo: true },
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
    updateManyAndReturn<T extends equipoUpdateManyAndReturnArgs>(args: SelectSubset<T, equipoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$equipoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Equipo.
     * @param {equipoUpsertArgs} args - Arguments to update or create a Equipo.
     * @example
     * // Update or create a Equipo
     * const equipo = await prisma.equipo.upsert({
     *   create: {
     *     // ... data to create a Equipo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipo we want to update
     *   }
     * })
     */
    upsert<T extends equipoUpsertArgs>(args: SelectSubset<T, equipoUpsertArgs<ExtArgs>>): Prisma__equipoClient<$Result.GetResult<Prisma.$equipoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipoCountArgs} args - Arguments to filter Equipos to count.
     * @example
     * // Count the number of Equipos
     * const count = await prisma.equipo.count({
     *   where: {
     *     // ... the filter for the Equipos we want to count
     *   }
     * })
    **/
    count<T extends equipoCountArgs>(
      args?: Subset<T, equipoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EquipoAggregateArgs>(args: Subset<T, EquipoAggregateArgs>): Prisma.PrismaPromise<GetEquipoAggregateType<T>>

    /**
     * Group by Equipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipoGroupByArgs} args - Group by arguments.
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
      T extends equipoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: equipoGroupByArgs['orderBy'] }
        : { orderBy?: equipoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, equipoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the equipo model
   */
  readonly fields: equipoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for equipo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__equipoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estado_equipo<T extends estadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, estadoDefaultArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    integrante<T extends equipo$integranteArgs<ExtArgs> = {}>(args?: Subset<T, equipo$integranteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$integrantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    videojuego<T extends equipo$videojuegoArgs<ExtArgs> = {}>(args?: Subset<T, equipo$videojuegoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videojuegoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the equipo model
   */
  interface equipoFieldRefs {
    readonly id_equipo: FieldRef<"equipo", 'Int'>
    readonly nombre: FieldRef<"equipo", 'String'>
    readonly id_estado: FieldRef<"equipo", 'Int'>
    readonly fecha_creacion: FieldRef<"equipo", 'DateTime'>
    readonly fecha_actualizacion: FieldRef<"equipo", 'DateTime'>
    readonly estado: FieldRef<"equipo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * equipo findUnique
   */
  export type equipoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipo
     */
    select?: equipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipo
     */
    omit?: equipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipoInclude<ExtArgs> | null
    /**
     * Filter, which equipo to fetch.
     */
    where: equipoWhereUniqueInput
  }

  /**
   * equipo findUniqueOrThrow
   */
  export type equipoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipo
     */
    select?: equipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipo
     */
    omit?: equipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipoInclude<ExtArgs> | null
    /**
     * Filter, which equipo to fetch.
     */
    where: equipoWhereUniqueInput
  }

  /**
   * equipo findFirst
   */
  export type equipoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipo
     */
    select?: equipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipo
     */
    omit?: equipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipoInclude<ExtArgs> | null
    /**
     * Filter, which equipo to fetch.
     */
    where?: equipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of equipos to fetch.
     */
    orderBy?: equipoOrderByWithRelationInput | equipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for equipos.
     */
    cursor?: equipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` equipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of equipos.
     */
    distinct?: EquipoScalarFieldEnum | EquipoScalarFieldEnum[]
  }

  /**
   * equipo findFirstOrThrow
   */
  export type equipoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipo
     */
    select?: equipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipo
     */
    omit?: equipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipoInclude<ExtArgs> | null
    /**
     * Filter, which equipo to fetch.
     */
    where?: equipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of equipos to fetch.
     */
    orderBy?: equipoOrderByWithRelationInput | equipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for equipos.
     */
    cursor?: equipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` equipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of equipos.
     */
    distinct?: EquipoScalarFieldEnum | EquipoScalarFieldEnum[]
  }

  /**
   * equipo findMany
   */
  export type equipoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipo
     */
    select?: equipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipo
     */
    omit?: equipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipoInclude<ExtArgs> | null
    /**
     * Filter, which equipos to fetch.
     */
    where?: equipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of equipos to fetch.
     */
    orderBy?: equipoOrderByWithRelationInput | equipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing equipos.
     */
    cursor?: equipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` equipos.
     */
    skip?: number
    distinct?: EquipoScalarFieldEnum | EquipoScalarFieldEnum[]
  }

  /**
   * equipo create
   */
  export type equipoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipo
     */
    select?: equipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipo
     */
    omit?: equipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipoInclude<ExtArgs> | null
    /**
     * The data needed to create a equipo.
     */
    data: XOR<equipoCreateInput, equipoUncheckedCreateInput>
  }

  /**
   * equipo createMany
   */
  export type equipoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many equipos.
     */
    data: equipoCreateManyInput | equipoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * equipo createManyAndReturn
   */
  export type equipoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipo
     */
    select?: equipoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the equipo
     */
    omit?: equipoOmit<ExtArgs> | null
    /**
     * The data used to create many equipos.
     */
    data: equipoCreateManyInput | equipoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * equipo update
   */
  export type equipoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipo
     */
    select?: equipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipo
     */
    omit?: equipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipoInclude<ExtArgs> | null
    /**
     * The data needed to update a equipo.
     */
    data: XOR<equipoUpdateInput, equipoUncheckedUpdateInput>
    /**
     * Choose, which equipo to update.
     */
    where: equipoWhereUniqueInput
  }

  /**
   * equipo updateMany
   */
  export type equipoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update equipos.
     */
    data: XOR<equipoUpdateManyMutationInput, equipoUncheckedUpdateManyInput>
    /**
     * Filter which equipos to update
     */
    where?: equipoWhereInput
    /**
     * Limit how many equipos to update.
     */
    limit?: number
  }

  /**
   * equipo updateManyAndReturn
   */
  export type equipoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipo
     */
    select?: equipoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the equipo
     */
    omit?: equipoOmit<ExtArgs> | null
    /**
     * The data used to update equipos.
     */
    data: XOR<equipoUpdateManyMutationInput, equipoUncheckedUpdateManyInput>
    /**
     * Filter which equipos to update
     */
    where?: equipoWhereInput
    /**
     * Limit how many equipos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * equipo upsert
   */
  export type equipoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipo
     */
    select?: equipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipo
     */
    omit?: equipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipoInclude<ExtArgs> | null
    /**
     * The filter to search for the equipo to update in case it exists.
     */
    where: equipoWhereUniqueInput
    /**
     * In case the equipo found by the `where` argument doesn't exist, create a new equipo with this data.
     */
    create: XOR<equipoCreateInput, equipoUncheckedCreateInput>
    /**
     * In case the equipo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<equipoUpdateInput, equipoUncheckedUpdateInput>
  }

  /**
   * equipo delete
   */
  export type equipoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipo
     */
    select?: equipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipo
     */
    omit?: equipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipoInclude<ExtArgs> | null
    /**
     * Filter which equipo to delete.
     */
    where: equipoWhereUniqueInput
  }

  /**
   * equipo deleteMany
   */
  export type equipoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which equipos to delete
     */
    where?: equipoWhereInput
    /**
     * Limit how many equipos to delete.
     */
    limit?: number
  }

  /**
   * equipo.integrante
   */
  export type equipo$integranteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integrante
     */
    select?: integranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the integrante
     */
    omit?: integranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: integranteInclude<ExtArgs> | null
    where?: integranteWhereInput
    orderBy?: integranteOrderByWithRelationInput | integranteOrderByWithRelationInput[]
    cursor?: integranteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IntegranteScalarFieldEnum | IntegranteScalarFieldEnum[]
  }

  /**
   * equipo.videojuego
   */
  export type equipo$videojuegoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videojuego
     */
    select?: videojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videojuego
     */
    omit?: videojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videojuegoInclude<ExtArgs> | null
    where?: videojuegoWhereInput
    orderBy?: videojuegoOrderByWithRelationInput | videojuegoOrderByWithRelationInput[]
    cursor?: videojuegoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideojuegoScalarFieldEnum | VideojuegoScalarFieldEnum[]
  }

  /**
   * equipo without action
   */
  export type equipoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipo
     */
    select?: equipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipo
     */
    omit?: equipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipoInclude<ExtArgs> | null
  }


  /**
   * Model estado
   */

  export type AggregateEstado = {
    _count: EstadoCountAggregateOutputType | null
    _avg: EstadoAvgAggregateOutputType | null
    _sum: EstadoSumAggregateOutputType | null
    _min: EstadoMinAggregateOutputType | null
    _max: EstadoMaxAggregateOutputType | null
  }

  export type EstadoAvgAggregateOutputType = {
    id_estado: number | null
  }

  export type EstadoSumAggregateOutputType = {
    id_estado: number | null
  }

  export type EstadoMinAggregateOutputType = {
    id_estado: number | null
    estado: string | null
    created_at: Date | null
  }

  export type EstadoMaxAggregateOutputType = {
    id_estado: number | null
    estado: string | null
    created_at: Date | null
  }

  export type EstadoCountAggregateOutputType = {
    id_estado: number
    estado: number
    created_at: number
    _all: number
  }


  export type EstadoAvgAggregateInputType = {
    id_estado?: true
  }

  export type EstadoSumAggregateInputType = {
    id_estado?: true
  }

  export type EstadoMinAggregateInputType = {
    id_estado?: true
    estado?: true
    created_at?: true
  }

  export type EstadoMaxAggregateInputType = {
    id_estado?: true
    estado?: true
    created_at?: true
  }

  export type EstadoCountAggregateInputType = {
    id_estado?: true
    estado?: true
    created_at?: true
    _all?: true
  }

  export type EstadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estado to aggregate.
     */
    where?: estadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estados to fetch.
     */
    orderBy?: estadoOrderByWithRelationInput | estadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: estadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned estados
    **/
    _count?: true | EstadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstadoMaxAggregateInputType
  }

  export type GetEstadoAggregateType<T extends EstadoAggregateArgs> = {
        [P in keyof T & keyof AggregateEstado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstado[P]>
      : GetScalarType<T[P], AggregateEstado[P]>
  }




  export type estadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: estadoWhereInput
    orderBy?: estadoOrderByWithAggregationInput | estadoOrderByWithAggregationInput[]
    by: EstadoScalarFieldEnum[] | EstadoScalarFieldEnum
    having?: estadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstadoCountAggregateInputType | true
    _avg?: EstadoAvgAggregateInputType
    _sum?: EstadoSumAggregateInputType
    _min?: EstadoMinAggregateInputType
    _max?: EstadoMaxAggregateInputType
  }

  export type EstadoGroupByOutputType = {
    id_estado: number
    estado: string
    created_at: Date
    _count: EstadoCountAggregateOutputType | null
    _avg: EstadoAvgAggregateOutputType | null
    _sum: EstadoSumAggregateOutputType | null
    _min: EstadoMinAggregateOutputType | null
    _max: EstadoMaxAggregateOutputType | null
  }

  type GetEstadoGroupByPayload<T extends estadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstadoGroupByOutputType[P]>
            : GetScalarType<T[P], EstadoGroupByOutputType[P]>
        }
      >
    >


  export type estadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estado?: boolean
    estado?: boolean
    created_at?: boolean
    equipos?: boolean | estado$equiposArgs<ExtArgs>
    _count?: boolean | EstadoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estado"]>

  export type estadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estado?: boolean
    estado?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["estado"]>

  export type estadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estado?: boolean
    estado?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["estado"]>

  export type estadoSelectScalar = {
    id_estado?: boolean
    estado?: boolean
    created_at?: boolean
  }

  export type estadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_estado" | "estado" | "created_at", ExtArgs["result"]["estado"]>
  export type estadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipos?: boolean | estado$equiposArgs<ExtArgs>
    _count?: boolean | EstadoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type estadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type estadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $estadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "estado"
    objects: {
      equipos: Prisma.$equipoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_estado: number
      estado: string
      created_at: Date
    }, ExtArgs["result"]["estado"]>
    composites: {}
  }

  type estadoGetPayload<S extends boolean | null | undefined | estadoDefaultArgs> = $Result.GetResult<Prisma.$estadoPayload, S>

  type estadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<estadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstadoCountAggregateInputType | true
    }

  export interface estadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['estado'], meta: { name: 'estado' } }
    /**
     * Find zero or one Estado that matches the filter.
     * @param {estadoFindUniqueArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends estadoFindUniqueArgs>(args: SelectSubset<T, estadoFindUniqueArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {estadoFindUniqueOrThrowArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends estadoFindUniqueOrThrowArgs>(args: SelectSubset<T, estadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadoFindFirstArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends estadoFindFirstArgs>(args?: SelectSubset<T, estadoFindFirstArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadoFindFirstOrThrowArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends estadoFindFirstOrThrowArgs>(args?: SelectSubset<T, estadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estados
     * const estados = await prisma.estado.findMany()
     * 
     * // Get first 10 Estados
     * const estados = await prisma.estado.findMany({ take: 10 })
     * 
     * // Only select the `id_estado`
     * const estadoWithId_estadoOnly = await prisma.estado.findMany({ select: { id_estado: true } })
     * 
     */
    findMany<T extends estadoFindManyArgs>(args?: SelectSubset<T, estadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estado.
     * @param {estadoCreateArgs} args - Arguments to create a Estado.
     * @example
     * // Create one Estado
     * const Estado = await prisma.estado.create({
     *   data: {
     *     // ... data to create a Estado
     *   }
     * })
     * 
     */
    create<T extends estadoCreateArgs>(args: SelectSubset<T, estadoCreateArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estados.
     * @param {estadoCreateManyArgs} args - Arguments to create many Estados.
     * @example
     * // Create many Estados
     * const estado = await prisma.estado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends estadoCreateManyArgs>(args?: SelectSubset<T, estadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estados and returns the data saved in the database.
     * @param {estadoCreateManyAndReturnArgs} args - Arguments to create many Estados.
     * @example
     * // Create many Estados
     * const estado = await prisma.estado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estados and only return the `id_estado`
     * const estadoWithId_estadoOnly = await prisma.estado.createManyAndReturn({
     *   select: { id_estado: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends estadoCreateManyAndReturnArgs>(args?: SelectSubset<T, estadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estado.
     * @param {estadoDeleteArgs} args - Arguments to delete one Estado.
     * @example
     * // Delete one Estado
     * const Estado = await prisma.estado.delete({
     *   where: {
     *     // ... filter to delete one Estado
     *   }
     * })
     * 
     */
    delete<T extends estadoDeleteArgs>(args: SelectSubset<T, estadoDeleteArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estado.
     * @param {estadoUpdateArgs} args - Arguments to update one Estado.
     * @example
     * // Update one Estado
     * const estado = await prisma.estado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends estadoUpdateArgs>(args: SelectSubset<T, estadoUpdateArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estados.
     * @param {estadoDeleteManyArgs} args - Arguments to filter Estados to delete.
     * @example
     * // Delete a few Estados
     * const { count } = await prisma.estado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends estadoDeleteManyArgs>(args?: SelectSubset<T, estadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estados
     * const estado = await prisma.estado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends estadoUpdateManyArgs>(args: SelectSubset<T, estadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estados and returns the data updated in the database.
     * @param {estadoUpdateManyAndReturnArgs} args - Arguments to update many Estados.
     * @example
     * // Update many Estados
     * const estado = await prisma.estado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estados and only return the `id_estado`
     * const estadoWithId_estadoOnly = await prisma.estado.updateManyAndReturn({
     *   select: { id_estado: true },
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
    updateManyAndReturn<T extends estadoUpdateManyAndReturnArgs>(args: SelectSubset<T, estadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estado.
     * @param {estadoUpsertArgs} args - Arguments to update or create a Estado.
     * @example
     * // Update or create a Estado
     * const estado = await prisma.estado.upsert({
     *   create: {
     *     // ... data to create a Estado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estado we want to update
     *   }
     * })
     */
    upsert<T extends estadoUpsertArgs>(args: SelectSubset<T, estadoUpsertArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadoCountArgs} args - Arguments to filter Estados to count.
     * @example
     * // Count the number of Estados
     * const count = await prisma.estado.count({
     *   where: {
     *     // ... the filter for the Estados we want to count
     *   }
     * })
    **/
    count<T extends estadoCountArgs>(
      args?: Subset<T, estadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstadoAggregateArgs>(args: Subset<T, EstadoAggregateArgs>): Prisma.PrismaPromise<GetEstadoAggregateType<T>>

    /**
     * Group by Estado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadoGroupByArgs} args - Group by arguments.
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
      T extends estadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: estadoGroupByArgs['orderBy'] }
        : { orderBy?: estadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, estadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the estado model
   */
  readonly fields: estadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for estado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__estadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipos<T extends estado$equiposArgs<ExtArgs> = {}>(args?: Subset<T, estado$equiposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$equipoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the estado model
   */
  interface estadoFieldRefs {
    readonly id_estado: FieldRef<"estado", 'Int'>
    readonly estado: FieldRef<"estado", 'String'>
    readonly created_at: FieldRef<"estado", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * estado findUnique
   */
  export type estadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
    /**
     * Filter, which estado to fetch.
     */
    where: estadoWhereUniqueInput
  }

  /**
   * estado findUniqueOrThrow
   */
  export type estadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
    /**
     * Filter, which estado to fetch.
     */
    where: estadoWhereUniqueInput
  }

  /**
   * estado findFirst
   */
  export type estadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
    /**
     * Filter, which estado to fetch.
     */
    where?: estadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estados to fetch.
     */
    orderBy?: estadoOrderByWithRelationInput | estadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estados.
     */
    cursor?: estadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estados.
     */
    distinct?: EstadoScalarFieldEnum | EstadoScalarFieldEnum[]
  }

  /**
   * estado findFirstOrThrow
   */
  export type estadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
    /**
     * Filter, which estado to fetch.
     */
    where?: estadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estados to fetch.
     */
    orderBy?: estadoOrderByWithRelationInput | estadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estados.
     */
    cursor?: estadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estados.
     */
    distinct?: EstadoScalarFieldEnum | EstadoScalarFieldEnum[]
  }

  /**
   * estado findMany
   */
  export type estadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
    /**
     * Filter, which estados to fetch.
     */
    where?: estadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estados to fetch.
     */
    orderBy?: estadoOrderByWithRelationInput | estadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing estados.
     */
    cursor?: estadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estados.
     */
    skip?: number
    distinct?: EstadoScalarFieldEnum | EstadoScalarFieldEnum[]
  }

  /**
   * estado create
   */
  export type estadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
    /**
     * The data needed to create a estado.
     */
    data: XOR<estadoCreateInput, estadoUncheckedCreateInput>
  }

  /**
   * estado createMany
   */
  export type estadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many estados.
     */
    data: estadoCreateManyInput | estadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * estado createManyAndReturn
   */
  export type estadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * The data used to create many estados.
     */
    data: estadoCreateManyInput | estadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * estado update
   */
  export type estadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
    /**
     * The data needed to update a estado.
     */
    data: XOR<estadoUpdateInput, estadoUncheckedUpdateInput>
    /**
     * Choose, which estado to update.
     */
    where: estadoWhereUniqueInput
  }

  /**
   * estado updateMany
   */
  export type estadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update estados.
     */
    data: XOR<estadoUpdateManyMutationInput, estadoUncheckedUpdateManyInput>
    /**
     * Filter which estados to update
     */
    where?: estadoWhereInput
    /**
     * Limit how many estados to update.
     */
    limit?: number
  }

  /**
   * estado updateManyAndReturn
   */
  export type estadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * The data used to update estados.
     */
    data: XOR<estadoUpdateManyMutationInput, estadoUncheckedUpdateManyInput>
    /**
     * Filter which estados to update
     */
    where?: estadoWhereInput
    /**
     * Limit how many estados to update.
     */
    limit?: number
  }

  /**
   * estado upsert
   */
  export type estadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
    /**
     * The filter to search for the estado to update in case it exists.
     */
    where: estadoWhereUniqueInput
    /**
     * In case the estado found by the `where` argument doesn't exist, create a new estado with this data.
     */
    create: XOR<estadoCreateInput, estadoUncheckedCreateInput>
    /**
     * In case the estado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<estadoUpdateInput, estadoUncheckedUpdateInput>
  }

  /**
   * estado delete
   */
  export type estadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
    /**
     * Filter which estado to delete.
     */
    where: estadoWhereUniqueInput
  }

  /**
   * estado deleteMany
   */
  export type estadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estados to delete
     */
    where?: estadoWhereInput
    /**
     * Limit how many estados to delete.
     */
    limit?: number
  }

  /**
   * estado.equipos
   */
  export type estado$equiposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipo
     */
    select?: equipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipo
     */
    omit?: equipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipoInclude<ExtArgs> | null
    where?: equipoWhereInput
    orderBy?: equipoOrderByWithRelationInput | equipoOrderByWithRelationInput[]
    cursor?: equipoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipoScalarFieldEnum | EquipoScalarFieldEnum[]
  }

  /**
   * estado without action
   */
  export type estadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
  }


  /**
   * Model evaluacion
   */

  export type AggregateEvaluacion = {
    _count: EvaluacionCountAggregateOutputType | null
    _avg: EvaluacionAvgAggregateOutputType | null
    _sum: EvaluacionSumAggregateOutputType | null
    _min: EvaluacionMinAggregateOutputType | null
    _max: EvaluacionMaxAggregateOutputType | null
  }

  export type EvaluacionAvgAggregateOutputType = {
    id_evaluacion: number | null
    id_usuario: number | null
    id_videojuegos: number | null
  }

  export type EvaluacionSumAggregateOutputType = {
    id_evaluacion: number | null
    id_usuario: number | null
    id_videojuegos: number | null
  }

  export type EvaluacionMinAggregateOutputType = {
    id_evaluacion: number | null
    id_usuario: number | null
    id_videojuegos: number | null
    comentario: string | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    estado: boolean | null
  }

  export type EvaluacionMaxAggregateOutputType = {
    id_evaluacion: number | null
    id_usuario: number | null
    id_videojuegos: number | null
    comentario: string | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    estado: boolean | null
  }

  export type EvaluacionCountAggregateOutputType = {
    id_evaluacion: number
    id_usuario: number
    id_videojuegos: number
    comentario: number
    fecha_creacion: number
    fecha_actualizacion: number
    estado: number
    _all: number
  }


  export type EvaluacionAvgAggregateInputType = {
    id_evaluacion?: true
    id_usuario?: true
    id_videojuegos?: true
  }

  export type EvaluacionSumAggregateInputType = {
    id_evaluacion?: true
    id_usuario?: true
    id_videojuegos?: true
  }

  export type EvaluacionMinAggregateInputType = {
    id_evaluacion?: true
    id_usuario?: true
    id_videojuegos?: true
    comentario?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
  }

  export type EvaluacionMaxAggregateInputType = {
    id_evaluacion?: true
    id_usuario?: true
    id_videojuegos?: true
    comentario?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
  }

  export type EvaluacionCountAggregateInputType = {
    id_evaluacion?: true
    id_usuario?: true
    id_videojuegos?: true
    comentario?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
    _all?: true
  }

  export type EvaluacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which evaluacion to aggregate.
     */
    where?: evaluacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluacions to fetch.
     */
    orderBy?: evaluacionOrderByWithRelationInput | evaluacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: evaluacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned evaluacions
    **/
    _count?: true | EvaluacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EvaluacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EvaluacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvaluacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvaluacionMaxAggregateInputType
  }

  export type GetEvaluacionAggregateType<T extends EvaluacionAggregateArgs> = {
        [P in keyof T & keyof AggregateEvaluacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvaluacion[P]>
      : GetScalarType<T[P], AggregateEvaluacion[P]>
  }




  export type evaluacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: evaluacionWhereInput
    orderBy?: evaluacionOrderByWithAggregationInput | evaluacionOrderByWithAggregationInput[]
    by: EvaluacionScalarFieldEnum[] | EvaluacionScalarFieldEnum
    having?: evaluacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvaluacionCountAggregateInputType | true
    _avg?: EvaluacionAvgAggregateInputType
    _sum?: EvaluacionSumAggregateInputType
    _min?: EvaluacionMinAggregateInputType
    _max?: EvaluacionMaxAggregateInputType
  }

  export type EvaluacionGroupByOutputType = {
    id_evaluacion: number
    id_usuario: number
    id_videojuegos: number
    comentario: string | null
    fecha_creacion: Date
    fecha_actualizacion: Date | null
    estado: boolean
    _count: EvaluacionCountAggregateOutputType | null
    _avg: EvaluacionAvgAggregateOutputType | null
    _sum: EvaluacionSumAggregateOutputType | null
    _min: EvaluacionMinAggregateOutputType | null
    _max: EvaluacionMaxAggregateOutputType | null
  }

  type GetEvaluacionGroupByPayload<T extends evaluacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvaluacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvaluacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvaluacionGroupByOutputType[P]>
            : GetScalarType<T[P], EvaluacionGroupByOutputType[P]>
        }
      >
    >


  export type evaluacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evaluacion?: boolean
    id_usuario?: boolean
    id_videojuegos?: boolean
    comentario?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    criterio_evaluacion?: boolean | evaluacion$criterio_evaluacionArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    videojuego?: boolean | videojuegoDefaultArgs<ExtArgs>
    _count?: boolean | EvaluacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluacion"]>

  export type evaluacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evaluacion?: boolean
    id_usuario?: boolean
    id_videojuegos?: boolean
    comentario?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    videojuego?: boolean | videojuegoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluacion"]>

  export type evaluacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evaluacion?: boolean
    id_usuario?: boolean
    id_videojuegos?: boolean
    comentario?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    videojuego?: boolean | videojuegoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluacion"]>

  export type evaluacionSelectScalar = {
    id_evaluacion?: boolean
    id_usuario?: boolean
    id_videojuegos?: boolean
    comentario?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
  }

  export type evaluacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_evaluacion" | "id_usuario" | "id_videojuegos" | "comentario" | "fecha_creacion" | "fecha_actualizacion" | "estado", ExtArgs["result"]["evaluacion"]>
  export type evaluacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criterio_evaluacion?: boolean | evaluacion$criterio_evaluacionArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    videojuego?: boolean | videojuegoDefaultArgs<ExtArgs>
    _count?: boolean | EvaluacionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type evaluacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    videojuego?: boolean | videojuegoDefaultArgs<ExtArgs>
  }
  export type evaluacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    videojuego?: boolean | videojuegoDefaultArgs<ExtArgs>
  }

  export type $evaluacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "evaluacion"
    objects: {
      criterio_evaluacion: Prisma.$criterio_evaluacionPayload<ExtArgs>[]
      usuario: Prisma.$usuarioPayload<ExtArgs>
      videojuego: Prisma.$videojuegoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_evaluacion: number
      id_usuario: number
      id_videojuegos: number
      comentario: string | null
      fecha_creacion: Date
      fecha_actualizacion: Date | null
      estado: boolean
    }, ExtArgs["result"]["evaluacion"]>
    composites: {}
  }

  type evaluacionGetPayload<S extends boolean | null | undefined | evaluacionDefaultArgs> = $Result.GetResult<Prisma.$evaluacionPayload, S>

  type evaluacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<evaluacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EvaluacionCountAggregateInputType | true
    }

  export interface evaluacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['evaluacion'], meta: { name: 'evaluacion' } }
    /**
     * Find zero or one Evaluacion that matches the filter.
     * @param {evaluacionFindUniqueArgs} args - Arguments to find a Evaluacion
     * @example
     * // Get one Evaluacion
     * const evaluacion = await prisma.evaluacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends evaluacionFindUniqueArgs>(args: SelectSubset<T, evaluacionFindUniqueArgs<ExtArgs>>): Prisma__evaluacionClient<$Result.GetResult<Prisma.$evaluacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evaluacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {evaluacionFindUniqueOrThrowArgs} args - Arguments to find a Evaluacion
     * @example
     * // Get one Evaluacion
     * const evaluacion = await prisma.evaluacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends evaluacionFindUniqueOrThrowArgs>(args: SelectSubset<T, evaluacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__evaluacionClient<$Result.GetResult<Prisma.$evaluacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evaluacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluacionFindFirstArgs} args - Arguments to find a Evaluacion
     * @example
     * // Get one Evaluacion
     * const evaluacion = await prisma.evaluacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends evaluacionFindFirstArgs>(args?: SelectSubset<T, evaluacionFindFirstArgs<ExtArgs>>): Prisma__evaluacionClient<$Result.GetResult<Prisma.$evaluacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evaluacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluacionFindFirstOrThrowArgs} args - Arguments to find a Evaluacion
     * @example
     * // Get one Evaluacion
     * const evaluacion = await prisma.evaluacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends evaluacionFindFirstOrThrowArgs>(args?: SelectSubset<T, evaluacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__evaluacionClient<$Result.GetResult<Prisma.$evaluacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Evaluacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Evaluacions
     * const evaluacions = await prisma.evaluacion.findMany()
     * 
     * // Get first 10 Evaluacions
     * const evaluacions = await prisma.evaluacion.findMany({ take: 10 })
     * 
     * // Only select the `id_evaluacion`
     * const evaluacionWithId_evaluacionOnly = await prisma.evaluacion.findMany({ select: { id_evaluacion: true } })
     * 
     */
    findMany<T extends evaluacionFindManyArgs>(args?: SelectSubset<T, evaluacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$evaluacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evaluacion.
     * @param {evaluacionCreateArgs} args - Arguments to create a Evaluacion.
     * @example
     * // Create one Evaluacion
     * const Evaluacion = await prisma.evaluacion.create({
     *   data: {
     *     // ... data to create a Evaluacion
     *   }
     * })
     * 
     */
    create<T extends evaluacionCreateArgs>(args: SelectSubset<T, evaluacionCreateArgs<ExtArgs>>): Prisma__evaluacionClient<$Result.GetResult<Prisma.$evaluacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Evaluacions.
     * @param {evaluacionCreateManyArgs} args - Arguments to create many Evaluacions.
     * @example
     * // Create many Evaluacions
     * const evaluacion = await prisma.evaluacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends evaluacionCreateManyArgs>(args?: SelectSubset<T, evaluacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Evaluacions and returns the data saved in the database.
     * @param {evaluacionCreateManyAndReturnArgs} args - Arguments to create many Evaluacions.
     * @example
     * // Create many Evaluacions
     * const evaluacion = await prisma.evaluacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Evaluacions and only return the `id_evaluacion`
     * const evaluacionWithId_evaluacionOnly = await prisma.evaluacion.createManyAndReturn({
     *   select: { id_evaluacion: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends evaluacionCreateManyAndReturnArgs>(args?: SelectSubset<T, evaluacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$evaluacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Evaluacion.
     * @param {evaluacionDeleteArgs} args - Arguments to delete one Evaluacion.
     * @example
     * // Delete one Evaluacion
     * const Evaluacion = await prisma.evaluacion.delete({
     *   where: {
     *     // ... filter to delete one Evaluacion
     *   }
     * })
     * 
     */
    delete<T extends evaluacionDeleteArgs>(args: SelectSubset<T, evaluacionDeleteArgs<ExtArgs>>): Prisma__evaluacionClient<$Result.GetResult<Prisma.$evaluacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evaluacion.
     * @param {evaluacionUpdateArgs} args - Arguments to update one Evaluacion.
     * @example
     * // Update one Evaluacion
     * const evaluacion = await prisma.evaluacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends evaluacionUpdateArgs>(args: SelectSubset<T, evaluacionUpdateArgs<ExtArgs>>): Prisma__evaluacionClient<$Result.GetResult<Prisma.$evaluacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Evaluacions.
     * @param {evaluacionDeleteManyArgs} args - Arguments to filter Evaluacions to delete.
     * @example
     * // Delete a few Evaluacions
     * const { count } = await prisma.evaluacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends evaluacionDeleteManyArgs>(args?: SelectSubset<T, evaluacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evaluacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Evaluacions
     * const evaluacion = await prisma.evaluacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends evaluacionUpdateManyArgs>(args: SelectSubset<T, evaluacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evaluacions and returns the data updated in the database.
     * @param {evaluacionUpdateManyAndReturnArgs} args - Arguments to update many Evaluacions.
     * @example
     * // Update many Evaluacions
     * const evaluacion = await prisma.evaluacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Evaluacions and only return the `id_evaluacion`
     * const evaluacionWithId_evaluacionOnly = await prisma.evaluacion.updateManyAndReturn({
     *   select: { id_evaluacion: true },
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
    updateManyAndReturn<T extends evaluacionUpdateManyAndReturnArgs>(args: SelectSubset<T, evaluacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$evaluacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Evaluacion.
     * @param {evaluacionUpsertArgs} args - Arguments to update or create a Evaluacion.
     * @example
     * // Update or create a Evaluacion
     * const evaluacion = await prisma.evaluacion.upsert({
     *   create: {
     *     // ... data to create a Evaluacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evaluacion we want to update
     *   }
     * })
     */
    upsert<T extends evaluacionUpsertArgs>(args: SelectSubset<T, evaluacionUpsertArgs<ExtArgs>>): Prisma__evaluacionClient<$Result.GetResult<Prisma.$evaluacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Evaluacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluacionCountArgs} args - Arguments to filter Evaluacions to count.
     * @example
     * // Count the number of Evaluacions
     * const count = await prisma.evaluacion.count({
     *   where: {
     *     // ... the filter for the Evaluacions we want to count
     *   }
     * })
    **/
    count<T extends evaluacionCountArgs>(
      args?: Subset<T, evaluacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvaluacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evaluacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EvaluacionAggregateArgs>(args: Subset<T, EvaluacionAggregateArgs>): Prisma.PrismaPromise<GetEvaluacionAggregateType<T>>

    /**
     * Group by Evaluacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluacionGroupByArgs} args - Group by arguments.
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
      T extends evaluacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: evaluacionGroupByArgs['orderBy'] }
        : { orderBy?: evaluacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, evaluacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the evaluacion model
   */
  readonly fields: evaluacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for evaluacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__evaluacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    criterio_evaluacion<T extends evaluacion$criterio_evaluacionArgs<ExtArgs> = {}>(args?: Subset<T, evaluacion$criterio_evaluacionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$criterio_evaluacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    videojuego<T extends videojuegoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, videojuegoDefaultArgs<ExtArgs>>): Prisma__videojuegoClient<$Result.GetResult<Prisma.$videojuegoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the evaluacion model
   */
  interface evaluacionFieldRefs {
    readonly id_evaluacion: FieldRef<"evaluacion", 'Int'>
    readonly id_usuario: FieldRef<"evaluacion", 'Int'>
    readonly id_videojuegos: FieldRef<"evaluacion", 'Int'>
    readonly comentario: FieldRef<"evaluacion", 'String'>
    readonly fecha_creacion: FieldRef<"evaluacion", 'DateTime'>
    readonly fecha_actualizacion: FieldRef<"evaluacion", 'DateTime'>
    readonly estado: FieldRef<"evaluacion", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * evaluacion findUnique
   */
  export type evaluacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluacion
     */
    select?: evaluacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evaluacion
     */
    omit?: evaluacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluacionInclude<ExtArgs> | null
    /**
     * Filter, which evaluacion to fetch.
     */
    where: evaluacionWhereUniqueInput
  }

  /**
   * evaluacion findUniqueOrThrow
   */
  export type evaluacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluacion
     */
    select?: evaluacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evaluacion
     */
    omit?: evaluacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluacionInclude<ExtArgs> | null
    /**
     * Filter, which evaluacion to fetch.
     */
    where: evaluacionWhereUniqueInput
  }

  /**
   * evaluacion findFirst
   */
  export type evaluacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluacion
     */
    select?: evaluacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evaluacion
     */
    omit?: evaluacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluacionInclude<ExtArgs> | null
    /**
     * Filter, which evaluacion to fetch.
     */
    where?: evaluacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluacions to fetch.
     */
    orderBy?: evaluacionOrderByWithRelationInput | evaluacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for evaluacions.
     */
    cursor?: evaluacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of evaluacions.
     */
    distinct?: EvaluacionScalarFieldEnum | EvaluacionScalarFieldEnum[]
  }

  /**
   * evaluacion findFirstOrThrow
   */
  export type evaluacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluacion
     */
    select?: evaluacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evaluacion
     */
    omit?: evaluacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluacionInclude<ExtArgs> | null
    /**
     * Filter, which evaluacion to fetch.
     */
    where?: evaluacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluacions to fetch.
     */
    orderBy?: evaluacionOrderByWithRelationInput | evaluacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for evaluacions.
     */
    cursor?: evaluacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of evaluacions.
     */
    distinct?: EvaluacionScalarFieldEnum | EvaluacionScalarFieldEnum[]
  }

  /**
   * evaluacion findMany
   */
  export type evaluacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluacion
     */
    select?: evaluacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evaluacion
     */
    omit?: evaluacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluacionInclude<ExtArgs> | null
    /**
     * Filter, which evaluacions to fetch.
     */
    where?: evaluacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluacions to fetch.
     */
    orderBy?: evaluacionOrderByWithRelationInput | evaluacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing evaluacions.
     */
    cursor?: evaluacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluacions.
     */
    skip?: number
    distinct?: EvaluacionScalarFieldEnum | EvaluacionScalarFieldEnum[]
  }

  /**
   * evaluacion create
   */
  export type evaluacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluacion
     */
    select?: evaluacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evaluacion
     */
    omit?: evaluacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluacionInclude<ExtArgs> | null
    /**
     * The data needed to create a evaluacion.
     */
    data: XOR<evaluacionCreateInput, evaluacionUncheckedCreateInput>
  }

  /**
   * evaluacion createMany
   */
  export type evaluacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many evaluacions.
     */
    data: evaluacionCreateManyInput | evaluacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * evaluacion createManyAndReturn
   */
  export type evaluacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluacion
     */
    select?: evaluacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the evaluacion
     */
    omit?: evaluacionOmit<ExtArgs> | null
    /**
     * The data used to create many evaluacions.
     */
    data: evaluacionCreateManyInput | evaluacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * evaluacion update
   */
  export type evaluacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluacion
     */
    select?: evaluacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evaluacion
     */
    omit?: evaluacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluacionInclude<ExtArgs> | null
    /**
     * The data needed to update a evaluacion.
     */
    data: XOR<evaluacionUpdateInput, evaluacionUncheckedUpdateInput>
    /**
     * Choose, which evaluacion to update.
     */
    where: evaluacionWhereUniqueInput
  }

  /**
   * evaluacion updateMany
   */
  export type evaluacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update evaluacions.
     */
    data: XOR<evaluacionUpdateManyMutationInput, evaluacionUncheckedUpdateManyInput>
    /**
     * Filter which evaluacions to update
     */
    where?: evaluacionWhereInput
    /**
     * Limit how many evaluacions to update.
     */
    limit?: number
  }

  /**
   * evaluacion updateManyAndReturn
   */
  export type evaluacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluacion
     */
    select?: evaluacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the evaluacion
     */
    omit?: evaluacionOmit<ExtArgs> | null
    /**
     * The data used to update evaluacions.
     */
    data: XOR<evaluacionUpdateManyMutationInput, evaluacionUncheckedUpdateManyInput>
    /**
     * Filter which evaluacions to update
     */
    where?: evaluacionWhereInput
    /**
     * Limit how many evaluacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * evaluacion upsert
   */
  export type evaluacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluacion
     */
    select?: evaluacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evaluacion
     */
    omit?: evaluacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluacionInclude<ExtArgs> | null
    /**
     * The filter to search for the evaluacion to update in case it exists.
     */
    where: evaluacionWhereUniqueInput
    /**
     * In case the evaluacion found by the `where` argument doesn't exist, create a new evaluacion with this data.
     */
    create: XOR<evaluacionCreateInput, evaluacionUncheckedCreateInput>
    /**
     * In case the evaluacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<evaluacionUpdateInput, evaluacionUncheckedUpdateInput>
  }

  /**
   * evaluacion delete
   */
  export type evaluacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluacion
     */
    select?: evaluacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evaluacion
     */
    omit?: evaluacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluacionInclude<ExtArgs> | null
    /**
     * Filter which evaluacion to delete.
     */
    where: evaluacionWhereUniqueInput
  }

  /**
   * evaluacion deleteMany
   */
  export type evaluacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which evaluacions to delete
     */
    where?: evaluacionWhereInput
    /**
     * Limit how many evaluacions to delete.
     */
    limit?: number
  }

  /**
   * evaluacion.criterio_evaluacion
   */
  export type evaluacion$criterio_evaluacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the criterio_evaluacion
     */
    select?: criterio_evaluacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the criterio_evaluacion
     */
    omit?: criterio_evaluacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: criterio_evaluacionInclude<ExtArgs> | null
    where?: criterio_evaluacionWhereInput
    orderBy?: criterio_evaluacionOrderByWithRelationInput | criterio_evaluacionOrderByWithRelationInput[]
    cursor?: criterio_evaluacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Criterio_evaluacionScalarFieldEnum | Criterio_evaluacionScalarFieldEnum[]
  }

  /**
   * evaluacion without action
   */
  export type evaluacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluacion
     */
    select?: evaluacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evaluacion
     */
    omit?: evaluacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluacionInclude<ExtArgs> | null
  }


  /**
   * Model integrante
   */

  export type AggregateIntegrante = {
    _count: IntegranteCountAggregateOutputType | null
    _avg: IntegranteAvgAggregateOutputType | null
    _sum: IntegranteSumAggregateOutputType | null
    _min: IntegranteMinAggregateOutputType | null
    _max: IntegranteMaxAggregateOutputType | null
  }

  export type IntegranteAvgAggregateOutputType = {
    id_integrante: number | null
    id_equipo: number | null
  }

  export type IntegranteSumAggregateOutputType = {
    id_integrante: number | null
    id_equipo: number | null
  }

  export type IntegranteMinAggregateOutputType = {
    id_integrante: number | null
    id_equipo: number | null
    primer_nombre: string | null
    correo: string | null
    usuario_github: string | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    estado: boolean | null
  }

  export type IntegranteMaxAggregateOutputType = {
    id_integrante: number | null
    id_equipo: number | null
    primer_nombre: string | null
    correo: string | null
    usuario_github: string | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    estado: boolean | null
  }

  export type IntegranteCountAggregateOutputType = {
    id_integrante: number
    id_equipo: number
    primer_nombre: number
    correo: number
    usuario_github: number
    fecha_creacion: number
    fecha_actualizacion: number
    estado: number
    _all: number
  }


  export type IntegranteAvgAggregateInputType = {
    id_integrante?: true
    id_equipo?: true
  }

  export type IntegranteSumAggregateInputType = {
    id_integrante?: true
    id_equipo?: true
  }

  export type IntegranteMinAggregateInputType = {
    id_integrante?: true
    id_equipo?: true
    primer_nombre?: true
    correo?: true
    usuario_github?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
  }

  export type IntegranteMaxAggregateInputType = {
    id_integrante?: true
    id_equipo?: true
    primer_nombre?: true
    correo?: true
    usuario_github?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
  }

  export type IntegranteCountAggregateInputType = {
    id_integrante?: true
    id_equipo?: true
    primer_nombre?: true
    correo?: true
    usuario_github?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
    _all?: true
  }

  export type IntegranteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which integrante to aggregate.
     */
    where?: integranteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of integrantes to fetch.
     */
    orderBy?: integranteOrderByWithRelationInput | integranteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: integranteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` integrantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` integrantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned integrantes
    **/
    _count?: true | IntegranteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IntegranteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IntegranteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntegranteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntegranteMaxAggregateInputType
  }

  export type GetIntegranteAggregateType<T extends IntegranteAggregateArgs> = {
        [P in keyof T & keyof AggregateIntegrante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntegrante[P]>
      : GetScalarType<T[P], AggregateIntegrante[P]>
  }




  export type integranteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: integranteWhereInput
    orderBy?: integranteOrderByWithAggregationInput | integranteOrderByWithAggregationInput[]
    by: IntegranteScalarFieldEnum[] | IntegranteScalarFieldEnum
    having?: integranteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntegranteCountAggregateInputType | true
    _avg?: IntegranteAvgAggregateInputType
    _sum?: IntegranteSumAggregateInputType
    _min?: IntegranteMinAggregateInputType
    _max?: IntegranteMaxAggregateInputType
  }

  export type IntegranteGroupByOutputType = {
    id_integrante: number
    id_equipo: number
    primer_nombre: string
    correo: string
    usuario_github: string
    fecha_creacion: Date
    fecha_actualizacion: Date | null
    estado: boolean
    _count: IntegranteCountAggregateOutputType | null
    _avg: IntegranteAvgAggregateOutputType | null
    _sum: IntegranteSumAggregateOutputType | null
    _min: IntegranteMinAggregateOutputType | null
    _max: IntegranteMaxAggregateOutputType | null
  }

  type GetIntegranteGroupByPayload<T extends integranteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntegranteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntegranteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntegranteGroupByOutputType[P]>
            : GetScalarType<T[P], IntegranteGroupByOutputType[P]>
        }
      >
    >


  export type integranteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_integrante?: boolean
    id_equipo?: boolean
    primer_nombre?: boolean
    correo?: boolean
    usuario_github?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    equipo?: boolean | equipoDefaultArgs<ExtArgs>
    integrante_nrc?: boolean | integrante$integrante_nrcArgs<ExtArgs>
    _count?: boolean | IntegranteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["integrante"]>

  export type integranteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_integrante?: boolean
    id_equipo?: boolean
    primer_nombre?: boolean
    correo?: boolean
    usuario_github?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    equipo?: boolean | equipoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["integrante"]>

  export type integranteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_integrante?: boolean
    id_equipo?: boolean
    primer_nombre?: boolean
    correo?: boolean
    usuario_github?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    equipo?: boolean | equipoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["integrante"]>

  export type integranteSelectScalar = {
    id_integrante?: boolean
    id_equipo?: boolean
    primer_nombre?: boolean
    correo?: boolean
    usuario_github?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
  }

  export type integranteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_integrante" | "id_equipo" | "primer_nombre" | "correo" | "usuario_github" | "fecha_creacion" | "fecha_actualizacion" | "estado", ExtArgs["result"]["integrante"]>
  export type integranteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipo?: boolean | equipoDefaultArgs<ExtArgs>
    integrante_nrc?: boolean | integrante$integrante_nrcArgs<ExtArgs>
    _count?: boolean | IntegranteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type integranteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipo?: boolean | equipoDefaultArgs<ExtArgs>
  }
  export type integranteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipo?: boolean | equipoDefaultArgs<ExtArgs>
  }

  export type $integrantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "integrante"
    objects: {
      equipo: Prisma.$equipoPayload<ExtArgs>
      integrante_nrc: Prisma.$integrante_nrcPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_integrante: number
      id_equipo: number
      primer_nombre: string
      correo: string
      usuario_github: string
      fecha_creacion: Date
      fecha_actualizacion: Date | null
      estado: boolean
    }, ExtArgs["result"]["integrante"]>
    composites: {}
  }

  type integranteGetPayload<S extends boolean | null | undefined | integranteDefaultArgs> = $Result.GetResult<Prisma.$integrantePayload, S>

  type integranteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<integranteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntegranteCountAggregateInputType | true
    }

  export interface integranteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['integrante'], meta: { name: 'integrante' } }
    /**
     * Find zero or one Integrante that matches the filter.
     * @param {integranteFindUniqueArgs} args - Arguments to find a Integrante
     * @example
     * // Get one Integrante
     * const integrante = await prisma.integrante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends integranteFindUniqueArgs>(args: SelectSubset<T, integranteFindUniqueArgs<ExtArgs>>): Prisma__integranteClient<$Result.GetResult<Prisma.$integrantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Integrante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {integranteFindUniqueOrThrowArgs} args - Arguments to find a Integrante
     * @example
     * // Get one Integrante
     * const integrante = await prisma.integrante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends integranteFindUniqueOrThrowArgs>(args: SelectSubset<T, integranteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__integranteClient<$Result.GetResult<Prisma.$integrantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Integrante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {integranteFindFirstArgs} args - Arguments to find a Integrante
     * @example
     * // Get one Integrante
     * const integrante = await prisma.integrante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends integranteFindFirstArgs>(args?: SelectSubset<T, integranteFindFirstArgs<ExtArgs>>): Prisma__integranteClient<$Result.GetResult<Prisma.$integrantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Integrante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {integranteFindFirstOrThrowArgs} args - Arguments to find a Integrante
     * @example
     * // Get one Integrante
     * const integrante = await prisma.integrante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends integranteFindFirstOrThrowArgs>(args?: SelectSubset<T, integranteFindFirstOrThrowArgs<ExtArgs>>): Prisma__integranteClient<$Result.GetResult<Prisma.$integrantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Integrantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {integranteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Integrantes
     * const integrantes = await prisma.integrante.findMany()
     * 
     * // Get first 10 Integrantes
     * const integrantes = await prisma.integrante.findMany({ take: 10 })
     * 
     * // Only select the `id_integrante`
     * const integranteWithId_integranteOnly = await prisma.integrante.findMany({ select: { id_integrante: true } })
     * 
     */
    findMany<T extends integranteFindManyArgs>(args?: SelectSubset<T, integranteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$integrantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Integrante.
     * @param {integranteCreateArgs} args - Arguments to create a Integrante.
     * @example
     * // Create one Integrante
     * const Integrante = await prisma.integrante.create({
     *   data: {
     *     // ... data to create a Integrante
     *   }
     * })
     * 
     */
    create<T extends integranteCreateArgs>(args: SelectSubset<T, integranteCreateArgs<ExtArgs>>): Prisma__integranteClient<$Result.GetResult<Prisma.$integrantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Integrantes.
     * @param {integranteCreateManyArgs} args - Arguments to create many Integrantes.
     * @example
     * // Create many Integrantes
     * const integrante = await prisma.integrante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends integranteCreateManyArgs>(args?: SelectSubset<T, integranteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Integrantes and returns the data saved in the database.
     * @param {integranteCreateManyAndReturnArgs} args - Arguments to create many Integrantes.
     * @example
     * // Create many Integrantes
     * const integrante = await prisma.integrante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Integrantes and only return the `id_integrante`
     * const integranteWithId_integranteOnly = await prisma.integrante.createManyAndReturn({
     *   select: { id_integrante: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends integranteCreateManyAndReturnArgs>(args?: SelectSubset<T, integranteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$integrantePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Integrante.
     * @param {integranteDeleteArgs} args - Arguments to delete one Integrante.
     * @example
     * // Delete one Integrante
     * const Integrante = await prisma.integrante.delete({
     *   where: {
     *     // ... filter to delete one Integrante
     *   }
     * })
     * 
     */
    delete<T extends integranteDeleteArgs>(args: SelectSubset<T, integranteDeleteArgs<ExtArgs>>): Prisma__integranteClient<$Result.GetResult<Prisma.$integrantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Integrante.
     * @param {integranteUpdateArgs} args - Arguments to update one Integrante.
     * @example
     * // Update one Integrante
     * const integrante = await prisma.integrante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends integranteUpdateArgs>(args: SelectSubset<T, integranteUpdateArgs<ExtArgs>>): Prisma__integranteClient<$Result.GetResult<Prisma.$integrantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Integrantes.
     * @param {integranteDeleteManyArgs} args - Arguments to filter Integrantes to delete.
     * @example
     * // Delete a few Integrantes
     * const { count } = await prisma.integrante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends integranteDeleteManyArgs>(args?: SelectSubset<T, integranteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Integrantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {integranteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Integrantes
     * const integrante = await prisma.integrante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends integranteUpdateManyArgs>(args: SelectSubset<T, integranteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Integrantes and returns the data updated in the database.
     * @param {integranteUpdateManyAndReturnArgs} args - Arguments to update many Integrantes.
     * @example
     * // Update many Integrantes
     * const integrante = await prisma.integrante.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Integrantes and only return the `id_integrante`
     * const integranteWithId_integranteOnly = await prisma.integrante.updateManyAndReturn({
     *   select: { id_integrante: true },
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
    updateManyAndReturn<T extends integranteUpdateManyAndReturnArgs>(args: SelectSubset<T, integranteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$integrantePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Integrante.
     * @param {integranteUpsertArgs} args - Arguments to update or create a Integrante.
     * @example
     * // Update or create a Integrante
     * const integrante = await prisma.integrante.upsert({
     *   create: {
     *     // ... data to create a Integrante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Integrante we want to update
     *   }
     * })
     */
    upsert<T extends integranteUpsertArgs>(args: SelectSubset<T, integranteUpsertArgs<ExtArgs>>): Prisma__integranteClient<$Result.GetResult<Prisma.$integrantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Integrantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {integranteCountArgs} args - Arguments to filter Integrantes to count.
     * @example
     * // Count the number of Integrantes
     * const count = await prisma.integrante.count({
     *   where: {
     *     // ... the filter for the Integrantes we want to count
     *   }
     * })
    **/
    count<T extends integranteCountArgs>(
      args?: Subset<T, integranteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntegranteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Integrante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegranteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IntegranteAggregateArgs>(args: Subset<T, IntegranteAggregateArgs>): Prisma.PrismaPromise<GetIntegranteAggregateType<T>>

    /**
     * Group by Integrante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {integranteGroupByArgs} args - Group by arguments.
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
      T extends integranteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: integranteGroupByArgs['orderBy'] }
        : { orderBy?: integranteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, integranteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntegranteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the integrante model
   */
  readonly fields: integranteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for integrante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__integranteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipo<T extends equipoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, equipoDefaultArgs<ExtArgs>>): Prisma__equipoClient<$Result.GetResult<Prisma.$equipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    integrante_nrc<T extends integrante$integrante_nrcArgs<ExtArgs> = {}>(args?: Subset<T, integrante$integrante_nrcArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$integrante_nrcPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the integrante model
   */
  interface integranteFieldRefs {
    readonly id_integrante: FieldRef<"integrante", 'Int'>
    readonly id_equipo: FieldRef<"integrante", 'Int'>
    readonly primer_nombre: FieldRef<"integrante", 'String'>
    readonly correo: FieldRef<"integrante", 'String'>
    readonly usuario_github: FieldRef<"integrante", 'String'>
    readonly fecha_creacion: FieldRef<"integrante", 'DateTime'>
    readonly fecha_actualizacion: FieldRef<"integrante", 'DateTime'>
    readonly estado: FieldRef<"integrante", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * integrante findUnique
   */
  export type integranteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integrante
     */
    select?: integranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the integrante
     */
    omit?: integranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: integranteInclude<ExtArgs> | null
    /**
     * Filter, which integrante to fetch.
     */
    where: integranteWhereUniqueInput
  }

  /**
   * integrante findUniqueOrThrow
   */
  export type integranteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integrante
     */
    select?: integranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the integrante
     */
    omit?: integranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: integranteInclude<ExtArgs> | null
    /**
     * Filter, which integrante to fetch.
     */
    where: integranteWhereUniqueInput
  }

  /**
   * integrante findFirst
   */
  export type integranteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integrante
     */
    select?: integranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the integrante
     */
    omit?: integranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: integranteInclude<ExtArgs> | null
    /**
     * Filter, which integrante to fetch.
     */
    where?: integranteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of integrantes to fetch.
     */
    orderBy?: integranteOrderByWithRelationInput | integranteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for integrantes.
     */
    cursor?: integranteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` integrantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` integrantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of integrantes.
     */
    distinct?: IntegranteScalarFieldEnum | IntegranteScalarFieldEnum[]
  }

  /**
   * integrante findFirstOrThrow
   */
  export type integranteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integrante
     */
    select?: integranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the integrante
     */
    omit?: integranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: integranteInclude<ExtArgs> | null
    /**
     * Filter, which integrante to fetch.
     */
    where?: integranteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of integrantes to fetch.
     */
    orderBy?: integranteOrderByWithRelationInput | integranteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for integrantes.
     */
    cursor?: integranteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` integrantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` integrantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of integrantes.
     */
    distinct?: IntegranteScalarFieldEnum | IntegranteScalarFieldEnum[]
  }

  /**
   * integrante findMany
   */
  export type integranteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integrante
     */
    select?: integranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the integrante
     */
    omit?: integranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: integranteInclude<ExtArgs> | null
    /**
     * Filter, which integrantes to fetch.
     */
    where?: integranteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of integrantes to fetch.
     */
    orderBy?: integranteOrderByWithRelationInput | integranteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing integrantes.
     */
    cursor?: integranteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` integrantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` integrantes.
     */
    skip?: number
    distinct?: IntegranteScalarFieldEnum | IntegranteScalarFieldEnum[]
  }

  /**
   * integrante create
   */
  export type integranteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integrante
     */
    select?: integranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the integrante
     */
    omit?: integranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: integranteInclude<ExtArgs> | null
    /**
     * The data needed to create a integrante.
     */
    data: XOR<integranteCreateInput, integranteUncheckedCreateInput>
  }

  /**
   * integrante createMany
   */
  export type integranteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many integrantes.
     */
    data: integranteCreateManyInput | integranteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * integrante createManyAndReturn
   */
  export type integranteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integrante
     */
    select?: integranteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the integrante
     */
    omit?: integranteOmit<ExtArgs> | null
    /**
     * The data used to create many integrantes.
     */
    data: integranteCreateManyInput | integranteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: integranteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * integrante update
   */
  export type integranteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integrante
     */
    select?: integranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the integrante
     */
    omit?: integranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: integranteInclude<ExtArgs> | null
    /**
     * The data needed to update a integrante.
     */
    data: XOR<integranteUpdateInput, integranteUncheckedUpdateInput>
    /**
     * Choose, which integrante to update.
     */
    where: integranteWhereUniqueInput
  }

  /**
   * integrante updateMany
   */
  export type integranteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update integrantes.
     */
    data: XOR<integranteUpdateManyMutationInput, integranteUncheckedUpdateManyInput>
    /**
     * Filter which integrantes to update
     */
    where?: integranteWhereInput
    /**
     * Limit how many integrantes to update.
     */
    limit?: number
  }

  /**
   * integrante updateManyAndReturn
   */
  export type integranteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integrante
     */
    select?: integranteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the integrante
     */
    omit?: integranteOmit<ExtArgs> | null
    /**
     * The data used to update integrantes.
     */
    data: XOR<integranteUpdateManyMutationInput, integranteUncheckedUpdateManyInput>
    /**
     * Filter which integrantes to update
     */
    where?: integranteWhereInput
    /**
     * Limit how many integrantes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: integranteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * integrante upsert
   */
  export type integranteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integrante
     */
    select?: integranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the integrante
     */
    omit?: integranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: integranteInclude<ExtArgs> | null
    /**
     * The filter to search for the integrante to update in case it exists.
     */
    where: integranteWhereUniqueInput
    /**
     * In case the integrante found by the `where` argument doesn't exist, create a new integrante with this data.
     */
    create: XOR<integranteCreateInput, integranteUncheckedCreateInput>
    /**
     * In case the integrante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<integranteUpdateInput, integranteUncheckedUpdateInput>
  }

  /**
   * integrante delete
   */
  export type integranteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integrante
     */
    select?: integranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the integrante
     */
    omit?: integranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: integranteInclude<ExtArgs> | null
    /**
     * Filter which integrante to delete.
     */
    where: integranteWhereUniqueInput
  }

  /**
   * integrante deleteMany
   */
  export type integranteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which integrantes to delete
     */
    where?: integranteWhereInput
    /**
     * Limit how many integrantes to delete.
     */
    limit?: number
  }

  /**
   * integrante.integrante_nrc
   */
  export type integrante$integrante_nrcArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integrante_nrc
     */
    select?: integrante_nrcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the integrante_nrc
     */
    omit?: integrante_nrcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: integrante_nrcInclude<ExtArgs> | null
    where?: integrante_nrcWhereInput
    orderBy?: integrante_nrcOrderByWithRelationInput | integrante_nrcOrderByWithRelationInput[]
    cursor?: integrante_nrcWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Integrante_nrcScalarFieldEnum | Integrante_nrcScalarFieldEnum[]
  }

  /**
   * integrante without action
   */
  export type integranteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integrante
     */
    select?: integranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the integrante
     */
    omit?: integranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: integranteInclude<ExtArgs> | null
  }


  /**
   * Model integrante_nrc
   */

  export type AggregateIntegrante_nrc = {
    _count: Integrante_nrcCountAggregateOutputType | null
    _avg: Integrante_nrcAvgAggregateOutputType | null
    _sum: Integrante_nrcSumAggregateOutputType | null
    _min: Integrante_nrcMinAggregateOutputType | null
    _max: Integrante_nrcMaxAggregateOutputType | null
  }

  export type Integrante_nrcAvgAggregateOutputType = {
    id_integrante: number | null
    id_nrc: number | null
  }

  export type Integrante_nrcSumAggregateOutputType = {
    id_integrante: number | null
    id_nrc: number | null
  }

  export type Integrante_nrcMinAggregateOutputType = {
    id_integrante: number | null
    id_nrc: number | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    estado: boolean | null
  }

  export type Integrante_nrcMaxAggregateOutputType = {
    id_integrante: number | null
    id_nrc: number | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    estado: boolean | null
  }

  export type Integrante_nrcCountAggregateOutputType = {
    id_integrante: number
    id_nrc: number
    fecha_creacion: number
    fecha_actualizacion: number
    estado: number
    _all: number
  }


  export type Integrante_nrcAvgAggregateInputType = {
    id_integrante?: true
    id_nrc?: true
  }

  export type Integrante_nrcSumAggregateInputType = {
    id_integrante?: true
    id_nrc?: true
  }

  export type Integrante_nrcMinAggregateInputType = {
    id_integrante?: true
    id_nrc?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
  }

  export type Integrante_nrcMaxAggregateInputType = {
    id_integrante?: true
    id_nrc?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
  }

  export type Integrante_nrcCountAggregateInputType = {
    id_integrante?: true
    id_nrc?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
    _all?: true
  }

  export type Integrante_nrcAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which integrante_nrc to aggregate.
     */
    where?: integrante_nrcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of integrante_nrcs to fetch.
     */
    orderBy?: integrante_nrcOrderByWithRelationInput | integrante_nrcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: integrante_nrcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` integrante_nrcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` integrante_nrcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned integrante_nrcs
    **/
    _count?: true | Integrante_nrcCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Integrante_nrcAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Integrante_nrcSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Integrante_nrcMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Integrante_nrcMaxAggregateInputType
  }

  export type GetIntegrante_nrcAggregateType<T extends Integrante_nrcAggregateArgs> = {
        [P in keyof T & keyof AggregateIntegrante_nrc]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntegrante_nrc[P]>
      : GetScalarType<T[P], AggregateIntegrante_nrc[P]>
  }




  export type integrante_nrcGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: integrante_nrcWhereInput
    orderBy?: integrante_nrcOrderByWithAggregationInput | integrante_nrcOrderByWithAggregationInput[]
    by: Integrante_nrcScalarFieldEnum[] | Integrante_nrcScalarFieldEnum
    having?: integrante_nrcScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Integrante_nrcCountAggregateInputType | true
    _avg?: Integrante_nrcAvgAggregateInputType
    _sum?: Integrante_nrcSumAggregateInputType
    _min?: Integrante_nrcMinAggregateInputType
    _max?: Integrante_nrcMaxAggregateInputType
  }

  export type Integrante_nrcGroupByOutputType = {
    id_integrante: number
    id_nrc: number
    fecha_creacion: Date
    fecha_actualizacion: Date | null
    estado: boolean
    _count: Integrante_nrcCountAggregateOutputType | null
    _avg: Integrante_nrcAvgAggregateOutputType | null
    _sum: Integrante_nrcSumAggregateOutputType | null
    _min: Integrante_nrcMinAggregateOutputType | null
    _max: Integrante_nrcMaxAggregateOutputType | null
  }

  type GetIntegrante_nrcGroupByPayload<T extends integrante_nrcGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Integrante_nrcGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Integrante_nrcGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Integrante_nrcGroupByOutputType[P]>
            : GetScalarType<T[P], Integrante_nrcGroupByOutputType[P]>
        }
      >
    >


  export type integrante_nrcSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_integrante?: boolean
    id_nrc?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    integrante?: boolean | integranteDefaultArgs<ExtArgs>
    nrc?: boolean | nrcDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["integrante_nrc"]>

  export type integrante_nrcSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_integrante?: boolean
    id_nrc?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    integrante?: boolean | integranteDefaultArgs<ExtArgs>
    nrc?: boolean | nrcDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["integrante_nrc"]>

  export type integrante_nrcSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_integrante?: boolean
    id_nrc?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    integrante?: boolean | integranteDefaultArgs<ExtArgs>
    nrc?: boolean | nrcDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["integrante_nrc"]>

  export type integrante_nrcSelectScalar = {
    id_integrante?: boolean
    id_nrc?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
  }

  export type integrante_nrcOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_integrante" | "id_nrc" | "fecha_creacion" | "fecha_actualizacion" | "estado", ExtArgs["result"]["integrante_nrc"]>
  export type integrante_nrcInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    integrante?: boolean | integranteDefaultArgs<ExtArgs>
    nrc?: boolean | nrcDefaultArgs<ExtArgs>
  }
  export type integrante_nrcIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    integrante?: boolean | integranteDefaultArgs<ExtArgs>
    nrc?: boolean | nrcDefaultArgs<ExtArgs>
  }
  export type integrante_nrcIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    integrante?: boolean | integranteDefaultArgs<ExtArgs>
    nrc?: boolean | nrcDefaultArgs<ExtArgs>
  }

  export type $integrante_nrcPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "integrante_nrc"
    objects: {
      integrante: Prisma.$integrantePayload<ExtArgs>
      nrc: Prisma.$nrcPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_integrante: number
      id_nrc: number
      fecha_creacion: Date
      fecha_actualizacion: Date | null
      estado: boolean
    }, ExtArgs["result"]["integrante_nrc"]>
    composites: {}
  }

  type integrante_nrcGetPayload<S extends boolean | null | undefined | integrante_nrcDefaultArgs> = $Result.GetResult<Prisma.$integrante_nrcPayload, S>

  type integrante_nrcCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<integrante_nrcFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Integrante_nrcCountAggregateInputType | true
    }

  export interface integrante_nrcDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['integrante_nrc'], meta: { name: 'integrante_nrc' } }
    /**
     * Find zero or one Integrante_nrc that matches the filter.
     * @param {integrante_nrcFindUniqueArgs} args - Arguments to find a Integrante_nrc
     * @example
     * // Get one Integrante_nrc
     * const integrante_nrc = await prisma.integrante_nrc.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends integrante_nrcFindUniqueArgs>(args: SelectSubset<T, integrante_nrcFindUniqueArgs<ExtArgs>>): Prisma__integrante_nrcClient<$Result.GetResult<Prisma.$integrante_nrcPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Integrante_nrc that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {integrante_nrcFindUniqueOrThrowArgs} args - Arguments to find a Integrante_nrc
     * @example
     * // Get one Integrante_nrc
     * const integrante_nrc = await prisma.integrante_nrc.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends integrante_nrcFindUniqueOrThrowArgs>(args: SelectSubset<T, integrante_nrcFindUniqueOrThrowArgs<ExtArgs>>): Prisma__integrante_nrcClient<$Result.GetResult<Prisma.$integrante_nrcPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Integrante_nrc that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {integrante_nrcFindFirstArgs} args - Arguments to find a Integrante_nrc
     * @example
     * // Get one Integrante_nrc
     * const integrante_nrc = await prisma.integrante_nrc.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends integrante_nrcFindFirstArgs>(args?: SelectSubset<T, integrante_nrcFindFirstArgs<ExtArgs>>): Prisma__integrante_nrcClient<$Result.GetResult<Prisma.$integrante_nrcPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Integrante_nrc that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {integrante_nrcFindFirstOrThrowArgs} args - Arguments to find a Integrante_nrc
     * @example
     * // Get one Integrante_nrc
     * const integrante_nrc = await prisma.integrante_nrc.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends integrante_nrcFindFirstOrThrowArgs>(args?: SelectSubset<T, integrante_nrcFindFirstOrThrowArgs<ExtArgs>>): Prisma__integrante_nrcClient<$Result.GetResult<Prisma.$integrante_nrcPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Integrante_nrcs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {integrante_nrcFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Integrante_nrcs
     * const integrante_nrcs = await prisma.integrante_nrc.findMany()
     * 
     * // Get first 10 Integrante_nrcs
     * const integrante_nrcs = await prisma.integrante_nrc.findMany({ take: 10 })
     * 
     * // Only select the `id_integrante`
     * const integrante_nrcWithId_integranteOnly = await prisma.integrante_nrc.findMany({ select: { id_integrante: true } })
     * 
     */
    findMany<T extends integrante_nrcFindManyArgs>(args?: SelectSubset<T, integrante_nrcFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$integrante_nrcPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Integrante_nrc.
     * @param {integrante_nrcCreateArgs} args - Arguments to create a Integrante_nrc.
     * @example
     * // Create one Integrante_nrc
     * const Integrante_nrc = await prisma.integrante_nrc.create({
     *   data: {
     *     // ... data to create a Integrante_nrc
     *   }
     * })
     * 
     */
    create<T extends integrante_nrcCreateArgs>(args: SelectSubset<T, integrante_nrcCreateArgs<ExtArgs>>): Prisma__integrante_nrcClient<$Result.GetResult<Prisma.$integrante_nrcPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Integrante_nrcs.
     * @param {integrante_nrcCreateManyArgs} args - Arguments to create many Integrante_nrcs.
     * @example
     * // Create many Integrante_nrcs
     * const integrante_nrc = await prisma.integrante_nrc.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends integrante_nrcCreateManyArgs>(args?: SelectSubset<T, integrante_nrcCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Integrante_nrcs and returns the data saved in the database.
     * @param {integrante_nrcCreateManyAndReturnArgs} args - Arguments to create many Integrante_nrcs.
     * @example
     * // Create many Integrante_nrcs
     * const integrante_nrc = await prisma.integrante_nrc.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Integrante_nrcs and only return the `id_integrante`
     * const integrante_nrcWithId_integranteOnly = await prisma.integrante_nrc.createManyAndReturn({
     *   select: { id_integrante: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends integrante_nrcCreateManyAndReturnArgs>(args?: SelectSubset<T, integrante_nrcCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$integrante_nrcPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Integrante_nrc.
     * @param {integrante_nrcDeleteArgs} args - Arguments to delete one Integrante_nrc.
     * @example
     * // Delete one Integrante_nrc
     * const Integrante_nrc = await prisma.integrante_nrc.delete({
     *   where: {
     *     // ... filter to delete one Integrante_nrc
     *   }
     * })
     * 
     */
    delete<T extends integrante_nrcDeleteArgs>(args: SelectSubset<T, integrante_nrcDeleteArgs<ExtArgs>>): Prisma__integrante_nrcClient<$Result.GetResult<Prisma.$integrante_nrcPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Integrante_nrc.
     * @param {integrante_nrcUpdateArgs} args - Arguments to update one Integrante_nrc.
     * @example
     * // Update one Integrante_nrc
     * const integrante_nrc = await prisma.integrante_nrc.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends integrante_nrcUpdateArgs>(args: SelectSubset<T, integrante_nrcUpdateArgs<ExtArgs>>): Prisma__integrante_nrcClient<$Result.GetResult<Prisma.$integrante_nrcPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Integrante_nrcs.
     * @param {integrante_nrcDeleteManyArgs} args - Arguments to filter Integrante_nrcs to delete.
     * @example
     * // Delete a few Integrante_nrcs
     * const { count } = await prisma.integrante_nrc.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends integrante_nrcDeleteManyArgs>(args?: SelectSubset<T, integrante_nrcDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Integrante_nrcs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {integrante_nrcUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Integrante_nrcs
     * const integrante_nrc = await prisma.integrante_nrc.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends integrante_nrcUpdateManyArgs>(args: SelectSubset<T, integrante_nrcUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Integrante_nrcs and returns the data updated in the database.
     * @param {integrante_nrcUpdateManyAndReturnArgs} args - Arguments to update many Integrante_nrcs.
     * @example
     * // Update many Integrante_nrcs
     * const integrante_nrc = await prisma.integrante_nrc.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Integrante_nrcs and only return the `id_integrante`
     * const integrante_nrcWithId_integranteOnly = await prisma.integrante_nrc.updateManyAndReturn({
     *   select: { id_integrante: true },
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
    updateManyAndReturn<T extends integrante_nrcUpdateManyAndReturnArgs>(args: SelectSubset<T, integrante_nrcUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$integrante_nrcPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Integrante_nrc.
     * @param {integrante_nrcUpsertArgs} args - Arguments to update or create a Integrante_nrc.
     * @example
     * // Update or create a Integrante_nrc
     * const integrante_nrc = await prisma.integrante_nrc.upsert({
     *   create: {
     *     // ... data to create a Integrante_nrc
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Integrante_nrc we want to update
     *   }
     * })
     */
    upsert<T extends integrante_nrcUpsertArgs>(args: SelectSubset<T, integrante_nrcUpsertArgs<ExtArgs>>): Prisma__integrante_nrcClient<$Result.GetResult<Prisma.$integrante_nrcPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Integrante_nrcs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {integrante_nrcCountArgs} args - Arguments to filter Integrante_nrcs to count.
     * @example
     * // Count the number of Integrante_nrcs
     * const count = await prisma.integrante_nrc.count({
     *   where: {
     *     // ... the filter for the Integrante_nrcs we want to count
     *   }
     * })
    **/
    count<T extends integrante_nrcCountArgs>(
      args?: Subset<T, integrante_nrcCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Integrante_nrcCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Integrante_nrc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Integrante_nrcAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Integrante_nrcAggregateArgs>(args: Subset<T, Integrante_nrcAggregateArgs>): Prisma.PrismaPromise<GetIntegrante_nrcAggregateType<T>>

    /**
     * Group by Integrante_nrc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {integrante_nrcGroupByArgs} args - Group by arguments.
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
      T extends integrante_nrcGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: integrante_nrcGroupByArgs['orderBy'] }
        : { orderBy?: integrante_nrcGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, integrante_nrcGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntegrante_nrcGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the integrante_nrc model
   */
  readonly fields: integrante_nrcFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for integrante_nrc.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__integrante_nrcClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    integrante<T extends integranteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, integranteDefaultArgs<ExtArgs>>): Prisma__integranteClient<$Result.GetResult<Prisma.$integrantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nrc<T extends nrcDefaultArgs<ExtArgs> = {}>(args?: Subset<T, nrcDefaultArgs<ExtArgs>>): Prisma__nrcClient<$Result.GetResult<Prisma.$nrcPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the integrante_nrc model
   */
  interface integrante_nrcFieldRefs {
    readonly id_integrante: FieldRef<"integrante_nrc", 'Int'>
    readonly id_nrc: FieldRef<"integrante_nrc", 'Int'>
    readonly fecha_creacion: FieldRef<"integrante_nrc", 'DateTime'>
    readonly fecha_actualizacion: FieldRef<"integrante_nrc", 'DateTime'>
    readonly estado: FieldRef<"integrante_nrc", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * integrante_nrc findUnique
   */
  export type integrante_nrcFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integrante_nrc
     */
    select?: integrante_nrcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the integrante_nrc
     */
    omit?: integrante_nrcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: integrante_nrcInclude<ExtArgs> | null
    /**
     * Filter, which integrante_nrc to fetch.
     */
    where: integrante_nrcWhereUniqueInput
  }

  /**
   * integrante_nrc findUniqueOrThrow
   */
  export type integrante_nrcFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integrante_nrc
     */
    select?: integrante_nrcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the integrante_nrc
     */
    omit?: integrante_nrcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: integrante_nrcInclude<ExtArgs> | null
    /**
     * Filter, which integrante_nrc to fetch.
     */
    where: integrante_nrcWhereUniqueInput
  }

  /**
   * integrante_nrc findFirst
   */
  export type integrante_nrcFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integrante_nrc
     */
    select?: integrante_nrcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the integrante_nrc
     */
    omit?: integrante_nrcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: integrante_nrcInclude<ExtArgs> | null
    /**
     * Filter, which integrante_nrc to fetch.
     */
    where?: integrante_nrcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of integrante_nrcs to fetch.
     */
    orderBy?: integrante_nrcOrderByWithRelationInput | integrante_nrcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for integrante_nrcs.
     */
    cursor?: integrante_nrcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` integrante_nrcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` integrante_nrcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of integrante_nrcs.
     */
    distinct?: Integrante_nrcScalarFieldEnum | Integrante_nrcScalarFieldEnum[]
  }

  /**
   * integrante_nrc findFirstOrThrow
   */
  export type integrante_nrcFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integrante_nrc
     */
    select?: integrante_nrcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the integrante_nrc
     */
    omit?: integrante_nrcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: integrante_nrcInclude<ExtArgs> | null
    /**
     * Filter, which integrante_nrc to fetch.
     */
    where?: integrante_nrcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of integrante_nrcs to fetch.
     */
    orderBy?: integrante_nrcOrderByWithRelationInput | integrante_nrcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for integrante_nrcs.
     */
    cursor?: integrante_nrcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` integrante_nrcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` integrante_nrcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of integrante_nrcs.
     */
    distinct?: Integrante_nrcScalarFieldEnum | Integrante_nrcScalarFieldEnum[]
  }

  /**
   * integrante_nrc findMany
   */
  export type integrante_nrcFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integrante_nrc
     */
    select?: integrante_nrcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the integrante_nrc
     */
    omit?: integrante_nrcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: integrante_nrcInclude<ExtArgs> | null
    /**
     * Filter, which integrante_nrcs to fetch.
     */
    where?: integrante_nrcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of integrante_nrcs to fetch.
     */
    orderBy?: integrante_nrcOrderByWithRelationInput | integrante_nrcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing integrante_nrcs.
     */
    cursor?: integrante_nrcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` integrante_nrcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` integrante_nrcs.
     */
    skip?: number
    distinct?: Integrante_nrcScalarFieldEnum | Integrante_nrcScalarFieldEnum[]
  }

  /**
   * integrante_nrc create
   */
  export type integrante_nrcCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integrante_nrc
     */
    select?: integrante_nrcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the integrante_nrc
     */
    omit?: integrante_nrcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: integrante_nrcInclude<ExtArgs> | null
    /**
     * The data needed to create a integrante_nrc.
     */
    data: XOR<integrante_nrcCreateInput, integrante_nrcUncheckedCreateInput>
  }

  /**
   * integrante_nrc createMany
   */
  export type integrante_nrcCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many integrante_nrcs.
     */
    data: integrante_nrcCreateManyInput | integrante_nrcCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * integrante_nrc createManyAndReturn
   */
  export type integrante_nrcCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integrante_nrc
     */
    select?: integrante_nrcSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the integrante_nrc
     */
    omit?: integrante_nrcOmit<ExtArgs> | null
    /**
     * The data used to create many integrante_nrcs.
     */
    data: integrante_nrcCreateManyInput | integrante_nrcCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: integrante_nrcIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * integrante_nrc update
   */
  export type integrante_nrcUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integrante_nrc
     */
    select?: integrante_nrcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the integrante_nrc
     */
    omit?: integrante_nrcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: integrante_nrcInclude<ExtArgs> | null
    /**
     * The data needed to update a integrante_nrc.
     */
    data: XOR<integrante_nrcUpdateInput, integrante_nrcUncheckedUpdateInput>
    /**
     * Choose, which integrante_nrc to update.
     */
    where: integrante_nrcWhereUniqueInput
  }

  /**
   * integrante_nrc updateMany
   */
  export type integrante_nrcUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update integrante_nrcs.
     */
    data: XOR<integrante_nrcUpdateManyMutationInput, integrante_nrcUncheckedUpdateManyInput>
    /**
     * Filter which integrante_nrcs to update
     */
    where?: integrante_nrcWhereInput
    /**
     * Limit how many integrante_nrcs to update.
     */
    limit?: number
  }

  /**
   * integrante_nrc updateManyAndReturn
   */
  export type integrante_nrcUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integrante_nrc
     */
    select?: integrante_nrcSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the integrante_nrc
     */
    omit?: integrante_nrcOmit<ExtArgs> | null
    /**
     * The data used to update integrante_nrcs.
     */
    data: XOR<integrante_nrcUpdateManyMutationInput, integrante_nrcUncheckedUpdateManyInput>
    /**
     * Filter which integrante_nrcs to update
     */
    where?: integrante_nrcWhereInput
    /**
     * Limit how many integrante_nrcs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: integrante_nrcIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * integrante_nrc upsert
   */
  export type integrante_nrcUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integrante_nrc
     */
    select?: integrante_nrcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the integrante_nrc
     */
    omit?: integrante_nrcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: integrante_nrcInclude<ExtArgs> | null
    /**
     * The filter to search for the integrante_nrc to update in case it exists.
     */
    where: integrante_nrcWhereUniqueInput
    /**
     * In case the integrante_nrc found by the `where` argument doesn't exist, create a new integrante_nrc with this data.
     */
    create: XOR<integrante_nrcCreateInput, integrante_nrcUncheckedCreateInput>
    /**
     * In case the integrante_nrc was found with the provided `where` argument, update it with this data.
     */
    update: XOR<integrante_nrcUpdateInput, integrante_nrcUncheckedUpdateInput>
  }

  /**
   * integrante_nrc delete
   */
  export type integrante_nrcDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integrante_nrc
     */
    select?: integrante_nrcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the integrante_nrc
     */
    omit?: integrante_nrcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: integrante_nrcInclude<ExtArgs> | null
    /**
     * Filter which integrante_nrc to delete.
     */
    where: integrante_nrcWhereUniqueInput
  }

  /**
   * integrante_nrc deleteMany
   */
  export type integrante_nrcDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which integrante_nrcs to delete
     */
    where?: integrante_nrcWhereInput
    /**
     * Limit how many integrante_nrcs to delete.
     */
    limit?: number
  }

  /**
   * integrante_nrc without action
   */
  export type integrante_nrcDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integrante_nrc
     */
    select?: integrante_nrcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the integrante_nrc
     */
    omit?: integrante_nrcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: integrante_nrcInclude<ExtArgs> | null
  }


  /**
   * Model materia
   */

  export type AggregateMateria = {
    _count: MateriaCountAggregateOutputType | null
    _avg: MateriaAvgAggregateOutputType | null
    _sum: MateriaSumAggregateOutputType | null
    _min: MateriaMinAggregateOutputType | null
    _max: MateriaMaxAggregateOutputType | null
  }

  export type MateriaAvgAggregateOutputType = {
    id_materia: number | null
  }

  export type MateriaSumAggregateOutputType = {
    id_materia: number | null
  }

  export type MateriaMinAggregateOutputType = {
    id_materia: number | null
    nombre: string | null
    codigo: string | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    estado: boolean | null
  }

  export type MateriaMaxAggregateOutputType = {
    id_materia: number | null
    nombre: string | null
    codigo: string | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    estado: boolean | null
  }

  export type MateriaCountAggregateOutputType = {
    id_materia: number
    nombre: number
    codigo: number
    fecha_creacion: number
    fecha_actualizacion: number
    estado: number
    _all: number
  }


  export type MateriaAvgAggregateInputType = {
    id_materia?: true
  }

  export type MateriaSumAggregateInputType = {
    id_materia?: true
  }

  export type MateriaMinAggregateInputType = {
    id_materia?: true
    nombre?: true
    codigo?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
  }

  export type MateriaMaxAggregateInputType = {
    id_materia?: true
    nombre?: true
    codigo?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
  }

  export type MateriaCountAggregateInputType = {
    id_materia?: true
    nombre?: true
    codigo?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
    _all?: true
  }

  export type MateriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which materia to aggregate.
     */
    where?: materiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of materias to fetch.
     */
    orderBy?: materiaOrderByWithRelationInput | materiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: materiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned materias
    **/
    _count?: true | MateriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MateriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MateriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MateriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MateriaMaxAggregateInputType
  }

  export type GetMateriaAggregateType<T extends MateriaAggregateArgs> = {
        [P in keyof T & keyof AggregateMateria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMateria[P]>
      : GetScalarType<T[P], AggregateMateria[P]>
  }




  export type materiaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: materiaWhereInput
    orderBy?: materiaOrderByWithAggregationInput | materiaOrderByWithAggregationInput[]
    by: MateriaScalarFieldEnum[] | MateriaScalarFieldEnum
    having?: materiaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MateriaCountAggregateInputType | true
    _avg?: MateriaAvgAggregateInputType
    _sum?: MateriaSumAggregateInputType
    _min?: MateriaMinAggregateInputType
    _max?: MateriaMaxAggregateInputType
  }

  export type MateriaGroupByOutputType = {
    id_materia: number
    nombre: string
    codigo: string
    fecha_creacion: Date
    fecha_actualizacion: Date | null
    estado: boolean
    _count: MateriaCountAggregateOutputType | null
    _avg: MateriaAvgAggregateOutputType | null
    _sum: MateriaSumAggregateOutputType | null
    _min: MateriaMinAggregateOutputType | null
    _max: MateriaMaxAggregateOutputType | null
  }

  type GetMateriaGroupByPayload<T extends materiaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MateriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MateriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MateriaGroupByOutputType[P]>
            : GetScalarType<T[P], MateriaGroupByOutputType[P]>
        }
      >
    >


  export type materiaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_materia?: boolean
    nombre?: boolean
    codigo?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    nrc?: boolean | materia$nrcArgs<ExtArgs>
    _count?: boolean | MateriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia"]>

  export type materiaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_materia?: boolean
    nombre?: boolean
    codigo?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
  }, ExtArgs["result"]["materia"]>

  export type materiaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_materia?: boolean
    nombre?: boolean
    codigo?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
  }, ExtArgs["result"]["materia"]>

  export type materiaSelectScalar = {
    id_materia?: boolean
    nombre?: boolean
    codigo?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
  }

  export type materiaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_materia" | "nombre" | "codigo" | "fecha_creacion" | "fecha_actualizacion" | "estado", ExtArgs["result"]["materia"]>
  export type materiaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nrc?: boolean | materia$nrcArgs<ExtArgs>
    _count?: boolean | MateriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type materiaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type materiaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $materiaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "materia"
    objects: {
      nrc: Prisma.$nrcPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_materia: number
      nombre: string
      codigo: string
      fecha_creacion: Date
      fecha_actualizacion: Date | null
      estado: boolean
    }, ExtArgs["result"]["materia"]>
    composites: {}
  }

  type materiaGetPayload<S extends boolean | null | undefined | materiaDefaultArgs> = $Result.GetResult<Prisma.$materiaPayload, S>

  type materiaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<materiaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MateriaCountAggregateInputType | true
    }

  export interface materiaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['materia'], meta: { name: 'materia' } }
    /**
     * Find zero or one Materia that matches the filter.
     * @param {materiaFindUniqueArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends materiaFindUniqueArgs>(args: SelectSubset<T, materiaFindUniqueArgs<ExtArgs>>): Prisma__materiaClient<$Result.GetResult<Prisma.$materiaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Materia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {materiaFindUniqueOrThrowArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends materiaFindUniqueOrThrowArgs>(args: SelectSubset<T, materiaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__materiaClient<$Result.GetResult<Prisma.$materiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materiaFindFirstArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends materiaFindFirstArgs>(args?: SelectSubset<T, materiaFindFirstArgs<ExtArgs>>): Prisma__materiaClient<$Result.GetResult<Prisma.$materiaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materiaFindFirstOrThrowArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends materiaFindFirstOrThrowArgs>(args?: SelectSubset<T, materiaFindFirstOrThrowArgs<ExtArgs>>): Prisma__materiaClient<$Result.GetResult<Prisma.$materiaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materiaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materias
     * const materias = await prisma.materia.findMany()
     * 
     * // Get first 10 Materias
     * const materias = await prisma.materia.findMany({ take: 10 })
     * 
     * // Only select the `id_materia`
     * const materiaWithId_materiaOnly = await prisma.materia.findMany({ select: { id_materia: true } })
     * 
     */
    findMany<T extends materiaFindManyArgs>(args?: SelectSubset<T, materiaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$materiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Materia.
     * @param {materiaCreateArgs} args - Arguments to create a Materia.
     * @example
     * // Create one Materia
     * const Materia = await prisma.materia.create({
     *   data: {
     *     // ... data to create a Materia
     *   }
     * })
     * 
     */
    create<T extends materiaCreateArgs>(args: SelectSubset<T, materiaCreateArgs<ExtArgs>>): Prisma__materiaClient<$Result.GetResult<Prisma.$materiaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materias.
     * @param {materiaCreateManyArgs} args - Arguments to create many Materias.
     * @example
     * // Create many Materias
     * const materia = await prisma.materia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends materiaCreateManyArgs>(args?: SelectSubset<T, materiaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materias and returns the data saved in the database.
     * @param {materiaCreateManyAndReturnArgs} args - Arguments to create many Materias.
     * @example
     * // Create many Materias
     * const materia = await prisma.materia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materias and only return the `id_materia`
     * const materiaWithId_materiaOnly = await prisma.materia.createManyAndReturn({
     *   select: { id_materia: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends materiaCreateManyAndReturnArgs>(args?: SelectSubset<T, materiaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$materiaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Materia.
     * @param {materiaDeleteArgs} args - Arguments to delete one Materia.
     * @example
     * // Delete one Materia
     * const Materia = await prisma.materia.delete({
     *   where: {
     *     // ... filter to delete one Materia
     *   }
     * })
     * 
     */
    delete<T extends materiaDeleteArgs>(args: SelectSubset<T, materiaDeleteArgs<ExtArgs>>): Prisma__materiaClient<$Result.GetResult<Prisma.$materiaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Materia.
     * @param {materiaUpdateArgs} args - Arguments to update one Materia.
     * @example
     * // Update one Materia
     * const materia = await prisma.materia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends materiaUpdateArgs>(args: SelectSubset<T, materiaUpdateArgs<ExtArgs>>): Prisma__materiaClient<$Result.GetResult<Prisma.$materiaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materias.
     * @param {materiaDeleteManyArgs} args - Arguments to filter Materias to delete.
     * @example
     * // Delete a few Materias
     * const { count } = await prisma.materia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends materiaDeleteManyArgs>(args?: SelectSubset<T, materiaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materiaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materias
     * const materia = await prisma.materia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends materiaUpdateManyArgs>(args: SelectSubset<T, materiaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materias and returns the data updated in the database.
     * @param {materiaUpdateManyAndReturnArgs} args - Arguments to update many Materias.
     * @example
     * // Update many Materias
     * const materia = await prisma.materia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materias and only return the `id_materia`
     * const materiaWithId_materiaOnly = await prisma.materia.updateManyAndReturn({
     *   select: { id_materia: true },
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
    updateManyAndReturn<T extends materiaUpdateManyAndReturnArgs>(args: SelectSubset<T, materiaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$materiaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Materia.
     * @param {materiaUpsertArgs} args - Arguments to update or create a Materia.
     * @example
     * // Update or create a Materia
     * const materia = await prisma.materia.upsert({
     *   create: {
     *     // ... data to create a Materia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Materia we want to update
     *   }
     * })
     */
    upsert<T extends materiaUpsertArgs>(args: SelectSubset<T, materiaUpsertArgs<ExtArgs>>): Prisma__materiaClient<$Result.GetResult<Prisma.$materiaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materiaCountArgs} args - Arguments to filter Materias to count.
     * @example
     * // Count the number of Materias
     * const count = await prisma.materia.count({
     *   where: {
     *     // ... the filter for the Materias we want to count
     *   }
     * })
    **/
    count<T extends materiaCountArgs>(
      args?: Subset<T, materiaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MateriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Materia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MateriaAggregateArgs>(args: Subset<T, MateriaAggregateArgs>): Prisma.PrismaPromise<GetMateriaAggregateType<T>>

    /**
     * Group by Materia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materiaGroupByArgs} args - Group by arguments.
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
      T extends materiaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: materiaGroupByArgs['orderBy'] }
        : { orderBy?: materiaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, materiaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMateriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the materia model
   */
  readonly fields: materiaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for materia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__materiaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    nrc<T extends materia$nrcArgs<ExtArgs> = {}>(args?: Subset<T, materia$nrcArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nrcPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the materia model
   */
  interface materiaFieldRefs {
    readonly id_materia: FieldRef<"materia", 'Int'>
    readonly nombre: FieldRef<"materia", 'String'>
    readonly codigo: FieldRef<"materia", 'String'>
    readonly fecha_creacion: FieldRef<"materia", 'DateTime'>
    readonly fecha_actualizacion: FieldRef<"materia", 'DateTime'>
    readonly estado: FieldRef<"materia", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * materia findUnique
   */
  export type materiaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materia
     */
    select?: materiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materia
     */
    omit?: materiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materiaInclude<ExtArgs> | null
    /**
     * Filter, which materia to fetch.
     */
    where: materiaWhereUniqueInput
  }

  /**
   * materia findUniqueOrThrow
   */
  export type materiaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materia
     */
    select?: materiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materia
     */
    omit?: materiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materiaInclude<ExtArgs> | null
    /**
     * Filter, which materia to fetch.
     */
    where: materiaWhereUniqueInput
  }

  /**
   * materia findFirst
   */
  export type materiaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materia
     */
    select?: materiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materia
     */
    omit?: materiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materiaInclude<ExtArgs> | null
    /**
     * Filter, which materia to fetch.
     */
    where?: materiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of materias to fetch.
     */
    orderBy?: materiaOrderByWithRelationInput | materiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for materias.
     */
    cursor?: materiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of materias.
     */
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * materia findFirstOrThrow
   */
  export type materiaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materia
     */
    select?: materiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materia
     */
    omit?: materiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materiaInclude<ExtArgs> | null
    /**
     * Filter, which materia to fetch.
     */
    where?: materiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of materias to fetch.
     */
    orderBy?: materiaOrderByWithRelationInput | materiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for materias.
     */
    cursor?: materiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of materias.
     */
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * materia findMany
   */
  export type materiaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materia
     */
    select?: materiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materia
     */
    omit?: materiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materiaInclude<ExtArgs> | null
    /**
     * Filter, which materias to fetch.
     */
    where?: materiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of materias to fetch.
     */
    orderBy?: materiaOrderByWithRelationInput | materiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing materias.
     */
    cursor?: materiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` materias.
     */
    skip?: number
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * materia create
   */
  export type materiaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materia
     */
    select?: materiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materia
     */
    omit?: materiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materiaInclude<ExtArgs> | null
    /**
     * The data needed to create a materia.
     */
    data: XOR<materiaCreateInput, materiaUncheckedCreateInput>
  }

  /**
   * materia createMany
   */
  export type materiaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many materias.
     */
    data: materiaCreateManyInput | materiaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * materia createManyAndReturn
   */
  export type materiaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materia
     */
    select?: materiaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the materia
     */
    omit?: materiaOmit<ExtArgs> | null
    /**
     * The data used to create many materias.
     */
    data: materiaCreateManyInput | materiaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * materia update
   */
  export type materiaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materia
     */
    select?: materiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materia
     */
    omit?: materiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materiaInclude<ExtArgs> | null
    /**
     * The data needed to update a materia.
     */
    data: XOR<materiaUpdateInput, materiaUncheckedUpdateInput>
    /**
     * Choose, which materia to update.
     */
    where: materiaWhereUniqueInput
  }

  /**
   * materia updateMany
   */
  export type materiaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update materias.
     */
    data: XOR<materiaUpdateManyMutationInput, materiaUncheckedUpdateManyInput>
    /**
     * Filter which materias to update
     */
    where?: materiaWhereInput
    /**
     * Limit how many materias to update.
     */
    limit?: number
  }

  /**
   * materia updateManyAndReturn
   */
  export type materiaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materia
     */
    select?: materiaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the materia
     */
    omit?: materiaOmit<ExtArgs> | null
    /**
     * The data used to update materias.
     */
    data: XOR<materiaUpdateManyMutationInput, materiaUncheckedUpdateManyInput>
    /**
     * Filter which materias to update
     */
    where?: materiaWhereInput
    /**
     * Limit how many materias to update.
     */
    limit?: number
  }

  /**
   * materia upsert
   */
  export type materiaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materia
     */
    select?: materiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materia
     */
    omit?: materiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materiaInclude<ExtArgs> | null
    /**
     * The filter to search for the materia to update in case it exists.
     */
    where: materiaWhereUniqueInput
    /**
     * In case the materia found by the `where` argument doesn't exist, create a new materia with this data.
     */
    create: XOR<materiaCreateInput, materiaUncheckedCreateInput>
    /**
     * In case the materia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<materiaUpdateInput, materiaUncheckedUpdateInput>
  }

  /**
   * materia delete
   */
  export type materiaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materia
     */
    select?: materiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materia
     */
    omit?: materiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materiaInclude<ExtArgs> | null
    /**
     * Filter which materia to delete.
     */
    where: materiaWhereUniqueInput
  }

  /**
   * materia deleteMany
   */
  export type materiaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which materias to delete
     */
    where?: materiaWhereInput
    /**
     * Limit how many materias to delete.
     */
    limit?: number
  }

  /**
   * materia.nrc
   */
  export type materia$nrcArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nrc
     */
    select?: nrcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nrc
     */
    omit?: nrcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nrcInclude<ExtArgs> | null
    where?: nrcWhereInput
    orderBy?: nrcOrderByWithRelationInput | nrcOrderByWithRelationInput[]
    cursor?: nrcWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NrcScalarFieldEnum | NrcScalarFieldEnum[]
  }

  /**
   * materia without action
   */
  export type materiaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materia
     */
    select?: materiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materia
     */
    omit?: materiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materiaInclude<ExtArgs> | null
  }


  /**
   * Model nrc
   */

  export type AggregateNrc = {
    _count: NrcCountAggregateOutputType | null
    _avg: NrcAvgAggregateOutputType | null
    _sum: NrcSumAggregateOutputType | null
    _min: NrcMinAggregateOutputType | null
    _max: NrcMaxAggregateOutputType | null
  }

  export type NrcAvgAggregateOutputType = {
    id_nrc: number | null
    id_materia: number | null
    id_usuario: number | null
  }

  export type NrcSumAggregateOutputType = {
    id_nrc: number | null
    id_materia: number | null
    id_usuario: number | null
  }

  export type NrcMinAggregateOutputType = {
    id_nrc: number | null
    id_materia: number | null
    codigo: string | null
    activo: boolean | null
    id_usuario: number | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    estado: boolean | null
  }

  export type NrcMaxAggregateOutputType = {
    id_nrc: number | null
    id_materia: number | null
    codigo: string | null
    activo: boolean | null
    id_usuario: number | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    estado: boolean | null
  }

  export type NrcCountAggregateOutputType = {
    id_nrc: number
    id_materia: number
    codigo: number
    activo: number
    id_usuario: number
    fecha_creacion: number
    fecha_actualizacion: number
    estado: number
    _all: number
  }


  export type NrcAvgAggregateInputType = {
    id_nrc?: true
    id_materia?: true
    id_usuario?: true
  }

  export type NrcSumAggregateInputType = {
    id_nrc?: true
    id_materia?: true
    id_usuario?: true
  }

  export type NrcMinAggregateInputType = {
    id_nrc?: true
    id_materia?: true
    codigo?: true
    activo?: true
    id_usuario?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
  }

  export type NrcMaxAggregateInputType = {
    id_nrc?: true
    id_materia?: true
    codigo?: true
    activo?: true
    id_usuario?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
  }

  export type NrcCountAggregateInputType = {
    id_nrc?: true
    id_materia?: true
    codigo?: true
    activo?: true
    id_usuario?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
    _all?: true
  }

  export type NrcAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nrc to aggregate.
     */
    where?: nrcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nrcs to fetch.
     */
    orderBy?: nrcOrderByWithRelationInput | nrcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: nrcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nrcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nrcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned nrcs
    **/
    _count?: true | NrcCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NrcAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NrcSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NrcMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NrcMaxAggregateInputType
  }

  export type GetNrcAggregateType<T extends NrcAggregateArgs> = {
        [P in keyof T & keyof AggregateNrc]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNrc[P]>
      : GetScalarType<T[P], AggregateNrc[P]>
  }




  export type nrcGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nrcWhereInput
    orderBy?: nrcOrderByWithAggregationInput | nrcOrderByWithAggregationInput[]
    by: NrcScalarFieldEnum[] | NrcScalarFieldEnum
    having?: nrcScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NrcCountAggregateInputType | true
    _avg?: NrcAvgAggregateInputType
    _sum?: NrcSumAggregateInputType
    _min?: NrcMinAggregateInputType
    _max?: NrcMaxAggregateInputType
  }

  export type NrcGroupByOutputType = {
    id_nrc: number
    id_materia: number
    codigo: string
    activo: boolean
    id_usuario: number
    fecha_creacion: Date
    fecha_actualizacion: Date | null
    estado: boolean
    _count: NrcCountAggregateOutputType | null
    _avg: NrcAvgAggregateOutputType | null
    _sum: NrcSumAggregateOutputType | null
    _min: NrcMinAggregateOutputType | null
    _max: NrcMaxAggregateOutputType | null
  }

  type GetNrcGroupByPayload<T extends nrcGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NrcGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NrcGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NrcGroupByOutputType[P]>
            : GetScalarType<T[P], NrcGroupByOutputType[P]>
        }
      >
    >


  export type nrcSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_nrc?: boolean
    id_materia?: boolean
    codigo?: boolean
    activo?: boolean
    id_usuario?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    integrante_nrc?: boolean | nrc$integrante_nrcArgs<ExtArgs>
    materia?: boolean | materiaDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    _count?: boolean | NrcCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nrc"]>

  export type nrcSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_nrc?: boolean
    id_materia?: boolean
    codigo?: boolean
    activo?: boolean
    id_usuario?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    materia?: boolean | materiaDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nrc"]>

  export type nrcSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_nrc?: boolean
    id_materia?: boolean
    codigo?: boolean
    activo?: boolean
    id_usuario?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    materia?: boolean | materiaDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nrc"]>

  export type nrcSelectScalar = {
    id_nrc?: boolean
    id_materia?: boolean
    codigo?: boolean
    activo?: boolean
    id_usuario?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
  }

  export type nrcOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_nrc" | "id_materia" | "codigo" | "activo" | "id_usuario" | "fecha_creacion" | "fecha_actualizacion" | "estado", ExtArgs["result"]["nrc"]>
  export type nrcInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    integrante_nrc?: boolean | nrc$integrante_nrcArgs<ExtArgs>
    materia?: boolean | materiaDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    _count?: boolean | NrcCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type nrcIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materia?: boolean | materiaDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }
  export type nrcIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materia?: boolean | materiaDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }

  export type $nrcPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "nrc"
    objects: {
      integrante_nrc: Prisma.$integrante_nrcPayload<ExtArgs>[]
      materia: Prisma.$materiaPayload<ExtArgs>
      usuario: Prisma.$usuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_nrc: number
      id_materia: number
      codigo: string
      activo: boolean
      id_usuario: number
      fecha_creacion: Date
      fecha_actualizacion: Date | null
      estado: boolean
    }, ExtArgs["result"]["nrc"]>
    composites: {}
  }

  type nrcGetPayload<S extends boolean | null | undefined | nrcDefaultArgs> = $Result.GetResult<Prisma.$nrcPayload, S>

  type nrcCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<nrcFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NrcCountAggregateInputType | true
    }

  export interface nrcDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['nrc'], meta: { name: 'nrc' } }
    /**
     * Find zero or one Nrc that matches the filter.
     * @param {nrcFindUniqueArgs} args - Arguments to find a Nrc
     * @example
     * // Get one Nrc
     * const nrc = await prisma.nrc.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends nrcFindUniqueArgs>(args: SelectSubset<T, nrcFindUniqueArgs<ExtArgs>>): Prisma__nrcClient<$Result.GetResult<Prisma.$nrcPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Nrc that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {nrcFindUniqueOrThrowArgs} args - Arguments to find a Nrc
     * @example
     * // Get one Nrc
     * const nrc = await prisma.nrc.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends nrcFindUniqueOrThrowArgs>(args: SelectSubset<T, nrcFindUniqueOrThrowArgs<ExtArgs>>): Prisma__nrcClient<$Result.GetResult<Prisma.$nrcPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nrc that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nrcFindFirstArgs} args - Arguments to find a Nrc
     * @example
     * // Get one Nrc
     * const nrc = await prisma.nrc.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends nrcFindFirstArgs>(args?: SelectSubset<T, nrcFindFirstArgs<ExtArgs>>): Prisma__nrcClient<$Result.GetResult<Prisma.$nrcPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nrc that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nrcFindFirstOrThrowArgs} args - Arguments to find a Nrc
     * @example
     * // Get one Nrc
     * const nrc = await prisma.nrc.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends nrcFindFirstOrThrowArgs>(args?: SelectSubset<T, nrcFindFirstOrThrowArgs<ExtArgs>>): Prisma__nrcClient<$Result.GetResult<Prisma.$nrcPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nrcs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nrcFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nrcs
     * const nrcs = await prisma.nrc.findMany()
     * 
     * // Get first 10 Nrcs
     * const nrcs = await prisma.nrc.findMany({ take: 10 })
     * 
     * // Only select the `id_nrc`
     * const nrcWithId_nrcOnly = await prisma.nrc.findMany({ select: { id_nrc: true } })
     * 
     */
    findMany<T extends nrcFindManyArgs>(args?: SelectSubset<T, nrcFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nrcPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Nrc.
     * @param {nrcCreateArgs} args - Arguments to create a Nrc.
     * @example
     * // Create one Nrc
     * const Nrc = await prisma.nrc.create({
     *   data: {
     *     // ... data to create a Nrc
     *   }
     * })
     * 
     */
    create<T extends nrcCreateArgs>(args: SelectSubset<T, nrcCreateArgs<ExtArgs>>): Prisma__nrcClient<$Result.GetResult<Prisma.$nrcPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nrcs.
     * @param {nrcCreateManyArgs} args - Arguments to create many Nrcs.
     * @example
     * // Create many Nrcs
     * const nrc = await prisma.nrc.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends nrcCreateManyArgs>(args?: SelectSubset<T, nrcCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nrcs and returns the data saved in the database.
     * @param {nrcCreateManyAndReturnArgs} args - Arguments to create many Nrcs.
     * @example
     * // Create many Nrcs
     * const nrc = await prisma.nrc.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nrcs and only return the `id_nrc`
     * const nrcWithId_nrcOnly = await prisma.nrc.createManyAndReturn({
     *   select: { id_nrc: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends nrcCreateManyAndReturnArgs>(args?: SelectSubset<T, nrcCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nrcPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Nrc.
     * @param {nrcDeleteArgs} args - Arguments to delete one Nrc.
     * @example
     * // Delete one Nrc
     * const Nrc = await prisma.nrc.delete({
     *   where: {
     *     // ... filter to delete one Nrc
     *   }
     * })
     * 
     */
    delete<T extends nrcDeleteArgs>(args: SelectSubset<T, nrcDeleteArgs<ExtArgs>>): Prisma__nrcClient<$Result.GetResult<Prisma.$nrcPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Nrc.
     * @param {nrcUpdateArgs} args - Arguments to update one Nrc.
     * @example
     * // Update one Nrc
     * const nrc = await prisma.nrc.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends nrcUpdateArgs>(args: SelectSubset<T, nrcUpdateArgs<ExtArgs>>): Prisma__nrcClient<$Result.GetResult<Prisma.$nrcPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nrcs.
     * @param {nrcDeleteManyArgs} args - Arguments to filter Nrcs to delete.
     * @example
     * // Delete a few Nrcs
     * const { count } = await prisma.nrc.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends nrcDeleteManyArgs>(args?: SelectSubset<T, nrcDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nrcs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nrcUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nrcs
     * const nrc = await prisma.nrc.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends nrcUpdateManyArgs>(args: SelectSubset<T, nrcUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nrcs and returns the data updated in the database.
     * @param {nrcUpdateManyAndReturnArgs} args - Arguments to update many Nrcs.
     * @example
     * // Update many Nrcs
     * const nrc = await prisma.nrc.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nrcs and only return the `id_nrc`
     * const nrcWithId_nrcOnly = await prisma.nrc.updateManyAndReturn({
     *   select: { id_nrc: true },
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
    updateManyAndReturn<T extends nrcUpdateManyAndReturnArgs>(args: SelectSubset<T, nrcUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nrcPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Nrc.
     * @param {nrcUpsertArgs} args - Arguments to update or create a Nrc.
     * @example
     * // Update or create a Nrc
     * const nrc = await prisma.nrc.upsert({
     *   create: {
     *     // ... data to create a Nrc
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nrc we want to update
     *   }
     * })
     */
    upsert<T extends nrcUpsertArgs>(args: SelectSubset<T, nrcUpsertArgs<ExtArgs>>): Prisma__nrcClient<$Result.GetResult<Prisma.$nrcPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nrcs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nrcCountArgs} args - Arguments to filter Nrcs to count.
     * @example
     * // Count the number of Nrcs
     * const count = await prisma.nrc.count({
     *   where: {
     *     // ... the filter for the Nrcs we want to count
     *   }
     * })
    **/
    count<T extends nrcCountArgs>(
      args?: Subset<T, nrcCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NrcCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nrc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NrcAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NrcAggregateArgs>(args: Subset<T, NrcAggregateArgs>): Prisma.PrismaPromise<GetNrcAggregateType<T>>

    /**
     * Group by Nrc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nrcGroupByArgs} args - Group by arguments.
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
      T extends nrcGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: nrcGroupByArgs['orderBy'] }
        : { orderBy?: nrcGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, nrcGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNrcGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the nrc model
   */
  readonly fields: nrcFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for nrc.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__nrcClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    integrante_nrc<T extends nrc$integrante_nrcArgs<ExtArgs> = {}>(args?: Subset<T, nrc$integrante_nrcArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$integrante_nrcPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    materia<T extends materiaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, materiaDefaultArgs<ExtArgs>>): Prisma__materiaClient<$Result.GetResult<Prisma.$materiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the nrc model
   */
  interface nrcFieldRefs {
    readonly id_nrc: FieldRef<"nrc", 'Int'>
    readonly id_materia: FieldRef<"nrc", 'Int'>
    readonly codigo: FieldRef<"nrc", 'String'>
    readonly activo: FieldRef<"nrc", 'Boolean'>
    readonly id_usuario: FieldRef<"nrc", 'Int'>
    readonly fecha_creacion: FieldRef<"nrc", 'DateTime'>
    readonly fecha_actualizacion: FieldRef<"nrc", 'DateTime'>
    readonly estado: FieldRef<"nrc", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * nrc findUnique
   */
  export type nrcFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nrc
     */
    select?: nrcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nrc
     */
    omit?: nrcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nrcInclude<ExtArgs> | null
    /**
     * Filter, which nrc to fetch.
     */
    where: nrcWhereUniqueInput
  }

  /**
   * nrc findUniqueOrThrow
   */
  export type nrcFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nrc
     */
    select?: nrcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nrc
     */
    omit?: nrcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nrcInclude<ExtArgs> | null
    /**
     * Filter, which nrc to fetch.
     */
    where: nrcWhereUniqueInput
  }

  /**
   * nrc findFirst
   */
  export type nrcFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nrc
     */
    select?: nrcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nrc
     */
    omit?: nrcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nrcInclude<ExtArgs> | null
    /**
     * Filter, which nrc to fetch.
     */
    where?: nrcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nrcs to fetch.
     */
    orderBy?: nrcOrderByWithRelationInput | nrcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nrcs.
     */
    cursor?: nrcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nrcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nrcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nrcs.
     */
    distinct?: NrcScalarFieldEnum | NrcScalarFieldEnum[]
  }

  /**
   * nrc findFirstOrThrow
   */
  export type nrcFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nrc
     */
    select?: nrcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nrc
     */
    omit?: nrcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nrcInclude<ExtArgs> | null
    /**
     * Filter, which nrc to fetch.
     */
    where?: nrcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nrcs to fetch.
     */
    orderBy?: nrcOrderByWithRelationInput | nrcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nrcs.
     */
    cursor?: nrcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nrcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nrcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nrcs.
     */
    distinct?: NrcScalarFieldEnum | NrcScalarFieldEnum[]
  }

  /**
   * nrc findMany
   */
  export type nrcFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nrc
     */
    select?: nrcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nrc
     */
    omit?: nrcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nrcInclude<ExtArgs> | null
    /**
     * Filter, which nrcs to fetch.
     */
    where?: nrcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nrcs to fetch.
     */
    orderBy?: nrcOrderByWithRelationInput | nrcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing nrcs.
     */
    cursor?: nrcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nrcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nrcs.
     */
    skip?: number
    distinct?: NrcScalarFieldEnum | NrcScalarFieldEnum[]
  }

  /**
   * nrc create
   */
  export type nrcCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nrc
     */
    select?: nrcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nrc
     */
    omit?: nrcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nrcInclude<ExtArgs> | null
    /**
     * The data needed to create a nrc.
     */
    data: XOR<nrcCreateInput, nrcUncheckedCreateInput>
  }

  /**
   * nrc createMany
   */
  export type nrcCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many nrcs.
     */
    data: nrcCreateManyInput | nrcCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * nrc createManyAndReturn
   */
  export type nrcCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nrc
     */
    select?: nrcSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the nrc
     */
    omit?: nrcOmit<ExtArgs> | null
    /**
     * The data used to create many nrcs.
     */
    data: nrcCreateManyInput | nrcCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nrcIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * nrc update
   */
  export type nrcUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nrc
     */
    select?: nrcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nrc
     */
    omit?: nrcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nrcInclude<ExtArgs> | null
    /**
     * The data needed to update a nrc.
     */
    data: XOR<nrcUpdateInput, nrcUncheckedUpdateInput>
    /**
     * Choose, which nrc to update.
     */
    where: nrcWhereUniqueInput
  }

  /**
   * nrc updateMany
   */
  export type nrcUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update nrcs.
     */
    data: XOR<nrcUpdateManyMutationInput, nrcUncheckedUpdateManyInput>
    /**
     * Filter which nrcs to update
     */
    where?: nrcWhereInput
    /**
     * Limit how many nrcs to update.
     */
    limit?: number
  }

  /**
   * nrc updateManyAndReturn
   */
  export type nrcUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nrc
     */
    select?: nrcSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the nrc
     */
    omit?: nrcOmit<ExtArgs> | null
    /**
     * The data used to update nrcs.
     */
    data: XOR<nrcUpdateManyMutationInput, nrcUncheckedUpdateManyInput>
    /**
     * Filter which nrcs to update
     */
    where?: nrcWhereInput
    /**
     * Limit how many nrcs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nrcIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * nrc upsert
   */
  export type nrcUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nrc
     */
    select?: nrcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nrc
     */
    omit?: nrcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nrcInclude<ExtArgs> | null
    /**
     * The filter to search for the nrc to update in case it exists.
     */
    where: nrcWhereUniqueInput
    /**
     * In case the nrc found by the `where` argument doesn't exist, create a new nrc with this data.
     */
    create: XOR<nrcCreateInput, nrcUncheckedCreateInput>
    /**
     * In case the nrc was found with the provided `where` argument, update it with this data.
     */
    update: XOR<nrcUpdateInput, nrcUncheckedUpdateInput>
  }

  /**
   * nrc delete
   */
  export type nrcDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nrc
     */
    select?: nrcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nrc
     */
    omit?: nrcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nrcInclude<ExtArgs> | null
    /**
     * Filter which nrc to delete.
     */
    where: nrcWhereUniqueInput
  }

  /**
   * nrc deleteMany
   */
  export type nrcDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nrcs to delete
     */
    where?: nrcWhereInput
    /**
     * Limit how many nrcs to delete.
     */
    limit?: number
  }

  /**
   * nrc.integrante_nrc
   */
  export type nrc$integrante_nrcArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integrante_nrc
     */
    select?: integrante_nrcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the integrante_nrc
     */
    omit?: integrante_nrcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: integrante_nrcInclude<ExtArgs> | null
    where?: integrante_nrcWhereInput
    orderBy?: integrante_nrcOrderByWithRelationInput | integrante_nrcOrderByWithRelationInput[]
    cursor?: integrante_nrcWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Integrante_nrcScalarFieldEnum | Integrante_nrcScalarFieldEnum[]
  }

  /**
   * nrc without action
   */
  export type nrcDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nrc
     */
    select?: nrcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nrc
     */
    omit?: nrcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nrcInclude<ExtArgs> | null
  }


  /**
   * Model rol
   */

  export type AggregateRol = {
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  export type RolAvgAggregateOutputType = {
    id_rol: number | null
  }

  export type RolSumAggregateOutputType = {
    id_rol: number | null
  }

  export type RolMinAggregateOutputType = {
    id_rol: number | null
    rol: string | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    estado: boolean | null
  }

  export type RolMaxAggregateOutputType = {
    id_rol: number | null
    rol: string | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    estado: boolean | null
  }

  export type RolCountAggregateOutputType = {
    id_rol: number
    rol: number
    fecha_creacion: number
    fecha_actualizacion: number
    estado: number
    _all: number
  }


  export type RolAvgAggregateInputType = {
    id_rol?: true
  }

  export type RolSumAggregateInputType = {
    id_rol?: true
  }

  export type RolMinAggregateInputType = {
    id_rol?: true
    rol?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
  }

  export type RolMaxAggregateInputType = {
    id_rol?: true
    rol?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
  }

  export type RolCountAggregateInputType = {
    id_rol?: true
    rol?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
    _all?: true
  }

  export type RolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rol to aggregate.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rols
    **/
    _count?: true | RolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolMaxAggregateInputType
  }

  export type GetRolAggregateType<T extends RolAggregateArgs> = {
        [P in keyof T & keyof AggregateRol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRol[P]>
      : GetScalarType<T[P], AggregateRol[P]>
  }




  export type rolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolWhereInput
    orderBy?: rolOrderByWithAggregationInput | rolOrderByWithAggregationInput[]
    by: RolScalarFieldEnum[] | RolScalarFieldEnum
    having?: rolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolCountAggregateInputType | true
    _avg?: RolAvgAggregateInputType
    _sum?: RolSumAggregateInputType
    _min?: RolMinAggregateInputType
    _max?: RolMaxAggregateInputType
  }

  export type RolGroupByOutputType = {
    id_rol: number
    rol: string
    fecha_creacion: Date
    fecha_actualizacion: Date | null
    estado: boolean
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  type GetRolGroupByPayload<T extends rolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolGroupByOutputType[P]>
            : GetScalarType<T[P], RolGroupByOutputType[P]>
        }
      >
    >


  export type rolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rol?: boolean
    rol?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    rol_servicio?: boolean | rol$rol_servicioArgs<ExtArgs>
    usuario_rol?: boolean | rol$usuario_rolArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rol"]>

  export type rolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rol?: boolean
    rol?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
  }, ExtArgs["result"]["rol"]>

  export type rolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rol?: boolean
    rol?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
  }, ExtArgs["result"]["rol"]>

  export type rolSelectScalar = {
    id_rol?: boolean
    rol?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
  }

  export type rolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_rol" | "rol" | "fecha_creacion" | "fecha_actualizacion" | "estado", ExtArgs["result"]["rol"]>
  export type rolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol_servicio?: boolean | rol$rol_servicioArgs<ExtArgs>
    usuario_rol?: boolean | rol$usuario_rolArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type rolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type rolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $rolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rol"
    objects: {
      rol_servicio: Prisma.$rol_servicioPayload<ExtArgs>[]
      usuario_rol: Prisma.$usuario_rolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_rol: number
      rol: string
      fecha_creacion: Date
      fecha_actualizacion: Date | null
      estado: boolean
    }, ExtArgs["result"]["rol"]>
    composites: {}
  }

  type rolGetPayload<S extends boolean | null | undefined | rolDefaultArgs> = $Result.GetResult<Prisma.$rolPayload, S>

  type rolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolCountAggregateInputType | true
    }

  export interface rolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rol'], meta: { name: 'rol' } }
    /**
     * Find zero or one Rol that matches the filter.
     * @param {rolFindUniqueArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rolFindUniqueArgs>(args: SelectSubset<T, rolFindUniqueArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rolFindUniqueOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rolFindUniqueOrThrowArgs>(args: SelectSubset<T, rolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolFindFirstArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rolFindFirstArgs>(args?: SelectSubset<T, rolFindFirstArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolFindFirstOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rolFindFirstOrThrowArgs>(args?: SelectSubset<T, rolFindFirstOrThrowArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rols
     * const rols = await prisma.rol.findMany()
     * 
     * // Get first 10 Rols
     * const rols = await prisma.rol.findMany({ take: 10 })
     * 
     * // Only select the `id_rol`
     * const rolWithId_rolOnly = await prisma.rol.findMany({ select: { id_rol: true } })
     * 
     */
    findMany<T extends rolFindManyArgs>(args?: SelectSubset<T, rolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rol.
     * @param {rolCreateArgs} args - Arguments to create a Rol.
     * @example
     * // Create one Rol
     * const Rol = await prisma.rol.create({
     *   data: {
     *     // ... data to create a Rol
     *   }
     * })
     * 
     */
    create<T extends rolCreateArgs>(args: SelectSubset<T, rolCreateArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rols.
     * @param {rolCreateManyArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rolCreateManyArgs>(args?: SelectSubset<T, rolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rols and returns the data saved in the database.
     * @param {rolCreateManyAndReturnArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rols and only return the `id_rol`
     * const rolWithId_rolOnly = await prisma.rol.createManyAndReturn({
     *   select: { id_rol: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rolCreateManyAndReturnArgs>(args?: SelectSubset<T, rolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rol.
     * @param {rolDeleteArgs} args - Arguments to delete one Rol.
     * @example
     * // Delete one Rol
     * const Rol = await prisma.rol.delete({
     *   where: {
     *     // ... filter to delete one Rol
     *   }
     * })
     * 
     */
    delete<T extends rolDeleteArgs>(args: SelectSubset<T, rolDeleteArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rol.
     * @param {rolUpdateArgs} args - Arguments to update one Rol.
     * @example
     * // Update one Rol
     * const rol = await prisma.rol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rolUpdateArgs>(args: SelectSubset<T, rolUpdateArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rols.
     * @param {rolDeleteManyArgs} args - Arguments to filter Rols to delete.
     * @example
     * // Delete a few Rols
     * const { count } = await prisma.rol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rolDeleteManyArgs>(args?: SelectSubset<T, rolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rolUpdateManyArgs>(args: SelectSubset<T, rolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols and returns the data updated in the database.
     * @param {rolUpdateManyAndReturnArgs} args - Arguments to update many Rols.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rols and only return the `id_rol`
     * const rolWithId_rolOnly = await prisma.rol.updateManyAndReturn({
     *   select: { id_rol: true },
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
    updateManyAndReturn<T extends rolUpdateManyAndReturnArgs>(args: SelectSubset<T, rolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rol.
     * @param {rolUpsertArgs} args - Arguments to update or create a Rol.
     * @example
     * // Update or create a Rol
     * const rol = await prisma.rol.upsert({
     *   create: {
     *     // ... data to create a Rol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rol we want to update
     *   }
     * })
     */
    upsert<T extends rolUpsertArgs>(args: SelectSubset<T, rolUpsertArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolCountArgs} args - Arguments to filter Rols to count.
     * @example
     * // Count the number of Rols
     * const count = await prisma.rol.count({
     *   where: {
     *     // ... the filter for the Rols we want to count
     *   }
     * })
    **/
    count<T extends rolCountArgs>(
      args?: Subset<T, rolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolAggregateArgs>(args: Subset<T, RolAggregateArgs>): Prisma.PrismaPromise<GetRolAggregateType<T>>

    /**
     * Group by Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolGroupByArgs} args - Group by arguments.
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
      T extends rolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolGroupByArgs['orderBy'] }
        : { orderBy?: rolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rol model
   */
  readonly fields: rolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rol_servicio<T extends rol$rol_servicioArgs<ExtArgs> = {}>(args?: Subset<T, rol$rol_servicioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rol_servicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario_rol<T extends rol$usuario_rolArgs<ExtArgs> = {}>(args?: Subset<T, rol$usuario_rolArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the rol model
   */
  interface rolFieldRefs {
    readonly id_rol: FieldRef<"rol", 'Int'>
    readonly rol: FieldRef<"rol", 'String'>
    readonly fecha_creacion: FieldRef<"rol", 'DateTime'>
    readonly fecha_actualizacion: FieldRef<"rol", 'DateTime'>
    readonly estado: FieldRef<"rol", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * rol findUnique
   */
  export type rolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol findUniqueOrThrow
   */
  export type rolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol findFirst
   */
  export type rolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rols.
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * rol findFirstOrThrow
   */
  export type rolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rols.
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * rol findMany
   */
  export type rolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter, which rols to fetch.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rols.
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * rol create
   */
  export type rolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * The data needed to create a rol.
     */
    data: XOR<rolCreateInput, rolUncheckedCreateInput>
  }

  /**
   * rol createMany
   */
  export type rolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rols.
     */
    data: rolCreateManyInput | rolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rol createManyAndReturn
   */
  export type rolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * The data used to create many rols.
     */
    data: rolCreateManyInput | rolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rol update
   */
  export type rolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * The data needed to update a rol.
     */
    data: XOR<rolUpdateInput, rolUncheckedUpdateInput>
    /**
     * Choose, which rol to update.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol updateMany
   */
  export type rolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rols.
     */
    data: XOR<rolUpdateManyMutationInput, rolUncheckedUpdateManyInput>
    /**
     * Filter which rols to update
     */
    where?: rolWhereInput
    /**
     * Limit how many rols to update.
     */
    limit?: number
  }

  /**
   * rol updateManyAndReturn
   */
  export type rolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * The data used to update rols.
     */
    data: XOR<rolUpdateManyMutationInput, rolUncheckedUpdateManyInput>
    /**
     * Filter which rols to update
     */
    where?: rolWhereInput
    /**
     * Limit how many rols to update.
     */
    limit?: number
  }

  /**
   * rol upsert
   */
  export type rolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * The filter to search for the rol to update in case it exists.
     */
    where: rolWhereUniqueInput
    /**
     * In case the rol found by the `where` argument doesn't exist, create a new rol with this data.
     */
    create: XOR<rolCreateInput, rolUncheckedCreateInput>
    /**
     * In case the rol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolUpdateInput, rolUncheckedUpdateInput>
  }

  /**
   * rol delete
   */
  export type rolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter which rol to delete.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol deleteMany
   */
  export type rolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rols to delete
     */
    where?: rolWhereInput
    /**
     * Limit how many rols to delete.
     */
    limit?: number
  }

  /**
   * rol.rol_servicio
   */
  export type rol$rol_servicioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol_servicio
     */
    select?: rol_servicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol_servicio
     */
    omit?: rol_servicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rol_servicioInclude<ExtArgs> | null
    where?: rol_servicioWhereInput
    orderBy?: rol_servicioOrderByWithRelationInput | rol_servicioOrderByWithRelationInput[]
    cursor?: rol_servicioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rol_servicioScalarFieldEnum | Rol_servicioScalarFieldEnum[]
  }

  /**
   * rol.usuario_rol
   */
  export type rol$usuario_rolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    where?: usuario_rolWhereInput
    orderBy?: usuario_rolOrderByWithRelationInput | usuario_rolOrderByWithRelationInput[]
    cursor?: usuario_rolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Usuario_rolScalarFieldEnum | Usuario_rolScalarFieldEnum[]
  }

  /**
   * rol without action
   */
  export type rolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
  }


  /**
   * Model servicio
   */

  export type AggregateServicio = {
    _count: ServicioCountAggregateOutputType | null
    _avg: ServicioAvgAggregateOutputType | null
    _sum: ServicioSumAggregateOutputType | null
    _min: ServicioMinAggregateOutputType | null
    _max: ServicioMaxAggregateOutputType | null
  }

  export type ServicioAvgAggregateOutputType = {
    id_servicio: number | null
  }

  export type ServicioSumAggregateOutputType = {
    id_servicio: number | null
  }

  export type ServicioMinAggregateOutputType = {
    id_servicio: number | null
    nombre: string | null
    descripcion: string | null
    url: string | null
    metodo: string | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    estado: boolean | null
  }

  export type ServicioMaxAggregateOutputType = {
    id_servicio: number | null
    nombre: string | null
    descripcion: string | null
    url: string | null
    metodo: string | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    estado: boolean | null
  }

  export type ServicioCountAggregateOutputType = {
    id_servicio: number
    nombre: number
    descripcion: number
    url: number
    metodo: number
    fecha_creacion: number
    fecha_actualizacion: number
    estado: number
    _all: number
  }


  export type ServicioAvgAggregateInputType = {
    id_servicio?: true
  }

  export type ServicioSumAggregateInputType = {
    id_servicio?: true
  }

  export type ServicioMinAggregateInputType = {
    id_servicio?: true
    nombre?: true
    descripcion?: true
    url?: true
    metodo?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
  }

  export type ServicioMaxAggregateInputType = {
    id_servicio?: true
    nombre?: true
    descripcion?: true
    url?: true
    metodo?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
  }

  export type ServicioCountAggregateInputType = {
    id_servicio?: true
    nombre?: true
    descripcion?: true
    url?: true
    metodo?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
    _all?: true
  }

  export type ServicioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servicio to aggregate.
     */
    where?: servicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicios to fetch.
     */
    orderBy?: servicioOrderByWithRelationInput | servicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: servicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned servicios
    **/
    _count?: true | ServicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicioMaxAggregateInputType
  }

  export type GetServicioAggregateType<T extends ServicioAggregateArgs> = {
        [P in keyof T & keyof AggregateServicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicio[P]>
      : GetScalarType<T[P], AggregateServicio[P]>
  }




  export type servicioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: servicioWhereInput
    orderBy?: servicioOrderByWithAggregationInput | servicioOrderByWithAggregationInput[]
    by: ServicioScalarFieldEnum[] | ServicioScalarFieldEnum
    having?: servicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicioCountAggregateInputType | true
    _avg?: ServicioAvgAggregateInputType
    _sum?: ServicioSumAggregateInputType
    _min?: ServicioMinAggregateInputType
    _max?: ServicioMaxAggregateInputType
  }

  export type ServicioGroupByOutputType = {
    id_servicio: number
    nombre: string
    descripcion: string
    url: string
    metodo: string
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    estado: boolean
    _count: ServicioCountAggregateOutputType | null
    _avg: ServicioAvgAggregateOutputType | null
    _sum: ServicioSumAggregateOutputType | null
    _min: ServicioMinAggregateOutputType | null
    _max: ServicioMaxAggregateOutputType | null
  }

  type GetServicioGroupByPayload<T extends servicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicioGroupByOutputType[P]>
            : GetScalarType<T[P], ServicioGroupByOutputType[P]>
        }
      >
    >


  export type servicioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_servicio?: boolean
    nombre?: boolean
    descripcion?: boolean
    url?: boolean
    metodo?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    rol_servicio?: boolean | servicio$rol_servicioArgs<ExtArgs>
    _count?: boolean | ServicioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicio"]>

  export type servicioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_servicio?: boolean
    nombre?: boolean
    descripcion?: boolean
    url?: boolean
    metodo?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
  }, ExtArgs["result"]["servicio"]>

  export type servicioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_servicio?: boolean
    nombre?: boolean
    descripcion?: boolean
    url?: boolean
    metodo?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
  }, ExtArgs["result"]["servicio"]>

  export type servicioSelectScalar = {
    id_servicio?: boolean
    nombre?: boolean
    descripcion?: boolean
    url?: boolean
    metodo?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
  }

  export type servicioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_servicio" | "nombre" | "descripcion" | "url" | "metodo" | "fecha_creacion" | "fecha_actualizacion" | "estado", ExtArgs["result"]["servicio"]>
  export type servicioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol_servicio?: boolean | servicio$rol_servicioArgs<ExtArgs>
    _count?: boolean | ServicioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type servicioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type servicioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $servicioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "servicio"
    objects: {
      rol_servicio: Prisma.$rol_servicioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_servicio: number
      nombre: string
      descripcion: string
      url: string
      metodo: string
      fecha_creacion: Date | null
      fecha_actualizacion: Date | null
      estado: boolean
    }, ExtArgs["result"]["servicio"]>
    composites: {}
  }

  type servicioGetPayload<S extends boolean | null | undefined | servicioDefaultArgs> = $Result.GetResult<Prisma.$servicioPayload, S>

  type servicioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<servicioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicioCountAggregateInputType | true
    }

  export interface servicioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['servicio'], meta: { name: 'servicio' } }
    /**
     * Find zero or one Servicio that matches the filter.
     * @param {servicioFindUniqueArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends servicioFindUniqueArgs>(args: SelectSubset<T, servicioFindUniqueArgs<ExtArgs>>): Prisma__servicioClient<$Result.GetResult<Prisma.$servicioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servicio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {servicioFindUniqueOrThrowArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends servicioFindUniqueOrThrowArgs>(args: SelectSubset<T, servicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__servicioClient<$Result.GetResult<Prisma.$servicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicioFindFirstArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends servicioFindFirstArgs>(args?: SelectSubset<T, servicioFindFirstArgs<ExtArgs>>): Prisma__servicioClient<$Result.GetResult<Prisma.$servicioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicioFindFirstOrThrowArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends servicioFindFirstOrThrowArgs>(args?: SelectSubset<T, servicioFindFirstOrThrowArgs<ExtArgs>>): Prisma__servicioClient<$Result.GetResult<Prisma.$servicioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicios
     * const servicios = await prisma.servicio.findMany()
     * 
     * // Get first 10 Servicios
     * const servicios = await prisma.servicio.findMany({ take: 10 })
     * 
     * // Only select the `id_servicio`
     * const servicioWithId_servicioOnly = await prisma.servicio.findMany({ select: { id_servicio: true } })
     * 
     */
    findMany<T extends servicioFindManyArgs>(args?: SelectSubset<T, servicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servicio.
     * @param {servicioCreateArgs} args - Arguments to create a Servicio.
     * @example
     * // Create one Servicio
     * const Servicio = await prisma.servicio.create({
     *   data: {
     *     // ... data to create a Servicio
     *   }
     * })
     * 
     */
    create<T extends servicioCreateArgs>(args: SelectSubset<T, servicioCreateArgs<ExtArgs>>): Prisma__servicioClient<$Result.GetResult<Prisma.$servicioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servicios.
     * @param {servicioCreateManyArgs} args - Arguments to create many Servicios.
     * @example
     * // Create many Servicios
     * const servicio = await prisma.servicio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends servicioCreateManyArgs>(args?: SelectSubset<T, servicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Servicios and returns the data saved in the database.
     * @param {servicioCreateManyAndReturnArgs} args - Arguments to create many Servicios.
     * @example
     * // Create many Servicios
     * const servicio = await prisma.servicio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Servicios and only return the `id_servicio`
     * const servicioWithId_servicioOnly = await prisma.servicio.createManyAndReturn({
     *   select: { id_servicio: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends servicioCreateManyAndReturnArgs>(args?: SelectSubset<T, servicioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Servicio.
     * @param {servicioDeleteArgs} args - Arguments to delete one Servicio.
     * @example
     * // Delete one Servicio
     * const Servicio = await prisma.servicio.delete({
     *   where: {
     *     // ... filter to delete one Servicio
     *   }
     * })
     * 
     */
    delete<T extends servicioDeleteArgs>(args: SelectSubset<T, servicioDeleteArgs<ExtArgs>>): Prisma__servicioClient<$Result.GetResult<Prisma.$servicioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servicio.
     * @param {servicioUpdateArgs} args - Arguments to update one Servicio.
     * @example
     * // Update one Servicio
     * const servicio = await prisma.servicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends servicioUpdateArgs>(args: SelectSubset<T, servicioUpdateArgs<ExtArgs>>): Prisma__servicioClient<$Result.GetResult<Prisma.$servicioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servicios.
     * @param {servicioDeleteManyArgs} args - Arguments to filter Servicios to delete.
     * @example
     * // Delete a few Servicios
     * const { count } = await prisma.servicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends servicioDeleteManyArgs>(args?: SelectSubset<T, servicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicios
     * const servicio = await prisma.servicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends servicioUpdateManyArgs>(args: SelectSubset<T, servicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicios and returns the data updated in the database.
     * @param {servicioUpdateManyAndReturnArgs} args - Arguments to update many Servicios.
     * @example
     * // Update many Servicios
     * const servicio = await prisma.servicio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Servicios and only return the `id_servicio`
     * const servicioWithId_servicioOnly = await prisma.servicio.updateManyAndReturn({
     *   select: { id_servicio: true },
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
    updateManyAndReturn<T extends servicioUpdateManyAndReturnArgs>(args: SelectSubset<T, servicioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Servicio.
     * @param {servicioUpsertArgs} args - Arguments to update or create a Servicio.
     * @example
     * // Update or create a Servicio
     * const servicio = await prisma.servicio.upsert({
     *   create: {
     *     // ... data to create a Servicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servicio we want to update
     *   }
     * })
     */
    upsert<T extends servicioUpsertArgs>(args: SelectSubset<T, servicioUpsertArgs<ExtArgs>>): Prisma__servicioClient<$Result.GetResult<Prisma.$servicioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicioCountArgs} args - Arguments to filter Servicios to count.
     * @example
     * // Count the number of Servicios
     * const count = await prisma.servicio.count({
     *   where: {
     *     // ... the filter for the Servicios we want to count
     *   }
     * })
    **/
    count<T extends servicioCountArgs>(
      args?: Subset<T, servicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServicioAggregateArgs>(args: Subset<T, ServicioAggregateArgs>): Prisma.PrismaPromise<GetServicioAggregateType<T>>

    /**
     * Group by Servicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicioGroupByArgs} args - Group by arguments.
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
      T extends servicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: servicioGroupByArgs['orderBy'] }
        : { orderBy?: servicioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, servicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the servicio model
   */
  readonly fields: servicioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for servicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__servicioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rol_servicio<T extends servicio$rol_servicioArgs<ExtArgs> = {}>(args?: Subset<T, servicio$rol_servicioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rol_servicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the servicio model
   */
  interface servicioFieldRefs {
    readonly id_servicio: FieldRef<"servicio", 'Int'>
    readonly nombre: FieldRef<"servicio", 'String'>
    readonly descripcion: FieldRef<"servicio", 'String'>
    readonly url: FieldRef<"servicio", 'String'>
    readonly metodo: FieldRef<"servicio", 'String'>
    readonly fecha_creacion: FieldRef<"servicio", 'DateTime'>
    readonly fecha_actualizacion: FieldRef<"servicio", 'DateTime'>
    readonly estado: FieldRef<"servicio", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * servicio findUnique
   */
  export type servicioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio
     */
    select?: servicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicio
     */
    omit?: servicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicioInclude<ExtArgs> | null
    /**
     * Filter, which servicio to fetch.
     */
    where: servicioWhereUniqueInput
  }

  /**
   * servicio findUniqueOrThrow
   */
  export type servicioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio
     */
    select?: servicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicio
     */
    omit?: servicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicioInclude<ExtArgs> | null
    /**
     * Filter, which servicio to fetch.
     */
    where: servicioWhereUniqueInput
  }

  /**
   * servicio findFirst
   */
  export type servicioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio
     */
    select?: servicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicio
     */
    omit?: servicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicioInclude<ExtArgs> | null
    /**
     * Filter, which servicio to fetch.
     */
    where?: servicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicios to fetch.
     */
    orderBy?: servicioOrderByWithRelationInput | servicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servicios.
     */
    cursor?: servicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servicios.
     */
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * servicio findFirstOrThrow
   */
  export type servicioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio
     */
    select?: servicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicio
     */
    omit?: servicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicioInclude<ExtArgs> | null
    /**
     * Filter, which servicio to fetch.
     */
    where?: servicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicios to fetch.
     */
    orderBy?: servicioOrderByWithRelationInput | servicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servicios.
     */
    cursor?: servicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servicios.
     */
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * servicio findMany
   */
  export type servicioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio
     */
    select?: servicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicio
     */
    omit?: servicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicioInclude<ExtArgs> | null
    /**
     * Filter, which servicios to fetch.
     */
    where?: servicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicios to fetch.
     */
    orderBy?: servicioOrderByWithRelationInput | servicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing servicios.
     */
    cursor?: servicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicios.
     */
    skip?: number
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * servicio create
   */
  export type servicioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio
     */
    select?: servicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicio
     */
    omit?: servicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicioInclude<ExtArgs> | null
    /**
     * The data needed to create a servicio.
     */
    data: XOR<servicioCreateInput, servicioUncheckedCreateInput>
  }

  /**
   * servicio createMany
   */
  export type servicioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many servicios.
     */
    data: servicioCreateManyInput | servicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * servicio createManyAndReturn
   */
  export type servicioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio
     */
    select?: servicioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the servicio
     */
    omit?: servicioOmit<ExtArgs> | null
    /**
     * The data used to create many servicios.
     */
    data: servicioCreateManyInput | servicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * servicio update
   */
  export type servicioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio
     */
    select?: servicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicio
     */
    omit?: servicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicioInclude<ExtArgs> | null
    /**
     * The data needed to update a servicio.
     */
    data: XOR<servicioUpdateInput, servicioUncheckedUpdateInput>
    /**
     * Choose, which servicio to update.
     */
    where: servicioWhereUniqueInput
  }

  /**
   * servicio updateMany
   */
  export type servicioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update servicios.
     */
    data: XOR<servicioUpdateManyMutationInput, servicioUncheckedUpdateManyInput>
    /**
     * Filter which servicios to update
     */
    where?: servicioWhereInput
    /**
     * Limit how many servicios to update.
     */
    limit?: number
  }

  /**
   * servicio updateManyAndReturn
   */
  export type servicioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio
     */
    select?: servicioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the servicio
     */
    omit?: servicioOmit<ExtArgs> | null
    /**
     * The data used to update servicios.
     */
    data: XOR<servicioUpdateManyMutationInput, servicioUncheckedUpdateManyInput>
    /**
     * Filter which servicios to update
     */
    where?: servicioWhereInput
    /**
     * Limit how many servicios to update.
     */
    limit?: number
  }

  /**
   * servicio upsert
   */
  export type servicioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio
     */
    select?: servicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicio
     */
    omit?: servicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicioInclude<ExtArgs> | null
    /**
     * The filter to search for the servicio to update in case it exists.
     */
    where: servicioWhereUniqueInput
    /**
     * In case the servicio found by the `where` argument doesn't exist, create a new servicio with this data.
     */
    create: XOR<servicioCreateInput, servicioUncheckedCreateInput>
    /**
     * In case the servicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<servicioUpdateInput, servicioUncheckedUpdateInput>
  }

  /**
   * servicio delete
   */
  export type servicioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio
     */
    select?: servicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicio
     */
    omit?: servicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicioInclude<ExtArgs> | null
    /**
     * Filter which servicio to delete.
     */
    where: servicioWhereUniqueInput
  }

  /**
   * servicio deleteMany
   */
  export type servicioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servicios to delete
     */
    where?: servicioWhereInput
    /**
     * Limit how many servicios to delete.
     */
    limit?: number
  }

  /**
   * servicio.rol_servicio
   */
  export type servicio$rol_servicioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol_servicio
     */
    select?: rol_servicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol_servicio
     */
    omit?: rol_servicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rol_servicioInclude<ExtArgs> | null
    where?: rol_servicioWhereInput
    orderBy?: rol_servicioOrderByWithRelationInput | rol_servicioOrderByWithRelationInput[]
    cursor?: rol_servicioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rol_servicioScalarFieldEnum | Rol_servicioScalarFieldEnum[]
  }

  /**
   * servicio without action
   */
  export type servicioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio
     */
    select?: servicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicio
     */
    omit?: servicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicioInclude<ExtArgs> | null
  }


  /**
   * Model rol_servicio
   */

  export type AggregateRol_servicio = {
    _count: Rol_servicioCountAggregateOutputType | null
    _avg: Rol_servicioAvgAggregateOutputType | null
    _sum: Rol_servicioSumAggregateOutputType | null
    _min: Rol_servicioMinAggregateOutputType | null
    _max: Rol_servicioMaxAggregateOutputType | null
  }

  export type Rol_servicioAvgAggregateOutputType = {
    id_rol: number | null
    id_servicio: number | null
  }

  export type Rol_servicioSumAggregateOutputType = {
    id_rol: number | null
    id_servicio: number | null
  }

  export type Rol_servicioMinAggregateOutputType = {
    id_rol: number | null
    id_servicio: number | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    estado: boolean | null
  }

  export type Rol_servicioMaxAggregateOutputType = {
    id_rol: number | null
    id_servicio: number | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    estado: boolean | null
  }

  export type Rol_servicioCountAggregateOutputType = {
    id_rol: number
    id_servicio: number
    fecha_creacion: number
    fecha_actualizacion: number
    estado: number
    _all: number
  }


  export type Rol_servicioAvgAggregateInputType = {
    id_rol?: true
    id_servicio?: true
  }

  export type Rol_servicioSumAggregateInputType = {
    id_rol?: true
    id_servicio?: true
  }

  export type Rol_servicioMinAggregateInputType = {
    id_rol?: true
    id_servicio?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
  }

  export type Rol_servicioMaxAggregateInputType = {
    id_rol?: true
    id_servicio?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
  }

  export type Rol_servicioCountAggregateInputType = {
    id_rol?: true
    id_servicio?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
    _all?: true
  }

  export type Rol_servicioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rol_servicio to aggregate.
     */
    where?: rol_servicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rol_servicios to fetch.
     */
    orderBy?: rol_servicioOrderByWithRelationInput | rol_servicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rol_servicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rol_servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rol_servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rol_servicios
    **/
    _count?: true | Rol_servicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rol_servicioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rol_servicioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rol_servicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rol_servicioMaxAggregateInputType
  }

  export type GetRol_servicioAggregateType<T extends Rol_servicioAggregateArgs> = {
        [P in keyof T & keyof AggregateRol_servicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRol_servicio[P]>
      : GetScalarType<T[P], AggregateRol_servicio[P]>
  }




  export type rol_servicioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rol_servicioWhereInput
    orderBy?: rol_servicioOrderByWithAggregationInput | rol_servicioOrderByWithAggregationInput[]
    by: Rol_servicioScalarFieldEnum[] | Rol_servicioScalarFieldEnum
    having?: rol_servicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rol_servicioCountAggregateInputType | true
    _avg?: Rol_servicioAvgAggregateInputType
    _sum?: Rol_servicioSumAggregateInputType
    _min?: Rol_servicioMinAggregateInputType
    _max?: Rol_servicioMaxAggregateInputType
  }

  export type Rol_servicioGroupByOutputType = {
    id_rol: number
    id_servicio: number
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    estado: boolean
    _count: Rol_servicioCountAggregateOutputType | null
    _avg: Rol_servicioAvgAggregateOutputType | null
    _sum: Rol_servicioSumAggregateOutputType | null
    _min: Rol_servicioMinAggregateOutputType | null
    _max: Rol_servicioMaxAggregateOutputType | null
  }

  type GetRol_servicioGroupByPayload<T extends rol_servicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rol_servicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rol_servicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rol_servicioGroupByOutputType[P]>
            : GetScalarType<T[P], Rol_servicioGroupByOutputType[P]>
        }
      >
    >


  export type rol_servicioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rol?: boolean
    id_servicio?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    rol?: boolean | rolDefaultArgs<ExtArgs>
    servicio?: boolean | servicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rol_servicio"]>

  export type rol_servicioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rol?: boolean
    id_servicio?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    rol?: boolean | rolDefaultArgs<ExtArgs>
    servicio?: boolean | servicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rol_servicio"]>

  export type rol_servicioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rol?: boolean
    id_servicio?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    rol?: boolean | rolDefaultArgs<ExtArgs>
    servicio?: boolean | servicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rol_servicio"]>

  export type rol_servicioSelectScalar = {
    id_rol?: boolean
    id_servicio?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
  }

  export type rol_servicioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_rol" | "id_servicio" | "fecha_creacion" | "fecha_actualizacion" | "estado", ExtArgs["result"]["rol_servicio"]>
  export type rol_servicioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | rolDefaultArgs<ExtArgs>
    servicio?: boolean | servicioDefaultArgs<ExtArgs>
  }
  export type rol_servicioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | rolDefaultArgs<ExtArgs>
    servicio?: boolean | servicioDefaultArgs<ExtArgs>
  }
  export type rol_servicioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | rolDefaultArgs<ExtArgs>
    servicio?: boolean | servicioDefaultArgs<ExtArgs>
  }

  export type $rol_servicioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rol_servicio"
    objects: {
      rol: Prisma.$rolPayload<ExtArgs>
      servicio: Prisma.$servicioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_rol: number
      id_servicio: number
      fecha_creacion: Date | null
      fecha_actualizacion: Date | null
      estado: boolean
    }, ExtArgs["result"]["rol_servicio"]>
    composites: {}
  }

  type rol_servicioGetPayload<S extends boolean | null | undefined | rol_servicioDefaultArgs> = $Result.GetResult<Prisma.$rol_servicioPayload, S>

  type rol_servicioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rol_servicioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Rol_servicioCountAggregateInputType | true
    }

  export interface rol_servicioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rol_servicio'], meta: { name: 'rol_servicio' } }
    /**
     * Find zero or one Rol_servicio that matches the filter.
     * @param {rol_servicioFindUniqueArgs} args - Arguments to find a Rol_servicio
     * @example
     * // Get one Rol_servicio
     * const rol_servicio = await prisma.rol_servicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rol_servicioFindUniqueArgs>(args: SelectSubset<T, rol_servicioFindUniqueArgs<ExtArgs>>): Prisma__rol_servicioClient<$Result.GetResult<Prisma.$rol_servicioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rol_servicio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rol_servicioFindUniqueOrThrowArgs} args - Arguments to find a Rol_servicio
     * @example
     * // Get one Rol_servicio
     * const rol_servicio = await prisma.rol_servicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rol_servicioFindUniqueOrThrowArgs>(args: SelectSubset<T, rol_servicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rol_servicioClient<$Result.GetResult<Prisma.$rol_servicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol_servicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rol_servicioFindFirstArgs} args - Arguments to find a Rol_servicio
     * @example
     * // Get one Rol_servicio
     * const rol_servicio = await prisma.rol_servicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rol_servicioFindFirstArgs>(args?: SelectSubset<T, rol_servicioFindFirstArgs<ExtArgs>>): Prisma__rol_servicioClient<$Result.GetResult<Prisma.$rol_servicioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol_servicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rol_servicioFindFirstOrThrowArgs} args - Arguments to find a Rol_servicio
     * @example
     * // Get one Rol_servicio
     * const rol_servicio = await prisma.rol_servicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rol_servicioFindFirstOrThrowArgs>(args?: SelectSubset<T, rol_servicioFindFirstOrThrowArgs<ExtArgs>>): Prisma__rol_servicioClient<$Result.GetResult<Prisma.$rol_servicioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rol_servicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rol_servicioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rol_servicios
     * const rol_servicios = await prisma.rol_servicio.findMany()
     * 
     * // Get first 10 Rol_servicios
     * const rol_servicios = await prisma.rol_servicio.findMany({ take: 10 })
     * 
     * // Only select the `id_rol`
     * const rol_servicioWithId_rolOnly = await prisma.rol_servicio.findMany({ select: { id_rol: true } })
     * 
     */
    findMany<T extends rol_servicioFindManyArgs>(args?: SelectSubset<T, rol_servicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rol_servicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rol_servicio.
     * @param {rol_servicioCreateArgs} args - Arguments to create a Rol_servicio.
     * @example
     * // Create one Rol_servicio
     * const Rol_servicio = await prisma.rol_servicio.create({
     *   data: {
     *     // ... data to create a Rol_servicio
     *   }
     * })
     * 
     */
    create<T extends rol_servicioCreateArgs>(args: SelectSubset<T, rol_servicioCreateArgs<ExtArgs>>): Prisma__rol_servicioClient<$Result.GetResult<Prisma.$rol_servicioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rol_servicios.
     * @param {rol_servicioCreateManyArgs} args - Arguments to create many Rol_servicios.
     * @example
     * // Create many Rol_servicios
     * const rol_servicio = await prisma.rol_servicio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rol_servicioCreateManyArgs>(args?: SelectSubset<T, rol_servicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rol_servicios and returns the data saved in the database.
     * @param {rol_servicioCreateManyAndReturnArgs} args - Arguments to create many Rol_servicios.
     * @example
     * // Create many Rol_servicios
     * const rol_servicio = await prisma.rol_servicio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rol_servicios and only return the `id_rol`
     * const rol_servicioWithId_rolOnly = await prisma.rol_servicio.createManyAndReturn({
     *   select: { id_rol: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rol_servicioCreateManyAndReturnArgs>(args?: SelectSubset<T, rol_servicioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rol_servicioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rol_servicio.
     * @param {rol_servicioDeleteArgs} args - Arguments to delete one Rol_servicio.
     * @example
     * // Delete one Rol_servicio
     * const Rol_servicio = await prisma.rol_servicio.delete({
     *   where: {
     *     // ... filter to delete one Rol_servicio
     *   }
     * })
     * 
     */
    delete<T extends rol_servicioDeleteArgs>(args: SelectSubset<T, rol_servicioDeleteArgs<ExtArgs>>): Prisma__rol_servicioClient<$Result.GetResult<Prisma.$rol_servicioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rol_servicio.
     * @param {rol_servicioUpdateArgs} args - Arguments to update one Rol_servicio.
     * @example
     * // Update one Rol_servicio
     * const rol_servicio = await prisma.rol_servicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rol_servicioUpdateArgs>(args: SelectSubset<T, rol_servicioUpdateArgs<ExtArgs>>): Prisma__rol_servicioClient<$Result.GetResult<Prisma.$rol_servicioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rol_servicios.
     * @param {rol_servicioDeleteManyArgs} args - Arguments to filter Rol_servicios to delete.
     * @example
     * // Delete a few Rol_servicios
     * const { count } = await prisma.rol_servicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rol_servicioDeleteManyArgs>(args?: SelectSubset<T, rol_servicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rol_servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rol_servicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rol_servicios
     * const rol_servicio = await prisma.rol_servicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rol_servicioUpdateManyArgs>(args: SelectSubset<T, rol_servicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rol_servicios and returns the data updated in the database.
     * @param {rol_servicioUpdateManyAndReturnArgs} args - Arguments to update many Rol_servicios.
     * @example
     * // Update many Rol_servicios
     * const rol_servicio = await prisma.rol_servicio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rol_servicios and only return the `id_rol`
     * const rol_servicioWithId_rolOnly = await prisma.rol_servicio.updateManyAndReturn({
     *   select: { id_rol: true },
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
    updateManyAndReturn<T extends rol_servicioUpdateManyAndReturnArgs>(args: SelectSubset<T, rol_servicioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rol_servicioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rol_servicio.
     * @param {rol_servicioUpsertArgs} args - Arguments to update or create a Rol_servicio.
     * @example
     * // Update or create a Rol_servicio
     * const rol_servicio = await prisma.rol_servicio.upsert({
     *   create: {
     *     // ... data to create a Rol_servicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rol_servicio we want to update
     *   }
     * })
     */
    upsert<T extends rol_servicioUpsertArgs>(args: SelectSubset<T, rol_servicioUpsertArgs<ExtArgs>>): Prisma__rol_servicioClient<$Result.GetResult<Prisma.$rol_servicioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rol_servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rol_servicioCountArgs} args - Arguments to filter Rol_servicios to count.
     * @example
     * // Count the number of Rol_servicios
     * const count = await prisma.rol_servicio.count({
     *   where: {
     *     // ... the filter for the Rol_servicios we want to count
     *   }
     * })
    **/
    count<T extends rol_servicioCountArgs>(
      args?: Subset<T, rol_servicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rol_servicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rol_servicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rol_servicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Rol_servicioAggregateArgs>(args: Subset<T, Rol_servicioAggregateArgs>): Prisma.PrismaPromise<GetRol_servicioAggregateType<T>>

    /**
     * Group by Rol_servicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rol_servicioGroupByArgs} args - Group by arguments.
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
      T extends rol_servicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rol_servicioGroupByArgs['orderBy'] }
        : { orderBy?: rol_servicioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rol_servicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRol_servicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rol_servicio model
   */
  readonly fields: rol_servicioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rol_servicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rol_servicioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rol<T extends rolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rolDefaultArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    servicio<T extends servicioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, servicioDefaultArgs<ExtArgs>>): Prisma__servicioClient<$Result.GetResult<Prisma.$servicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the rol_servicio model
   */
  interface rol_servicioFieldRefs {
    readonly id_rol: FieldRef<"rol_servicio", 'Int'>
    readonly id_servicio: FieldRef<"rol_servicio", 'Int'>
    readonly fecha_creacion: FieldRef<"rol_servicio", 'DateTime'>
    readonly fecha_actualizacion: FieldRef<"rol_servicio", 'DateTime'>
    readonly estado: FieldRef<"rol_servicio", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * rol_servicio findUnique
   */
  export type rol_servicioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol_servicio
     */
    select?: rol_servicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol_servicio
     */
    omit?: rol_servicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rol_servicioInclude<ExtArgs> | null
    /**
     * Filter, which rol_servicio to fetch.
     */
    where: rol_servicioWhereUniqueInput
  }

  /**
   * rol_servicio findUniqueOrThrow
   */
  export type rol_servicioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol_servicio
     */
    select?: rol_servicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol_servicio
     */
    omit?: rol_servicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rol_servicioInclude<ExtArgs> | null
    /**
     * Filter, which rol_servicio to fetch.
     */
    where: rol_servicioWhereUniqueInput
  }

  /**
   * rol_servicio findFirst
   */
  export type rol_servicioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol_servicio
     */
    select?: rol_servicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol_servicio
     */
    omit?: rol_servicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rol_servicioInclude<ExtArgs> | null
    /**
     * Filter, which rol_servicio to fetch.
     */
    where?: rol_servicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rol_servicios to fetch.
     */
    orderBy?: rol_servicioOrderByWithRelationInput | rol_servicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rol_servicios.
     */
    cursor?: rol_servicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rol_servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rol_servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rol_servicios.
     */
    distinct?: Rol_servicioScalarFieldEnum | Rol_servicioScalarFieldEnum[]
  }

  /**
   * rol_servicio findFirstOrThrow
   */
  export type rol_servicioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol_servicio
     */
    select?: rol_servicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol_servicio
     */
    omit?: rol_servicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rol_servicioInclude<ExtArgs> | null
    /**
     * Filter, which rol_servicio to fetch.
     */
    where?: rol_servicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rol_servicios to fetch.
     */
    orderBy?: rol_servicioOrderByWithRelationInput | rol_servicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rol_servicios.
     */
    cursor?: rol_servicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rol_servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rol_servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rol_servicios.
     */
    distinct?: Rol_servicioScalarFieldEnum | Rol_servicioScalarFieldEnum[]
  }

  /**
   * rol_servicio findMany
   */
  export type rol_servicioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol_servicio
     */
    select?: rol_servicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol_servicio
     */
    omit?: rol_servicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rol_servicioInclude<ExtArgs> | null
    /**
     * Filter, which rol_servicios to fetch.
     */
    where?: rol_servicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rol_servicios to fetch.
     */
    orderBy?: rol_servicioOrderByWithRelationInput | rol_servicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rol_servicios.
     */
    cursor?: rol_servicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rol_servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rol_servicios.
     */
    skip?: number
    distinct?: Rol_servicioScalarFieldEnum | Rol_servicioScalarFieldEnum[]
  }

  /**
   * rol_servicio create
   */
  export type rol_servicioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol_servicio
     */
    select?: rol_servicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol_servicio
     */
    omit?: rol_servicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rol_servicioInclude<ExtArgs> | null
    /**
     * The data needed to create a rol_servicio.
     */
    data: XOR<rol_servicioCreateInput, rol_servicioUncheckedCreateInput>
  }

  /**
   * rol_servicio createMany
   */
  export type rol_servicioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rol_servicios.
     */
    data: rol_servicioCreateManyInput | rol_servicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rol_servicio createManyAndReturn
   */
  export type rol_servicioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol_servicio
     */
    select?: rol_servicioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rol_servicio
     */
    omit?: rol_servicioOmit<ExtArgs> | null
    /**
     * The data used to create many rol_servicios.
     */
    data: rol_servicioCreateManyInput | rol_servicioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rol_servicioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * rol_servicio update
   */
  export type rol_servicioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol_servicio
     */
    select?: rol_servicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol_servicio
     */
    omit?: rol_servicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rol_servicioInclude<ExtArgs> | null
    /**
     * The data needed to update a rol_servicio.
     */
    data: XOR<rol_servicioUpdateInput, rol_servicioUncheckedUpdateInput>
    /**
     * Choose, which rol_servicio to update.
     */
    where: rol_servicioWhereUniqueInput
  }

  /**
   * rol_servicio updateMany
   */
  export type rol_servicioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rol_servicios.
     */
    data: XOR<rol_servicioUpdateManyMutationInput, rol_servicioUncheckedUpdateManyInput>
    /**
     * Filter which rol_servicios to update
     */
    where?: rol_servicioWhereInput
    /**
     * Limit how many rol_servicios to update.
     */
    limit?: number
  }

  /**
   * rol_servicio updateManyAndReturn
   */
  export type rol_servicioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol_servicio
     */
    select?: rol_servicioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rol_servicio
     */
    omit?: rol_servicioOmit<ExtArgs> | null
    /**
     * The data used to update rol_servicios.
     */
    data: XOR<rol_servicioUpdateManyMutationInput, rol_servicioUncheckedUpdateManyInput>
    /**
     * Filter which rol_servicios to update
     */
    where?: rol_servicioWhereInput
    /**
     * Limit how many rol_servicios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rol_servicioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * rol_servicio upsert
   */
  export type rol_servicioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol_servicio
     */
    select?: rol_servicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol_servicio
     */
    omit?: rol_servicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rol_servicioInclude<ExtArgs> | null
    /**
     * The filter to search for the rol_servicio to update in case it exists.
     */
    where: rol_servicioWhereUniqueInput
    /**
     * In case the rol_servicio found by the `where` argument doesn't exist, create a new rol_servicio with this data.
     */
    create: XOR<rol_servicioCreateInput, rol_servicioUncheckedCreateInput>
    /**
     * In case the rol_servicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rol_servicioUpdateInput, rol_servicioUncheckedUpdateInput>
  }

  /**
   * rol_servicio delete
   */
  export type rol_servicioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol_servicio
     */
    select?: rol_servicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol_servicio
     */
    omit?: rol_servicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rol_servicioInclude<ExtArgs> | null
    /**
     * Filter which rol_servicio to delete.
     */
    where: rol_servicioWhereUniqueInput
  }

  /**
   * rol_servicio deleteMany
   */
  export type rol_servicioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rol_servicios to delete
     */
    where?: rol_servicioWhereInput
    /**
     * Limit how many rol_servicios to delete.
     */
    limit?: number
  }

  /**
   * rol_servicio without action
   */
  export type rol_servicioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol_servicio
     */
    select?: rol_servicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol_servicio
     */
    omit?: rol_servicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rol_servicioInclude<ExtArgs> | null
  }


  /**
   * Model usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: number | null
    primer_nombre: string | null
    segundo_nombre: string | null
    primer_apellido: string | null
    segundo_apellido: string | null
    correo: string | null
    confirmado: boolean | null
    token_confirmacion: string | null
    ultima_conexion: Date | null
    password: string | null
    fecha_actualizacion: Date | null
    fecha_creacion: Date | null
    estado: boolean | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: number | null
    primer_nombre: string | null
    segundo_nombre: string | null
    primer_apellido: string | null
    segundo_apellido: string | null
    correo: string | null
    confirmado: boolean | null
    token_confirmacion: string | null
    ultima_conexion: Date | null
    password: string | null
    fecha_actualizacion: Date | null
    fecha_creacion: Date | null
    estado: boolean | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    primer_nombre: number
    segundo_nombre: number
    primer_apellido: number
    segundo_apellido: number
    correo: number
    confirmado: number
    token_confirmacion: number
    ultima_conexion: number
    password: number
    fecha_actualizacion: number
    fecha_creacion: number
    estado: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioSumAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    primer_nombre?: true
    segundo_nombre?: true
    primer_apellido?: true
    segundo_apellido?: true
    correo?: true
    confirmado?: true
    token_confirmacion?: true
    ultima_conexion?: true
    password?: true
    fecha_actualizacion?: true
    fecha_creacion?: true
    estado?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    primer_nombre?: true
    segundo_nombre?: true
    primer_apellido?: true
    segundo_apellido?: true
    correo?: true
    confirmado?: true
    token_confirmacion?: true
    ultima_conexion?: true
    password?: true
    fecha_actualizacion?: true
    fecha_creacion?: true
    estado?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    primer_nombre?: true
    segundo_nombre?: true
    primer_apellido?: true
    segundo_apellido?: true
    correo?: true
    confirmado?: true
    token_confirmacion?: true
    ultima_conexion?: true
    password?: true
    fecha_actualizacion?: true
    fecha_creacion?: true
    estado?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithAggregationInput | usuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: number
    primer_nombre: string
    segundo_nombre: string | null
    primer_apellido: string
    segundo_apellido: string
    correo: string
    confirmado: boolean
    token_confirmacion: string
    ultima_conexion: Date | null
    password: string | null
    fecha_actualizacion: Date
    fecha_creacion: Date | null
    estado: boolean
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    primer_nombre?: boolean
    segundo_nombre?: boolean
    primer_apellido?: boolean
    segundo_apellido?: boolean
    correo?: boolean
    confirmado?: boolean
    token_confirmacion?: boolean
    ultima_conexion?: boolean
    password?: boolean
    fecha_actualizacion?: boolean
    fecha_creacion?: boolean
    estado?: boolean
    evaluacion?: boolean | usuario$evaluacionArgs<ExtArgs>
    nrc?: boolean | usuario$nrcArgs<ExtArgs>
    usuario_rol?: boolean | usuario$usuario_rolArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    primer_nombre?: boolean
    segundo_nombre?: boolean
    primer_apellido?: boolean
    segundo_apellido?: boolean
    correo?: boolean
    confirmado?: boolean
    token_confirmacion?: boolean
    ultima_conexion?: boolean
    password?: boolean
    fecha_actualizacion?: boolean
    fecha_creacion?: boolean
    estado?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    primer_nombre?: boolean
    segundo_nombre?: boolean
    primer_apellido?: boolean
    segundo_apellido?: boolean
    correo?: boolean
    confirmado?: boolean
    token_confirmacion?: boolean
    ultima_conexion?: boolean
    password?: boolean
    fecha_actualizacion?: boolean
    fecha_creacion?: boolean
    estado?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectScalar = {
    id_usuario?: boolean
    primer_nombre?: boolean
    segundo_nombre?: boolean
    primer_apellido?: boolean
    segundo_apellido?: boolean
    correo?: boolean
    confirmado?: boolean
    token_confirmacion?: boolean
    ultima_conexion?: boolean
    password?: boolean
    fecha_actualizacion?: boolean
    fecha_creacion?: boolean
    estado?: boolean
  }

  export type usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "primer_nombre" | "segundo_nombre" | "primer_apellido" | "segundo_apellido" | "correo" | "confirmado" | "token_confirmacion" | "ultima_conexion" | "password" | "fecha_actualizacion" | "fecha_creacion" | "estado", ExtArgs["result"]["usuario"]>
  export type usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluacion?: boolean | usuario$evaluacionArgs<ExtArgs>
    nrc?: boolean | usuario$nrcArgs<ExtArgs>
    usuario_rol?: boolean | usuario$usuario_rolArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario"
    objects: {
      evaluacion: Prisma.$evaluacionPayload<ExtArgs>[]
      nrc: Prisma.$nrcPayload<ExtArgs>[]
      usuario_rol: Prisma.$usuario_rolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      primer_nombre: string
      segundo_nombre: string | null
      primer_apellido: string
      segundo_apellido: string
      correo: string
      confirmado: boolean
      token_confirmacion: string
      ultima_conexion: Date | null
      password: string | null
      fecha_actualizacion: Date
      fecha_creacion: Date | null
      estado: boolean
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = $Result.GetResult<Prisma.$usuarioPayload, S>

  type usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario'], meta: { name: 'usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioFindUniqueArgs>(args: SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioFindFirstArgs>(args?: SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends usuarioFindManyArgs>(args?: SelectSubset<T, usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends usuarioCreateArgs>(args: SelectSubset<T, usuarioCreateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarioCreateManyArgs>(args?: SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, usuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends usuarioDeleteArgs>(args: SelectSubset<T, usuarioDeleteArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarioUpdateArgs>(args: SelectSubset<T, usuarioUpdateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarioDeleteManyArgs>(args?: SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarioUpdateManyArgs>(args: SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id_usuario: true },
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
    updateManyAndReturn<T extends usuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, usuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends usuarioUpsertArgs>(args: SelectSubset<T, usuarioUpsertArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(
      args?: Subset<T, usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioGroupByArgs} args - Group by arguments.
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
      T extends usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioGroupByArgs['orderBy'] }
        : { orderBy?: usuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario model
   */
  readonly fields: usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evaluacion<T extends usuario$evaluacionArgs<ExtArgs> = {}>(args?: Subset<T, usuario$evaluacionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$evaluacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    nrc<T extends usuario$nrcArgs<ExtArgs> = {}>(args?: Subset<T, usuario$nrcArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nrcPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario_rol<T extends usuario$usuario_rolArgs<ExtArgs> = {}>(args?: Subset<T, usuario$usuario_rolArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the usuario model
   */
  interface usuarioFieldRefs {
    readonly id_usuario: FieldRef<"usuario", 'Int'>
    readonly primer_nombre: FieldRef<"usuario", 'String'>
    readonly segundo_nombre: FieldRef<"usuario", 'String'>
    readonly primer_apellido: FieldRef<"usuario", 'String'>
    readonly segundo_apellido: FieldRef<"usuario", 'String'>
    readonly correo: FieldRef<"usuario", 'String'>
    readonly confirmado: FieldRef<"usuario", 'Boolean'>
    readonly token_confirmacion: FieldRef<"usuario", 'String'>
    readonly ultima_conexion: FieldRef<"usuario", 'DateTime'>
    readonly password: FieldRef<"usuario", 'String'>
    readonly fecha_actualizacion: FieldRef<"usuario", 'DateTime'>
    readonly fecha_creacion: FieldRef<"usuario", 'DateTime'>
    readonly estado: FieldRef<"usuario", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * usuario findUnique
   */
  export type usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findUniqueOrThrow
   */
  export type usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findFirst
   */
  export type usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findFirstOrThrow
   */
  export type usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findMany
   */
  export type usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario create
   */
  export type usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario.
     */
    data: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
  }

  /**
   * usuario createMany
   */
  export type usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario createManyAndReturn
   */
  export type usuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario update
   */
  export type usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario.
     */
    data: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
    /**
     * Choose, which usuario to update.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario updateMany
   */
  export type usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuario updateManyAndReturn
   */
  export type usuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuario upsert
   */
  export type usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: usuarioWhereUniqueInput
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
  }

  /**
   * usuario delete
   */
  export type usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter which usuario to delete.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario deleteMany
   */
  export type usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuario.evaluacion
   */
  export type usuario$evaluacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluacion
     */
    select?: evaluacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evaluacion
     */
    omit?: evaluacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluacionInclude<ExtArgs> | null
    where?: evaluacionWhereInput
    orderBy?: evaluacionOrderByWithRelationInput | evaluacionOrderByWithRelationInput[]
    cursor?: evaluacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvaluacionScalarFieldEnum | EvaluacionScalarFieldEnum[]
  }

  /**
   * usuario.nrc
   */
  export type usuario$nrcArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nrc
     */
    select?: nrcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nrc
     */
    omit?: nrcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nrcInclude<ExtArgs> | null
    where?: nrcWhereInput
    orderBy?: nrcOrderByWithRelationInput | nrcOrderByWithRelationInput[]
    cursor?: nrcWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NrcScalarFieldEnum | NrcScalarFieldEnum[]
  }

  /**
   * usuario.usuario_rol
   */
  export type usuario$usuario_rolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    where?: usuario_rolWhereInput
    orderBy?: usuario_rolOrderByWithRelationInput | usuario_rolOrderByWithRelationInput[]
    cursor?: usuario_rolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Usuario_rolScalarFieldEnum | Usuario_rolScalarFieldEnum[]
  }

  /**
   * usuario without action
   */
  export type usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
  }


  /**
   * Model usuario_rol
   */

  export type AggregateUsuario_rol = {
    _count: Usuario_rolCountAggregateOutputType | null
    _avg: Usuario_rolAvgAggregateOutputType | null
    _sum: Usuario_rolSumAggregateOutputType | null
    _min: Usuario_rolMinAggregateOutputType | null
    _max: Usuario_rolMaxAggregateOutputType | null
  }

  export type Usuario_rolAvgAggregateOutputType = {
    id_usuario: number | null
    id_rol: number | null
  }

  export type Usuario_rolSumAggregateOutputType = {
    id_usuario: number | null
    id_rol: number | null
  }

  export type Usuario_rolMinAggregateOutputType = {
    id_usuario: number | null
    id_rol: number | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    estado: boolean | null
  }

  export type Usuario_rolMaxAggregateOutputType = {
    id_usuario: number | null
    id_rol: number | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    estado: boolean | null
  }

  export type Usuario_rolCountAggregateOutputType = {
    id_usuario: number
    id_rol: number
    fecha_creacion: number
    fecha_actualizacion: number
    estado: number
    _all: number
  }


  export type Usuario_rolAvgAggregateInputType = {
    id_usuario?: true
    id_rol?: true
  }

  export type Usuario_rolSumAggregateInputType = {
    id_usuario?: true
    id_rol?: true
  }

  export type Usuario_rolMinAggregateInputType = {
    id_usuario?: true
    id_rol?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
  }

  export type Usuario_rolMaxAggregateInputType = {
    id_usuario?: true
    id_rol?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
  }

  export type Usuario_rolCountAggregateInputType = {
    id_usuario?: true
    id_rol?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
    _all?: true
  }

  export type Usuario_rolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario_rol to aggregate.
     */
    where?: usuario_rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_rols to fetch.
     */
    orderBy?: usuario_rolOrderByWithRelationInput | usuario_rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuario_rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuario_rols
    **/
    _count?: true | Usuario_rolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Usuario_rolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Usuario_rolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Usuario_rolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Usuario_rolMaxAggregateInputType
  }

  export type GetUsuario_rolAggregateType<T extends Usuario_rolAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario_rol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario_rol[P]>
      : GetScalarType<T[P], AggregateUsuario_rol[P]>
  }




  export type usuario_rolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuario_rolWhereInput
    orderBy?: usuario_rolOrderByWithAggregationInput | usuario_rolOrderByWithAggregationInput[]
    by: Usuario_rolScalarFieldEnum[] | Usuario_rolScalarFieldEnum
    having?: usuario_rolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Usuario_rolCountAggregateInputType | true
    _avg?: Usuario_rolAvgAggregateInputType
    _sum?: Usuario_rolSumAggregateInputType
    _min?: Usuario_rolMinAggregateInputType
    _max?: Usuario_rolMaxAggregateInputType
  }

  export type Usuario_rolGroupByOutputType = {
    id_usuario: number
    id_rol: number
    fecha_creacion: Date
    fecha_actualizacion: Date | null
    estado: boolean
    _count: Usuario_rolCountAggregateOutputType | null
    _avg: Usuario_rolAvgAggregateOutputType | null
    _sum: Usuario_rolSumAggregateOutputType | null
    _min: Usuario_rolMinAggregateOutputType | null
    _max: Usuario_rolMaxAggregateOutputType | null
  }

  type GetUsuario_rolGroupByPayload<T extends usuario_rolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Usuario_rolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Usuario_rolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Usuario_rolGroupByOutputType[P]>
            : GetScalarType<T[P], Usuario_rolGroupByOutputType[P]>
        }
      >
    >


  export type usuario_rolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    id_rol?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    rol?: boolean | rolDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario_rol"]>

  export type usuario_rolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    id_rol?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    rol?: boolean | rolDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario_rol"]>

  export type usuario_rolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    id_rol?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    rol?: boolean | rolDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario_rol"]>

  export type usuario_rolSelectScalar = {
    id_usuario?: boolean
    id_rol?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
  }

  export type usuario_rolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "id_rol" | "fecha_creacion" | "fecha_actualizacion" | "estado", ExtArgs["result"]["usuario_rol"]>
  export type usuario_rolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | rolDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }
  export type usuario_rolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | rolDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }
  export type usuario_rolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | rolDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }

  export type $usuario_rolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario_rol"
    objects: {
      rol: Prisma.$rolPayload<ExtArgs>
      usuario: Prisma.$usuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      id_rol: number
      fecha_creacion: Date
      fecha_actualizacion: Date | null
      estado: boolean
    }, ExtArgs["result"]["usuario_rol"]>
    composites: {}
  }

  type usuario_rolGetPayload<S extends boolean | null | undefined | usuario_rolDefaultArgs> = $Result.GetResult<Prisma.$usuario_rolPayload, S>

  type usuario_rolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuario_rolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Usuario_rolCountAggregateInputType | true
    }

  export interface usuario_rolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario_rol'], meta: { name: 'usuario_rol' } }
    /**
     * Find zero or one Usuario_rol that matches the filter.
     * @param {usuario_rolFindUniqueArgs} args - Arguments to find a Usuario_rol
     * @example
     * // Get one Usuario_rol
     * const usuario_rol = await prisma.usuario_rol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuario_rolFindUniqueArgs>(args: SelectSubset<T, usuario_rolFindUniqueArgs<ExtArgs>>): Prisma__usuario_rolClient<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario_rol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuario_rolFindUniqueOrThrowArgs} args - Arguments to find a Usuario_rol
     * @example
     * // Get one Usuario_rol
     * const usuario_rol = await prisma.usuario_rol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuario_rolFindUniqueOrThrowArgs>(args: SelectSubset<T, usuario_rolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuario_rolClient<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario_rol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_rolFindFirstArgs} args - Arguments to find a Usuario_rol
     * @example
     * // Get one Usuario_rol
     * const usuario_rol = await prisma.usuario_rol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuario_rolFindFirstArgs>(args?: SelectSubset<T, usuario_rolFindFirstArgs<ExtArgs>>): Prisma__usuario_rolClient<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario_rol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_rolFindFirstOrThrowArgs} args - Arguments to find a Usuario_rol
     * @example
     * // Get one Usuario_rol
     * const usuario_rol = await prisma.usuario_rol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuario_rolFindFirstOrThrowArgs>(args?: SelectSubset<T, usuario_rolFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuario_rolClient<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuario_rols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_rolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuario_rols
     * const usuario_rols = await prisma.usuario_rol.findMany()
     * 
     * // Get first 10 Usuario_rols
     * const usuario_rols = await prisma.usuario_rol.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuario_rolWithId_usuarioOnly = await prisma.usuario_rol.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends usuario_rolFindManyArgs>(args?: SelectSubset<T, usuario_rolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario_rol.
     * @param {usuario_rolCreateArgs} args - Arguments to create a Usuario_rol.
     * @example
     * // Create one Usuario_rol
     * const Usuario_rol = await prisma.usuario_rol.create({
     *   data: {
     *     // ... data to create a Usuario_rol
     *   }
     * })
     * 
     */
    create<T extends usuario_rolCreateArgs>(args: SelectSubset<T, usuario_rolCreateArgs<ExtArgs>>): Prisma__usuario_rolClient<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuario_rols.
     * @param {usuario_rolCreateManyArgs} args - Arguments to create many Usuario_rols.
     * @example
     * // Create many Usuario_rols
     * const usuario_rol = await prisma.usuario_rol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuario_rolCreateManyArgs>(args?: SelectSubset<T, usuario_rolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuario_rols and returns the data saved in the database.
     * @param {usuario_rolCreateManyAndReturnArgs} args - Arguments to create many Usuario_rols.
     * @example
     * // Create many Usuario_rols
     * const usuario_rol = await prisma.usuario_rol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuario_rols and only return the `id_usuario`
     * const usuario_rolWithId_usuarioOnly = await prisma.usuario_rol.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuario_rolCreateManyAndReturnArgs>(args?: SelectSubset<T, usuario_rolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario_rol.
     * @param {usuario_rolDeleteArgs} args - Arguments to delete one Usuario_rol.
     * @example
     * // Delete one Usuario_rol
     * const Usuario_rol = await prisma.usuario_rol.delete({
     *   where: {
     *     // ... filter to delete one Usuario_rol
     *   }
     * })
     * 
     */
    delete<T extends usuario_rolDeleteArgs>(args: SelectSubset<T, usuario_rolDeleteArgs<ExtArgs>>): Prisma__usuario_rolClient<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario_rol.
     * @param {usuario_rolUpdateArgs} args - Arguments to update one Usuario_rol.
     * @example
     * // Update one Usuario_rol
     * const usuario_rol = await prisma.usuario_rol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuario_rolUpdateArgs>(args: SelectSubset<T, usuario_rolUpdateArgs<ExtArgs>>): Prisma__usuario_rolClient<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuario_rols.
     * @param {usuario_rolDeleteManyArgs} args - Arguments to filter Usuario_rols to delete.
     * @example
     * // Delete a few Usuario_rols
     * const { count } = await prisma.usuario_rol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuario_rolDeleteManyArgs>(args?: SelectSubset<T, usuario_rolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuario_rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_rolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuario_rols
     * const usuario_rol = await prisma.usuario_rol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuario_rolUpdateManyArgs>(args: SelectSubset<T, usuario_rolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuario_rols and returns the data updated in the database.
     * @param {usuario_rolUpdateManyAndReturnArgs} args - Arguments to update many Usuario_rols.
     * @example
     * // Update many Usuario_rols
     * const usuario_rol = await prisma.usuario_rol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuario_rols and only return the `id_usuario`
     * const usuario_rolWithId_usuarioOnly = await prisma.usuario_rol.updateManyAndReturn({
     *   select: { id_usuario: true },
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
    updateManyAndReturn<T extends usuario_rolUpdateManyAndReturnArgs>(args: SelectSubset<T, usuario_rolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario_rol.
     * @param {usuario_rolUpsertArgs} args - Arguments to update or create a Usuario_rol.
     * @example
     * // Update or create a Usuario_rol
     * const usuario_rol = await prisma.usuario_rol.upsert({
     *   create: {
     *     // ... data to create a Usuario_rol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario_rol we want to update
     *   }
     * })
     */
    upsert<T extends usuario_rolUpsertArgs>(args: SelectSubset<T, usuario_rolUpsertArgs<ExtArgs>>): Prisma__usuario_rolClient<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuario_rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_rolCountArgs} args - Arguments to filter Usuario_rols to count.
     * @example
     * // Count the number of Usuario_rols
     * const count = await prisma.usuario_rol.count({
     *   where: {
     *     // ... the filter for the Usuario_rols we want to count
     *   }
     * })
    **/
    count<T extends usuario_rolCountArgs>(
      args?: Subset<T, usuario_rolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Usuario_rolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario_rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuario_rolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Usuario_rolAggregateArgs>(args: Subset<T, Usuario_rolAggregateArgs>): Prisma.PrismaPromise<GetUsuario_rolAggregateType<T>>

    /**
     * Group by Usuario_rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_rolGroupByArgs} args - Group by arguments.
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
      T extends usuario_rolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuario_rolGroupByArgs['orderBy'] }
        : { orderBy?: usuario_rolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuario_rolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuario_rolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario_rol model
   */
  readonly fields: usuario_rolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario_rol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuario_rolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rol<T extends rolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rolDefaultArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the usuario_rol model
   */
  interface usuario_rolFieldRefs {
    readonly id_usuario: FieldRef<"usuario_rol", 'Int'>
    readonly id_rol: FieldRef<"usuario_rol", 'Int'>
    readonly fecha_creacion: FieldRef<"usuario_rol", 'DateTime'>
    readonly fecha_actualizacion: FieldRef<"usuario_rol", 'DateTime'>
    readonly estado: FieldRef<"usuario_rol", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * usuario_rol findUnique
   */
  export type usuario_rolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    /**
     * Filter, which usuario_rol to fetch.
     */
    where: usuario_rolWhereUniqueInput
  }

  /**
   * usuario_rol findUniqueOrThrow
   */
  export type usuario_rolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    /**
     * Filter, which usuario_rol to fetch.
     */
    where: usuario_rolWhereUniqueInput
  }

  /**
   * usuario_rol findFirst
   */
  export type usuario_rolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    /**
     * Filter, which usuario_rol to fetch.
     */
    where?: usuario_rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_rols to fetch.
     */
    orderBy?: usuario_rolOrderByWithRelationInput | usuario_rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuario_rols.
     */
    cursor?: usuario_rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuario_rols.
     */
    distinct?: Usuario_rolScalarFieldEnum | Usuario_rolScalarFieldEnum[]
  }

  /**
   * usuario_rol findFirstOrThrow
   */
  export type usuario_rolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    /**
     * Filter, which usuario_rol to fetch.
     */
    where?: usuario_rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_rols to fetch.
     */
    orderBy?: usuario_rolOrderByWithRelationInput | usuario_rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuario_rols.
     */
    cursor?: usuario_rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuario_rols.
     */
    distinct?: Usuario_rolScalarFieldEnum | Usuario_rolScalarFieldEnum[]
  }

  /**
   * usuario_rol findMany
   */
  export type usuario_rolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    /**
     * Filter, which usuario_rols to fetch.
     */
    where?: usuario_rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_rols to fetch.
     */
    orderBy?: usuario_rolOrderByWithRelationInput | usuario_rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuario_rols.
     */
    cursor?: usuario_rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_rols.
     */
    skip?: number
    distinct?: Usuario_rolScalarFieldEnum | Usuario_rolScalarFieldEnum[]
  }

  /**
   * usuario_rol create
   */
  export type usuario_rolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario_rol.
     */
    data: XOR<usuario_rolCreateInput, usuario_rolUncheckedCreateInput>
  }

  /**
   * usuario_rol createMany
   */
  export type usuario_rolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuario_rols.
     */
    data: usuario_rolCreateManyInput | usuario_rolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario_rol createManyAndReturn
   */
  export type usuario_rolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * The data used to create many usuario_rols.
     */
    data: usuario_rolCreateManyInput | usuario_rolCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuario_rol update
   */
  export type usuario_rolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario_rol.
     */
    data: XOR<usuario_rolUpdateInput, usuario_rolUncheckedUpdateInput>
    /**
     * Choose, which usuario_rol to update.
     */
    where: usuario_rolWhereUniqueInput
  }

  /**
   * usuario_rol updateMany
   */
  export type usuario_rolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuario_rols.
     */
    data: XOR<usuario_rolUpdateManyMutationInput, usuario_rolUncheckedUpdateManyInput>
    /**
     * Filter which usuario_rols to update
     */
    where?: usuario_rolWhereInput
    /**
     * Limit how many usuario_rols to update.
     */
    limit?: number
  }

  /**
   * usuario_rol updateManyAndReturn
   */
  export type usuario_rolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * The data used to update usuario_rols.
     */
    data: XOR<usuario_rolUpdateManyMutationInput, usuario_rolUncheckedUpdateManyInput>
    /**
     * Filter which usuario_rols to update
     */
    where?: usuario_rolWhereInput
    /**
     * Limit how many usuario_rols to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuario_rol upsert
   */
  export type usuario_rolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario_rol to update in case it exists.
     */
    where: usuario_rolWhereUniqueInput
    /**
     * In case the usuario_rol found by the `where` argument doesn't exist, create a new usuario_rol with this data.
     */
    create: XOR<usuario_rolCreateInput, usuario_rolUncheckedCreateInput>
    /**
     * In case the usuario_rol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuario_rolUpdateInput, usuario_rolUncheckedUpdateInput>
  }

  /**
   * usuario_rol delete
   */
  export type usuario_rolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    /**
     * Filter which usuario_rol to delete.
     */
    where: usuario_rolWhereUniqueInput
  }

  /**
   * usuario_rol deleteMany
   */
  export type usuario_rolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario_rols to delete
     */
    where?: usuario_rolWhereInput
    /**
     * Limit how many usuario_rols to delete.
     */
    limit?: number
  }

  /**
   * usuario_rol without action
   */
  export type usuario_rolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
  }


  /**
   * Model videojuego
   */

  export type AggregateVideojuego = {
    _count: VideojuegoCountAggregateOutputType | null
    _avg: VideojuegoAvgAggregateOutputType | null
    _sum: VideojuegoSumAggregateOutputType | null
    _min: VideojuegoMinAggregateOutputType | null
    _max: VideojuegoMaxAggregateOutputType | null
  }

  export type VideojuegoAvgAggregateOutputType = {
    id_videojuego: number | null
    id_equipo: number | null
  }

  export type VideojuegoSumAggregateOutputType = {
    id_videojuego: number | null
    id_equipo: number | null
  }

  export type VideojuegoMinAggregateOutputType = {
    id_videojuego: number | null
    id_equipo: number | null
    nombre: string | null
    descripcion: string | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    estado: boolean | null
    token_captcha: string | null
  }

  export type VideojuegoMaxAggregateOutputType = {
    id_videojuego: number | null
    id_equipo: number | null
    nombre: string | null
    descripcion: string | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    estado: boolean | null
    token_captcha: string | null
  }

  export type VideojuegoCountAggregateOutputType = {
    id_videojuego: number
    id_equipo: number
    nombre: number
    descripcion: number
    fecha_creacion: number
    fecha_actualizacion: number
    estado: number
    token_captcha: number
    _all: number
  }


  export type VideojuegoAvgAggregateInputType = {
    id_videojuego?: true
    id_equipo?: true
  }

  export type VideojuegoSumAggregateInputType = {
    id_videojuego?: true
    id_equipo?: true
  }

  export type VideojuegoMinAggregateInputType = {
    id_videojuego?: true
    id_equipo?: true
    nombre?: true
    descripcion?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
    token_captcha?: true
  }

  export type VideojuegoMaxAggregateInputType = {
    id_videojuego?: true
    id_equipo?: true
    nombre?: true
    descripcion?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
    token_captcha?: true
  }

  export type VideojuegoCountAggregateInputType = {
    id_videojuego?: true
    id_equipo?: true
    nombre?: true
    descripcion?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    estado?: true
    token_captcha?: true
    _all?: true
  }

  export type VideojuegoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which videojuego to aggregate.
     */
    where?: videojuegoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videojuegos to fetch.
     */
    orderBy?: videojuegoOrderByWithRelationInput | videojuegoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: videojuegoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videojuegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videojuegos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned videojuegos
    **/
    _count?: true | VideojuegoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideojuegoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideojuegoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideojuegoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideojuegoMaxAggregateInputType
  }

  export type GetVideojuegoAggregateType<T extends VideojuegoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideojuego]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideojuego[P]>
      : GetScalarType<T[P], AggregateVideojuego[P]>
  }




  export type videojuegoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: videojuegoWhereInput
    orderBy?: videojuegoOrderByWithAggregationInput | videojuegoOrderByWithAggregationInput[]
    by: VideojuegoScalarFieldEnum[] | VideojuegoScalarFieldEnum
    having?: videojuegoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideojuegoCountAggregateInputType | true
    _avg?: VideojuegoAvgAggregateInputType
    _sum?: VideojuegoSumAggregateInputType
    _min?: VideojuegoMinAggregateInputType
    _max?: VideojuegoMaxAggregateInputType
  }

  export type VideojuegoGroupByOutputType = {
    id_videojuego: number
    id_equipo: number
    nombre: string
    descripcion: string | null
    fecha_creacion: Date
    fecha_actualizacion: Date | null
    estado: boolean
    token_captcha: string | null
    _count: VideojuegoCountAggregateOutputType | null
    _avg: VideojuegoAvgAggregateOutputType | null
    _sum: VideojuegoSumAggregateOutputType | null
    _min: VideojuegoMinAggregateOutputType | null
    _max: VideojuegoMaxAggregateOutputType | null
  }

  type GetVideojuegoGroupByPayload<T extends videojuegoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideojuegoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideojuegoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideojuegoGroupByOutputType[P]>
            : GetScalarType<T[P], VideojuegoGroupByOutputType[P]>
        }
      >
    >


  export type videojuegoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_videojuego?: boolean
    id_equipo?: boolean
    nombre?: boolean
    descripcion?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    token_captcha?: boolean
    evaluacion?: boolean | videojuego$evaluacionArgs<ExtArgs>
    equipo?: boolean | equipoDefaultArgs<ExtArgs>
    _count?: boolean | VideojuegoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videojuego"]>

  export type videojuegoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_videojuego?: boolean
    id_equipo?: boolean
    nombre?: boolean
    descripcion?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    token_captcha?: boolean
    equipo?: boolean | equipoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videojuego"]>

  export type videojuegoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_videojuego?: boolean
    id_equipo?: boolean
    nombre?: boolean
    descripcion?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    token_captcha?: boolean
    equipo?: boolean | equipoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videojuego"]>

  export type videojuegoSelectScalar = {
    id_videojuego?: boolean
    id_equipo?: boolean
    nombre?: boolean
    descripcion?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    estado?: boolean
    token_captcha?: boolean
  }

  export type videojuegoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_videojuego" | "id_equipo" | "nombre" | "descripcion" | "fecha_creacion" | "fecha_actualizacion" | "estado" | "token_captcha", ExtArgs["result"]["videojuego"]>
  export type videojuegoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluacion?: boolean | videojuego$evaluacionArgs<ExtArgs>
    equipo?: boolean | equipoDefaultArgs<ExtArgs>
    _count?: boolean | VideojuegoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type videojuegoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipo?: boolean | equipoDefaultArgs<ExtArgs>
  }
  export type videojuegoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipo?: boolean | equipoDefaultArgs<ExtArgs>
  }

  export type $videojuegoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "videojuego"
    objects: {
      evaluacion: Prisma.$evaluacionPayload<ExtArgs>[]
      equipo: Prisma.$equipoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_videojuego: number
      id_equipo: number
      nombre: string
      descripcion: string | null
      fecha_creacion: Date
      fecha_actualizacion: Date | null
      estado: boolean
      token_captcha: string | null
    }, ExtArgs["result"]["videojuego"]>
    composites: {}
  }

  type videojuegoGetPayload<S extends boolean | null | undefined | videojuegoDefaultArgs> = $Result.GetResult<Prisma.$videojuegoPayload, S>

  type videojuegoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<videojuegoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideojuegoCountAggregateInputType | true
    }

  export interface videojuegoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['videojuego'], meta: { name: 'videojuego' } }
    /**
     * Find zero or one Videojuego that matches the filter.
     * @param {videojuegoFindUniqueArgs} args - Arguments to find a Videojuego
     * @example
     * // Get one Videojuego
     * const videojuego = await prisma.videojuego.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends videojuegoFindUniqueArgs>(args: SelectSubset<T, videojuegoFindUniqueArgs<ExtArgs>>): Prisma__videojuegoClient<$Result.GetResult<Prisma.$videojuegoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Videojuego that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {videojuegoFindUniqueOrThrowArgs} args - Arguments to find a Videojuego
     * @example
     * // Get one Videojuego
     * const videojuego = await prisma.videojuego.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends videojuegoFindUniqueOrThrowArgs>(args: SelectSubset<T, videojuegoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__videojuegoClient<$Result.GetResult<Prisma.$videojuegoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Videojuego that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videojuegoFindFirstArgs} args - Arguments to find a Videojuego
     * @example
     * // Get one Videojuego
     * const videojuego = await prisma.videojuego.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends videojuegoFindFirstArgs>(args?: SelectSubset<T, videojuegoFindFirstArgs<ExtArgs>>): Prisma__videojuegoClient<$Result.GetResult<Prisma.$videojuegoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Videojuego that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videojuegoFindFirstOrThrowArgs} args - Arguments to find a Videojuego
     * @example
     * // Get one Videojuego
     * const videojuego = await prisma.videojuego.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends videojuegoFindFirstOrThrowArgs>(args?: SelectSubset<T, videojuegoFindFirstOrThrowArgs<ExtArgs>>): Prisma__videojuegoClient<$Result.GetResult<Prisma.$videojuegoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videojuegos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videojuegoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videojuegos
     * const videojuegos = await prisma.videojuego.findMany()
     * 
     * // Get first 10 Videojuegos
     * const videojuegos = await prisma.videojuego.findMany({ take: 10 })
     * 
     * // Only select the `id_videojuego`
     * const videojuegoWithId_videojuegoOnly = await prisma.videojuego.findMany({ select: { id_videojuego: true } })
     * 
     */
    findMany<T extends videojuegoFindManyArgs>(args?: SelectSubset<T, videojuegoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videojuegoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Videojuego.
     * @param {videojuegoCreateArgs} args - Arguments to create a Videojuego.
     * @example
     * // Create one Videojuego
     * const Videojuego = await prisma.videojuego.create({
     *   data: {
     *     // ... data to create a Videojuego
     *   }
     * })
     * 
     */
    create<T extends videojuegoCreateArgs>(args: SelectSubset<T, videojuegoCreateArgs<ExtArgs>>): Prisma__videojuegoClient<$Result.GetResult<Prisma.$videojuegoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videojuegos.
     * @param {videojuegoCreateManyArgs} args - Arguments to create many Videojuegos.
     * @example
     * // Create many Videojuegos
     * const videojuego = await prisma.videojuego.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends videojuegoCreateManyArgs>(args?: SelectSubset<T, videojuegoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Videojuegos and returns the data saved in the database.
     * @param {videojuegoCreateManyAndReturnArgs} args - Arguments to create many Videojuegos.
     * @example
     * // Create many Videojuegos
     * const videojuego = await prisma.videojuego.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Videojuegos and only return the `id_videojuego`
     * const videojuegoWithId_videojuegoOnly = await prisma.videojuego.createManyAndReturn({
     *   select: { id_videojuego: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends videojuegoCreateManyAndReturnArgs>(args?: SelectSubset<T, videojuegoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videojuegoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Videojuego.
     * @param {videojuegoDeleteArgs} args - Arguments to delete one Videojuego.
     * @example
     * // Delete one Videojuego
     * const Videojuego = await prisma.videojuego.delete({
     *   where: {
     *     // ... filter to delete one Videojuego
     *   }
     * })
     * 
     */
    delete<T extends videojuegoDeleteArgs>(args: SelectSubset<T, videojuegoDeleteArgs<ExtArgs>>): Prisma__videojuegoClient<$Result.GetResult<Prisma.$videojuegoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Videojuego.
     * @param {videojuegoUpdateArgs} args - Arguments to update one Videojuego.
     * @example
     * // Update one Videojuego
     * const videojuego = await prisma.videojuego.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends videojuegoUpdateArgs>(args: SelectSubset<T, videojuegoUpdateArgs<ExtArgs>>): Prisma__videojuegoClient<$Result.GetResult<Prisma.$videojuegoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videojuegos.
     * @param {videojuegoDeleteManyArgs} args - Arguments to filter Videojuegos to delete.
     * @example
     * // Delete a few Videojuegos
     * const { count } = await prisma.videojuego.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends videojuegoDeleteManyArgs>(args?: SelectSubset<T, videojuegoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videojuegos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videojuegoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videojuegos
     * const videojuego = await prisma.videojuego.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends videojuegoUpdateManyArgs>(args: SelectSubset<T, videojuegoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videojuegos and returns the data updated in the database.
     * @param {videojuegoUpdateManyAndReturnArgs} args - Arguments to update many Videojuegos.
     * @example
     * // Update many Videojuegos
     * const videojuego = await prisma.videojuego.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Videojuegos and only return the `id_videojuego`
     * const videojuegoWithId_videojuegoOnly = await prisma.videojuego.updateManyAndReturn({
     *   select: { id_videojuego: true },
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
    updateManyAndReturn<T extends videojuegoUpdateManyAndReturnArgs>(args: SelectSubset<T, videojuegoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videojuegoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Videojuego.
     * @param {videojuegoUpsertArgs} args - Arguments to update or create a Videojuego.
     * @example
     * // Update or create a Videojuego
     * const videojuego = await prisma.videojuego.upsert({
     *   create: {
     *     // ... data to create a Videojuego
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Videojuego we want to update
     *   }
     * })
     */
    upsert<T extends videojuegoUpsertArgs>(args: SelectSubset<T, videojuegoUpsertArgs<ExtArgs>>): Prisma__videojuegoClient<$Result.GetResult<Prisma.$videojuegoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videojuegos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videojuegoCountArgs} args - Arguments to filter Videojuegos to count.
     * @example
     * // Count the number of Videojuegos
     * const count = await prisma.videojuego.count({
     *   where: {
     *     // ... the filter for the Videojuegos we want to count
     *   }
     * })
    **/
    count<T extends videojuegoCountArgs>(
      args?: Subset<T, videojuegoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideojuegoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Videojuego.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideojuegoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideojuegoAggregateArgs>(args: Subset<T, VideojuegoAggregateArgs>): Prisma.PrismaPromise<GetVideojuegoAggregateType<T>>

    /**
     * Group by Videojuego.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videojuegoGroupByArgs} args - Group by arguments.
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
      T extends videojuegoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: videojuegoGroupByArgs['orderBy'] }
        : { orderBy?: videojuegoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, videojuegoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideojuegoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the videojuego model
   */
  readonly fields: videojuegoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for videojuego.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__videojuegoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evaluacion<T extends videojuego$evaluacionArgs<ExtArgs> = {}>(args?: Subset<T, videojuego$evaluacionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$evaluacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    equipo<T extends equipoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, equipoDefaultArgs<ExtArgs>>): Prisma__equipoClient<$Result.GetResult<Prisma.$equipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the videojuego model
   */
  interface videojuegoFieldRefs {
    readonly id_videojuego: FieldRef<"videojuego", 'Int'>
    readonly id_equipo: FieldRef<"videojuego", 'Int'>
    readonly nombre: FieldRef<"videojuego", 'String'>
    readonly descripcion: FieldRef<"videojuego", 'String'>
    readonly fecha_creacion: FieldRef<"videojuego", 'DateTime'>
    readonly fecha_actualizacion: FieldRef<"videojuego", 'DateTime'>
    readonly estado: FieldRef<"videojuego", 'Boolean'>
    readonly token_captcha: FieldRef<"videojuego", 'String'>
  }
    

  // Custom InputTypes
  /**
   * videojuego findUnique
   */
  export type videojuegoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videojuego
     */
    select?: videojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videojuego
     */
    omit?: videojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videojuegoInclude<ExtArgs> | null
    /**
     * Filter, which videojuego to fetch.
     */
    where: videojuegoWhereUniqueInput
  }

  /**
   * videojuego findUniqueOrThrow
   */
  export type videojuegoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videojuego
     */
    select?: videojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videojuego
     */
    omit?: videojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videojuegoInclude<ExtArgs> | null
    /**
     * Filter, which videojuego to fetch.
     */
    where: videojuegoWhereUniqueInput
  }

  /**
   * videojuego findFirst
   */
  export type videojuegoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videojuego
     */
    select?: videojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videojuego
     */
    omit?: videojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videojuegoInclude<ExtArgs> | null
    /**
     * Filter, which videojuego to fetch.
     */
    where?: videojuegoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videojuegos to fetch.
     */
    orderBy?: videojuegoOrderByWithRelationInput | videojuegoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for videojuegos.
     */
    cursor?: videojuegoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videojuegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videojuegos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of videojuegos.
     */
    distinct?: VideojuegoScalarFieldEnum | VideojuegoScalarFieldEnum[]
  }

  /**
   * videojuego findFirstOrThrow
   */
  export type videojuegoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videojuego
     */
    select?: videojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videojuego
     */
    omit?: videojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videojuegoInclude<ExtArgs> | null
    /**
     * Filter, which videojuego to fetch.
     */
    where?: videojuegoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videojuegos to fetch.
     */
    orderBy?: videojuegoOrderByWithRelationInput | videojuegoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for videojuegos.
     */
    cursor?: videojuegoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videojuegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videojuegos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of videojuegos.
     */
    distinct?: VideojuegoScalarFieldEnum | VideojuegoScalarFieldEnum[]
  }

  /**
   * videojuego findMany
   */
  export type videojuegoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videojuego
     */
    select?: videojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videojuego
     */
    omit?: videojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videojuegoInclude<ExtArgs> | null
    /**
     * Filter, which videojuegos to fetch.
     */
    where?: videojuegoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videojuegos to fetch.
     */
    orderBy?: videojuegoOrderByWithRelationInput | videojuegoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing videojuegos.
     */
    cursor?: videojuegoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videojuegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videojuegos.
     */
    skip?: number
    distinct?: VideojuegoScalarFieldEnum | VideojuegoScalarFieldEnum[]
  }

  /**
   * videojuego create
   */
  export type videojuegoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videojuego
     */
    select?: videojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videojuego
     */
    omit?: videojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videojuegoInclude<ExtArgs> | null
    /**
     * The data needed to create a videojuego.
     */
    data: XOR<videojuegoCreateInput, videojuegoUncheckedCreateInput>
  }

  /**
   * videojuego createMany
   */
  export type videojuegoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many videojuegos.
     */
    data: videojuegoCreateManyInput | videojuegoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * videojuego createManyAndReturn
   */
  export type videojuegoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videojuego
     */
    select?: videojuegoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the videojuego
     */
    omit?: videojuegoOmit<ExtArgs> | null
    /**
     * The data used to create many videojuegos.
     */
    data: videojuegoCreateManyInput | videojuegoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videojuegoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * videojuego update
   */
  export type videojuegoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videojuego
     */
    select?: videojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videojuego
     */
    omit?: videojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videojuegoInclude<ExtArgs> | null
    /**
     * The data needed to update a videojuego.
     */
    data: XOR<videojuegoUpdateInput, videojuegoUncheckedUpdateInput>
    /**
     * Choose, which videojuego to update.
     */
    where: videojuegoWhereUniqueInput
  }

  /**
   * videojuego updateMany
   */
  export type videojuegoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update videojuegos.
     */
    data: XOR<videojuegoUpdateManyMutationInput, videojuegoUncheckedUpdateManyInput>
    /**
     * Filter which videojuegos to update
     */
    where?: videojuegoWhereInput
    /**
     * Limit how many videojuegos to update.
     */
    limit?: number
  }

  /**
   * videojuego updateManyAndReturn
   */
  export type videojuegoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videojuego
     */
    select?: videojuegoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the videojuego
     */
    omit?: videojuegoOmit<ExtArgs> | null
    /**
     * The data used to update videojuegos.
     */
    data: XOR<videojuegoUpdateManyMutationInput, videojuegoUncheckedUpdateManyInput>
    /**
     * Filter which videojuegos to update
     */
    where?: videojuegoWhereInput
    /**
     * Limit how many videojuegos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videojuegoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * videojuego upsert
   */
  export type videojuegoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videojuego
     */
    select?: videojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videojuego
     */
    omit?: videojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videojuegoInclude<ExtArgs> | null
    /**
     * The filter to search for the videojuego to update in case it exists.
     */
    where: videojuegoWhereUniqueInput
    /**
     * In case the videojuego found by the `where` argument doesn't exist, create a new videojuego with this data.
     */
    create: XOR<videojuegoCreateInput, videojuegoUncheckedCreateInput>
    /**
     * In case the videojuego was found with the provided `where` argument, update it with this data.
     */
    update: XOR<videojuegoUpdateInput, videojuegoUncheckedUpdateInput>
  }

  /**
   * videojuego delete
   */
  export type videojuegoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videojuego
     */
    select?: videojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videojuego
     */
    omit?: videojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videojuegoInclude<ExtArgs> | null
    /**
     * Filter which videojuego to delete.
     */
    where: videojuegoWhereUniqueInput
  }

  /**
   * videojuego deleteMany
   */
  export type videojuegoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which videojuegos to delete
     */
    where?: videojuegoWhereInput
    /**
     * Limit how many videojuegos to delete.
     */
    limit?: number
  }

  /**
   * videojuego.evaluacion
   */
  export type videojuego$evaluacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluacion
     */
    select?: evaluacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evaluacion
     */
    omit?: evaluacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluacionInclude<ExtArgs> | null
    where?: evaluacionWhereInput
    orderBy?: evaluacionOrderByWithRelationInput | evaluacionOrderByWithRelationInput[]
    cursor?: evaluacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvaluacionScalarFieldEnum | EvaluacionScalarFieldEnum[]
  }

  /**
   * videojuego without action
   */
  export type videojuegoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videojuego
     */
    select?: videojuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videojuego
     */
    omit?: videojuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videojuegoInclude<ExtArgs> | null
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


  export const CriterioScalarFieldEnum: {
    id_criterio: 'id_criterio',
    nombre: 'nombre',
    descripcion: 'descripcion',
    fecha_creacion: 'fecha_creacion',
    fecha_actualizacion: 'fecha_actualizacion',
    estado: 'estado',
    porcentaje: 'porcentaje'
  };

  export type CriterioScalarFieldEnum = (typeof CriterioScalarFieldEnum)[keyof typeof CriterioScalarFieldEnum]


  export const Criterio_evaluacionScalarFieldEnum: {
    id_criterio: 'id_criterio',
    id_evaluacion: 'id_evaluacion',
    valoracion: 'valoracion',
    fecha_creacion: 'fecha_creacion',
    fecha_actualizacion: 'fecha_actualizacion',
    estado: 'estado'
  };

  export type Criterio_evaluacionScalarFieldEnum = (typeof Criterio_evaluacionScalarFieldEnum)[keyof typeof Criterio_evaluacionScalarFieldEnum]


  export const EquipoScalarFieldEnum: {
    id_equipo: 'id_equipo',
    nombre: 'nombre',
    id_estado: 'id_estado',
    fecha_creacion: 'fecha_creacion',
    fecha_actualizacion: 'fecha_actualizacion',
    estado: 'estado'
  };

  export type EquipoScalarFieldEnum = (typeof EquipoScalarFieldEnum)[keyof typeof EquipoScalarFieldEnum]


  export const EstadoScalarFieldEnum: {
    id_estado: 'id_estado',
    estado: 'estado',
    created_at: 'created_at'
  };

  export type EstadoScalarFieldEnum = (typeof EstadoScalarFieldEnum)[keyof typeof EstadoScalarFieldEnum]


  export const EvaluacionScalarFieldEnum: {
    id_evaluacion: 'id_evaluacion',
    id_usuario: 'id_usuario',
    id_videojuegos: 'id_videojuegos',
    comentario: 'comentario',
    fecha_creacion: 'fecha_creacion',
    fecha_actualizacion: 'fecha_actualizacion',
    estado: 'estado'
  };

  export type EvaluacionScalarFieldEnum = (typeof EvaluacionScalarFieldEnum)[keyof typeof EvaluacionScalarFieldEnum]


  export const IntegranteScalarFieldEnum: {
    id_integrante: 'id_integrante',
    id_equipo: 'id_equipo',
    primer_nombre: 'primer_nombre',
    correo: 'correo',
    usuario_github: 'usuario_github',
    fecha_creacion: 'fecha_creacion',
    fecha_actualizacion: 'fecha_actualizacion',
    estado: 'estado'
  };

  export type IntegranteScalarFieldEnum = (typeof IntegranteScalarFieldEnum)[keyof typeof IntegranteScalarFieldEnum]


  export const Integrante_nrcScalarFieldEnum: {
    id_integrante: 'id_integrante',
    id_nrc: 'id_nrc',
    fecha_creacion: 'fecha_creacion',
    fecha_actualizacion: 'fecha_actualizacion',
    estado: 'estado'
  };

  export type Integrante_nrcScalarFieldEnum = (typeof Integrante_nrcScalarFieldEnum)[keyof typeof Integrante_nrcScalarFieldEnum]


  export const MateriaScalarFieldEnum: {
    id_materia: 'id_materia',
    nombre: 'nombre',
    codigo: 'codigo',
    fecha_creacion: 'fecha_creacion',
    fecha_actualizacion: 'fecha_actualizacion',
    estado: 'estado'
  };

  export type MateriaScalarFieldEnum = (typeof MateriaScalarFieldEnum)[keyof typeof MateriaScalarFieldEnum]


  export const NrcScalarFieldEnum: {
    id_nrc: 'id_nrc',
    id_materia: 'id_materia',
    codigo: 'codigo',
    activo: 'activo',
    id_usuario: 'id_usuario',
    fecha_creacion: 'fecha_creacion',
    fecha_actualizacion: 'fecha_actualizacion',
    estado: 'estado'
  };

  export type NrcScalarFieldEnum = (typeof NrcScalarFieldEnum)[keyof typeof NrcScalarFieldEnum]


  export const RolScalarFieldEnum: {
    id_rol: 'id_rol',
    rol: 'rol',
    fecha_creacion: 'fecha_creacion',
    fecha_actualizacion: 'fecha_actualizacion',
    estado: 'estado'
  };

  export type RolScalarFieldEnum = (typeof RolScalarFieldEnum)[keyof typeof RolScalarFieldEnum]


  export const ServicioScalarFieldEnum: {
    id_servicio: 'id_servicio',
    nombre: 'nombre',
    descripcion: 'descripcion',
    url: 'url',
    metodo: 'metodo',
    fecha_creacion: 'fecha_creacion',
    fecha_actualizacion: 'fecha_actualizacion',
    estado: 'estado'
  };

  export type ServicioScalarFieldEnum = (typeof ServicioScalarFieldEnum)[keyof typeof ServicioScalarFieldEnum]


  export const Rol_servicioScalarFieldEnum: {
    id_rol: 'id_rol',
    id_servicio: 'id_servicio',
    fecha_creacion: 'fecha_creacion',
    fecha_actualizacion: 'fecha_actualizacion',
    estado: 'estado'
  };

  export type Rol_servicioScalarFieldEnum = (typeof Rol_servicioScalarFieldEnum)[keyof typeof Rol_servicioScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    primer_nombre: 'primer_nombre',
    segundo_nombre: 'segundo_nombre',
    primer_apellido: 'primer_apellido',
    segundo_apellido: 'segundo_apellido',
    correo: 'correo',
    confirmado: 'confirmado',
    token_confirmacion: 'token_confirmacion',
    ultima_conexion: 'ultima_conexion',
    password: 'password',
    fecha_actualizacion: 'fecha_actualizacion',
    fecha_creacion: 'fecha_creacion',
    estado: 'estado'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const Usuario_rolScalarFieldEnum: {
    id_usuario: 'id_usuario',
    id_rol: 'id_rol',
    fecha_creacion: 'fecha_creacion',
    fecha_actualizacion: 'fecha_actualizacion',
    estado: 'estado'
  };

  export type Usuario_rolScalarFieldEnum = (typeof Usuario_rolScalarFieldEnum)[keyof typeof Usuario_rolScalarFieldEnum]


  export const VideojuegoScalarFieldEnum: {
    id_videojuego: 'id_videojuego',
    id_equipo: 'id_equipo',
    nombre: 'nombre',
    descripcion: 'descripcion',
    fecha_creacion: 'fecha_creacion',
    fecha_actualizacion: 'fecha_actualizacion',
    estado: 'estado',
    token_captcha: 'token_captcha'
  };

  export type VideojuegoScalarFieldEnum = (typeof VideojuegoScalarFieldEnum)[keyof typeof VideojuegoScalarFieldEnum]


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


  export type criterioWhereInput = {
    AND?: criterioWhereInput | criterioWhereInput[]
    OR?: criterioWhereInput[]
    NOT?: criterioWhereInput | criterioWhereInput[]
    id_criterio?: IntFilter<"criterio"> | number
    nombre?: StringFilter<"criterio"> | string
    descripcion?: StringFilter<"criterio"> | string
    fecha_creacion?: DateTimeFilter<"criterio"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"criterio"> | Date | string | null
    estado?: BoolFilter<"criterio"> | boolean
    porcentaje?: FloatFilter<"criterio"> | number
    criterio_evaluacion?: Criterio_evaluacionListRelationFilter
  }

  export type criterioOrderByWithRelationInput = {
    id_criterio?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    estado?: SortOrder
    porcentaje?: SortOrder
    criterio_evaluacion?: criterio_evaluacionOrderByRelationAggregateInput
  }

  export type criterioWhereUniqueInput = Prisma.AtLeast<{
    id_criterio?: number
    AND?: criterioWhereInput | criterioWhereInput[]
    OR?: criterioWhereInput[]
    NOT?: criterioWhereInput | criterioWhereInput[]
    nombre?: StringFilter<"criterio"> | string
    descripcion?: StringFilter<"criterio"> | string
    fecha_creacion?: DateTimeFilter<"criterio"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"criterio"> | Date | string | null
    estado?: BoolFilter<"criterio"> | boolean
    porcentaje?: FloatFilter<"criterio"> | number
    criterio_evaluacion?: Criterio_evaluacionListRelationFilter
  }, "id_criterio">

  export type criterioOrderByWithAggregationInput = {
    id_criterio?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    estado?: SortOrder
    porcentaje?: SortOrder
    _count?: criterioCountOrderByAggregateInput
    _avg?: criterioAvgOrderByAggregateInput
    _max?: criterioMaxOrderByAggregateInput
    _min?: criterioMinOrderByAggregateInput
    _sum?: criterioSumOrderByAggregateInput
  }

  export type criterioScalarWhereWithAggregatesInput = {
    AND?: criterioScalarWhereWithAggregatesInput | criterioScalarWhereWithAggregatesInput[]
    OR?: criterioScalarWhereWithAggregatesInput[]
    NOT?: criterioScalarWhereWithAggregatesInput | criterioScalarWhereWithAggregatesInput[]
    id_criterio?: IntWithAggregatesFilter<"criterio"> | number
    nombre?: StringWithAggregatesFilter<"criterio"> | string
    descripcion?: StringWithAggregatesFilter<"criterio"> | string
    fecha_creacion?: DateTimeWithAggregatesFilter<"criterio"> | Date | string
    fecha_actualizacion?: DateTimeNullableWithAggregatesFilter<"criterio"> | Date | string | null
    estado?: BoolWithAggregatesFilter<"criterio"> | boolean
    porcentaje?: FloatWithAggregatesFilter<"criterio"> | number
  }

  export type criterio_evaluacionWhereInput = {
    AND?: criterio_evaluacionWhereInput | criterio_evaluacionWhereInput[]
    OR?: criterio_evaluacionWhereInput[]
    NOT?: criterio_evaluacionWhereInput | criterio_evaluacionWhereInput[]
    id_criterio?: IntFilter<"criterio_evaluacion"> | number
    id_evaluacion?: IntFilter<"criterio_evaluacion"> | number
    valoracion?: StringFilter<"criterio_evaluacion"> | string
    fecha_creacion?: DateTimeFilter<"criterio_evaluacion"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"criterio_evaluacion"> | Date | string | null
    estado?: BoolFilter<"criterio_evaluacion"> | boolean
    criterio?: XOR<CriterioScalarRelationFilter, criterioWhereInput>
    evaluacion?: XOR<EvaluacionScalarRelationFilter, evaluacionWhereInput>
  }

  export type criterio_evaluacionOrderByWithRelationInput = {
    id_criterio?: SortOrder
    id_evaluacion?: SortOrder
    valoracion?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    estado?: SortOrder
    criterio?: criterioOrderByWithRelationInput
    evaluacion?: evaluacionOrderByWithRelationInput
  }

  export type criterio_evaluacionWhereUniqueInput = Prisma.AtLeast<{
    id_criterio_id_evaluacion?: criterio_evaluacionId_criterioId_evaluacionCompoundUniqueInput
    AND?: criterio_evaluacionWhereInput | criterio_evaluacionWhereInput[]
    OR?: criterio_evaluacionWhereInput[]
    NOT?: criterio_evaluacionWhereInput | criterio_evaluacionWhereInput[]
    id_criterio?: IntFilter<"criterio_evaluacion"> | number
    id_evaluacion?: IntFilter<"criterio_evaluacion"> | number
    valoracion?: StringFilter<"criterio_evaluacion"> | string
    fecha_creacion?: DateTimeFilter<"criterio_evaluacion"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"criterio_evaluacion"> | Date | string | null
    estado?: BoolFilter<"criterio_evaluacion"> | boolean
    criterio?: XOR<CriterioScalarRelationFilter, criterioWhereInput>
    evaluacion?: XOR<EvaluacionScalarRelationFilter, evaluacionWhereInput>
  }, "id_criterio_id_evaluacion">

  export type criterio_evaluacionOrderByWithAggregationInput = {
    id_criterio?: SortOrder
    id_evaluacion?: SortOrder
    valoracion?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: criterio_evaluacionCountOrderByAggregateInput
    _avg?: criterio_evaluacionAvgOrderByAggregateInput
    _max?: criterio_evaluacionMaxOrderByAggregateInput
    _min?: criterio_evaluacionMinOrderByAggregateInput
    _sum?: criterio_evaluacionSumOrderByAggregateInput
  }

  export type criterio_evaluacionScalarWhereWithAggregatesInput = {
    AND?: criterio_evaluacionScalarWhereWithAggregatesInput | criterio_evaluacionScalarWhereWithAggregatesInput[]
    OR?: criterio_evaluacionScalarWhereWithAggregatesInput[]
    NOT?: criterio_evaluacionScalarWhereWithAggregatesInput | criterio_evaluacionScalarWhereWithAggregatesInput[]
    id_criterio?: IntWithAggregatesFilter<"criterio_evaluacion"> | number
    id_evaluacion?: IntWithAggregatesFilter<"criterio_evaluacion"> | number
    valoracion?: StringWithAggregatesFilter<"criterio_evaluacion"> | string
    fecha_creacion?: DateTimeWithAggregatesFilter<"criterio_evaluacion"> | Date | string
    fecha_actualizacion?: DateTimeNullableWithAggregatesFilter<"criterio_evaluacion"> | Date | string | null
    estado?: BoolWithAggregatesFilter<"criterio_evaluacion"> | boolean
  }

  export type equipoWhereInput = {
    AND?: equipoWhereInput | equipoWhereInput[]
    OR?: equipoWhereInput[]
    NOT?: equipoWhereInput | equipoWhereInput[]
    id_equipo?: IntFilter<"equipo"> | number
    nombre?: StringFilter<"equipo"> | string
    id_estado?: IntFilter<"equipo"> | number
    fecha_creacion?: DateTimeFilter<"equipo"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"equipo"> | Date | string | null
    estado?: BoolFilter<"equipo"> | boolean
    estado_equipo?: XOR<EstadoScalarRelationFilter, estadoWhereInput>
    integrante?: IntegranteListRelationFilter
    videojuego?: VideojuegoListRelationFilter
  }

  export type equipoOrderByWithRelationInput = {
    id_equipo?: SortOrder
    nombre?: SortOrder
    id_estado?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    estado?: SortOrder
    estado_equipo?: estadoOrderByWithRelationInput
    integrante?: integranteOrderByRelationAggregateInput
    videojuego?: videojuegoOrderByRelationAggregateInput
  }

  export type equipoWhereUniqueInput = Prisma.AtLeast<{
    id_equipo?: number
    AND?: equipoWhereInput | equipoWhereInput[]
    OR?: equipoWhereInput[]
    NOT?: equipoWhereInput | equipoWhereInput[]
    nombre?: StringFilter<"equipo"> | string
    id_estado?: IntFilter<"equipo"> | number
    fecha_creacion?: DateTimeFilter<"equipo"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"equipo"> | Date | string | null
    estado?: BoolFilter<"equipo"> | boolean
    estado_equipo?: XOR<EstadoScalarRelationFilter, estadoWhereInput>
    integrante?: IntegranteListRelationFilter
    videojuego?: VideojuegoListRelationFilter
  }, "id_equipo">

  export type equipoOrderByWithAggregationInput = {
    id_equipo?: SortOrder
    nombre?: SortOrder
    id_estado?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: equipoCountOrderByAggregateInput
    _avg?: equipoAvgOrderByAggregateInput
    _max?: equipoMaxOrderByAggregateInput
    _min?: equipoMinOrderByAggregateInput
    _sum?: equipoSumOrderByAggregateInput
  }

  export type equipoScalarWhereWithAggregatesInput = {
    AND?: equipoScalarWhereWithAggregatesInput | equipoScalarWhereWithAggregatesInput[]
    OR?: equipoScalarWhereWithAggregatesInput[]
    NOT?: equipoScalarWhereWithAggregatesInput | equipoScalarWhereWithAggregatesInput[]
    id_equipo?: IntWithAggregatesFilter<"equipo"> | number
    nombre?: StringWithAggregatesFilter<"equipo"> | string
    id_estado?: IntWithAggregatesFilter<"equipo"> | number
    fecha_creacion?: DateTimeWithAggregatesFilter<"equipo"> | Date | string
    fecha_actualizacion?: DateTimeNullableWithAggregatesFilter<"equipo"> | Date | string | null
    estado?: BoolWithAggregatesFilter<"equipo"> | boolean
  }

  export type estadoWhereInput = {
    AND?: estadoWhereInput | estadoWhereInput[]
    OR?: estadoWhereInput[]
    NOT?: estadoWhereInput | estadoWhereInput[]
    id_estado?: IntFilter<"estado"> | number
    estado?: StringFilter<"estado"> | string
    created_at?: DateTimeFilter<"estado"> | Date | string
    equipos?: EquipoListRelationFilter
  }

  export type estadoOrderByWithRelationInput = {
    id_estado?: SortOrder
    estado?: SortOrder
    created_at?: SortOrder
    equipos?: equipoOrderByRelationAggregateInput
  }

  export type estadoWhereUniqueInput = Prisma.AtLeast<{
    id_estado?: number
    AND?: estadoWhereInput | estadoWhereInput[]
    OR?: estadoWhereInput[]
    NOT?: estadoWhereInput | estadoWhereInput[]
    estado?: StringFilter<"estado"> | string
    created_at?: DateTimeFilter<"estado"> | Date | string
    equipos?: EquipoListRelationFilter
  }, "id_estado">

  export type estadoOrderByWithAggregationInput = {
    id_estado?: SortOrder
    estado?: SortOrder
    created_at?: SortOrder
    _count?: estadoCountOrderByAggregateInput
    _avg?: estadoAvgOrderByAggregateInput
    _max?: estadoMaxOrderByAggregateInput
    _min?: estadoMinOrderByAggregateInput
    _sum?: estadoSumOrderByAggregateInput
  }

  export type estadoScalarWhereWithAggregatesInput = {
    AND?: estadoScalarWhereWithAggregatesInput | estadoScalarWhereWithAggregatesInput[]
    OR?: estadoScalarWhereWithAggregatesInput[]
    NOT?: estadoScalarWhereWithAggregatesInput | estadoScalarWhereWithAggregatesInput[]
    id_estado?: IntWithAggregatesFilter<"estado"> | number
    estado?: StringWithAggregatesFilter<"estado"> | string
    created_at?: DateTimeWithAggregatesFilter<"estado"> | Date | string
  }

  export type evaluacionWhereInput = {
    AND?: evaluacionWhereInput | evaluacionWhereInput[]
    OR?: evaluacionWhereInput[]
    NOT?: evaluacionWhereInput | evaluacionWhereInput[]
    id_evaluacion?: IntFilter<"evaluacion"> | number
    id_usuario?: IntFilter<"evaluacion"> | number
    id_videojuegos?: IntFilter<"evaluacion"> | number
    comentario?: StringNullableFilter<"evaluacion"> | string | null
    fecha_creacion?: DateTimeFilter<"evaluacion"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"evaluacion"> | Date | string | null
    estado?: BoolFilter<"evaluacion"> | boolean
    criterio_evaluacion?: Criterio_evaluacionListRelationFilter
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    videojuego?: XOR<VideojuegoScalarRelationFilter, videojuegoWhereInput>
  }

  export type evaluacionOrderByWithRelationInput = {
    id_evaluacion?: SortOrder
    id_usuario?: SortOrder
    id_videojuegos?: SortOrder
    comentario?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    estado?: SortOrder
    criterio_evaluacion?: criterio_evaluacionOrderByRelationAggregateInput
    usuario?: usuarioOrderByWithRelationInput
    videojuego?: videojuegoOrderByWithRelationInput
  }

  export type evaluacionWhereUniqueInput = Prisma.AtLeast<{
    id_evaluacion?: number
    AND?: evaluacionWhereInput | evaluacionWhereInput[]
    OR?: evaluacionWhereInput[]
    NOT?: evaluacionWhereInput | evaluacionWhereInput[]
    id_usuario?: IntFilter<"evaluacion"> | number
    id_videojuegos?: IntFilter<"evaluacion"> | number
    comentario?: StringNullableFilter<"evaluacion"> | string | null
    fecha_creacion?: DateTimeFilter<"evaluacion"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"evaluacion"> | Date | string | null
    estado?: BoolFilter<"evaluacion"> | boolean
    criterio_evaluacion?: Criterio_evaluacionListRelationFilter
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    videojuego?: XOR<VideojuegoScalarRelationFilter, videojuegoWhereInput>
  }, "id_evaluacion">

  export type evaluacionOrderByWithAggregationInput = {
    id_evaluacion?: SortOrder
    id_usuario?: SortOrder
    id_videojuegos?: SortOrder
    comentario?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: evaluacionCountOrderByAggregateInput
    _avg?: evaluacionAvgOrderByAggregateInput
    _max?: evaluacionMaxOrderByAggregateInput
    _min?: evaluacionMinOrderByAggregateInput
    _sum?: evaluacionSumOrderByAggregateInput
  }

  export type evaluacionScalarWhereWithAggregatesInput = {
    AND?: evaluacionScalarWhereWithAggregatesInput | evaluacionScalarWhereWithAggregatesInput[]
    OR?: evaluacionScalarWhereWithAggregatesInput[]
    NOT?: evaluacionScalarWhereWithAggregatesInput | evaluacionScalarWhereWithAggregatesInput[]
    id_evaluacion?: IntWithAggregatesFilter<"evaluacion"> | number
    id_usuario?: IntWithAggregatesFilter<"evaluacion"> | number
    id_videojuegos?: IntWithAggregatesFilter<"evaluacion"> | number
    comentario?: StringNullableWithAggregatesFilter<"evaluacion"> | string | null
    fecha_creacion?: DateTimeWithAggregatesFilter<"evaluacion"> | Date | string
    fecha_actualizacion?: DateTimeNullableWithAggregatesFilter<"evaluacion"> | Date | string | null
    estado?: BoolWithAggregatesFilter<"evaluacion"> | boolean
  }

  export type integranteWhereInput = {
    AND?: integranteWhereInput | integranteWhereInput[]
    OR?: integranteWhereInput[]
    NOT?: integranteWhereInput | integranteWhereInput[]
    id_integrante?: IntFilter<"integrante"> | number
    id_equipo?: IntFilter<"integrante"> | number
    primer_nombre?: StringFilter<"integrante"> | string
    correo?: StringFilter<"integrante"> | string
    usuario_github?: StringFilter<"integrante"> | string
    fecha_creacion?: DateTimeFilter<"integrante"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"integrante"> | Date | string | null
    estado?: BoolFilter<"integrante"> | boolean
    equipo?: XOR<EquipoScalarRelationFilter, equipoWhereInput>
    integrante_nrc?: Integrante_nrcListRelationFilter
  }

  export type integranteOrderByWithRelationInput = {
    id_integrante?: SortOrder
    id_equipo?: SortOrder
    primer_nombre?: SortOrder
    correo?: SortOrder
    usuario_github?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    estado?: SortOrder
    equipo?: equipoOrderByWithRelationInput
    integrante_nrc?: integrante_nrcOrderByRelationAggregateInput
  }

  export type integranteWhereUniqueInput = Prisma.AtLeast<{
    id_integrante?: number
    AND?: integranteWhereInput | integranteWhereInput[]
    OR?: integranteWhereInput[]
    NOT?: integranteWhereInput | integranteWhereInput[]
    id_equipo?: IntFilter<"integrante"> | number
    primer_nombre?: StringFilter<"integrante"> | string
    correo?: StringFilter<"integrante"> | string
    usuario_github?: StringFilter<"integrante"> | string
    fecha_creacion?: DateTimeFilter<"integrante"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"integrante"> | Date | string | null
    estado?: BoolFilter<"integrante"> | boolean
    equipo?: XOR<EquipoScalarRelationFilter, equipoWhereInput>
    integrante_nrc?: Integrante_nrcListRelationFilter
  }, "id_integrante">

  export type integranteOrderByWithAggregationInput = {
    id_integrante?: SortOrder
    id_equipo?: SortOrder
    primer_nombre?: SortOrder
    correo?: SortOrder
    usuario_github?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: integranteCountOrderByAggregateInput
    _avg?: integranteAvgOrderByAggregateInput
    _max?: integranteMaxOrderByAggregateInput
    _min?: integranteMinOrderByAggregateInput
    _sum?: integranteSumOrderByAggregateInput
  }

  export type integranteScalarWhereWithAggregatesInput = {
    AND?: integranteScalarWhereWithAggregatesInput | integranteScalarWhereWithAggregatesInput[]
    OR?: integranteScalarWhereWithAggregatesInput[]
    NOT?: integranteScalarWhereWithAggregatesInput | integranteScalarWhereWithAggregatesInput[]
    id_integrante?: IntWithAggregatesFilter<"integrante"> | number
    id_equipo?: IntWithAggregatesFilter<"integrante"> | number
    primer_nombre?: StringWithAggregatesFilter<"integrante"> | string
    correo?: StringWithAggregatesFilter<"integrante"> | string
    usuario_github?: StringWithAggregatesFilter<"integrante"> | string
    fecha_creacion?: DateTimeWithAggregatesFilter<"integrante"> | Date | string
    fecha_actualizacion?: DateTimeNullableWithAggregatesFilter<"integrante"> | Date | string | null
    estado?: BoolWithAggregatesFilter<"integrante"> | boolean
  }

  export type integrante_nrcWhereInput = {
    AND?: integrante_nrcWhereInput | integrante_nrcWhereInput[]
    OR?: integrante_nrcWhereInput[]
    NOT?: integrante_nrcWhereInput | integrante_nrcWhereInput[]
    id_integrante?: IntFilter<"integrante_nrc"> | number
    id_nrc?: IntFilter<"integrante_nrc"> | number
    fecha_creacion?: DateTimeFilter<"integrante_nrc"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"integrante_nrc"> | Date | string | null
    estado?: BoolFilter<"integrante_nrc"> | boolean
    integrante?: XOR<IntegranteScalarRelationFilter, integranteWhereInput>
    nrc?: XOR<NrcScalarRelationFilter, nrcWhereInput>
  }

  export type integrante_nrcOrderByWithRelationInput = {
    id_integrante?: SortOrder
    id_nrc?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    estado?: SortOrder
    integrante?: integranteOrderByWithRelationInput
    nrc?: nrcOrderByWithRelationInput
  }

  export type integrante_nrcWhereUniqueInput = Prisma.AtLeast<{
    id_integrante_id_nrc?: integrante_nrcId_integranteId_nrcCompoundUniqueInput
    AND?: integrante_nrcWhereInput | integrante_nrcWhereInput[]
    OR?: integrante_nrcWhereInput[]
    NOT?: integrante_nrcWhereInput | integrante_nrcWhereInput[]
    id_integrante?: IntFilter<"integrante_nrc"> | number
    id_nrc?: IntFilter<"integrante_nrc"> | number
    fecha_creacion?: DateTimeFilter<"integrante_nrc"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"integrante_nrc"> | Date | string | null
    estado?: BoolFilter<"integrante_nrc"> | boolean
    integrante?: XOR<IntegranteScalarRelationFilter, integranteWhereInput>
    nrc?: XOR<NrcScalarRelationFilter, nrcWhereInput>
  }, "id_integrante_id_nrc">

  export type integrante_nrcOrderByWithAggregationInput = {
    id_integrante?: SortOrder
    id_nrc?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: integrante_nrcCountOrderByAggregateInput
    _avg?: integrante_nrcAvgOrderByAggregateInput
    _max?: integrante_nrcMaxOrderByAggregateInput
    _min?: integrante_nrcMinOrderByAggregateInput
    _sum?: integrante_nrcSumOrderByAggregateInput
  }

  export type integrante_nrcScalarWhereWithAggregatesInput = {
    AND?: integrante_nrcScalarWhereWithAggregatesInput | integrante_nrcScalarWhereWithAggregatesInput[]
    OR?: integrante_nrcScalarWhereWithAggregatesInput[]
    NOT?: integrante_nrcScalarWhereWithAggregatesInput | integrante_nrcScalarWhereWithAggregatesInput[]
    id_integrante?: IntWithAggregatesFilter<"integrante_nrc"> | number
    id_nrc?: IntWithAggregatesFilter<"integrante_nrc"> | number
    fecha_creacion?: DateTimeWithAggregatesFilter<"integrante_nrc"> | Date | string
    fecha_actualizacion?: DateTimeNullableWithAggregatesFilter<"integrante_nrc"> | Date | string | null
    estado?: BoolWithAggregatesFilter<"integrante_nrc"> | boolean
  }

  export type materiaWhereInput = {
    AND?: materiaWhereInput | materiaWhereInput[]
    OR?: materiaWhereInput[]
    NOT?: materiaWhereInput | materiaWhereInput[]
    id_materia?: IntFilter<"materia"> | number
    nombre?: StringFilter<"materia"> | string
    codigo?: StringFilter<"materia"> | string
    fecha_creacion?: DateTimeFilter<"materia"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"materia"> | Date | string | null
    estado?: BoolFilter<"materia"> | boolean
    nrc?: NrcListRelationFilter
  }

  export type materiaOrderByWithRelationInput = {
    id_materia?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    estado?: SortOrder
    nrc?: nrcOrderByRelationAggregateInput
  }

  export type materiaWhereUniqueInput = Prisma.AtLeast<{
    id_materia?: number
    AND?: materiaWhereInput | materiaWhereInput[]
    OR?: materiaWhereInput[]
    NOT?: materiaWhereInput | materiaWhereInput[]
    nombre?: StringFilter<"materia"> | string
    codigo?: StringFilter<"materia"> | string
    fecha_creacion?: DateTimeFilter<"materia"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"materia"> | Date | string | null
    estado?: BoolFilter<"materia"> | boolean
    nrc?: NrcListRelationFilter
  }, "id_materia">

  export type materiaOrderByWithAggregationInput = {
    id_materia?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: materiaCountOrderByAggregateInput
    _avg?: materiaAvgOrderByAggregateInput
    _max?: materiaMaxOrderByAggregateInput
    _min?: materiaMinOrderByAggregateInput
    _sum?: materiaSumOrderByAggregateInput
  }

  export type materiaScalarWhereWithAggregatesInput = {
    AND?: materiaScalarWhereWithAggregatesInput | materiaScalarWhereWithAggregatesInput[]
    OR?: materiaScalarWhereWithAggregatesInput[]
    NOT?: materiaScalarWhereWithAggregatesInput | materiaScalarWhereWithAggregatesInput[]
    id_materia?: IntWithAggregatesFilter<"materia"> | number
    nombre?: StringWithAggregatesFilter<"materia"> | string
    codigo?: StringWithAggregatesFilter<"materia"> | string
    fecha_creacion?: DateTimeWithAggregatesFilter<"materia"> | Date | string
    fecha_actualizacion?: DateTimeNullableWithAggregatesFilter<"materia"> | Date | string | null
    estado?: BoolWithAggregatesFilter<"materia"> | boolean
  }

  export type nrcWhereInput = {
    AND?: nrcWhereInput | nrcWhereInput[]
    OR?: nrcWhereInput[]
    NOT?: nrcWhereInput | nrcWhereInput[]
    id_nrc?: IntFilter<"nrc"> | number
    id_materia?: IntFilter<"nrc"> | number
    codigo?: StringFilter<"nrc"> | string
    activo?: BoolFilter<"nrc"> | boolean
    id_usuario?: IntFilter<"nrc"> | number
    fecha_creacion?: DateTimeFilter<"nrc"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"nrc"> | Date | string | null
    estado?: BoolFilter<"nrc"> | boolean
    integrante_nrc?: Integrante_nrcListRelationFilter
    materia?: XOR<MateriaScalarRelationFilter, materiaWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }

  export type nrcOrderByWithRelationInput = {
    id_nrc?: SortOrder
    id_materia?: SortOrder
    codigo?: SortOrder
    activo?: SortOrder
    id_usuario?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    estado?: SortOrder
    integrante_nrc?: integrante_nrcOrderByRelationAggregateInput
    materia?: materiaOrderByWithRelationInput
    usuario?: usuarioOrderByWithRelationInput
  }

  export type nrcWhereUniqueInput = Prisma.AtLeast<{
    id_nrc?: number
    AND?: nrcWhereInput | nrcWhereInput[]
    OR?: nrcWhereInput[]
    NOT?: nrcWhereInput | nrcWhereInput[]
    id_materia?: IntFilter<"nrc"> | number
    codigo?: StringFilter<"nrc"> | string
    activo?: BoolFilter<"nrc"> | boolean
    id_usuario?: IntFilter<"nrc"> | number
    fecha_creacion?: DateTimeFilter<"nrc"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"nrc"> | Date | string | null
    estado?: BoolFilter<"nrc"> | boolean
    integrante_nrc?: Integrante_nrcListRelationFilter
    materia?: XOR<MateriaScalarRelationFilter, materiaWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }, "id_nrc">

  export type nrcOrderByWithAggregationInput = {
    id_nrc?: SortOrder
    id_materia?: SortOrder
    codigo?: SortOrder
    activo?: SortOrder
    id_usuario?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: nrcCountOrderByAggregateInput
    _avg?: nrcAvgOrderByAggregateInput
    _max?: nrcMaxOrderByAggregateInput
    _min?: nrcMinOrderByAggregateInput
    _sum?: nrcSumOrderByAggregateInput
  }

  export type nrcScalarWhereWithAggregatesInput = {
    AND?: nrcScalarWhereWithAggregatesInput | nrcScalarWhereWithAggregatesInput[]
    OR?: nrcScalarWhereWithAggregatesInput[]
    NOT?: nrcScalarWhereWithAggregatesInput | nrcScalarWhereWithAggregatesInput[]
    id_nrc?: IntWithAggregatesFilter<"nrc"> | number
    id_materia?: IntWithAggregatesFilter<"nrc"> | number
    codigo?: StringWithAggregatesFilter<"nrc"> | string
    activo?: BoolWithAggregatesFilter<"nrc"> | boolean
    id_usuario?: IntWithAggregatesFilter<"nrc"> | number
    fecha_creacion?: DateTimeWithAggregatesFilter<"nrc"> | Date | string
    fecha_actualizacion?: DateTimeNullableWithAggregatesFilter<"nrc"> | Date | string | null
    estado?: BoolWithAggregatesFilter<"nrc"> | boolean
  }

  export type rolWhereInput = {
    AND?: rolWhereInput | rolWhereInput[]
    OR?: rolWhereInput[]
    NOT?: rolWhereInput | rolWhereInput[]
    id_rol?: IntFilter<"rol"> | number
    rol?: StringFilter<"rol"> | string
    fecha_creacion?: DateTimeFilter<"rol"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"rol"> | Date | string | null
    estado?: BoolFilter<"rol"> | boolean
    rol_servicio?: Rol_servicioListRelationFilter
    usuario_rol?: Usuario_rolListRelationFilter
  }

  export type rolOrderByWithRelationInput = {
    id_rol?: SortOrder
    rol?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    estado?: SortOrder
    rol_servicio?: rol_servicioOrderByRelationAggregateInput
    usuario_rol?: usuario_rolOrderByRelationAggregateInput
  }

  export type rolWhereUniqueInput = Prisma.AtLeast<{
    id_rol?: number
    AND?: rolWhereInput | rolWhereInput[]
    OR?: rolWhereInput[]
    NOT?: rolWhereInput | rolWhereInput[]
    rol?: StringFilter<"rol"> | string
    fecha_creacion?: DateTimeFilter<"rol"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"rol"> | Date | string | null
    estado?: BoolFilter<"rol"> | boolean
    rol_servicio?: Rol_servicioListRelationFilter
    usuario_rol?: Usuario_rolListRelationFilter
  }, "id_rol">

  export type rolOrderByWithAggregationInput = {
    id_rol?: SortOrder
    rol?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: rolCountOrderByAggregateInput
    _avg?: rolAvgOrderByAggregateInput
    _max?: rolMaxOrderByAggregateInput
    _min?: rolMinOrderByAggregateInput
    _sum?: rolSumOrderByAggregateInput
  }

  export type rolScalarWhereWithAggregatesInput = {
    AND?: rolScalarWhereWithAggregatesInput | rolScalarWhereWithAggregatesInput[]
    OR?: rolScalarWhereWithAggregatesInput[]
    NOT?: rolScalarWhereWithAggregatesInput | rolScalarWhereWithAggregatesInput[]
    id_rol?: IntWithAggregatesFilter<"rol"> | number
    rol?: StringWithAggregatesFilter<"rol"> | string
    fecha_creacion?: DateTimeWithAggregatesFilter<"rol"> | Date | string
    fecha_actualizacion?: DateTimeNullableWithAggregatesFilter<"rol"> | Date | string | null
    estado?: BoolWithAggregatesFilter<"rol"> | boolean
  }

  export type servicioWhereInput = {
    AND?: servicioWhereInput | servicioWhereInput[]
    OR?: servicioWhereInput[]
    NOT?: servicioWhereInput | servicioWhereInput[]
    id_servicio?: IntFilter<"servicio"> | number
    nombre?: StringFilter<"servicio"> | string
    descripcion?: StringFilter<"servicio"> | string
    url?: StringFilter<"servicio"> | string
    metodo?: StringFilter<"servicio"> | string
    fecha_creacion?: DateTimeNullableFilter<"servicio"> | Date | string | null
    fecha_actualizacion?: DateTimeNullableFilter<"servicio"> | Date | string | null
    estado?: BoolFilter<"servicio"> | boolean
    rol_servicio?: Rol_servicioListRelationFilter
  }

  export type servicioOrderByWithRelationInput = {
    id_servicio?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    url?: SortOrder
    metodo?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    estado?: SortOrder
    rol_servicio?: rol_servicioOrderByRelationAggregateInput
  }

  export type servicioWhereUniqueInput = Prisma.AtLeast<{
    id_servicio?: number
    AND?: servicioWhereInput | servicioWhereInput[]
    OR?: servicioWhereInput[]
    NOT?: servicioWhereInput | servicioWhereInput[]
    nombre?: StringFilter<"servicio"> | string
    descripcion?: StringFilter<"servicio"> | string
    url?: StringFilter<"servicio"> | string
    metodo?: StringFilter<"servicio"> | string
    fecha_creacion?: DateTimeNullableFilter<"servicio"> | Date | string | null
    fecha_actualizacion?: DateTimeNullableFilter<"servicio"> | Date | string | null
    estado?: BoolFilter<"servicio"> | boolean
    rol_servicio?: Rol_servicioListRelationFilter
  }, "id_servicio">

  export type servicioOrderByWithAggregationInput = {
    id_servicio?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    url?: SortOrder
    metodo?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: servicioCountOrderByAggregateInput
    _avg?: servicioAvgOrderByAggregateInput
    _max?: servicioMaxOrderByAggregateInput
    _min?: servicioMinOrderByAggregateInput
    _sum?: servicioSumOrderByAggregateInput
  }

  export type servicioScalarWhereWithAggregatesInput = {
    AND?: servicioScalarWhereWithAggregatesInput | servicioScalarWhereWithAggregatesInput[]
    OR?: servicioScalarWhereWithAggregatesInput[]
    NOT?: servicioScalarWhereWithAggregatesInput | servicioScalarWhereWithAggregatesInput[]
    id_servicio?: IntWithAggregatesFilter<"servicio"> | number
    nombre?: StringWithAggregatesFilter<"servicio"> | string
    descripcion?: StringWithAggregatesFilter<"servicio"> | string
    url?: StringWithAggregatesFilter<"servicio"> | string
    metodo?: StringWithAggregatesFilter<"servicio"> | string
    fecha_creacion?: DateTimeNullableWithAggregatesFilter<"servicio"> | Date | string | null
    fecha_actualizacion?: DateTimeNullableWithAggregatesFilter<"servicio"> | Date | string | null
    estado?: BoolWithAggregatesFilter<"servicio"> | boolean
  }

  export type rol_servicioWhereInput = {
    AND?: rol_servicioWhereInput | rol_servicioWhereInput[]
    OR?: rol_servicioWhereInput[]
    NOT?: rol_servicioWhereInput | rol_servicioWhereInput[]
    id_rol?: IntFilter<"rol_servicio"> | number
    id_servicio?: IntFilter<"rol_servicio"> | number
    fecha_creacion?: DateTimeNullableFilter<"rol_servicio"> | Date | string | null
    fecha_actualizacion?: DateTimeNullableFilter<"rol_servicio"> | Date | string | null
    estado?: BoolFilter<"rol_servicio"> | boolean
    rol?: XOR<RolScalarRelationFilter, rolWhereInput>
    servicio?: XOR<ServicioScalarRelationFilter, servicioWhereInput>
  }

  export type rol_servicioOrderByWithRelationInput = {
    id_rol?: SortOrder
    id_servicio?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    estado?: SortOrder
    rol?: rolOrderByWithRelationInput
    servicio?: servicioOrderByWithRelationInput
  }

  export type rol_servicioWhereUniqueInput = Prisma.AtLeast<{
    id_rol_id_servicio?: rol_servicioId_rolId_servicioCompoundUniqueInput
    AND?: rol_servicioWhereInput | rol_servicioWhereInput[]
    OR?: rol_servicioWhereInput[]
    NOT?: rol_servicioWhereInput | rol_servicioWhereInput[]
    id_rol?: IntFilter<"rol_servicio"> | number
    id_servicio?: IntFilter<"rol_servicio"> | number
    fecha_creacion?: DateTimeNullableFilter<"rol_servicio"> | Date | string | null
    fecha_actualizacion?: DateTimeNullableFilter<"rol_servicio"> | Date | string | null
    estado?: BoolFilter<"rol_servicio"> | boolean
    rol?: XOR<RolScalarRelationFilter, rolWhereInput>
    servicio?: XOR<ServicioScalarRelationFilter, servicioWhereInput>
  }, "id_rol_id_servicio">

  export type rol_servicioOrderByWithAggregationInput = {
    id_rol?: SortOrder
    id_servicio?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: rol_servicioCountOrderByAggregateInput
    _avg?: rol_servicioAvgOrderByAggregateInput
    _max?: rol_servicioMaxOrderByAggregateInput
    _min?: rol_servicioMinOrderByAggregateInput
    _sum?: rol_servicioSumOrderByAggregateInput
  }

  export type rol_servicioScalarWhereWithAggregatesInput = {
    AND?: rol_servicioScalarWhereWithAggregatesInput | rol_servicioScalarWhereWithAggregatesInput[]
    OR?: rol_servicioScalarWhereWithAggregatesInput[]
    NOT?: rol_servicioScalarWhereWithAggregatesInput | rol_servicioScalarWhereWithAggregatesInput[]
    id_rol?: IntWithAggregatesFilter<"rol_servicio"> | number
    id_servicio?: IntWithAggregatesFilter<"rol_servicio"> | number
    fecha_creacion?: DateTimeNullableWithAggregatesFilter<"rol_servicio"> | Date | string | null
    fecha_actualizacion?: DateTimeNullableWithAggregatesFilter<"rol_servicio"> | Date | string | null
    estado?: BoolWithAggregatesFilter<"rol_servicio"> | boolean
  }

  export type usuarioWhereInput = {
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    id_usuario?: IntFilter<"usuario"> | number
    primer_nombre?: StringFilter<"usuario"> | string
    segundo_nombre?: StringNullableFilter<"usuario"> | string | null
    primer_apellido?: StringFilter<"usuario"> | string
    segundo_apellido?: StringFilter<"usuario"> | string
    correo?: StringFilter<"usuario"> | string
    confirmado?: BoolFilter<"usuario"> | boolean
    token_confirmacion?: StringFilter<"usuario"> | string
    ultima_conexion?: DateTimeNullableFilter<"usuario"> | Date | string | null
    password?: StringNullableFilter<"usuario"> | string | null
    fecha_actualizacion?: DateTimeFilter<"usuario"> | Date | string
    fecha_creacion?: DateTimeNullableFilter<"usuario"> | Date | string | null
    estado?: BoolFilter<"usuario"> | boolean
    evaluacion?: EvaluacionListRelationFilter
    nrc?: NrcListRelationFilter
    usuario_rol?: Usuario_rolListRelationFilter
  }

  export type usuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    primer_nombre?: SortOrder
    segundo_nombre?: SortOrderInput | SortOrder
    primer_apellido?: SortOrder
    segundo_apellido?: SortOrder
    correo?: SortOrder
    confirmado?: SortOrder
    token_confirmacion?: SortOrder
    ultima_conexion?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    fecha_actualizacion?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    estado?: SortOrder
    evaluacion?: evaluacionOrderByRelationAggregateInput
    nrc?: nrcOrderByRelationAggregateInput
    usuario_rol?: usuario_rolOrderByRelationAggregateInput
  }

  export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    primer_nombre?: StringFilter<"usuario"> | string
    segundo_nombre?: StringNullableFilter<"usuario"> | string | null
    primer_apellido?: StringFilter<"usuario"> | string
    segundo_apellido?: StringFilter<"usuario"> | string
    correo?: StringFilter<"usuario"> | string
    confirmado?: BoolFilter<"usuario"> | boolean
    token_confirmacion?: StringFilter<"usuario"> | string
    ultima_conexion?: DateTimeNullableFilter<"usuario"> | Date | string | null
    password?: StringNullableFilter<"usuario"> | string | null
    fecha_actualizacion?: DateTimeFilter<"usuario"> | Date | string
    fecha_creacion?: DateTimeNullableFilter<"usuario"> | Date | string | null
    estado?: BoolFilter<"usuario"> | boolean
    evaluacion?: EvaluacionListRelationFilter
    nrc?: NrcListRelationFilter
    usuario_rol?: Usuario_rolListRelationFilter
  }, "id_usuario">

  export type usuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    primer_nombre?: SortOrder
    segundo_nombre?: SortOrderInput | SortOrder
    primer_apellido?: SortOrder
    segundo_apellido?: SortOrder
    correo?: SortOrder
    confirmado?: SortOrder
    token_confirmacion?: SortOrder
    ultima_conexion?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    fecha_actualizacion?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: usuarioCountOrderByAggregateInput
    _avg?: usuarioAvgOrderByAggregateInput
    _max?: usuarioMaxOrderByAggregateInput
    _min?: usuarioMinOrderByAggregateInput
    _sum?: usuarioSumOrderByAggregateInput
  }

  export type usuarioScalarWhereWithAggregatesInput = {
    AND?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    OR?: usuarioScalarWhereWithAggregatesInput[]
    NOT?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"usuario"> | number
    primer_nombre?: StringWithAggregatesFilter<"usuario"> | string
    segundo_nombre?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    primer_apellido?: StringWithAggregatesFilter<"usuario"> | string
    segundo_apellido?: StringWithAggregatesFilter<"usuario"> | string
    correo?: StringWithAggregatesFilter<"usuario"> | string
    confirmado?: BoolWithAggregatesFilter<"usuario"> | boolean
    token_confirmacion?: StringWithAggregatesFilter<"usuario"> | string
    ultima_conexion?: DateTimeNullableWithAggregatesFilter<"usuario"> | Date | string | null
    password?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    fecha_actualizacion?: DateTimeWithAggregatesFilter<"usuario"> | Date | string
    fecha_creacion?: DateTimeNullableWithAggregatesFilter<"usuario"> | Date | string | null
    estado?: BoolWithAggregatesFilter<"usuario"> | boolean
  }

  export type usuario_rolWhereInput = {
    AND?: usuario_rolWhereInput | usuario_rolWhereInput[]
    OR?: usuario_rolWhereInput[]
    NOT?: usuario_rolWhereInput | usuario_rolWhereInput[]
    id_usuario?: IntFilter<"usuario_rol"> | number
    id_rol?: IntFilter<"usuario_rol"> | number
    fecha_creacion?: DateTimeFilter<"usuario_rol"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"usuario_rol"> | Date | string | null
    estado?: BoolFilter<"usuario_rol"> | boolean
    rol?: XOR<RolScalarRelationFilter, rolWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }

  export type usuario_rolOrderByWithRelationInput = {
    id_usuario?: SortOrder
    id_rol?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    estado?: SortOrder
    rol?: rolOrderByWithRelationInput
    usuario?: usuarioOrderByWithRelationInput
  }

  export type usuario_rolWhereUniqueInput = Prisma.AtLeast<{
    id_usuario_id_rol?: usuario_rolId_usuarioId_rolCompoundUniqueInput
    AND?: usuario_rolWhereInput | usuario_rolWhereInput[]
    OR?: usuario_rolWhereInput[]
    NOT?: usuario_rolWhereInput | usuario_rolWhereInput[]
    id_usuario?: IntFilter<"usuario_rol"> | number
    id_rol?: IntFilter<"usuario_rol"> | number
    fecha_creacion?: DateTimeFilter<"usuario_rol"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"usuario_rol"> | Date | string | null
    estado?: BoolFilter<"usuario_rol"> | boolean
    rol?: XOR<RolScalarRelationFilter, rolWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }, "id_usuario_id_rol">

  export type usuario_rolOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    id_rol?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: usuario_rolCountOrderByAggregateInput
    _avg?: usuario_rolAvgOrderByAggregateInput
    _max?: usuario_rolMaxOrderByAggregateInput
    _min?: usuario_rolMinOrderByAggregateInput
    _sum?: usuario_rolSumOrderByAggregateInput
  }

  export type usuario_rolScalarWhereWithAggregatesInput = {
    AND?: usuario_rolScalarWhereWithAggregatesInput | usuario_rolScalarWhereWithAggregatesInput[]
    OR?: usuario_rolScalarWhereWithAggregatesInput[]
    NOT?: usuario_rolScalarWhereWithAggregatesInput | usuario_rolScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"usuario_rol"> | number
    id_rol?: IntWithAggregatesFilter<"usuario_rol"> | number
    fecha_creacion?: DateTimeWithAggregatesFilter<"usuario_rol"> | Date | string
    fecha_actualizacion?: DateTimeNullableWithAggregatesFilter<"usuario_rol"> | Date | string | null
    estado?: BoolWithAggregatesFilter<"usuario_rol"> | boolean
  }

  export type videojuegoWhereInput = {
    AND?: videojuegoWhereInput | videojuegoWhereInput[]
    OR?: videojuegoWhereInput[]
    NOT?: videojuegoWhereInput | videojuegoWhereInput[]
    id_videojuego?: IntFilter<"videojuego"> | number
    id_equipo?: IntFilter<"videojuego"> | number
    nombre?: StringFilter<"videojuego"> | string
    descripcion?: StringNullableFilter<"videojuego"> | string | null
    fecha_creacion?: DateTimeFilter<"videojuego"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"videojuego"> | Date | string | null
    estado?: BoolFilter<"videojuego"> | boolean
    token_captcha?: StringNullableFilter<"videojuego"> | string | null
    evaluacion?: EvaluacionListRelationFilter
    equipo?: XOR<EquipoScalarRelationFilter, equipoWhereInput>
  }

  export type videojuegoOrderByWithRelationInput = {
    id_videojuego?: SortOrder
    id_equipo?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    estado?: SortOrder
    token_captcha?: SortOrderInput | SortOrder
    evaluacion?: evaluacionOrderByRelationAggregateInput
    equipo?: equipoOrderByWithRelationInput
  }

  export type videojuegoWhereUniqueInput = Prisma.AtLeast<{
    id_videojuego?: number
    AND?: videojuegoWhereInput | videojuegoWhereInput[]
    OR?: videojuegoWhereInput[]
    NOT?: videojuegoWhereInput | videojuegoWhereInput[]
    id_equipo?: IntFilter<"videojuego"> | number
    nombre?: StringFilter<"videojuego"> | string
    descripcion?: StringNullableFilter<"videojuego"> | string | null
    fecha_creacion?: DateTimeFilter<"videojuego"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"videojuego"> | Date | string | null
    estado?: BoolFilter<"videojuego"> | boolean
    token_captcha?: StringNullableFilter<"videojuego"> | string | null
    evaluacion?: EvaluacionListRelationFilter
    equipo?: XOR<EquipoScalarRelationFilter, equipoWhereInput>
  }, "id_videojuego">

  export type videojuegoOrderByWithAggregationInput = {
    id_videojuego?: SortOrder
    id_equipo?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    estado?: SortOrder
    token_captcha?: SortOrderInput | SortOrder
    _count?: videojuegoCountOrderByAggregateInput
    _avg?: videojuegoAvgOrderByAggregateInput
    _max?: videojuegoMaxOrderByAggregateInput
    _min?: videojuegoMinOrderByAggregateInput
    _sum?: videojuegoSumOrderByAggregateInput
  }

  export type videojuegoScalarWhereWithAggregatesInput = {
    AND?: videojuegoScalarWhereWithAggregatesInput | videojuegoScalarWhereWithAggregatesInput[]
    OR?: videojuegoScalarWhereWithAggregatesInput[]
    NOT?: videojuegoScalarWhereWithAggregatesInput | videojuegoScalarWhereWithAggregatesInput[]
    id_videojuego?: IntWithAggregatesFilter<"videojuego"> | number
    id_equipo?: IntWithAggregatesFilter<"videojuego"> | number
    nombre?: StringWithAggregatesFilter<"videojuego"> | string
    descripcion?: StringNullableWithAggregatesFilter<"videojuego"> | string | null
    fecha_creacion?: DateTimeWithAggregatesFilter<"videojuego"> | Date | string
    fecha_actualizacion?: DateTimeNullableWithAggregatesFilter<"videojuego"> | Date | string | null
    estado?: BoolWithAggregatesFilter<"videojuego"> | boolean
    token_captcha?: StringNullableWithAggregatesFilter<"videojuego"> | string | null
  }

  export type criterioCreateInput = {
    nombre: string
    descripcion: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    porcentaje?: number
    criterio_evaluacion?: criterio_evaluacionCreateNestedManyWithoutCriterioInput
  }

  export type criterioUncheckedCreateInput = {
    id_criterio?: number
    nombre: string
    descripcion: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    porcentaje?: number
    criterio_evaluacion?: criterio_evaluacionUncheckedCreateNestedManyWithoutCriterioInput
  }

  export type criterioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    porcentaje?: FloatFieldUpdateOperationsInput | number
    criterio_evaluacion?: criterio_evaluacionUpdateManyWithoutCriterioNestedInput
  }

  export type criterioUncheckedUpdateInput = {
    id_criterio?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    porcentaje?: FloatFieldUpdateOperationsInput | number
    criterio_evaluacion?: criterio_evaluacionUncheckedUpdateManyWithoutCriterioNestedInput
  }

  export type criterioCreateManyInput = {
    id_criterio?: number
    nombre: string
    descripcion: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    porcentaje?: number
  }

  export type criterioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    porcentaje?: FloatFieldUpdateOperationsInput | number
  }

  export type criterioUncheckedUpdateManyInput = {
    id_criterio?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    porcentaje?: FloatFieldUpdateOperationsInput | number
  }

  export type criterio_evaluacionCreateInput = {
    valoracion: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    criterio: criterioCreateNestedOneWithoutCriterio_evaluacionInput
    evaluacion: evaluacionCreateNestedOneWithoutCriterio_evaluacionInput
  }

  export type criterio_evaluacionUncheckedCreateInput = {
    id_criterio: number
    id_evaluacion: number
    valoracion: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type criterio_evaluacionUpdateInput = {
    valoracion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    criterio?: criterioUpdateOneRequiredWithoutCriterio_evaluacionNestedInput
    evaluacion?: evaluacionUpdateOneRequiredWithoutCriterio_evaluacionNestedInput
  }

  export type criterio_evaluacionUncheckedUpdateInput = {
    id_criterio?: IntFieldUpdateOperationsInput | number
    id_evaluacion?: IntFieldUpdateOperationsInput | number
    valoracion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type criterio_evaluacionCreateManyInput = {
    id_criterio: number
    id_evaluacion: number
    valoracion: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type criterio_evaluacionUpdateManyMutationInput = {
    valoracion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type criterio_evaluacionUncheckedUpdateManyInput = {
    id_criterio?: IntFieldUpdateOperationsInput | number
    id_evaluacion?: IntFieldUpdateOperationsInput | number
    valoracion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type equipoCreateInput = {
    nombre: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    estado_equipo: estadoCreateNestedOneWithoutEquiposInput
    integrante?: integranteCreateNestedManyWithoutEquipoInput
    videojuego?: videojuegoCreateNestedManyWithoutEquipoInput
  }

  export type equipoUncheckedCreateInput = {
    id_equipo?: number
    nombre: string
    id_estado: number
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    integrante?: integranteUncheckedCreateNestedManyWithoutEquipoInput
    videojuego?: videojuegoUncheckedCreateNestedManyWithoutEquipoInput
  }

  export type equipoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    estado_equipo?: estadoUpdateOneRequiredWithoutEquiposNestedInput
    integrante?: integranteUpdateManyWithoutEquipoNestedInput
    videojuego?: videojuegoUpdateManyWithoutEquipoNestedInput
  }

  export type equipoUncheckedUpdateInput = {
    id_equipo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    id_estado?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    integrante?: integranteUncheckedUpdateManyWithoutEquipoNestedInput
    videojuego?: videojuegoUncheckedUpdateManyWithoutEquipoNestedInput
  }

  export type equipoCreateManyInput = {
    id_equipo?: number
    nombre: string
    id_estado: number
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type equipoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type equipoUncheckedUpdateManyInput = {
    id_equipo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    id_estado?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type estadoCreateInput = {
    estado: string
    created_at?: Date | string
    equipos?: equipoCreateNestedManyWithoutEstado_equipoInput
  }

  export type estadoUncheckedCreateInput = {
    id_estado?: number
    estado: string
    created_at?: Date | string
    equipos?: equipoUncheckedCreateNestedManyWithoutEstado_equipoInput
  }

  export type estadoUpdateInput = {
    estado?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    equipos?: equipoUpdateManyWithoutEstado_equipoNestedInput
  }

  export type estadoUncheckedUpdateInput = {
    id_estado?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    equipos?: equipoUncheckedUpdateManyWithoutEstado_equipoNestedInput
  }

  export type estadoCreateManyInput = {
    id_estado?: number
    estado: string
    created_at?: Date | string
  }

  export type estadoUpdateManyMutationInput = {
    estado?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type estadoUncheckedUpdateManyInput = {
    id_estado?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type evaluacionCreateInput = {
    comentario?: string | null
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    criterio_evaluacion?: criterio_evaluacionCreateNestedManyWithoutEvaluacionInput
    usuario: usuarioCreateNestedOneWithoutEvaluacionInput
    videojuego: videojuegoCreateNestedOneWithoutEvaluacionInput
  }

  export type evaluacionUncheckedCreateInput = {
    id_evaluacion?: number
    id_usuario: number
    id_videojuegos: number
    comentario?: string | null
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    criterio_evaluacion?: criterio_evaluacionUncheckedCreateNestedManyWithoutEvaluacionInput
  }

  export type evaluacionUpdateInput = {
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    criterio_evaluacion?: criterio_evaluacionUpdateManyWithoutEvaluacionNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutEvaluacionNestedInput
    videojuego?: videojuegoUpdateOneRequiredWithoutEvaluacionNestedInput
  }

  export type evaluacionUncheckedUpdateInput = {
    id_evaluacion?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_videojuegos?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    criterio_evaluacion?: criterio_evaluacionUncheckedUpdateManyWithoutEvaluacionNestedInput
  }

  export type evaluacionCreateManyInput = {
    id_evaluacion?: number
    id_usuario: number
    id_videojuegos: number
    comentario?: string | null
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type evaluacionUpdateManyMutationInput = {
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type evaluacionUncheckedUpdateManyInput = {
    id_evaluacion?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_videojuegos?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type integranteCreateInput = {
    primer_nombre: string
    correo: string
    usuario_github: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    equipo: equipoCreateNestedOneWithoutIntegranteInput
    integrante_nrc?: integrante_nrcCreateNestedManyWithoutIntegranteInput
  }

  export type integranteUncheckedCreateInput = {
    id_integrante?: number
    id_equipo: number
    primer_nombre: string
    correo: string
    usuario_github: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    integrante_nrc?: integrante_nrcUncheckedCreateNestedManyWithoutIntegranteInput
  }

  export type integranteUpdateInput = {
    primer_nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    usuario_github?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    equipo?: equipoUpdateOneRequiredWithoutIntegranteNestedInput
    integrante_nrc?: integrante_nrcUpdateManyWithoutIntegranteNestedInput
  }

  export type integranteUncheckedUpdateInput = {
    id_integrante?: IntFieldUpdateOperationsInput | number
    id_equipo?: IntFieldUpdateOperationsInput | number
    primer_nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    usuario_github?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    integrante_nrc?: integrante_nrcUncheckedUpdateManyWithoutIntegranteNestedInput
  }

  export type integranteCreateManyInput = {
    id_integrante?: number
    id_equipo: number
    primer_nombre: string
    correo: string
    usuario_github: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type integranteUpdateManyMutationInput = {
    primer_nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    usuario_github?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type integranteUncheckedUpdateManyInput = {
    id_integrante?: IntFieldUpdateOperationsInput | number
    id_equipo?: IntFieldUpdateOperationsInput | number
    primer_nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    usuario_github?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type integrante_nrcCreateInput = {
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    integrante: integranteCreateNestedOneWithoutIntegrante_nrcInput
    nrc: nrcCreateNestedOneWithoutIntegrante_nrcInput
  }

  export type integrante_nrcUncheckedCreateInput = {
    id_integrante: number
    id_nrc: number
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type integrante_nrcUpdateInput = {
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    integrante?: integranteUpdateOneRequiredWithoutIntegrante_nrcNestedInput
    nrc?: nrcUpdateOneRequiredWithoutIntegrante_nrcNestedInput
  }

  export type integrante_nrcUncheckedUpdateInput = {
    id_integrante?: IntFieldUpdateOperationsInput | number
    id_nrc?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type integrante_nrcCreateManyInput = {
    id_integrante: number
    id_nrc: number
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type integrante_nrcUpdateManyMutationInput = {
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type integrante_nrcUncheckedUpdateManyInput = {
    id_integrante?: IntFieldUpdateOperationsInput | number
    id_nrc?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type materiaCreateInput = {
    nombre: string
    codigo: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    nrc?: nrcCreateNestedManyWithoutMateriaInput
  }

  export type materiaUncheckedCreateInput = {
    id_materia?: number
    nombre: string
    codigo: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    nrc?: nrcUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type materiaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    nrc?: nrcUpdateManyWithoutMateriaNestedInput
  }

  export type materiaUncheckedUpdateInput = {
    id_materia?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    nrc?: nrcUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type materiaCreateManyInput = {
    id_materia?: number
    nombre: string
    codigo: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type materiaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type materiaUncheckedUpdateManyInput = {
    id_materia?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type nrcCreateInput = {
    codigo: string
    activo: boolean
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    integrante_nrc?: integrante_nrcCreateNestedManyWithoutNrcInput
    materia: materiaCreateNestedOneWithoutNrcInput
    usuario: usuarioCreateNestedOneWithoutNrcInput
  }

  export type nrcUncheckedCreateInput = {
    id_nrc?: number
    id_materia: number
    codigo: string
    activo: boolean
    id_usuario: number
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    integrante_nrc?: integrante_nrcUncheckedCreateNestedManyWithoutNrcInput
  }

  export type nrcUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    integrante_nrc?: integrante_nrcUpdateManyWithoutNrcNestedInput
    materia?: materiaUpdateOneRequiredWithoutNrcNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutNrcNestedInput
  }

  export type nrcUncheckedUpdateInput = {
    id_nrc?: IntFieldUpdateOperationsInput | number
    id_materia?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    integrante_nrc?: integrante_nrcUncheckedUpdateManyWithoutNrcNestedInput
  }

  export type nrcCreateManyInput = {
    id_nrc?: number
    id_materia: number
    codigo: string
    activo: boolean
    id_usuario: number
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type nrcUpdateManyMutationInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type nrcUncheckedUpdateManyInput = {
    id_nrc?: IntFieldUpdateOperationsInput | number
    id_materia?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type rolCreateInput = {
    rol: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    rol_servicio?: rol_servicioCreateNestedManyWithoutRolInput
    usuario_rol?: usuario_rolCreateNestedManyWithoutRolInput
  }

  export type rolUncheckedCreateInput = {
    id_rol?: number
    rol: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    rol_servicio?: rol_servicioUncheckedCreateNestedManyWithoutRolInput
    usuario_rol?: usuario_rolUncheckedCreateNestedManyWithoutRolInput
  }

  export type rolUpdateInput = {
    rol?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    rol_servicio?: rol_servicioUpdateManyWithoutRolNestedInput
    usuario_rol?: usuario_rolUpdateManyWithoutRolNestedInput
  }

  export type rolUncheckedUpdateInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    rol?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    rol_servicio?: rol_servicioUncheckedUpdateManyWithoutRolNestedInput
    usuario_rol?: usuario_rolUncheckedUpdateManyWithoutRolNestedInput
  }

  export type rolCreateManyInput = {
    id_rol?: number
    rol: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type rolUpdateManyMutationInput = {
    rol?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type rolUncheckedUpdateManyInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    rol?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type servicioCreateInput = {
    nombre: string
    descripcion: string
    url: string
    metodo: string
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    estado: boolean
    rol_servicio?: rol_servicioCreateNestedManyWithoutServicioInput
  }

  export type servicioUncheckedCreateInput = {
    id_servicio?: number
    nombre: string
    descripcion: string
    url: string
    metodo: string
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    estado: boolean
    rol_servicio?: rol_servicioUncheckedCreateNestedManyWithoutServicioInput
  }

  export type servicioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    metodo?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    rol_servicio?: rol_servicioUpdateManyWithoutServicioNestedInput
  }

  export type servicioUncheckedUpdateInput = {
    id_servicio?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    metodo?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    rol_servicio?: rol_servicioUncheckedUpdateManyWithoutServicioNestedInput
  }

  export type servicioCreateManyInput = {
    id_servicio?: number
    nombre: string
    descripcion: string
    url: string
    metodo: string
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type servicioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    metodo?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type servicioUncheckedUpdateManyInput = {
    id_servicio?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    metodo?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type rol_servicioCreateInput = {
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    estado: boolean
    rol: rolCreateNestedOneWithoutRol_servicioInput
    servicio: servicioCreateNestedOneWithoutRol_servicioInput
  }

  export type rol_servicioUncheckedCreateInput = {
    id_rol: number
    id_servicio: number
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type rol_servicioUpdateInput = {
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    rol?: rolUpdateOneRequiredWithoutRol_servicioNestedInput
    servicio?: servicioUpdateOneRequiredWithoutRol_servicioNestedInput
  }

  export type rol_servicioUncheckedUpdateInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    id_servicio?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type rol_servicioCreateManyInput = {
    id_rol: number
    id_servicio: number
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type rol_servicioUpdateManyMutationInput = {
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type rol_servicioUncheckedUpdateManyInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    id_servicio?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usuarioCreateInput = {
    primer_nombre: string
    segundo_nombre?: string | null
    primer_apellido: string
    segundo_apellido: string
    correo: string
    confirmado?: boolean
    token_confirmacion: string
    ultima_conexion?: Date | string | null
    password?: string | null
    fecha_actualizacion?: Date | string
    fecha_creacion?: Date | string | null
    estado: boolean
    evaluacion?: evaluacionCreateNestedManyWithoutUsuarioInput
    nrc?: nrcCreateNestedManyWithoutUsuarioInput
    usuario_rol?: usuario_rolCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateInput = {
    id_usuario?: number
    primer_nombre: string
    segundo_nombre?: string | null
    primer_apellido: string
    segundo_apellido: string
    correo: string
    confirmado?: boolean
    token_confirmacion: string
    ultima_conexion?: Date | string | null
    password?: string | null
    fecha_actualizacion?: Date | string
    fecha_creacion?: Date | string | null
    estado: boolean
    evaluacion?: evaluacionUncheckedCreateNestedManyWithoutUsuarioInput
    nrc?: nrcUncheckedCreateNestedManyWithoutUsuarioInput
    usuario_rol?: usuario_rolUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUpdateInput = {
    primer_nombre?: StringFieldUpdateOperationsInput | string
    segundo_nombre?: NullableStringFieldUpdateOperationsInput | string | null
    primer_apellido?: StringFieldUpdateOperationsInput | string
    segundo_apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    confirmado?: BoolFieldUpdateOperationsInput | boolean
    token_confirmacion?: StringFieldUpdateOperationsInput | string
    ultima_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    evaluacion?: evaluacionUpdateManyWithoutUsuarioNestedInput
    nrc?: nrcUpdateManyWithoutUsuarioNestedInput
    usuario_rol?: usuario_rolUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    primer_nombre?: StringFieldUpdateOperationsInput | string
    segundo_nombre?: NullableStringFieldUpdateOperationsInput | string | null
    primer_apellido?: StringFieldUpdateOperationsInput | string
    segundo_apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    confirmado?: BoolFieldUpdateOperationsInput | boolean
    token_confirmacion?: StringFieldUpdateOperationsInput | string
    ultima_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    evaluacion?: evaluacionUncheckedUpdateManyWithoutUsuarioNestedInput
    nrc?: nrcUncheckedUpdateManyWithoutUsuarioNestedInput
    usuario_rol?: usuario_rolUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioCreateManyInput = {
    id_usuario?: number
    primer_nombre: string
    segundo_nombre?: string | null
    primer_apellido: string
    segundo_apellido: string
    correo: string
    confirmado?: boolean
    token_confirmacion: string
    ultima_conexion?: Date | string | null
    password?: string | null
    fecha_actualizacion?: Date | string
    fecha_creacion?: Date | string | null
    estado: boolean
  }

  export type usuarioUpdateManyMutationInput = {
    primer_nombre?: StringFieldUpdateOperationsInput | string
    segundo_nombre?: NullableStringFieldUpdateOperationsInput | string | null
    primer_apellido?: StringFieldUpdateOperationsInput | string
    segundo_apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    confirmado?: BoolFieldUpdateOperationsInput | boolean
    token_confirmacion?: StringFieldUpdateOperationsInput | string
    ultima_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usuarioUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    primer_nombre?: StringFieldUpdateOperationsInput | string
    segundo_nombre?: NullableStringFieldUpdateOperationsInput | string | null
    primer_apellido?: StringFieldUpdateOperationsInput | string
    segundo_apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    confirmado?: BoolFieldUpdateOperationsInput | boolean
    token_confirmacion?: StringFieldUpdateOperationsInput | string
    ultima_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usuario_rolCreateInput = {
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    rol: rolCreateNestedOneWithoutUsuario_rolInput
    usuario: usuarioCreateNestedOneWithoutUsuario_rolInput
  }

  export type usuario_rolUncheckedCreateInput = {
    id_usuario: number
    id_rol: number
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type usuario_rolUpdateInput = {
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    rol?: rolUpdateOneRequiredWithoutUsuario_rolNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutUsuario_rolNestedInput
  }

  export type usuario_rolUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_rol?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usuario_rolCreateManyInput = {
    id_usuario: number
    id_rol: number
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type usuario_rolUpdateManyMutationInput = {
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usuario_rolUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_rol?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type videojuegoCreateInput = {
    nombre: string
    descripcion?: string | null
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    token_captcha?: string | null
    evaluacion?: evaluacionCreateNestedManyWithoutVideojuegoInput
    equipo: equipoCreateNestedOneWithoutVideojuegoInput
  }

  export type videojuegoUncheckedCreateInput = {
    id_videojuego?: number
    id_equipo: number
    nombre: string
    descripcion?: string | null
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    token_captcha?: string | null
    evaluacion?: evaluacionUncheckedCreateNestedManyWithoutVideojuegoInput
  }

  export type videojuegoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    token_captcha?: NullableStringFieldUpdateOperationsInput | string | null
    evaluacion?: evaluacionUpdateManyWithoutVideojuegoNestedInput
    equipo?: equipoUpdateOneRequiredWithoutVideojuegoNestedInput
  }

  export type videojuegoUncheckedUpdateInput = {
    id_videojuego?: IntFieldUpdateOperationsInput | number
    id_equipo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    token_captcha?: NullableStringFieldUpdateOperationsInput | string | null
    evaluacion?: evaluacionUncheckedUpdateManyWithoutVideojuegoNestedInput
  }

  export type videojuegoCreateManyInput = {
    id_videojuego?: number
    id_equipo: number
    nombre: string
    descripcion?: string | null
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    token_captcha?: string | null
  }

  export type videojuegoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    token_captcha?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type videojuegoUncheckedUpdateManyInput = {
    id_videojuego?: IntFieldUpdateOperationsInput | number
    id_equipo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    token_captcha?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type Criterio_evaluacionListRelationFilter = {
    every?: criterio_evaluacionWhereInput
    some?: criterio_evaluacionWhereInput
    none?: criterio_evaluacionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type criterio_evaluacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type criterioCountOrderByAggregateInput = {
    id_criterio?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
    porcentaje?: SortOrder
  }

  export type criterioAvgOrderByAggregateInput = {
    id_criterio?: SortOrder
    porcentaje?: SortOrder
  }

  export type criterioMaxOrderByAggregateInput = {
    id_criterio?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
    porcentaje?: SortOrder
  }

  export type criterioMinOrderByAggregateInput = {
    id_criterio?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
    porcentaje?: SortOrder
  }

  export type criterioSumOrderByAggregateInput = {
    id_criterio?: SortOrder
    porcentaje?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type CriterioScalarRelationFilter = {
    is?: criterioWhereInput
    isNot?: criterioWhereInput
  }

  export type EvaluacionScalarRelationFilter = {
    is?: evaluacionWhereInput
    isNot?: evaluacionWhereInput
  }

  export type criterio_evaluacionId_criterioId_evaluacionCompoundUniqueInput = {
    id_criterio: number
    id_evaluacion: number
  }

  export type criterio_evaluacionCountOrderByAggregateInput = {
    id_criterio?: SortOrder
    id_evaluacion?: SortOrder
    valoracion?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type criterio_evaluacionAvgOrderByAggregateInput = {
    id_criterio?: SortOrder
    id_evaluacion?: SortOrder
  }

  export type criterio_evaluacionMaxOrderByAggregateInput = {
    id_criterio?: SortOrder
    id_evaluacion?: SortOrder
    valoracion?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type criterio_evaluacionMinOrderByAggregateInput = {
    id_criterio?: SortOrder
    id_evaluacion?: SortOrder
    valoracion?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type criterio_evaluacionSumOrderByAggregateInput = {
    id_criterio?: SortOrder
    id_evaluacion?: SortOrder
  }

  export type EstadoScalarRelationFilter = {
    is?: estadoWhereInput
    isNot?: estadoWhereInput
  }

  export type IntegranteListRelationFilter = {
    every?: integranteWhereInput
    some?: integranteWhereInput
    none?: integranteWhereInput
  }

  export type VideojuegoListRelationFilter = {
    every?: videojuegoWhereInput
    some?: videojuegoWhereInput
    none?: videojuegoWhereInput
  }

  export type integranteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type videojuegoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type equipoCountOrderByAggregateInput = {
    id_equipo?: SortOrder
    nombre?: SortOrder
    id_estado?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type equipoAvgOrderByAggregateInput = {
    id_equipo?: SortOrder
    id_estado?: SortOrder
  }

  export type equipoMaxOrderByAggregateInput = {
    id_equipo?: SortOrder
    nombre?: SortOrder
    id_estado?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type equipoMinOrderByAggregateInput = {
    id_equipo?: SortOrder
    nombre?: SortOrder
    id_estado?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type equipoSumOrderByAggregateInput = {
    id_equipo?: SortOrder
    id_estado?: SortOrder
  }

  export type EquipoListRelationFilter = {
    every?: equipoWhereInput
    some?: equipoWhereInput
    none?: equipoWhereInput
  }

  export type equipoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type estadoCountOrderByAggregateInput = {
    id_estado?: SortOrder
    estado?: SortOrder
    created_at?: SortOrder
  }

  export type estadoAvgOrderByAggregateInput = {
    id_estado?: SortOrder
  }

  export type estadoMaxOrderByAggregateInput = {
    id_estado?: SortOrder
    estado?: SortOrder
    created_at?: SortOrder
  }

  export type estadoMinOrderByAggregateInput = {
    id_estado?: SortOrder
    estado?: SortOrder
    created_at?: SortOrder
  }

  export type estadoSumOrderByAggregateInput = {
    id_estado?: SortOrder
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

  export type UsuarioScalarRelationFilter = {
    is?: usuarioWhereInput
    isNot?: usuarioWhereInput
  }

  export type VideojuegoScalarRelationFilter = {
    is?: videojuegoWhereInput
    isNot?: videojuegoWhereInput
  }

  export type evaluacionCountOrderByAggregateInput = {
    id_evaluacion?: SortOrder
    id_usuario?: SortOrder
    id_videojuegos?: SortOrder
    comentario?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type evaluacionAvgOrderByAggregateInput = {
    id_evaluacion?: SortOrder
    id_usuario?: SortOrder
    id_videojuegos?: SortOrder
  }

  export type evaluacionMaxOrderByAggregateInput = {
    id_evaluacion?: SortOrder
    id_usuario?: SortOrder
    id_videojuegos?: SortOrder
    comentario?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type evaluacionMinOrderByAggregateInput = {
    id_evaluacion?: SortOrder
    id_usuario?: SortOrder
    id_videojuegos?: SortOrder
    comentario?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type evaluacionSumOrderByAggregateInput = {
    id_evaluacion?: SortOrder
    id_usuario?: SortOrder
    id_videojuegos?: SortOrder
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

  export type EquipoScalarRelationFilter = {
    is?: equipoWhereInput
    isNot?: equipoWhereInput
  }

  export type Integrante_nrcListRelationFilter = {
    every?: integrante_nrcWhereInput
    some?: integrante_nrcWhereInput
    none?: integrante_nrcWhereInput
  }

  export type integrante_nrcOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type integranteCountOrderByAggregateInput = {
    id_integrante?: SortOrder
    id_equipo?: SortOrder
    primer_nombre?: SortOrder
    correo?: SortOrder
    usuario_github?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type integranteAvgOrderByAggregateInput = {
    id_integrante?: SortOrder
    id_equipo?: SortOrder
  }

  export type integranteMaxOrderByAggregateInput = {
    id_integrante?: SortOrder
    id_equipo?: SortOrder
    primer_nombre?: SortOrder
    correo?: SortOrder
    usuario_github?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type integranteMinOrderByAggregateInput = {
    id_integrante?: SortOrder
    id_equipo?: SortOrder
    primer_nombre?: SortOrder
    correo?: SortOrder
    usuario_github?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type integranteSumOrderByAggregateInput = {
    id_integrante?: SortOrder
    id_equipo?: SortOrder
  }

  export type IntegranteScalarRelationFilter = {
    is?: integranteWhereInput
    isNot?: integranteWhereInput
  }

  export type NrcScalarRelationFilter = {
    is?: nrcWhereInput
    isNot?: nrcWhereInput
  }

  export type integrante_nrcId_integranteId_nrcCompoundUniqueInput = {
    id_integrante: number
    id_nrc: number
  }

  export type integrante_nrcCountOrderByAggregateInput = {
    id_integrante?: SortOrder
    id_nrc?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type integrante_nrcAvgOrderByAggregateInput = {
    id_integrante?: SortOrder
    id_nrc?: SortOrder
  }

  export type integrante_nrcMaxOrderByAggregateInput = {
    id_integrante?: SortOrder
    id_nrc?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type integrante_nrcMinOrderByAggregateInput = {
    id_integrante?: SortOrder
    id_nrc?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type integrante_nrcSumOrderByAggregateInput = {
    id_integrante?: SortOrder
    id_nrc?: SortOrder
  }

  export type NrcListRelationFilter = {
    every?: nrcWhereInput
    some?: nrcWhereInput
    none?: nrcWhereInput
  }

  export type nrcOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type materiaCountOrderByAggregateInput = {
    id_materia?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type materiaAvgOrderByAggregateInput = {
    id_materia?: SortOrder
  }

  export type materiaMaxOrderByAggregateInput = {
    id_materia?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type materiaMinOrderByAggregateInput = {
    id_materia?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type materiaSumOrderByAggregateInput = {
    id_materia?: SortOrder
  }

  export type MateriaScalarRelationFilter = {
    is?: materiaWhereInput
    isNot?: materiaWhereInput
  }

  export type nrcCountOrderByAggregateInput = {
    id_nrc?: SortOrder
    id_materia?: SortOrder
    codigo?: SortOrder
    activo?: SortOrder
    id_usuario?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type nrcAvgOrderByAggregateInput = {
    id_nrc?: SortOrder
    id_materia?: SortOrder
    id_usuario?: SortOrder
  }

  export type nrcMaxOrderByAggregateInput = {
    id_nrc?: SortOrder
    id_materia?: SortOrder
    codigo?: SortOrder
    activo?: SortOrder
    id_usuario?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type nrcMinOrderByAggregateInput = {
    id_nrc?: SortOrder
    id_materia?: SortOrder
    codigo?: SortOrder
    activo?: SortOrder
    id_usuario?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type nrcSumOrderByAggregateInput = {
    id_nrc?: SortOrder
    id_materia?: SortOrder
    id_usuario?: SortOrder
  }

  export type Rol_servicioListRelationFilter = {
    every?: rol_servicioWhereInput
    some?: rol_servicioWhereInput
    none?: rol_servicioWhereInput
  }

  export type Usuario_rolListRelationFilter = {
    every?: usuario_rolWhereInput
    some?: usuario_rolWhereInput
    none?: usuario_rolWhereInput
  }

  export type rol_servicioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuario_rolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rolCountOrderByAggregateInput = {
    id_rol?: SortOrder
    rol?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type rolAvgOrderByAggregateInput = {
    id_rol?: SortOrder
  }

  export type rolMaxOrderByAggregateInput = {
    id_rol?: SortOrder
    rol?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type rolMinOrderByAggregateInput = {
    id_rol?: SortOrder
    rol?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type rolSumOrderByAggregateInput = {
    id_rol?: SortOrder
  }

  export type servicioCountOrderByAggregateInput = {
    id_servicio?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    url?: SortOrder
    metodo?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type servicioAvgOrderByAggregateInput = {
    id_servicio?: SortOrder
  }

  export type servicioMaxOrderByAggregateInput = {
    id_servicio?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    url?: SortOrder
    metodo?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type servicioMinOrderByAggregateInput = {
    id_servicio?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    url?: SortOrder
    metodo?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type servicioSumOrderByAggregateInput = {
    id_servicio?: SortOrder
  }

  export type RolScalarRelationFilter = {
    is?: rolWhereInput
    isNot?: rolWhereInput
  }

  export type ServicioScalarRelationFilter = {
    is?: servicioWhereInput
    isNot?: servicioWhereInput
  }

  export type rol_servicioId_rolId_servicioCompoundUniqueInput = {
    id_rol: number
    id_servicio: number
  }

  export type rol_servicioCountOrderByAggregateInput = {
    id_rol?: SortOrder
    id_servicio?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type rol_servicioAvgOrderByAggregateInput = {
    id_rol?: SortOrder
    id_servicio?: SortOrder
  }

  export type rol_servicioMaxOrderByAggregateInput = {
    id_rol?: SortOrder
    id_servicio?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type rol_servicioMinOrderByAggregateInput = {
    id_rol?: SortOrder
    id_servicio?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type rol_servicioSumOrderByAggregateInput = {
    id_rol?: SortOrder
    id_servicio?: SortOrder
  }

  export type EvaluacionListRelationFilter = {
    every?: evaluacionWhereInput
    some?: evaluacionWhereInput
    none?: evaluacionWhereInput
  }

  export type evaluacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    primer_nombre?: SortOrder
    segundo_nombre?: SortOrder
    primer_apellido?: SortOrder
    segundo_apellido?: SortOrder
    correo?: SortOrder
    confirmado?: SortOrder
    token_confirmacion?: SortOrder
    ultima_conexion?: SortOrder
    password?: SortOrder
    fecha_actualizacion?: SortOrder
    fecha_creacion?: SortOrder
    estado?: SortOrder
  }

  export type usuarioAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type usuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    primer_nombre?: SortOrder
    segundo_nombre?: SortOrder
    primer_apellido?: SortOrder
    segundo_apellido?: SortOrder
    correo?: SortOrder
    confirmado?: SortOrder
    token_confirmacion?: SortOrder
    ultima_conexion?: SortOrder
    password?: SortOrder
    fecha_actualizacion?: SortOrder
    fecha_creacion?: SortOrder
    estado?: SortOrder
  }

  export type usuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    primer_nombre?: SortOrder
    segundo_nombre?: SortOrder
    primer_apellido?: SortOrder
    segundo_apellido?: SortOrder
    correo?: SortOrder
    confirmado?: SortOrder
    token_confirmacion?: SortOrder
    ultima_conexion?: SortOrder
    password?: SortOrder
    fecha_actualizacion?: SortOrder
    fecha_creacion?: SortOrder
    estado?: SortOrder
  }

  export type usuarioSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type usuario_rolId_usuarioId_rolCompoundUniqueInput = {
    id_usuario: number
    id_rol: number
  }

  export type usuario_rolCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_rol?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type usuario_rolAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_rol?: SortOrder
  }

  export type usuario_rolMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_rol?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type usuario_rolMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_rol?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
  }

  export type usuario_rolSumOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_rol?: SortOrder
  }

  export type videojuegoCountOrderByAggregateInput = {
    id_videojuego?: SortOrder
    id_equipo?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
    token_captcha?: SortOrder
  }

  export type videojuegoAvgOrderByAggregateInput = {
    id_videojuego?: SortOrder
    id_equipo?: SortOrder
  }

  export type videojuegoMaxOrderByAggregateInput = {
    id_videojuego?: SortOrder
    id_equipo?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
    token_captcha?: SortOrder
  }

  export type videojuegoMinOrderByAggregateInput = {
    id_videojuego?: SortOrder
    id_equipo?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    estado?: SortOrder
    token_captcha?: SortOrder
  }

  export type videojuegoSumOrderByAggregateInput = {
    id_videojuego?: SortOrder
    id_equipo?: SortOrder
  }

  export type criterio_evaluacionCreateNestedManyWithoutCriterioInput = {
    create?: XOR<criterio_evaluacionCreateWithoutCriterioInput, criterio_evaluacionUncheckedCreateWithoutCriterioInput> | criterio_evaluacionCreateWithoutCriterioInput[] | criterio_evaluacionUncheckedCreateWithoutCriterioInput[]
    connectOrCreate?: criterio_evaluacionCreateOrConnectWithoutCriterioInput | criterio_evaluacionCreateOrConnectWithoutCriterioInput[]
    createMany?: criterio_evaluacionCreateManyCriterioInputEnvelope
    connect?: criterio_evaluacionWhereUniqueInput | criterio_evaluacionWhereUniqueInput[]
  }

  export type criterio_evaluacionUncheckedCreateNestedManyWithoutCriterioInput = {
    create?: XOR<criterio_evaluacionCreateWithoutCriterioInput, criterio_evaluacionUncheckedCreateWithoutCriterioInput> | criterio_evaluacionCreateWithoutCriterioInput[] | criterio_evaluacionUncheckedCreateWithoutCriterioInput[]
    connectOrCreate?: criterio_evaluacionCreateOrConnectWithoutCriterioInput | criterio_evaluacionCreateOrConnectWithoutCriterioInput[]
    createMany?: criterio_evaluacionCreateManyCriterioInputEnvelope
    connect?: criterio_evaluacionWhereUniqueInput | criterio_evaluacionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type criterio_evaluacionUpdateManyWithoutCriterioNestedInput = {
    create?: XOR<criterio_evaluacionCreateWithoutCriterioInput, criterio_evaluacionUncheckedCreateWithoutCriterioInput> | criterio_evaluacionCreateWithoutCriterioInput[] | criterio_evaluacionUncheckedCreateWithoutCriterioInput[]
    connectOrCreate?: criterio_evaluacionCreateOrConnectWithoutCriterioInput | criterio_evaluacionCreateOrConnectWithoutCriterioInput[]
    upsert?: criterio_evaluacionUpsertWithWhereUniqueWithoutCriterioInput | criterio_evaluacionUpsertWithWhereUniqueWithoutCriterioInput[]
    createMany?: criterio_evaluacionCreateManyCriterioInputEnvelope
    set?: criterio_evaluacionWhereUniqueInput | criterio_evaluacionWhereUniqueInput[]
    disconnect?: criterio_evaluacionWhereUniqueInput | criterio_evaluacionWhereUniqueInput[]
    delete?: criterio_evaluacionWhereUniqueInput | criterio_evaluacionWhereUniqueInput[]
    connect?: criterio_evaluacionWhereUniqueInput | criterio_evaluacionWhereUniqueInput[]
    update?: criterio_evaluacionUpdateWithWhereUniqueWithoutCriterioInput | criterio_evaluacionUpdateWithWhereUniqueWithoutCriterioInput[]
    updateMany?: criterio_evaluacionUpdateManyWithWhereWithoutCriterioInput | criterio_evaluacionUpdateManyWithWhereWithoutCriterioInput[]
    deleteMany?: criterio_evaluacionScalarWhereInput | criterio_evaluacionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type criterio_evaluacionUncheckedUpdateManyWithoutCriterioNestedInput = {
    create?: XOR<criterio_evaluacionCreateWithoutCriterioInput, criterio_evaluacionUncheckedCreateWithoutCriterioInput> | criterio_evaluacionCreateWithoutCriterioInput[] | criterio_evaluacionUncheckedCreateWithoutCriterioInput[]
    connectOrCreate?: criterio_evaluacionCreateOrConnectWithoutCriterioInput | criterio_evaluacionCreateOrConnectWithoutCriterioInput[]
    upsert?: criterio_evaluacionUpsertWithWhereUniqueWithoutCriterioInput | criterio_evaluacionUpsertWithWhereUniqueWithoutCriterioInput[]
    createMany?: criterio_evaluacionCreateManyCriterioInputEnvelope
    set?: criterio_evaluacionWhereUniqueInput | criterio_evaluacionWhereUniqueInput[]
    disconnect?: criterio_evaluacionWhereUniqueInput | criterio_evaluacionWhereUniqueInput[]
    delete?: criterio_evaluacionWhereUniqueInput | criterio_evaluacionWhereUniqueInput[]
    connect?: criterio_evaluacionWhereUniqueInput | criterio_evaluacionWhereUniqueInput[]
    update?: criterio_evaluacionUpdateWithWhereUniqueWithoutCriterioInput | criterio_evaluacionUpdateWithWhereUniqueWithoutCriterioInput[]
    updateMany?: criterio_evaluacionUpdateManyWithWhereWithoutCriterioInput | criterio_evaluacionUpdateManyWithWhereWithoutCriterioInput[]
    deleteMany?: criterio_evaluacionScalarWhereInput | criterio_evaluacionScalarWhereInput[]
  }

  export type criterioCreateNestedOneWithoutCriterio_evaluacionInput = {
    create?: XOR<criterioCreateWithoutCriterio_evaluacionInput, criterioUncheckedCreateWithoutCriterio_evaluacionInput>
    connectOrCreate?: criterioCreateOrConnectWithoutCriterio_evaluacionInput
    connect?: criterioWhereUniqueInput
  }

  export type evaluacionCreateNestedOneWithoutCriterio_evaluacionInput = {
    create?: XOR<evaluacionCreateWithoutCriterio_evaluacionInput, evaluacionUncheckedCreateWithoutCriterio_evaluacionInput>
    connectOrCreate?: evaluacionCreateOrConnectWithoutCriterio_evaluacionInput
    connect?: evaluacionWhereUniqueInput
  }

  export type criterioUpdateOneRequiredWithoutCriterio_evaluacionNestedInput = {
    create?: XOR<criterioCreateWithoutCriterio_evaluacionInput, criterioUncheckedCreateWithoutCriterio_evaluacionInput>
    connectOrCreate?: criterioCreateOrConnectWithoutCriterio_evaluacionInput
    upsert?: criterioUpsertWithoutCriterio_evaluacionInput
    connect?: criterioWhereUniqueInput
    update?: XOR<XOR<criterioUpdateToOneWithWhereWithoutCriterio_evaluacionInput, criterioUpdateWithoutCriterio_evaluacionInput>, criterioUncheckedUpdateWithoutCriterio_evaluacionInput>
  }

  export type evaluacionUpdateOneRequiredWithoutCriterio_evaluacionNestedInput = {
    create?: XOR<evaluacionCreateWithoutCriterio_evaluacionInput, evaluacionUncheckedCreateWithoutCriterio_evaluacionInput>
    connectOrCreate?: evaluacionCreateOrConnectWithoutCriterio_evaluacionInput
    upsert?: evaluacionUpsertWithoutCriterio_evaluacionInput
    connect?: evaluacionWhereUniqueInput
    update?: XOR<XOR<evaluacionUpdateToOneWithWhereWithoutCriterio_evaluacionInput, evaluacionUpdateWithoutCriterio_evaluacionInput>, evaluacionUncheckedUpdateWithoutCriterio_evaluacionInput>
  }

  export type estadoCreateNestedOneWithoutEquiposInput = {
    create?: XOR<estadoCreateWithoutEquiposInput, estadoUncheckedCreateWithoutEquiposInput>
    connectOrCreate?: estadoCreateOrConnectWithoutEquiposInput
    connect?: estadoWhereUniqueInput
  }

  export type integranteCreateNestedManyWithoutEquipoInput = {
    create?: XOR<integranteCreateWithoutEquipoInput, integranteUncheckedCreateWithoutEquipoInput> | integranteCreateWithoutEquipoInput[] | integranteUncheckedCreateWithoutEquipoInput[]
    connectOrCreate?: integranteCreateOrConnectWithoutEquipoInput | integranteCreateOrConnectWithoutEquipoInput[]
    createMany?: integranteCreateManyEquipoInputEnvelope
    connect?: integranteWhereUniqueInput | integranteWhereUniqueInput[]
  }

  export type videojuegoCreateNestedManyWithoutEquipoInput = {
    create?: XOR<videojuegoCreateWithoutEquipoInput, videojuegoUncheckedCreateWithoutEquipoInput> | videojuegoCreateWithoutEquipoInput[] | videojuegoUncheckedCreateWithoutEquipoInput[]
    connectOrCreate?: videojuegoCreateOrConnectWithoutEquipoInput | videojuegoCreateOrConnectWithoutEquipoInput[]
    createMany?: videojuegoCreateManyEquipoInputEnvelope
    connect?: videojuegoWhereUniqueInput | videojuegoWhereUniqueInput[]
  }

  export type integranteUncheckedCreateNestedManyWithoutEquipoInput = {
    create?: XOR<integranteCreateWithoutEquipoInput, integranteUncheckedCreateWithoutEquipoInput> | integranteCreateWithoutEquipoInput[] | integranteUncheckedCreateWithoutEquipoInput[]
    connectOrCreate?: integranteCreateOrConnectWithoutEquipoInput | integranteCreateOrConnectWithoutEquipoInput[]
    createMany?: integranteCreateManyEquipoInputEnvelope
    connect?: integranteWhereUniqueInput | integranteWhereUniqueInput[]
  }

  export type videojuegoUncheckedCreateNestedManyWithoutEquipoInput = {
    create?: XOR<videojuegoCreateWithoutEquipoInput, videojuegoUncheckedCreateWithoutEquipoInput> | videojuegoCreateWithoutEquipoInput[] | videojuegoUncheckedCreateWithoutEquipoInput[]
    connectOrCreate?: videojuegoCreateOrConnectWithoutEquipoInput | videojuegoCreateOrConnectWithoutEquipoInput[]
    createMany?: videojuegoCreateManyEquipoInputEnvelope
    connect?: videojuegoWhereUniqueInput | videojuegoWhereUniqueInput[]
  }

  export type estadoUpdateOneRequiredWithoutEquiposNestedInput = {
    create?: XOR<estadoCreateWithoutEquiposInput, estadoUncheckedCreateWithoutEquiposInput>
    connectOrCreate?: estadoCreateOrConnectWithoutEquiposInput
    upsert?: estadoUpsertWithoutEquiposInput
    connect?: estadoWhereUniqueInput
    update?: XOR<XOR<estadoUpdateToOneWithWhereWithoutEquiposInput, estadoUpdateWithoutEquiposInput>, estadoUncheckedUpdateWithoutEquiposInput>
  }

  export type integranteUpdateManyWithoutEquipoNestedInput = {
    create?: XOR<integranteCreateWithoutEquipoInput, integranteUncheckedCreateWithoutEquipoInput> | integranteCreateWithoutEquipoInput[] | integranteUncheckedCreateWithoutEquipoInput[]
    connectOrCreate?: integranteCreateOrConnectWithoutEquipoInput | integranteCreateOrConnectWithoutEquipoInput[]
    upsert?: integranteUpsertWithWhereUniqueWithoutEquipoInput | integranteUpsertWithWhereUniqueWithoutEquipoInput[]
    createMany?: integranteCreateManyEquipoInputEnvelope
    set?: integranteWhereUniqueInput | integranteWhereUniqueInput[]
    disconnect?: integranteWhereUniqueInput | integranteWhereUniqueInput[]
    delete?: integranteWhereUniqueInput | integranteWhereUniqueInput[]
    connect?: integranteWhereUniqueInput | integranteWhereUniqueInput[]
    update?: integranteUpdateWithWhereUniqueWithoutEquipoInput | integranteUpdateWithWhereUniqueWithoutEquipoInput[]
    updateMany?: integranteUpdateManyWithWhereWithoutEquipoInput | integranteUpdateManyWithWhereWithoutEquipoInput[]
    deleteMany?: integranteScalarWhereInput | integranteScalarWhereInput[]
  }

  export type videojuegoUpdateManyWithoutEquipoNestedInput = {
    create?: XOR<videojuegoCreateWithoutEquipoInput, videojuegoUncheckedCreateWithoutEquipoInput> | videojuegoCreateWithoutEquipoInput[] | videojuegoUncheckedCreateWithoutEquipoInput[]
    connectOrCreate?: videojuegoCreateOrConnectWithoutEquipoInput | videojuegoCreateOrConnectWithoutEquipoInput[]
    upsert?: videojuegoUpsertWithWhereUniqueWithoutEquipoInput | videojuegoUpsertWithWhereUniqueWithoutEquipoInput[]
    createMany?: videojuegoCreateManyEquipoInputEnvelope
    set?: videojuegoWhereUniqueInput | videojuegoWhereUniqueInput[]
    disconnect?: videojuegoWhereUniqueInput | videojuegoWhereUniqueInput[]
    delete?: videojuegoWhereUniqueInput | videojuegoWhereUniqueInput[]
    connect?: videojuegoWhereUniqueInput | videojuegoWhereUniqueInput[]
    update?: videojuegoUpdateWithWhereUniqueWithoutEquipoInput | videojuegoUpdateWithWhereUniqueWithoutEquipoInput[]
    updateMany?: videojuegoUpdateManyWithWhereWithoutEquipoInput | videojuegoUpdateManyWithWhereWithoutEquipoInput[]
    deleteMany?: videojuegoScalarWhereInput | videojuegoScalarWhereInput[]
  }

  export type integranteUncheckedUpdateManyWithoutEquipoNestedInput = {
    create?: XOR<integranteCreateWithoutEquipoInput, integranteUncheckedCreateWithoutEquipoInput> | integranteCreateWithoutEquipoInput[] | integranteUncheckedCreateWithoutEquipoInput[]
    connectOrCreate?: integranteCreateOrConnectWithoutEquipoInput | integranteCreateOrConnectWithoutEquipoInput[]
    upsert?: integranteUpsertWithWhereUniqueWithoutEquipoInput | integranteUpsertWithWhereUniqueWithoutEquipoInput[]
    createMany?: integranteCreateManyEquipoInputEnvelope
    set?: integranteWhereUniqueInput | integranteWhereUniqueInput[]
    disconnect?: integranteWhereUniqueInput | integranteWhereUniqueInput[]
    delete?: integranteWhereUniqueInput | integranteWhereUniqueInput[]
    connect?: integranteWhereUniqueInput | integranteWhereUniqueInput[]
    update?: integranteUpdateWithWhereUniqueWithoutEquipoInput | integranteUpdateWithWhereUniqueWithoutEquipoInput[]
    updateMany?: integranteUpdateManyWithWhereWithoutEquipoInput | integranteUpdateManyWithWhereWithoutEquipoInput[]
    deleteMany?: integranteScalarWhereInput | integranteScalarWhereInput[]
  }

  export type videojuegoUncheckedUpdateManyWithoutEquipoNestedInput = {
    create?: XOR<videojuegoCreateWithoutEquipoInput, videojuegoUncheckedCreateWithoutEquipoInput> | videojuegoCreateWithoutEquipoInput[] | videojuegoUncheckedCreateWithoutEquipoInput[]
    connectOrCreate?: videojuegoCreateOrConnectWithoutEquipoInput | videojuegoCreateOrConnectWithoutEquipoInput[]
    upsert?: videojuegoUpsertWithWhereUniqueWithoutEquipoInput | videojuegoUpsertWithWhereUniqueWithoutEquipoInput[]
    createMany?: videojuegoCreateManyEquipoInputEnvelope
    set?: videojuegoWhereUniqueInput | videojuegoWhereUniqueInput[]
    disconnect?: videojuegoWhereUniqueInput | videojuegoWhereUniqueInput[]
    delete?: videojuegoWhereUniqueInput | videojuegoWhereUniqueInput[]
    connect?: videojuegoWhereUniqueInput | videojuegoWhereUniqueInput[]
    update?: videojuegoUpdateWithWhereUniqueWithoutEquipoInput | videojuegoUpdateWithWhereUniqueWithoutEquipoInput[]
    updateMany?: videojuegoUpdateManyWithWhereWithoutEquipoInput | videojuegoUpdateManyWithWhereWithoutEquipoInput[]
    deleteMany?: videojuegoScalarWhereInput | videojuegoScalarWhereInput[]
  }

  export type equipoCreateNestedManyWithoutEstado_equipoInput = {
    create?: XOR<equipoCreateWithoutEstado_equipoInput, equipoUncheckedCreateWithoutEstado_equipoInput> | equipoCreateWithoutEstado_equipoInput[] | equipoUncheckedCreateWithoutEstado_equipoInput[]
    connectOrCreate?: equipoCreateOrConnectWithoutEstado_equipoInput | equipoCreateOrConnectWithoutEstado_equipoInput[]
    createMany?: equipoCreateManyEstado_equipoInputEnvelope
    connect?: equipoWhereUniqueInput | equipoWhereUniqueInput[]
  }

  export type equipoUncheckedCreateNestedManyWithoutEstado_equipoInput = {
    create?: XOR<equipoCreateWithoutEstado_equipoInput, equipoUncheckedCreateWithoutEstado_equipoInput> | equipoCreateWithoutEstado_equipoInput[] | equipoUncheckedCreateWithoutEstado_equipoInput[]
    connectOrCreate?: equipoCreateOrConnectWithoutEstado_equipoInput | equipoCreateOrConnectWithoutEstado_equipoInput[]
    createMany?: equipoCreateManyEstado_equipoInputEnvelope
    connect?: equipoWhereUniqueInput | equipoWhereUniqueInput[]
  }

  export type equipoUpdateManyWithoutEstado_equipoNestedInput = {
    create?: XOR<equipoCreateWithoutEstado_equipoInput, equipoUncheckedCreateWithoutEstado_equipoInput> | equipoCreateWithoutEstado_equipoInput[] | equipoUncheckedCreateWithoutEstado_equipoInput[]
    connectOrCreate?: equipoCreateOrConnectWithoutEstado_equipoInput | equipoCreateOrConnectWithoutEstado_equipoInput[]
    upsert?: equipoUpsertWithWhereUniqueWithoutEstado_equipoInput | equipoUpsertWithWhereUniqueWithoutEstado_equipoInput[]
    createMany?: equipoCreateManyEstado_equipoInputEnvelope
    set?: equipoWhereUniqueInput | equipoWhereUniqueInput[]
    disconnect?: equipoWhereUniqueInput | equipoWhereUniqueInput[]
    delete?: equipoWhereUniqueInput | equipoWhereUniqueInput[]
    connect?: equipoWhereUniqueInput | equipoWhereUniqueInput[]
    update?: equipoUpdateWithWhereUniqueWithoutEstado_equipoInput | equipoUpdateWithWhereUniqueWithoutEstado_equipoInput[]
    updateMany?: equipoUpdateManyWithWhereWithoutEstado_equipoInput | equipoUpdateManyWithWhereWithoutEstado_equipoInput[]
    deleteMany?: equipoScalarWhereInput | equipoScalarWhereInput[]
  }

  export type equipoUncheckedUpdateManyWithoutEstado_equipoNestedInput = {
    create?: XOR<equipoCreateWithoutEstado_equipoInput, equipoUncheckedCreateWithoutEstado_equipoInput> | equipoCreateWithoutEstado_equipoInput[] | equipoUncheckedCreateWithoutEstado_equipoInput[]
    connectOrCreate?: equipoCreateOrConnectWithoutEstado_equipoInput | equipoCreateOrConnectWithoutEstado_equipoInput[]
    upsert?: equipoUpsertWithWhereUniqueWithoutEstado_equipoInput | equipoUpsertWithWhereUniqueWithoutEstado_equipoInput[]
    createMany?: equipoCreateManyEstado_equipoInputEnvelope
    set?: equipoWhereUniqueInput | equipoWhereUniqueInput[]
    disconnect?: equipoWhereUniqueInput | equipoWhereUniqueInput[]
    delete?: equipoWhereUniqueInput | equipoWhereUniqueInput[]
    connect?: equipoWhereUniqueInput | equipoWhereUniqueInput[]
    update?: equipoUpdateWithWhereUniqueWithoutEstado_equipoInput | equipoUpdateWithWhereUniqueWithoutEstado_equipoInput[]
    updateMany?: equipoUpdateManyWithWhereWithoutEstado_equipoInput | equipoUpdateManyWithWhereWithoutEstado_equipoInput[]
    deleteMany?: equipoScalarWhereInput | equipoScalarWhereInput[]
  }

  export type criterio_evaluacionCreateNestedManyWithoutEvaluacionInput = {
    create?: XOR<criterio_evaluacionCreateWithoutEvaluacionInput, criterio_evaluacionUncheckedCreateWithoutEvaluacionInput> | criterio_evaluacionCreateWithoutEvaluacionInput[] | criterio_evaluacionUncheckedCreateWithoutEvaluacionInput[]
    connectOrCreate?: criterio_evaluacionCreateOrConnectWithoutEvaluacionInput | criterio_evaluacionCreateOrConnectWithoutEvaluacionInput[]
    createMany?: criterio_evaluacionCreateManyEvaluacionInputEnvelope
    connect?: criterio_evaluacionWhereUniqueInput | criterio_evaluacionWhereUniqueInput[]
  }

  export type usuarioCreateNestedOneWithoutEvaluacionInput = {
    create?: XOR<usuarioCreateWithoutEvaluacionInput, usuarioUncheckedCreateWithoutEvaluacionInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutEvaluacionInput
    connect?: usuarioWhereUniqueInput
  }

  export type videojuegoCreateNestedOneWithoutEvaluacionInput = {
    create?: XOR<videojuegoCreateWithoutEvaluacionInput, videojuegoUncheckedCreateWithoutEvaluacionInput>
    connectOrCreate?: videojuegoCreateOrConnectWithoutEvaluacionInput
    connect?: videojuegoWhereUniqueInput
  }

  export type criterio_evaluacionUncheckedCreateNestedManyWithoutEvaluacionInput = {
    create?: XOR<criterio_evaluacionCreateWithoutEvaluacionInput, criterio_evaluacionUncheckedCreateWithoutEvaluacionInput> | criterio_evaluacionCreateWithoutEvaluacionInput[] | criterio_evaluacionUncheckedCreateWithoutEvaluacionInput[]
    connectOrCreate?: criterio_evaluacionCreateOrConnectWithoutEvaluacionInput | criterio_evaluacionCreateOrConnectWithoutEvaluacionInput[]
    createMany?: criterio_evaluacionCreateManyEvaluacionInputEnvelope
    connect?: criterio_evaluacionWhereUniqueInput | criterio_evaluacionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type criterio_evaluacionUpdateManyWithoutEvaluacionNestedInput = {
    create?: XOR<criterio_evaluacionCreateWithoutEvaluacionInput, criterio_evaluacionUncheckedCreateWithoutEvaluacionInput> | criterio_evaluacionCreateWithoutEvaluacionInput[] | criterio_evaluacionUncheckedCreateWithoutEvaluacionInput[]
    connectOrCreate?: criterio_evaluacionCreateOrConnectWithoutEvaluacionInput | criterio_evaluacionCreateOrConnectWithoutEvaluacionInput[]
    upsert?: criterio_evaluacionUpsertWithWhereUniqueWithoutEvaluacionInput | criterio_evaluacionUpsertWithWhereUniqueWithoutEvaluacionInput[]
    createMany?: criterio_evaluacionCreateManyEvaluacionInputEnvelope
    set?: criterio_evaluacionWhereUniqueInput | criterio_evaluacionWhereUniqueInput[]
    disconnect?: criterio_evaluacionWhereUniqueInput | criterio_evaluacionWhereUniqueInput[]
    delete?: criterio_evaluacionWhereUniqueInput | criterio_evaluacionWhereUniqueInput[]
    connect?: criterio_evaluacionWhereUniqueInput | criterio_evaluacionWhereUniqueInput[]
    update?: criterio_evaluacionUpdateWithWhereUniqueWithoutEvaluacionInput | criterio_evaluacionUpdateWithWhereUniqueWithoutEvaluacionInput[]
    updateMany?: criterio_evaluacionUpdateManyWithWhereWithoutEvaluacionInput | criterio_evaluacionUpdateManyWithWhereWithoutEvaluacionInput[]
    deleteMany?: criterio_evaluacionScalarWhereInput | criterio_evaluacionScalarWhereInput[]
  }

  export type usuarioUpdateOneRequiredWithoutEvaluacionNestedInput = {
    create?: XOR<usuarioCreateWithoutEvaluacionInput, usuarioUncheckedCreateWithoutEvaluacionInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutEvaluacionInput
    upsert?: usuarioUpsertWithoutEvaluacionInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutEvaluacionInput, usuarioUpdateWithoutEvaluacionInput>, usuarioUncheckedUpdateWithoutEvaluacionInput>
  }

  export type videojuegoUpdateOneRequiredWithoutEvaluacionNestedInput = {
    create?: XOR<videojuegoCreateWithoutEvaluacionInput, videojuegoUncheckedCreateWithoutEvaluacionInput>
    connectOrCreate?: videojuegoCreateOrConnectWithoutEvaluacionInput
    upsert?: videojuegoUpsertWithoutEvaluacionInput
    connect?: videojuegoWhereUniqueInput
    update?: XOR<XOR<videojuegoUpdateToOneWithWhereWithoutEvaluacionInput, videojuegoUpdateWithoutEvaluacionInput>, videojuegoUncheckedUpdateWithoutEvaluacionInput>
  }

  export type criterio_evaluacionUncheckedUpdateManyWithoutEvaluacionNestedInput = {
    create?: XOR<criterio_evaluacionCreateWithoutEvaluacionInput, criterio_evaluacionUncheckedCreateWithoutEvaluacionInput> | criterio_evaluacionCreateWithoutEvaluacionInput[] | criterio_evaluacionUncheckedCreateWithoutEvaluacionInput[]
    connectOrCreate?: criterio_evaluacionCreateOrConnectWithoutEvaluacionInput | criterio_evaluacionCreateOrConnectWithoutEvaluacionInput[]
    upsert?: criterio_evaluacionUpsertWithWhereUniqueWithoutEvaluacionInput | criterio_evaluacionUpsertWithWhereUniqueWithoutEvaluacionInput[]
    createMany?: criterio_evaluacionCreateManyEvaluacionInputEnvelope
    set?: criterio_evaluacionWhereUniqueInput | criterio_evaluacionWhereUniqueInput[]
    disconnect?: criterio_evaluacionWhereUniqueInput | criterio_evaluacionWhereUniqueInput[]
    delete?: criterio_evaluacionWhereUniqueInput | criterio_evaluacionWhereUniqueInput[]
    connect?: criterio_evaluacionWhereUniqueInput | criterio_evaluacionWhereUniqueInput[]
    update?: criterio_evaluacionUpdateWithWhereUniqueWithoutEvaluacionInput | criterio_evaluacionUpdateWithWhereUniqueWithoutEvaluacionInput[]
    updateMany?: criterio_evaluacionUpdateManyWithWhereWithoutEvaluacionInput | criterio_evaluacionUpdateManyWithWhereWithoutEvaluacionInput[]
    deleteMany?: criterio_evaluacionScalarWhereInput | criterio_evaluacionScalarWhereInput[]
  }

  export type equipoCreateNestedOneWithoutIntegranteInput = {
    create?: XOR<equipoCreateWithoutIntegranteInput, equipoUncheckedCreateWithoutIntegranteInput>
    connectOrCreate?: equipoCreateOrConnectWithoutIntegranteInput
    connect?: equipoWhereUniqueInput
  }

  export type integrante_nrcCreateNestedManyWithoutIntegranteInput = {
    create?: XOR<integrante_nrcCreateWithoutIntegranteInput, integrante_nrcUncheckedCreateWithoutIntegranteInput> | integrante_nrcCreateWithoutIntegranteInput[] | integrante_nrcUncheckedCreateWithoutIntegranteInput[]
    connectOrCreate?: integrante_nrcCreateOrConnectWithoutIntegranteInput | integrante_nrcCreateOrConnectWithoutIntegranteInput[]
    createMany?: integrante_nrcCreateManyIntegranteInputEnvelope
    connect?: integrante_nrcWhereUniqueInput | integrante_nrcWhereUniqueInput[]
  }

  export type integrante_nrcUncheckedCreateNestedManyWithoutIntegranteInput = {
    create?: XOR<integrante_nrcCreateWithoutIntegranteInput, integrante_nrcUncheckedCreateWithoutIntegranteInput> | integrante_nrcCreateWithoutIntegranteInput[] | integrante_nrcUncheckedCreateWithoutIntegranteInput[]
    connectOrCreate?: integrante_nrcCreateOrConnectWithoutIntegranteInput | integrante_nrcCreateOrConnectWithoutIntegranteInput[]
    createMany?: integrante_nrcCreateManyIntegranteInputEnvelope
    connect?: integrante_nrcWhereUniqueInput | integrante_nrcWhereUniqueInput[]
  }

  export type equipoUpdateOneRequiredWithoutIntegranteNestedInput = {
    create?: XOR<equipoCreateWithoutIntegranteInput, equipoUncheckedCreateWithoutIntegranteInput>
    connectOrCreate?: equipoCreateOrConnectWithoutIntegranteInput
    upsert?: equipoUpsertWithoutIntegranteInput
    connect?: equipoWhereUniqueInput
    update?: XOR<XOR<equipoUpdateToOneWithWhereWithoutIntegranteInput, equipoUpdateWithoutIntegranteInput>, equipoUncheckedUpdateWithoutIntegranteInput>
  }

  export type integrante_nrcUpdateManyWithoutIntegranteNestedInput = {
    create?: XOR<integrante_nrcCreateWithoutIntegranteInput, integrante_nrcUncheckedCreateWithoutIntegranteInput> | integrante_nrcCreateWithoutIntegranteInput[] | integrante_nrcUncheckedCreateWithoutIntegranteInput[]
    connectOrCreate?: integrante_nrcCreateOrConnectWithoutIntegranteInput | integrante_nrcCreateOrConnectWithoutIntegranteInput[]
    upsert?: integrante_nrcUpsertWithWhereUniqueWithoutIntegranteInput | integrante_nrcUpsertWithWhereUniqueWithoutIntegranteInput[]
    createMany?: integrante_nrcCreateManyIntegranteInputEnvelope
    set?: integrante_nrcWhereUniqueInput | integrante_nrcWhereUniqueInput[]
    disconnect?: integrante_nrcWhereUniqueInput | integrante_nrcWhereUniqueInput[]
    delete?: integrante_nrcWhereUniqueInput | integrante_nrcWhereUniqueInput[]
    connect?: integrante_nrcWhereUniqueInput | integrante_nrcWhereUniqueInput[]
    update?: integrante_nrcUpdateWithWhereUniqueWithoutIntegranteInput | integrante_nrcUpdateWithWhereUniqueWithoutIntegranteInput[]
    updateMany?: integrante_nrcUpdateManyWithWhereWithoutIntegranteInput | integrante_nrcUpdateManyWithWhereWithoutIntegranteInput[]
    deleteMany?: integrante_nrcScalarWhereInput | integrante_nrcScalarWhereInput[]
  }

  export type integrante_nrcUncheckedUpdateManyWithoutIntegranteNestedInput = {
    create?: XOR<integrante_nrcCreateWithoutIntegranteInput, integrante_nrcUncheckedCreateWithoutIntegranteInput> | integrante_nrcCreateWithoutIntegranteInput[] | integrante_nrcUncheckedCreateWithoutIntegranteInput[]
    connectOrCreate?: integrante_nrcCreateOrConnectWithoutIntegranteInput | integrante_nrcCreateOrConnectWithoutIntegranteInput[]
    upsert?: integrante_nrcUpsertWithWhereUniqueWithoutIntegranteInput | integrante_nrcUpsertWithWhereUniqueWithoutIntegranteInput[]
    createMany?: integrante_nrcCreateManyIntegranteInputEnvelope
    set?: integrante_nrcWhereUniqueInput | integrante_nrcWhereUniqueInput[]
    disconnect?: integrante_nrcWhereUniqueInput | integrante_nrcWhereUniqueInput[]
    delete?: integrante_nrcWhereUniqueInput | integrante_nrcWhereUniqueInput[]
    connect?: integrante_nrcWhereUniqueInput | integrante_nrcWhereUniqueInput[]
    update?: integrante_nrcUpdateWithWhereUniqueWithoutIntegranteInput | integrante_nrcUpdateWithWhereUniqueWithoutIntegranteInput[]
    updateMany?: integrante_nrcUpdateManyWithWhereWithoutIntegranteInput | integrante_nrcUpdateManyWithWhereWithoutIntegranteInput[]
    deleteMany?: integrante_nrcScalarWhereInput | integrante_nrcScalarWhereInput[]
  }

  export type integranteCreateNestedOneWithoutIntegrante_nrcInput = {
    create?: XOR<integranteCreateWithoutIntegrante_nrcInput, integranteUncheckedCreateWithoutIntegrante_nrcInput>
    connectOrCreate?: integranteCreateOrConnectWithoutIntegrante_nrcInput
    connect?: integranteWhereUniqueInput
  }

  export type nrcCreateNestedOneWithoutIntegrante_nrcInput = {
    create?: XOR<nrcCreateWithoutIntegrante_nrcInput, nrcUncheckedCreateWithoutIntegrante_nrcInput>
    connectOrCreate?: nrcCreateOrConnectWithoutIntegrante_nrcInput
    connect?: nrcWhereUniqueInput
  }

  export type integranteUpdateOneRequiredWithoutIntegrante_nrcNestedInput = {
    create?: XOR<integranteCreateWithoutIntegrante_nrcInput, integranteUncheckedCreateWithoutIntegrante_nrcInput>
    connectOrCreate?: integranteCreateOrConnectWithoutIntegrante_nrcInput
    upsert?: integranteUpsertWithoutIntegrante_nrcInput
    connect?: integranteWhereUniqueInput
    update?: XOR<XOR<integranteUpdateToOneWithWhereWithoutIntegrante_nrcInput, integranteUpdateWithoutIntegrante_nrcInput>, integranteUncheckedUpdateWithoutIntegrante_nrcInput>
  }

  export type nrcUpdateOneRequiredWithoutIntegrante_nrcNestedInput = {
    create?: XOR<nrcCreateWithoutIntegrante_nrcInput, nrcUncheckedCreateWithoutIntegrante_nrcInput>
    connectOrCreate?: nrcCreateOrConnectWithoutIntegrante_nrcInput
    upsert?: nrcUpsertWithoutIntegrante_nrcInput
    connect?: nrcWhereUniqueInput
    update?: XOR<XOR<nrcUpdateToOneWithWhereWithoutIntegrante_nrcInput, nrcUpdateWithoutIntegrante_nrcInput>, nrcUncheckedUpdateWithoutIntegrante_nrcInput>
  }

  export type nrcCreateNestedManyWithoutMateriaInput = {
    create?: XOR<nrcCreateWithoutMateriaInput, nrcUncheckedCreateWithoutMateriaInput> | nrcCreateWithoutMateriaInput[] | nrcUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: nrcCreateOrConnectWithoutMateriaInput | nrcCreateOrConnectWithoutMateriaInput[]
    createMany?: nrcCreateManyMateriaInputEnvelope
    connect?: nrcWhereUniqueInput | nrcWhereUniqueInput[]
  }

  export type nrcUncheckedCreateNestedManyWithoutMateriaInput = {
    create?: XOR<nrcCreateWithoutMateriaInput, nrcUncheckedCreateWithoutMateriaInput> | nrcCreateWithoutMateriaInput[] | nrcUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: nrcCreateOrConnectWithoutMateriaInput | nrcCreateOrConnectWithoutMateriaInput[]
    createMany?: nrcCreateManyMateriaInputEnvelope
    connect?: nrcWhereUniqueInput | nrcWhereUniqueInput[]
  }

  export type nrcUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<nrcCreateWithoutMateriaInput, nrcUncheckedCreateWithoutMateriaInput> | nrcCreateWithoutMateriaInput[] | nrcUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: nrcCreateOrConnectWithoutMateriaInput | nrcCreateOrConnectWithoutMateriaInput[]
    upsert?: nrcUpsertWithWhereUniqueWithoutMateriaInput | nrcUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: nrcCreateManyMateriaInputEnvelope
    set?: nrcWhereUniqueInput | nrcWhereUniqueInput[]
    disconnect?: nrcWhereUniqueInput | nrcWhereUniqueInput[]
    delete?: nrcWhereUniqueInput | nrcWhereUniqueInput[]
    connect?: nrcWhereUniqueInput | nrcWhereUniqueInput[]
    update?: nrcUpdateWithWhereUniqueWithoutMateriaInput | nrcUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: nrcUpdateManyWithWhereWithoutMateriaInput | nrcUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: nrcScalarWhereInput | nrcScalarWhereInput[]
  }

  export type nrcUncheckedUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<nrcCreateWithoutMateriaInput, nrcUncheckedCreateWithoutMateriaInput> | nrcCreateWithoutMateriaInput[] | nrcUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: nrcCreateOrConnectWithoutMateriaInput | nrcCreateOrConnectWithoutMateriaInput[]
    upsert?: nrcUpsertWithWhereUniqueWithoutMateriaInput | nrcUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: nrcCreateManyMateriaInputEnvelope
    set?: nrcWhereUniqueInput | nrcWhereUniqueInput[]
    disconnect?: nrcWhereUniqueInput | nrcWhereUniqueInput[]
    delete?: nrcWhereUniqueInput | nrcWhereUniqueInput[]
    connect?: nrcWhereUniqueInput | nrcWhereUniqueInput[]
    update?: nrcUpdateWithWhereUniqueWithoutMateriaInput | nrcUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: nrcUpdateManyWithWhereWithoutMateriaInput | nrcUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: nrcScalarWhereInput | nrcScalarWhereInput[]
  }

  export type integrante_nrcCreateNestedManyWithoutNrcInput = {
    create?: XOR<integrante_nrcCreateWithoutNrcInput, integrante_nrcUncheckedCreateWithoutNrcInput> | integrante_nrcCreateWithoutNrcInput[] | integrante_nrcUncheckedCreateWithoutNrcInput[]
    connectOrCreate?: integrante_nrcCreateOrConnectWithoutNrcInput | integrante_nrcCreateOrConnectWithoutNrcInput[]
    createMany?: integrante_nrcCreateManyNrcInputEnvelope
    connect?: integrante_nrcWhereUniqueInput | integrante_nrcWhereUniqueInput[]
  }

  export type materiaCreateNestedOneWithoutNrcInput = {
    create?: XOR<materiaCreateWithoutNrcInput, materiaUncheckedCreateWithoutNrcInput>
    connectOrCreate?: materiaCreateOrConnectWithoutNrcInput
    connect?: materiaWhereUniqueInput
  }

  export type usuarioCreateNestedOneWithoutNrcInput = {
    create?: XOR<usuarioCreateWithoutNrcInput, usuarioUncheckedCreateWithoutNrcInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutNrcInput
    connect?: usuarioWhereUniqueInput
  }

  export type integrante_nrcUncheckedCreateNestedManyWithoutNrcInput = {
    create?: XOR<integrante_nrcCreateWithoutNrcInput, integrante_nrcUncheckedCreateWithoutNrcInput> | integrante_nrcCreateWithoutNrcInput[] | integrante_nrcUncheckedCreateWithoutNrcInput[]
    connectOrCreate?: integrante_nrcCreateOrConnectWithoutNrcInput | integrante_nrcCreateOrConnectWithoutNrcInput[]
    createMany?: integrante_nrcCreateManyNrcInputEnvelope
    connect?: integrante_nrcWhereUniqueInput | integrante_nrcWhereUniqueInput[]
  }

  export type integrante_nrcUpdateManyWithoutNrcNestedInput = {
    create?: XOR<integrante_nrcCreateWithoutNrcInput, integrante_nrcUncheckedCreateWithoutNrcInput> | integrante_nrcCreateWithoutNrcInput[] | integrante_nrcUncheckedCreateWithoutNrcInput[]
    connectOrCreate?: integrante_nrcCreateOrConnectWithoutNrcInput | integrante_nrcCreateOrConnectWithoutNrcInput[]
    upsert?: integrante_nrcUpsertWithWhereUniqueWithoutNrcInput | integrante_nrcUpsertWithWhereUniqueWithoutNrcInput[]
    createMany?: integrante_nrcCreateManyNrcInputEnvelope
    set?: integrante_nrcWhereUniqueInput | integrante_nrcWhereUniqueInput[]
    disconnect?: integrante_nrcWhereUniqueInput | integrante_nrcWhereUniqueInput[]
    delete?: integrante_nrcWhereUniqueInput | integrante_nrcWhereUniqueInput[]
    connect?: integrante_nrcWhereUniqueInput | integrante_nrcWhereUniqueInput[]
    update?: integrante_nrcUpdateWithWhereUniqueWithoutNrcInput | integrante_nrcUpdateWithWhereUniqueWithoutNrcInput[]
    updateMany?: integrante_nrcUpdateManyWithWhereWithoutNrcInput | integrante_nrcUpdateManyWithWhereWithoutNrcInput[]
    deleteMany?: integrante_nrcScalarWhereInput | integrante_nrcScalarWhereInput[]
  }

  export type materiaUpdateOneRequiredWithoutNrcNestedInput = {
    create?: XOR<materiaCreateWithoutNrcInput, materiaUncheckedCreateWithoutNrcInput>
    connectOrCreate?: materiaCreateOrConnectWithoutNrcInput
    upsert?: materiaUpsertWithoutNrcInput
    connect?: materiaWhereUniqueInput
    update?: XOR<XOR<materiaUpdateToOneWithWhereWithoutNrcInput, materiaUpdateWithoutNrcInput>, materiaUncheckedUpdateWithoutNrcInput>
  }

  export type usuarioUpdateOneRequiredWithoutNrcNestedInput = {
    create?: XOR<usuarioCreateWithoutNrcInput, usuarioUncheckedCreateWithoutNrcInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutNrcInput
    upsert?: usuarioUpsertWithoutNrcInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutNrcInput, usuarioUpdateWithoutNrcInput>, usuarioUncheckedUpdateWithoutNrcInput>
  }

  export type integrante_nrcUncheckedUpdateManyWithoutNrcNestedInput = {
    create?: XOR<integrante_nrcCreateWithoutNrcInput, integrante_nrcUncheckedCreateWithoutNrcInput> | integrante_nrcCreateWithoutNrcInput[] | integrante_nrcUncheckedCreateWithoutNrcInput[]
    connectOrCreate?: integrante_nrcCreateOrConnectWithoutNrcInput | integrante_nrcCreateOrConnectWithoutNrcInput[]
    upsert?: integrante_nrcUpsertWithWhereUniqueWithoutNrcInput | integrante_nrcUpsertWithWhereUniqueWithoutNrcInput[]
    createMany?: integrante_nrcCreateManyNrcInputEnvelope
    set?: integrante_nrcWhereUniqueInput | integrante_nrcWhereUniqueInput[]
    disconnect?: integrante_nrcWhereUniqueInput | integrante_nrcWhereUniqueInput[]
    delete?: integrante_nrcWhereUniqueInput | integrante_nrcWhereUniqueInput[]
    connect?: integrante_nrcWhereUniqueInput | integrante_nrcWhereUniqueInput[]
    update?: integrante_nrcUpdateWithWhereUniqueWithoutNrcInput | integrante_nrcUpdateWithWhereUniqueWithoutNrcInput[]
    updateMany?: integrante_nrcUpdateManyWithWhereWithoutNrcInput | integrante_nrcUpdateManyWithWhereWithoutNrcInput[]
    deleteMany?: integrante_nrcScalarWhereInput | integrante_nrcScalarWhereInput[]
  }

  export type rol_servicioCreateNestedManyWithoutRolInput = {
    create?: XOR<rol_servicioCreateWithoutRolInput, rol_servicioUncheckedCreateWithoutRolInput> | rol_servicioCreateWithoutRolInput[] | rol_servicioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: rol_servicioCreateOrConnectWithoutRolInput | rol_servicioCreateOrConnectWithoutRolInput[]
    createMany?: rol_servicioCreateManyRolInputEnvelope
    connect?: rol_servicioWhereUniqueInput | rol_servicioWhereUniqueInput[]
  }

  export type usuario_rolCreateNestedManyWithoutRolInput = {
    create?: XOR<usuario_rolCreateWithoutRolInput, usuario_rolUncheckedCreateWithoutRolInput> | usuario_rolCreateWithoutRolInput[] | usuario_rolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: usuario_rolCreateOrConnectWithoutRolInput | usuario_rolCreateOrConnectWithoutRolInput[]
    createMany?: usuario_rolCreateManyRolInputEnvelope
    connect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
  }

  export type rol_servicioUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<rol_servicioCreateWithoutRolInput, rol_servicioUncheckedCreateWithoutRolInput> | rol_servicioCreateWithoutRolInput[] | rol_servicioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: rol_servicioCreateOrConnectWithoutRolInput | rol_servicioCreateOrConnectWithoutRolInput[]
    createMany?: rol_servicioCreateManyRolInputEnvelope
    connect?: rol_servicioWhereUniqueInput | rol_servicioWhereUniqueInput[]
  }

  export type usuario_rolUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<usuario_rolCreateWithoutRolInput, usuario_rolUncheckedCreateWithoutRolInput> | usuario_rolCreateWithoutRolInput[] | usuario_rolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: usuario_rolCreateOrConnectWithoutRolInput | usuario_rolCreateOrConnectWithoutRolInput[]
    createMany?: usuario_rolCreateManyRolInputEnvelope
    connect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
  }

  export type rol_servicioUpdateManyWithoutRolNestedInput = {
    create?: XOR<rol_servicioCreateWithoutRolInput, rol_servicioUncheckedCreateWithoutRolInput> | rol_servicioCreateWithoutRolInput[] | rol_servicioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: rol_servicioCreateOrConnectWithoutRolInput | rol_servicioCreateOrConnectWithoutRolInput[]
    upsert?: rol_servicioUpsertWithWhereUniqueWithoutRolInput | rol_servicioUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: rol_servicioCreateManyRolInputEnvelope
    set?: rol_servicioWhereUniqueInput | rol_servicioWhereUniqueInput[]
    disconnect?: rol_servicioWhereUniqueInput | rol_servicioWhereUniqueInput[]
    delete?: rol_servicioWhereUniqueInput | rol_servicioWhereUniqueInput[]
    connect?: rol_servicioWhereUniqueInput | rol_servicioWhereUniqueInput[]
    update?: rol_servicioUpdateWithWhereUniqueWithoutRolInput | rol_servicioUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: rol_servicioUpdateManyWithWhereWithoutRolInput | rol_servicioUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: rol_servicioScalarWhereInput | rol_servicioScalarWhereInput[]
  }

  export type usuario_rolUpdateManyWithoutRolNestedInput = {
    create?: XOR<usuario_rolCreateWithoutRolInput, usuario_rolUncheckedCreateWithoutRolInput> | usuario_rolCreateWithoutRolInput[] | usuario_rolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: usuario_rolCreateOrConnectWithoutRolInput | usuario_rolCreateOrConnectWithoutRolInput[]
    upsert?: usuario_rolUpsertWithWhereUniqueWithoutRolInput | usuario_rolUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: usuario_rolCreateManyRolInputEnvelope
    set?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    disconnect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    delete?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    connect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    update?: usuario_rolUpdateWithWhereUniqueWithoutRolInput | usuario_rolUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: usuario_rolUpdateManyWithWhereWithoutRolInput | usuario_rolUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: usuario_rolScalarWhereInput | usuario_rolScalarWhereInput[]
  }

  export type rol_servicioUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<rol_servicioCreateWithoutRolInput, rol_servicioUncheckedCreateWithoutRolInput> | rol_servicioCreateWithoutRolInput[] | rol_servicioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: rol_servicioCreateOrConnectWithoutRolInput | rol_servicioCreateOrConnectWithoutRolInput[]
    upsert?: rol_servicioUpsertWithWhereUniqueWithoutRolInput | rol_servicioUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: rol_servicioCreateManyRolInputEnvelope
    set?: rol_servicioWhereUniqueInput | rol_servicioWhereUniqueInput[]
    disconnect?: rol_servicioWhereUniqueInput | rol_servicioWhereUniqueInput[]
    delete?: rol_servicioWhereUniqueInput | rol_servicioWhereUniqueInput[]
    connect?: rol_servicioWhereUniqueInput | rol_servicioWhereUniqueInput[]
    update?: rol_servicioUpdateWithWhereUniqueWithoutRolInput | rol_servicioUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: rol_servicioUpdateManyWithWhereWithoutRolInput | rol_servicioUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: rol_servicioScalarWhereInput | rol_servicioScalarWhereInput[]
  }

  export type usuario_rolUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<usuario_rolCreateWithoutRolInput, usuario_rolUncheckedCreateWithoutRolInput> | usuario_rolCreateWithoutRolInput[] | usuario_rolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: usuario_rolCreateOrConnectWithoutRolInput | usuario_rolCreateOrConnectWithoutRolInput[]
    upsert?: usuario_rolUpsertWithWhereUniqueWithoutRolInput | usuario_rolUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: usuario_rolCreateManyRolInputEnvelope
    set?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    disconnect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    delete?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    connect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    update?: usuario_rolUpdateWithWhereUniqueWithoutRolInput | usuario_rolUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: usuario_rolUpdateManyWithWhereWithoutRolInput | usuario_rolUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: usuario_rolScalarWhereInput | usuario_rolScalarWhereInput[]
  }

  export type rol_servicioCreateNestedManyWithoutServicioInput = {
    create?: XOR<rol_servicioCreateWithoutServicioInput, rol_servicioUncheckedCreateWithoutServicioInput> | rol_servicioCreateWithoutServicioInput[] | rol_servicioUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: rol_servicioCreateOrConnectWithoutServicioInput | rol_servicioCreateOrConnectWithoutServicioInput[]
    createMany?: rol_servicioCreateManyServicioInputEnvelope
    connect?: rol_servicioWhereUniqueInput | rol_servicioWhereUniqueInput[]
  }

  export type rol_servicioUncheckedCreateNestedManyWithoutServicioInput = {
    create?: XOR<rol_servicioCreateWithoutServicioInput, rol_servicioUncheckedCreateWithoutServicioInput> | rol_servicioCreateWithoutServicioInput[] | rol_servicioUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: rol_servicioCreateOrConnectWithoutServicioInput | rol_servicioCreateOrConnectWithoutServicioInput[]
    createMany?: rol_servicioCreateManyServicioInputEnvelope
    connect?: rol_servicioWhereUniqueInput | rol_servicioWhereUniqueInput[]
  }

  export type rol_servicioUpdateManyWithoutServicioNestedInput = {
    create?: XOR<rol_servicioCreateWithoutServicioInput, rol_servicioUncheckedCreateWithoutServicioInput> | rol_servicioCreateWithoutServicioInput[] | rol_servicioUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: rol_servicioCreateOrConnectWithoutServicioInput | rol_servicioCreateOrConnectWithoutServicioInput[]
    upsert?: rol_servicioUpsertWithWhereUniqueWithoutServicioInput | rol_servicioUpsertWithWhereUniqueWithoutServicioInput[]
    createMany?: rol_servicioCreateManyServicioInputEnvelope
    set?: rol_servicioWhereUniqueInput | rol_servicioWhereUniqueInput[]
    disconnect?: rol_servicioWhereUniqueInput | rol_servicioWhereUniqueInput[]
    delete?: rol_servicioWhereUniqueInput | rol_servicioWhereUniqueInput[]
    connect?: rol_servicioWhereUniqueInput | rol_servicioWhereUniqueInput[]
    update?: rol_servicioUpdateWithWhereUniqueWithoutServicioInput | rol_servicioUpdateWithWhereUniqueWithoutServicioInput[]
    updateMany?: rol_servicioUpdateManyWithWhereWithoutServicioInput | rol_servicioUpdateManyWithWhereWithoutServicioInput[]
    deleteMany?: rol_servicioScalarWhereInput | rol_servicioScalarWhereInput[]
  }

  export type rol_servicioUncheckedUpdateManyWithoutServicioNestedInput = {
    create?: XOR<rol_servicioCreateWithoutServicioInput, rol_servicioUncheckedCreateWithoutServicioInput> | rol_servicioCreateWithoutServicioInput[] | rol_servicioUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: rol_servicioCreateOrConnectWithoutServicioInput | rol_servicioCreateOrConnectWithoutServicioInput[]
    upsert?: rol_servicioUpsertWithWhereUniqueWithoutServicioInput | rol_servicioUpsertWithWhereUniqueWithoutServicioInput[]
    createMany?: rol_servicioCreateManyServicioInputEnvelope
    set?: rol_servicioWhereUniqueInput | rol_servicioWhereUniqueInput[]
    disconnect?: rol_servicioWhereUniqueInput | rol_servicioWhereUniqueInput[]
    delete?: rol_servicioWhereUniqueInput | rol_servicioWhereUniqueInput[]
    connect?: rol_servicioWhereUniqueInput | rol_servicioWhereUniqueInput[]
    update?: rol_servicioUpdateWithWhereUniqueWithoutServicioInput | rol_servicioUpdateWithWhereUniqueWithoutServicioInput[]
    updateMany?: rol_servicioUpdateManyWithWhereWithoutServicioInput | rol_servicioUpdateManyWithWhereWithoutServicioInput[]
    deleteMany?: rol_servicioScalarWhereInput | rol_servicioScalarWhereInput[]
  }

  export type rolCreateNestedOneWithoutRol_servicioInput = {
    create?: XOR<rolCreateWithoutRol_servicioInput, rolUncheckedCreateWithoutRol_servicioInput>
    connectOrCreate?: rolCreateOrConnectWithoutRol_servicioInput
    connect?: rolWhereUniqueInput
  }

  export type servicioCreateNestedOneWithoutRol_servicioInput = {
    create?: XOR<servicioCreateWithoutRol_servicioInput, servicioUncheckedCreateWithoutRol_servicioInput>
    connectOrCreate?: servicioCreateOrConnectWithoutRol_servicioInput
    connect?: servicioWhereUniqueInput
  }

  export type rolUpdateOneRequiredWithoutRol_servicioNestedInput = {
    create?: XOR<rolCreateWithoutRol_servicioInput, rolUncheckedCreateWithoutRol_servicioInput>
    connectOrCreate?: rolCreateOrConnectWithoutRol_servicioInput
    upsert?: rolUpsertWithoutRol_servicioInput
    connect?: rolWhereUniqueInput
    update?: XOR<XOR<rolUpdateToOneWithWhereWithoutRol_servicioInput, rolUpdateWithoutRol_servicioInput>, rolUncheckedUpdateWithoutRol_servicioInput>
  }

  export type servicioUpdateOneRequiredWithoutRol_servicioNestedInput = {
    create?: XOR<servicioCreateWithoutRol_servicioInput, servicioUncheckedCreateWithoutRol_servicioInput>
    connectOrCreate?: servicioCreateOrConnectWithoutRol_servicioInput
    upsert?: servicioUpsertWithoutRol_servicioInput
    connect?: servicioWhereUniqueInput
    update?: XOR<XOR<servicioUpdateToOneWithWhereWithoutRol_servicioInput, servicioUpdateWithoutRol_servicioInput>, servicioUncheckedUpdateWithoutRol_servicioInput>
  }

  export type evaluacionCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<evaluacionCreateWithoutUsuarioInput, evaluacionUncheckedCreateWithoutUsuarioInput> | evaluacionCreateWithoutUsuarioInput[] | evaluacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: evaluacionCreateOrConnectWithoutUsuarioInput | evaluacionCreateOrConnectWithoutUsuarioInput[]
    createMany?: evaluacionCreateManyUsuarioInputEnvelope
    connect?: evaluacionWhereUniqueInput | evaluacionWhereUniqueInput[]
  }

  export type nrcCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<nrcCreateWithoutUsuarioInput, nrcUncheckedCreateWithoutUsuarioInput> | nrcCreateWithoutUsuarioInput[] | nrcUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: nrcCreateOrConnectWithoutUsuarioInput | nrcCreateOrConnectWithoutUsuarioInput[]
    createMany?: nrcCreateManyUsuarioInputEnvelope
    connect?: nrcWhereUniqueInput | nrcWhereUniqueInput[]
  }

  export type usuario_rolCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<usuario_rolCreateWithoutUsuarioInput, usuario_rolUncheckedCreateWithoutUsuarioInput> | usuario_rolCreateWithoutUsuarioInput[] | usuario_rolUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: usuario_rolCreateOrConnectWithoutUsuarioInput | usuario_rolCreateOrConnectWithoutUsuarioInput[]
    createMany?: usuario_rolCreateManyUsuarioInputEnvelope
    connect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
  }

  export type evaluacionUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<evaluacionCreateWithoutUsuarioInput, evaluacionUncheckedCreateWithoutUsuarioInput> | evaluacionCreateWithoutUsuarioInput[] | evaluacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: evaluacionCreateOrConnectWithoutUsuarioInput | evaluacionCreateOrConnectWithoutUsuarioInput[]
    createMany?: evaluacionCreateManyUsuarioInputEnvelope
    connect?: evaluacionWhereUniqueInput | evaluacionWhereUniqueInput[]
  }

  export type nrcUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<nrcCreateWithoutUsuarioInput, nrcUncheckedCreateWithoutUsuarioInput> | nrcCreateWithoutUsuarioInput[] | nrcUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: nrcCreateOrConnectWithoutUsuarioInput | nrcCreateOrConnectWithoutUsuarioInput[]
    createMany?: nrcCreateManyUsuarioInputEnvelope
    connect?: nrcWhereUniqueInput | nrcWhereUniqueInput[]
  }

  export type usuario_rolUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<usuario_rolCreateWithoutUsuarioInput, usuario_rolUncheckedCreateWithoutUsuarioInput> | usuario_rolCreateWithoutUsuarioInput[] | usuario_rolUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: usuario_rolCreateOrConnectWithoutUsuarioInput | usuario_rolCreateOrConnectWithoutUsuarioInput[]
    createMany?: usuario_rolCreateManyUsuarioInputEnvelope
    connect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
  }

  export type evaluacionUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<evaluacionCreateWithoutUsuarioInput, evaluacionUncheckedCreateWithoutUsuarioInput> | evaluacionCreateWithoutUsuarioInput[] | evaluacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: evaluacionCreateOrConnectWithoutUsuarioInput | evaluacionCreateOrConnectWithoutUsuarioInput[]
    upsert?: evaluacionUpsertWithWhereUniqueWithoutUsuarioInput | evaluacionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: evaluacionCreateManyUsuarioInputEnvelope
    set?: evaluacionWhereUniqueInput | evaluacionWhereUniqueInput[]
    disconnect?: evaluacionWhereUniqueInput | evaluacionWhereUniqueInput[]
    delete?: evaluacionWhereUniqueInput | evaluacionWhereUniqueInput[]
    connect?: evaluacionWhereUniqueInput | evaluacionWhereUniqueInput[]
    update?: evaluacionUpdateWithWhereUniqueWithoutUsuarioInput | evaluacionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: evaluacionUpdateManyWithWhereWithoutUsuarioInput | evaluacionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: evaluacionScalarWhereInput | evaluacionScalarWhereInput[]
  }

  export type nrcUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<nrcCreateWithoutUsuarioInput, nrcUncheckedCreateWithoutUsuarioInput> | nrcCreateWithoutUsuarioInput[] | nrcUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: nrcCreateOrConnectWithoutUsuarioInput | nrcCreateOrConnectWithoutUsuarioInput[]
    upsert?: nrcUpsertWithWhereUniqueWithoutUsuarioInput | nrcUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: nrcCreateManyUsuarioInputEnvelope
    set?: nrcWhereUniqueInput | nrcWhereUniqueInput[]
    disconnect?: nrcWhereUniqueInput | nrcWhereUniqueInput[]
    delete?: nrcWhereUniqueInput | nrcWhereUniqueInput[]
    connect?: nrcWhereUniqueInput | nrcWhereUniqueInput[]
    update?: nrcUpdateWithWhereUniqueWithoutUsuarioInput | nrcUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: nrcUpdateManyWithWhereWithoutUsuarioInput | nrcUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: nrcScalarWhereInput | nrcScalarWhereInput[]
  }

  export type usuario_rolUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<usuario_rolCreateWithoutUsuarioInput, usuario_rolUncheckedCreateWithoutUsuarioInput> | usuario_rolCreateWithoutUsuarioInput[] | usuario_rolUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: usuario_rolCreateOrConnectWithoutUsuarioInput | usuario_rolCreateOrConnectWithoutUsuarioInput[]
    upsert?: usuario_rolUpsertWithWhereUniqueWithoutUsuarioInput | usuario_rolUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: usuario_rolCreateManyUsuarioInputEnvelope
    set?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    disconnect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    delete?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    connect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    update?: usuario_rolUpdateWithWhereUniqueWithoutUsuarioInput | usuario_rolUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: usuario_rolUpdateManyWithWhereWithoutUsuarioInput | usuario_rolUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: usuario_rolScalarWhereInput | usuario_rolScalarWhereInput[]
  }

  export type evaluacionUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<evaluacionCreateWithoutUsuarioInput, evaluacionUncheckedCreateWithoutUsuarioInput> | evaluacionCreateWithoutUsuarioInput[] | evaluacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: evaluacionCreateOrConnectWithoutUsuarioInput | evaluacionCreateOrConnectWithoutUsuarioInput[]
    upsert?: evaluacionUpsertWithWhereUniqueWithoutUsuarioInput | evaluacionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: evaluacionCreateManyUsuarioInputEnvelope
    set?: evaluacionWhereUniqueInput | evaluacionWhereUniqueInput[]
    disconnect?: evaluacionWhereUniqueInput | evaluacionWhereUniqueInput[]
    delete?: evaluacionWhereUniqueInput | evaluacionWhereUniqueInput[]
    connect?: evaluacionWhereUniqueInput | evaluacionWhereUniqueInput[]
    update?: evaluacionUpdateWithWhereUniqueWithoutUsuarioInput | evaluacionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: evaluacionUpdateManyWithWhereWithoutUsuarioInput | evaluacionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: evaluacionScalarWhereInput | evaluacionScalarWhereInput[]
  }

  export type nrcUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<nrcCreateWithoutUsuarioInput, nrcUncheckedCreateWithoutUsuarioInput> | nrcCreateWithoutUsuarioInput[] | nrcUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: nrcCreateOrConnectWithoutUsuarioInput | nrcCreateOrConnectWithoutUsuarioInput[]
    upsert?: nrcUpsertWithWhereUniqueWithoutUsuarioInput | nrcUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: nrcCreateManyUsuarioInputEnvelope
    set?: nrcWhereUniqueInput | nrcWhereUniqueInput[]
    disconnect?: nrcWhereUniqueInput | nrcWhereUniqueInput[]
    delete?: nrcWhereUniqueInput | nrcWhereUniqueInput[]
    connect?: nrcWhereUniqueInput | nrcWhereUniqueInput[]
    update?: nrcUpdateWithWhereUniqueWithoutUsuarioInput | nrcUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: nrcUpdateManyWithWhereWithoutUsuarioInput | nrcUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: nrcScalarWhereInput | nrcScalarWhereInput[]
  }

  export type usuario_rolUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<usuario_rolCreateWithoutUsuarioInput, usuario_rolUncheckedCreateWithoutUsuarioInput> | usuario_rolCreateWithoutUsuarioInput[] | usuario_rolUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: usuario_rolCreateOrConnectWithoutUsuarioInput | usuario_rolCreateOrConnectWithoutUsuarioInput[]
    upsert?: usuario_rolUpsertWithWhereUniqueWithoutUsuarioInput | usuario_rolUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: usuario_rolCreateManyUsuarioInputEnvelope
    set?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    disconnect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    delete?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    connect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    update?: usuario_rolUpdateWithWhereUniqueWithoutUsuarioInput | usuario_rolUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: usuario_rolUpdateManyWithWhereWithoutUsuarioInput | usuario_rolUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: usuario_rolScalarWhereInput | usuario_rolScalarWhereInput[]
  }

  export type rolCreateNestedOneWithoutUsuario_rolInput = {
    create?: XOR<rolCreateWithoutUsuario_rolInput, rolUncheckedCreateWithoutUsuario_rolInput>
    connectOrCreate?: rolCreateOrConnectWithoutUsuario_rolInput
    connect?: rolWhereUniqueInput
  }

  export type usuarioCreateNestedOneWithoutUsuario_rolInput = {
    create?: XOR<usuarioCreateWithoutUsuario_rolInput, usuarioUncheckedCreateWithoutUsuario_rolInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutUsuario_rolInput
    connect?: usuarioWhereUniqueInput
  }

  export type rolUpdateOneRequiredWithoutUsuario_rolNestedInput = {
    create?: XOR<rolCreateWithoutUsuario_rolInput, rolUncheckedCreateWithoutUsuario_rolInput>
    connectOrCreate?: rolCreateOrConnectWithoutUsuario_rolInput
    upsert?: rolUpsertWithoutUsuario_rolInput
    connect?: rolWhereUniqueInput
    update?: XOR<XOR<rolUpdateToOneWithWhereWithoutUsuario_rolInput, rolUpdateWithoutUsuario_rolInput>, rolUncheckedUpdateWithoutUsuario_rolInput>
  }

  export type usuarioUpdateOneRequiredWithoutUsuario_rolNestedInput = {
    create?: XOR<usuarioCreateWithoutUsuario_rolInput, usuarioUncheckedCreateWithoutUsuario_rolInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutUsuario_rolInput
    upsert?: usuarioUpsertWithoutUsuario_rolInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutUsuario_rolInput, usuarioUpdateWithoutUsuario_rolInput>, usuarioUncheckedUpdateWithoutUsuario_rolInput>
  }

  export type evaluacionCreateNestedManyWithoutVideojuegoInput = {
    create?: XOR<evaluacionCreateWithoutVideojuegoInput, evaluacionUncheckedCreateWithoutVideojuegoInput> | evaluacionCreateWithoutVideojuegoInput[] | evaluacionUncheckedCreateWithoutVideojuegoInput[]
    connectOrCreate?: evaluacionCreateOrConnectWithoutVideojuegoInput | evaluacionCreateOrConnectWithoutVideojuegoInput[]
    createMany?: evaluacionCreateManyVideojuegoInputEnvelope
    connect?: evaluacionWhereUniqueInput | evaluacionWhereUniqueInput[]
  }

  export type equipoCreateNestedOneWithoutVideojuegoInput = {
    create?: XOR<equipoCreateWithoutVideojuegoInput, equipoUncheckedCreateWithoutVideojuegoInput>
    connectOrCreate?: equipoCreateOrConnectWithoutVideojuegoInput
    connect?: equipoWhereUniqueInput
  }

  export type evaluacionUncheckedCreateNestedManyWithoutVideojuegoInput = {
    create?: XOR<evaluacionCreateWithoutVideojuegoInput, evaluacionUncheckedCreateWithoutVideojuegoInput> | evaluacionCreateWithoutVideojuegoInput[] | evaluacionUncheckedCreateWithoutVideojuegoInput[]
    connectOrCreate?: evaluacionCreateOrConnectWithoutVideojuegoInput | evaluacionCreateOrConnectWithoutVideojuegoInput[]
    createMany?: evaluacionCreateManyVideojuegoInputEnvelope
    connect?: evaluacionWhereUniqueInput | evaluacionWhereUniqueInput[]
  }

  export type evaluacionUpdateManyWithoutVideojuegoNestedInput = {
    create?: XOR<evaluacionCreateWithoutVideojuegoInput, evaluacionUncheckedCreateWithoutVideojuegoInput> | evaluacionCreateWithoutVideojuegoInput[] | evaluacionUncheckedCreateWithoutVideojuegoInput[]
    connectOrCreate?: evaluacionCreateOrConnectWithoutVideojuegoInput | evaluacionCreateOrConnectWithoutVideojuegoInput[]
    upsert?: evaluacionUpsertWithWhereUniqueWithoutVideojuegoInput | evaluacionUpsertWithWhereUniqueWithoutVideojuegoInput[]
    createMany?: evaluacionCreateManyVideojuegoInputEnvelope
    set?: evaluacionWhereUniqueInput | evaluacionWhereUniqueInput[]
    disconnect?: evaluacionWhereUniqueInput | evaluacionWhereUniqueInput[]
    delete?: evaluacionWhereUniqueInput | evaluacionWhereUniqueInput[]
    connect?: evaluacionWhereUniqueInput | evaluacionWhereUniqueInput[]
    update?: evaluacionUpdateWithWhereUniqueWithoutVideojuegoInput | evaluacionUpdateWithWhereUniqueWithoutVideojuegoInput[]
    updateMany?: evaluacionUpdateManyWithWhereWithoutVideojuegoInput | evaluacionUpdateManyWithWhereWithoutVideojuegoInput[]
    deleteMany?: evaluacionScalarWhereInput | evaluacionScalarWhereInput[]
  }

  export type equipoUpdateOneRequiredWithoutVideojuegoNestedInput = {
    create?: XOR<equipoCreateWithoutVideojuegoInput, equipoUncheckedCreateWithoutVideojuegoInput>
    connectOrCreate?: equipoCreateOrConnectWithoutVideojuegoInput
    upsert?: equipoUpsertWithoutVideojuegoInput
    connect?: equipoWhereUniqueInput
    update?: XOR<XOR<equipoUpdateToOneWithWhereWithoutVideojuegoInput, equipoUpdateWithoutVideojuegoInput>, equipoUncheckedUpdateWithoutVideojuegoInput>
  }

  export type evaluacionUncheckedUpdateManyWithoutVideojuegoNestedInput = {
    create?: XOR<evaluacionCreateWithoutVideojuegoInput, evaluacionUncheckedCreateWithoutVideojuegoInput> | evaluacionCreateWithoutVideojuegoInput[] | evaluacionUncheckedCreateWithoutVideojuegoInput[]
    connectOrCreate?: evaluacionCreateOrConnectWithoutVideojuegoInput | evaluacionCreateOrConnectWithoutVideojuegoInput[]
    upsert?: evaluacionUpsertWithWhereUniqueWithoutVideojuegoInput | evaluacionUpsertWithWhereUniqueWithoutVideojuegoInput[]
    createMany?: evaluacionCreateManyVideojuegoInputEnvelope
    set?: evaluacionWhereUniqueInput | evaluacionWhereUniqueInput[]
    disconnect?: evaluacionWhereUniqueInput | evaluacionWhereUniqueInput[]
    delete?: evaluacionWhereUniqueInput | evaluacionWhereUniqueInput[]
    connect?: evaluacionWhereUniqueInput | evaluacionWhereUniqueInput[]
    update?: evaluacionUpdateWithWhereUniqueWithoutVideojuegoInput | evaluacionUpdateWithWhereUniqueWithoutVideojuegoInput[]
    updateMany?: evaluacionUpdateManyWithWhereWithoutVideojuegoInput | evaluacionUpdateManyWithWhereWithoutVideojuegoInput[]
    deleteMany?: evaluacionScalarWhereInput | evaluacionScalarWhereInput[]
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type criterio_evaluacionCreateWithoutCriterioInput = {
    valoracion: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    evaluacion: evaluacionCreateNestedOneWithoutCriterio_evaluacionInput
  }

  export type criterio_evaluacionUncheckedCreateWithoutCriterioInput = {
    id_evaluacion: number
    valoracion: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type criterio_evaluacionCreateOrConnectWithoutCriterioInput = {
    where: criterio_evaluacionWhereUniqueInput
    create: XOR<criterio_evaluacionCreateWithoutCriterioInput, criterio_evaluacionUncheckedCreateWithoutCriterioInput>
  }

  export type criterio_evaluacionCreateManyCriterioInputEnvelope = {
    data: criterio_evaluacionCreateManyCriterioInput | criterio_evaluacionCreateManyCriterioInput[]
    skipDuplicates?: boolean
  }

  export type criterio_evaluacionUpsertWithWhereUniqueWithoutCriterioInput = {
    where: criterio_evaluacionWhereUniqueInput
    update: XOR<criterio_evaluacionUpdateWithoutCriterioInput, criterio_evaluacionUncheckedUpdateWithoutCriterioInput>
    create: XOR<criterio_evaluacionCreateWithoutCriterioInput, criterio_evaluacionUncheckedCreateWithoutCriterioInput>
  }

  export type criterio_evaluacionUpdateWithWhereUniqueWithoutCriterioInput = {
    where: criterio_evaluacionWhereUniqueInput
    data: XOR<criterio_evaluacionUpdateWithoutCriterioInput, criterio_evaluacionUncheckedUpdateWithoutCriterioInput>
  }

  export type criterio_evaluacionUpdateManyWithWhereWithoutCriterioInput = {
    where: criterio_evaluacionScalarWhereInput
    data: XOR<criterio_evaluacionUpdateManyMutationInput, criterio_evaluacionUncheckedUpdateManyWithoutCriterioInput>
  }

  export type criterio_evaluacionScalarWhereInput = {
    AND?: criterio_evaluacionScalarWhereInput | criterio_evaluacionScalarWhereInput[]
    OR?: criterio_evaluacionScalarWhereInput[]
    NOT?: criterio_evaluacionScalarWhereInput | criterio_evaluacionScalarWhereInput[]
    id_criterio?: IntFilter<"criterio_evaluacion"> | number
    id_evaluacion?: IntFilter<"criterio_evaluacion"> | number
    valoracion?: StringFilter<"criterio_evaluacion"> | string
    fecha_creacion?: DateTimeFilter<"criterio_evaluacion"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"criterio_evaluacion"> | Date | string | null
    estado?: BoolFilter<"criterio_evaluacion"> | boolean
  }

  export type criterioCreateWithoutCriterio_evaluacionInput = {
    nombre: string
    descripcion: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    porcentaje?: number
  }

  export type criterioUncheckedCreateWithoutCriterio_evaluacionInput = {
    id_criterio?: number
    nombre: string
    descripcion: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    porcentaje?: number
  }

  export type criterioCreateOrConnectWithoutCriterio_evaluacionInput = {
    where: criterioWhereUniqueInput
    create: XOR<criterioCreateWithoutCriterio_evaluacionInput, criterioUncheckedCreateWithoutCriterio_evaluacionInput>
  }

  export type evaluacionCreateWithoutCriterio_evaluacionInput = {
    comentario?: string | null
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    usuario: usuarioCreateNestedOneWithoutEvaluacionInput
    videojuego: videojuegoCreateNestedOneWithoutEvaluacionInput
  }

  export type evaluacionUncheckedCreateWithoutCriterio_evaluacionInput = {
    id_evaluacion?: number
    id_usuario: number
    id_videojuegos: number
    comentario?: string | null
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type evaluacionCreateOrConnectWithoutCriterio_evaluacionInput = {
    where: evaluacionWhereUniqueInput
    create: XOR<evaluacionCreateWithoutCriterio_evaluacionInput, evaluacionUncheckedCreateWithoutCriterio_evaluacionInput>
  }

  export type criterioUpsertWithoutCriterio_evaluacionInput = {
    update: XOR<criterioUpdateWithoutCriterio_evaluacionInput, criterioUncheckedUpdateWithoutCriterio_evaluacionInput>
    create: XOR<criterioCreateWithoutCriterio_evaluacionInput, criterioUncheckedCreateWithoutCriterio_evaluacionInput>
    where?: criterioWhereInput
  }

  export type criterioUpdateToOneWithWhereWithoutCriterio_evaluacionInput = {
    where?: criterioWhereInput
    data: XOR<criterioUpdateWithoutCriterio_evaluacionInput, criterioUncheckedUpdateWithoutCriterio_evaluacionInput>
  }

  export type criterioUpdateWithoutCriterio_evaluacionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    porcentaje?: FloatFieldUpdateOperationsInput | number
  }

  export type criterioUncheckedUpdateWithoutCriterio_evaluacionInput = {
    id_criterio?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    porcentaje?: FloatFieldUpdateOperationsInput | number
  }

  export type evaluacionUpsertWithoutCriterio_evaluacionInput = {
    update: XOR<evaluacionUpdateWithoutCriterio_evaluacionInput, evaluacionUncheckedUpdateWithoutCriterio_evaluacionInput>
    create: XOR<evaluacionCreateWithoutCriterio_evaluacionInput, evaluacionUncheckedCreateWithoutCriterio_evaluacionInput>
    where?: evaluacionWhereInput
  }

  export type evaluacionUpdateToOneWithWhereWithoutCriterio_evaluacionInput = {
    where?: evaluacionWhereInput
    data: XOR<evaluacionUpdateWithoutCriterio_evaluacionInput, evaluacionUncheckedUpdateWithoutCriterio_evaluacionInput>
  }

  export type evaluacionUpdateWithoutCriterio_evaluacionInput = {
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    usuario?: usuarioUpdateOneRequiredWithoutEvaluacionNestedInput
    videojuego?: videojuegoUpdateOneRequiredWithoutEvaluacionNestedInput
  }

  export type evaluacionUncheckedUpdateWithoutCriterio_evaluacionInput = {
    id_evaluacion?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_videojuegos?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type estadoCreateWithoutEquiposInput = {
    estado: string
    created_at?: Date | string
  }

  export type estadoUncheckedCreateWithoutEquiposInput = {
    id_estado?: number
    estado: string
    created_at?: Date | string
  }

  export type estadoCreateOrConnectWithoutEquiposInput = {
    where: estadoWhereUniqueInput
    create: XOR<estadoCreateWithoutEquiposInput, estadoUncheckedCreateWithoutEquiposInput>
  }

  export type integranteCreateWithoutEquipoInput = {
    primer_nombre: string
    correo: string
    usuario_github: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    integrante_nrc?: integrante_nrcCreateNestedManyWithoutIntegranteInput
  }

  export type integranteUncheckedCreateWithoutEquipoInput = {
    id_integrante?: number
    primer_nombre: string
    correo: string
    usuario_github: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    integrante_nrc?: integrante_nrcUncheckedCreateNestedManyWithoutIntegranteInput
  }

  export type integranteCreateOrConnectWithoutEquipoInput = {
    where: integranteWhereUniqueInput
    create: XOR<integranteCreateWithoutEquipoInput, integranteUncheckedCreateWithoutEquipoInput>
  }

  export type integranteCreateManyEquipoInputEnvelope = {
    data: integranteCreateManyEquipoInput | integranteCreateManyEquipoInput[]
    skipDuplicates?: boolean
  }

  export type videojuegoCreateWithoutEquipoInput = {
    nombre: string
    descripcion?: string | null
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    token_captcha?: string | null
    evaluacion?: evaluacionCreateNestedManyWithoutVideojuegoInput
  }

  export type videojuegoUncheckedCreateWithoutEquipoInput = {
    id_videojuego?: number
    nombre: string
    descripcion?: string | null
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    token_captcha?: string | null
    evaluacion?: evaluacionUncheckedCreateNestedManyWithoutVideojuegoInput
  }

  export type videojuegoCreateOrConnectWithoutEquipoInput = {
    where: videojuegoWhereUniqueInput
    create: XOR<videojuegoCreateWithoutEquipoInput, videojuegoUncheckedCreateWithoutEquipoInput>
  }

  export type videojuegoCreateManyEquipoInputEnvelope = {
    data: videojuegoCreateManyEquipoInput | videojuegoCreateManyEquipoInput[]
    skipDuplicates?: boolean
  }

  export type estadoUpsertWithoutEquiposInput = {
    update: XOR<estadoUpdateWithoutEquiposInput, estadoUncheckedUpdateWithoutEquiposInput>
    create: XOR<estadoCreateWithoutEquiposInput, estadoUncheckedCreateWithoutEquiposInput>
    where?: estadoWhereInput
  }

  export type estadoUpdateToOneWithWhereWithoutEquiposInput = {
    where?: estadoWhereInput
    data: XOR<estadoUpdateWithoutEquiposInput, estadoUncheckedUpdateWithoutEquiposInput>
  }

  export type estadoUpdateWithoutEquiposInput = {
    estado?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type estadoUncheckedUpdateWithoutEquiposInput = {
    id_estado?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type integranteUpsertWithWhereUniqueWithoutEquipoInput = {
    where: integranteWhereUniqueInput
    update: XOR<integranteUpdateWithoutEquipoInput, integranteUncheckedUpdateWithoutEquipoInput>
    create: XOR<integranteCreateWithoutEquipoInput, integranteUncheckedCreateWithoutEquipoInput>
  }

  export type integranteUpdateWithWhereUniqueWithoutEquipoInput = {
    where: integranteWhereUniqueInput
    data: XOR<integranteUpdateWithoutEquipoInput, integranteUncheckedUpdateWithoutEquipoInput>
  }

  export type integranteUpdateManyWithWhereWithoutEquipoInput = {
    where: integranteScalarWhereInput
    data: XOR<integranteUpdateManyMutationInput, integranteUncheckedUpdateManyWithoutEquipoInput>
  }

  export type integranteScalarWhereInput = {
    AND?: integranteScalarWhereInput | integranteScalarWhereInput[]
    OR?: integranteScalarWhereInput[]
    NOT?: integranteScalarWhereInput | integranteScalarWhereInput[]
    id_integrante?: IntFilter<"integrante"> | number
    id_equipo?: IntFilter<"integrante"> | number
    primer_nombre?: StringFilter<"integrante"> | string
    correo?: StringFilter<"integrante"> | string
    usuario_github?: StringFilter<"integrante"> | string
    fecha_creacion?: DateTimeFilter<"integrante"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"integrante"> | Date | string | null
    estado?: BoolFilter<"integrante"> | boolean
  }

  export type videojuegoUpsertWithWhereUniqueWithoutEquipoInput = {
    where: videojuegoWhereUniqueInput
    update: XOR<videojuegoUpdateWithoutEquipoInput, videojuegoUncheckedUpdateWithoutEquipoInput>
    create: XOR<videojuegoCreateWithoutEquipoInput, videojuegoUncheckedCreateWithoutEquipoInput>
  }

  export type videojuegoUpdateWithWhereUniqueWithoutEquipoInput = {
    where: videojuegoWhereUniqueInput
    data: XOR<videojuegoUpdateWithoutEquipoInput, videojuegoUncheckedUpdateWithoutEquipoInput>
  }

  export type videojuegoUpdateManyWithWhereWithoutEquipoInput = {
    where: videojuegoScalarWhereInput
    data: XOR<videojuegoUpdateManyMutationInput, videojuegoUncheckedUpdateManyWithoutEquipoInput>
  }

  export type videojuegoScalarWhereInput = {
    AND?: videojuegoScalarWhereInput | videojuegoScalarWhereInput[]
    OR?: videojuegoScalarWhereInput[]
    NOT?: videojuegoScalarWhereInput | videojuegoScalarWhereInput[]
    id_videojuego?: IntFilter<"videojuego"> | number
    id_equipo?: IntFilter<"videojuego"> | number
    nombre?: StringFilter<"videojuego"> | string
    descripcion?: StringNullableFilter<"videojuego"> | string | null
    fecha_creacion?: DateTimeFilter<"videojuego"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"videojuego"> | Date | string | null
    estado?: BoolFilter<"videojuego"> | boolean
    token_captcha?: StringNullableFilter<"videojuego"> | string | null
  }

  export type equipoCreateWithoutEstado_equipoInput = {
    nombre: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    integrante?: integranteCreateNestedManyWithoutEquipoInput
    videojuego?: videojuegoCreateNestedManyWithoutEquipoInput
  }

  export type equipoUncheckedCreateWithoutEstado_equipoInput = {
    id_equipo?: number
    nombre: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    integrante?: integranteUncheckedCreateNestedManyWithoutEquipoInput
    videojuego?: videojuegoUncheckedCreateNestedManyWithoutEquipoInput
  }

  export type equipoCreateOrConnectWithoutEstado_equipoInput = {
    where: equipoWhereUniqueInput
    create: XOR<equipoCreateWithoutEstado_equipoInput, equipoUncheckedCreateWithoutEstado_equipoInput>
  }

  export type equipoCreateManyEstado_equipoInputEnvelope = {
    data: equipoCreateManyEstado_equipoInput | equipoCreateManyEstado_equipoInput[]
    skipDuplicates?: boolean
  }

  export type equipoUpsertWithWhereUniqueWithoutEstado_equipoInput = {
    where: equipoWhereUniqueInput
    update: XOR<equipoUpdateWithoutEstado_equipoInput, equipoUncheckedUpdateWithoutEstado_equipoInput>
    create: XOR<equipoCreateWithoutEstado_equipoInput, equipoUncheckedCreateWithoutEstado_equipoInput>
  }

  export type equipoUpdateWithWhereUniqueWithoutEstado_equipoInput = {
    where: equipoWhereUniqueInput
    data: XOR<equipoUpdateWithoutEstado_equipoInput, equipoUncheckedUpdateWithoutEstado_equipoInput>
  }

  export type equipoUpdateManyWithWhereWithoutEstado_equipoInput = {
    where: equipoScalarWhereInput
    data: XOR<equipoUpdateManyMutationInput, equipoUncheckedUpdateManyWithoutEstado_equipoInput>
  }

  export type equipoScalarWhereInput = {
    AND?: equipoScalarWhereInput | equipoScalarWhereInput[]
    OR?: equipoScalarWhereInput[]
    NOT?: equipoScalarWhereInput | equipoScalarWhereInput[]
    id_equipo?: IntFilter<"equipo"> | number
    nombre?: StringFilter<"equipo"> | string
    id_estado?: IntFilter<"equipo"> | number
    fecha_creacion?: DateTimeFilter<"equipo"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"equipo"> | Date | string | null
    estado?: BoolFilter<"equipo"> | boolean
  }

  export type criterio_evaluacionCreateWithoutEvaluacionInput = {
    valoracion: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    criterio: criterioCreateNestedOneWithoutCriterio_evaluacionInput
  }

  export type criterio_evaluacionUncheckedCreateWithoutEvaluacionInput = {
    id_criterio: number
    valoracion: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type criterio_evaluacionCreateOrConnectWithoutEvaluacionInput = {
    where: criterio_evaluacionWhereUniqueInput
    create: XOR<criterio_evaluacionCreateWithoutEvaluacionInput, criterio_evaluacionUncheckedCreateWithoutEvaluacionInput>
  }

  export type criterio_evaluacionCreateManyEvaluacionInputEnvelope = {
    data: criterio_evaluacionCreateManyEvaluacionInput | criterio_evaluacionCreateManyEvaluacionInput[]
    skipDuplicates?: boolean
  }

  export type usuarioCreateWithoutEvaluacionInput = {
    primer_nombre: string
    segundo_nombre?: string | null
    primer_apellido: string
    segundo_apellido: string
    correo: string
    confirmado?: boolean
    token_confirmacion: string
    ultima_conexion?: Date | string | null
    password?: string | null
    fecha_actualizacion?: Date | string
    fecha_creacion?: Date | string | null
    estado: boolean
    nrc?: nrcCreateNestedManyWithoutUsuarioInput
    usuario_rol?: usuario_rolCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutEvaluacionInput = {
    id_usuario?: number
    primer_nombre: string
    segundo_nombre?: string | null
    primer_apellido: string
    segundo_apellido: string
    correo: string
    confirmado?: boolean
    token_confirmacion: string
    ultima_conexion?: Date | string | null
    password?: string | null
    fecha_actualizacion?: Date | string
    fecha_creacion?: Date | string | null
    estado: boolean
    nrc?: nrcUncheckedCreateNestedManyWithoutUsuarioInput
    usuario_rol?: usuario_rolUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutEvaluacionInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutEvaluacionInput, usuarioUncheckedCreateWithoutEvaluacionInput>
  }

  export type videojuegoCreateWithoutEvaluacionInput = {
    nombre: string
    descripcion?: string | null
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    token_captcha?: string | null
    equipo: equipoCreateNestedOneWithoutVideojuegoInput
  }

  export type videojuegoUncheckedCreateWithoutEvaluacionInput = {
    id_videojuego?: number
    id_equipo: number
    nombre: string
    descripcion?: string | null
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    token_captcha?: string | null
  }

  export type videojuegoCreateOrConnectWithoutEvaluacionInput = {
    where: videojuegoWhereUniqueInput
    create: XOR<videojuegoCreateWithoutEvaluacionInput, videojuegoUncheckedCreateWithoutEvaluacionInput>
  }

  export type criterio_evaluacionUpsertWithWhereUniqueWithoutEvaluacionInput = {
    where: criterio_evaluacionWhereUniqueInput
    update: XOR<criterio_evaluacionUpdateWithoutEvaluacionInput, criterio_evaluacionUncheckedUpdateWithoutEvaluacionInput>
    create: XOR<criterio_evaluacionCreateWithoutEvaluacionInput, criterio_evaluacionUncheckedCreateWithoutEvaluacionInput>
  }

  export type criterio_evaluacionUpdateWithWhereUniqueWithoutEvaluacionInput = {
    where: criterio_evaluacionWhereUniqueInput
    data: XOR<criterio_evaluacionUpdateWithoutEvaluacionInput, criterio_evaluacionUncheckedUpdateWithoutEvaluacionInput>
  }

  export type criterio_evaluacionUpdateManyWithWhereWithoutEvaluacionInput = {
    where: criterio_evaluacionScalarWhereInput
    data: XOR<criterio_evaluacionUpdateManyMutationInput, criterio_evaluacionUncheckedUpdateManyWithoutEvaluacionInput>
  }

  export type usuarioUpsertWithoutEvaluacionInput = {
    update: XOR<usuarioUpdateWithoutEvaluacionInput, usuarioUncheckedUpdateWithoutEvaluacionInput>
    create: XOR<usuarioCreateWithoutEvaluacionInput, usuarioUncheckedCreateWithoutEvaluacionInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutEvaluacionInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutEvaluacionInput, usuarioUncheckedUpdateWithoutEvaluacionInput>
  }

  export type usuarioUpdateWithoutEvaluacionInput = {
    primer_nombre?: StringFieldUpdateOperationsInput | string
    segundo_nombre?: NullableStringFieldUpdateOperationsInput | string | null
    primer_apellido?: StringFieldUpdateOperationsInput | string
    segundo_apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    confirmado?: BoolFieldUpdateOperationsInput | boolean
    token_confirmacion?: StringFieldUpdateOperationsInput | string
    ultima_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    nrc?: nrcUpdateManyWithoutUsuarioNestedInput
    usuario_rol?: usuario_rolUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutEvaluacionInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    primer_nombre?: StringFieldUpdateOperationsInput | string
    segundo_nombre?: NullableStringFieldUpdateOperationsInput | string | null
    primer_apellido?: StringFieldUpdateOperationsInput | string
    segundo_apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    confirmado?: BoolFieldUpdateOperationsInput | boolean
    token_confirmacion?: StringFieldUpdateOperationsInput | string
    ultima_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    nrc?: nrcUncheckedUpdateManyWithoutUsuarioNestedInput
    usuario_rol?: usuario_rolUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type videojuegoUpsertWithoutEvaluacionInput = {
    update: XOR<videojuegoUpdateWithoutEvaluacionInput, videojuegoUncheckedUpdateWithoutEvaluacionInput>
    create: XOR<videojuegoCreateWithoutEvaluacionInput, videojuegoUncheckedCreateWithoutEvaluacionInput>
    where?: videojuegoWhereInput
  }

  export type videojuegoUpdateToOneWithWhereWithoutEvaluacionInput = {
    where?: videojuegoWhereInput
    data: XOR<videojuegoUpdateWithoutEvaluacionInput, videojuegoUncheckedUpdateWithoutEvaluacionInput>
  }

  export type videojuegoUpdateWithoutEvaluacionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    token_captcha?: NullableStringFieldUpdateOperationsInput | string | null
    equipo?: equipoUpdateOneRequiredWithoutVideojuegoNestedInput
  }

  export type videojuegoUncheckedUpdateWithoutEvaluacionInput = {
    id_videojuego?: IntFieldUpdateOperationsInput | number
    id_equipo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    token_captcha?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type equipoCreateWithoutIntegranteInput = {
    nombre: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    estado_equipo: estadoCreateNestedOneWithoutEquiposInput
    videojuego?: videojuegoCreateNestedManyWithoutEquipoInput
  }

  export type equipoUncheckedCreateWithoutIntegranteInput = {
    id_equipo?: number
    nombre: string
    id_estado: number
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    videojuego?: videojuegoUncheckedCreateNestedManyWithoutEquipoInput
  }

  export type equipoCreateOrConnectWithoutIntegranteInput = {
    where: equipoWhereUniqueInput
    create: XOR<equipoCreateWithoutIntegranteInput, equipoUncheckedCreateWithoutIntegranteInput>
  }

  export type integrante_nrcCreateWithoutIntegranteInput = {
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    nrc: nrcCreateNestedOneWithoutIntegrante_nrcInput
  }

  export type integrante_nrcUncheckedCreateWithoutIntegranteInput = {
    id_nrc: number
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type integrante_nrcCreateOrConnectWithoutIntegranteInput = {
    where: integrante_nrcWhereUniqueInput
    create: XOR<integrante_nrcCreateWithoutIntegranteInput, integrante_nrcUncheckedCreateWithoutIntegranteInput>
  }

  export type integrante_nrcCreateManyIntegranteInputEnvelope = {
    data: integrante_nrcCreateManyIntegranteInput | integrante_nrcCreateManyIntegranteInput[]
    skipDuplicates?: boolean
  }

  export type equipoUpsertWithoutIntegranteInput = {
    update: XOR<equipoUpdateWithoutIntegranteInput, equipoUncheckedUpdateWithoutIntegranteInput>
    create: XOR<equipoCreateWithoutIntegranteInput, equipoUncheckedCreateWithoutIntegranteInput>
    where?: equipoWhereInput
  }

  export type equipoUpdateToOneWithWhereWithoutIntegranteInput = {
    where?: equipoWhereInput
    data: XOR<equipoUpdateWithoutIntegranteInput, equipoUncheckedUpdateWithoutIntegranteInput>
  }

  export type equipoUpdateWithoutIntegranteInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    estado_equipo?: estadoUpdateOneRequiredWithoutEquiposNestedInput
    videojuego?: videojuegoUpdateManyWithoutEquipoNestedInput
  }

  export type equipoUncheckedUpdateWithoutIntegranteInput = {
    id_equipo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    id_estado?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    videojuego?: videojuegoUncheckedUpdateManyWithoutEquipoNestedInput
  }

  export type integrante_nrcUpsertWithWhereUniqueWithoutIntegranteInput = {
    where: integrante_nrcWhereUniqueInput
    update: XOR<integrante_nrcUpdateWithoutIntegranteInput, integrante_nrcUncheckedUpdateWithoutIntegranteInput>
    create: XOR<integrante_nrcCreateWithoutIntegranteInput, integrante_nrcUncheckedCreateWithoutIntegranteInput>
  }

  export type integrante_nrcUpdateWithWhereUniqueWithoutIntegranteInput = {
    where: integrante_nrcWhereUniqueInput
    data: XOR<integrante_nrcUpdateWithoutIntegranteInput, integrante_nrcUncheckedUpdateWithoutIntegranteInput>
  }

  export type integrante_nrcUpdateManyWithWhereWithoutIntegranteInput = {
    where: integrante_nrcScalarWhereInput
    data: XOR<integrante_nrcUpdateManyMutationInput, integrante_nrcUncheckedUpdateManyWithoutIntegranteInput>
  }

  export type integrante_nrcScalarWhereInput = {
    AND?: integrante_nrcScalarWhereInput | integrante_nrcScalarWhereInput[]
    OR?: integrante_nrcScalarWhereInput[]
    NOT?: integrante_nrcScalarWhereInput | integrante_nrcScalarWhereInput[]
    id_integrante?: IntFilter<"integrante_nrc"> | number
    id_nrc?: IntFilter<"integrante_nrc"> | number
    fecha_creacion?: DateTimeFilter<"integrante_nrc"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"integrante_nrc"> | Date | string | null
    estado?: BoolFilter<"integrante_nrc"> | boolean
  }

  export type integranteCreateWithoutIntegrante_nrcInput = {
    primer_nombre: string
    correo: string
    usuario_github: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    equipo: equipoCreateNestedOneWithoutIntegranteInput
  }

  export type integranteUncheckedCreateWithoutIntegrante_nrcInput = {
    id_integrante?: number
    id_equipo: number
    primer_nombre: string
    correo: string
    usuario_github: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type integranteCreateOrConnectWithoutIntegrante_nrcInput = {
    where: integranteWhereUniqueInput
    create: XOR<integranteCreateWithoutIntegrante_nrcInput, integranteUncheckedCreateWithoutIntegrante_nrcInput>
  }

  export type nrcCreateWithoutIntegrante_nrcInput = {
    codigo: string
    activo: boolean
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    materia: materiaCreateNestedOneWithoutNrcInput
    usuario: usuarioCreateNestedOneWithoutNrcInput
  }

  export type nrcUncheckedCreateWithoutIntegrante_nrcInput = {
    id_nrc?: number
    id_materia: number
    codigo: string
    activo: boolean
    id_usuario: number
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type nrcCreateOrConnectWithoutIntegrante_nrcInput = {
    where: nrcWhereUniqueInput
    create: XOR<nrcCreateWithoutIntegrante_nrcInput, nrcUncheckedCreateWithoutIntegrante_nrcInput>
  }

  export type integranteUpsertWithoutIntegrante_nrcInput = {
    update: XOR<integranteUpdateWithoutIntegrante_nrcInput, integranteUncheckedUpdateWithoutIntegrante_nrcInput>
    create: XOR<integranteCreateWithoutIntegrante_nrcInput, integranteUncheckedCreateWithoutIntegrante_nrcInput>
    where?: integranteWhereInput
  }

  export type integranteUpdateToOneWithWhereWithoutIntegrante_nrcInput = {
    where?: integranteWhereInput
    data: XOR<integranteUpdateWithoutIntegrante_nrcInput, integranteUncheckedUpdateWithoutIntegrante_nrcInput>
  }

  export type integranteUpdateWithoutIntegrante_nrcInput = {
    primer_nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    usuario_github?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    equipo?: equipoUpdateOneRequiredWithoutIntegranteNestedInput
  }

  export type integranteUncheckedUpdateWithoutIntegrante_nrcInput = {
    id_integrante?: IntFieldUpdateOperationsInput | number
    id_equipo?: IntFieldUpdateOperationsInput | number
    primer_nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    usuario_github?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type nrcUpsertWithoutIntegrante_nrcInput = {
    update: XOR<nrcUpdateWithoutIntegrante_nrcInput, nrcUncheckedUpdateWithoutIntegrante_nrcInput>
    create: XOR<nrcCreateWithoutIntegrante_nrcInput, nrcUncheckedCreateWithoutIntegrante_nrcInput>
    where?: nrcWhereInput
  }

  export type nrcUpdateToOneWithWhereWithoutIntegrante_nrcInput = {
    where?: nrcWhereInput
    data: XOR<nrcUpdateWithoutIntegrante_nrcInput, nrcUncheckedUpdateWithoutIntegrante_nrcInput>
  }

  export type nrcUpdateWithoutIntegrante_nrcInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    materia?: materiaUpdateOneRequiredWithoutNrcNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutNrcNestedInput
  }

  export type nrcUncheckedUpdateWithoutIntegrante_nrcInput = {
    id_nrc?: IntFieldUpdateOperationsInput | number
    id_materia?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type nrcCreateWithoutMateriaInput = {
    codigo: string
    activo: boolean
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    integrante_nrc?: integrante_nrcCreateNestedManyWithoutNrcInput
    usuario: usuarioCreateNestedOneWithoutNrcInput
  }

  export type nrcUncheckedCreateWithoutMateriaInput = {
    id_nrc?: number
    codigo: string
    activo: boolean
    id_usuario: number
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    integrante_nrc?: integrante_nrcUncheckedCreateNestedManyWithoutNrcInput
  }

  export type nrcCreateOrConnectWithoutMateriaInput = {
    where: nrcWhereUniqueInput
    create: XOR<nrcCreateWithoutMateriaInput, nrcUncheckedCreateWithoutMateriaInput>
  }

  export type nrcCreateManyMateriaInputEnvelope = {
    data: nrcCreateManyMateriaInput | nrcCreateManyMateriaInput[]
    skipDuplicates?: boolean
  }

  export type nrcUpsertWithWhereUniqueWithoutMateriaInput = {
    where: nrcWhereUniqueInput
    update: XOR<nrcUpdateWithoutMateriaInput, nrcUncheckedUpdateWithoutMateriaInput>
    create: XOR<nrcCreateWithoutMateriaInput, nrcUncheckedCreateWithoutMateriaInput>
  }

  export type nrcUpdateWithWhereUniqueWithoutMateriaInput = {
    where: nrcWhereUniqueInput
    data: XOR<nrcUpdateWithoutMateriaInput, nrcUncheckedUpdateWithoutMateriaInput>
  }

  export type nrcUpdateManyWithWhereWithoutMateriaInput = {
    where: nrcScalarWhereInput
    data: XOR<nrcUpdateManyMutationInput, nrcUncheckedUpdateManyWithoutMateriaInput>
  }

  export type nrcScalarWhereInput = {
    AND?: nrcScalarWhereInput | nrcScalarWhereInput[]
    OR?: nrcScalarWhereInput[]
    NOT?: nrcScalarWhereInput | nrcScalarWhereInput[]
    id_nrc?: IntFilter<"nrc"> | number
    id_materia?: IntFilter<"nrc"> | number
    codigo?: StringFilter<"nrc"> | string
    activo?: BoolFilter<"nrc"> | boolean
    id_usuario?: IntFilter<"nrc"> | number
    fecha_creacion?: DateTimeFilter<"nrc"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"nrc"> | Date | string | null
    estado?: BoolFilter<"nrc"> | boolean
  }

  export type integrante_nrcCreateWithoutNrcInput = {
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    integrante: integranteCreateNestedOneWithoutIntegrante_nrcInput
  }

  export type integrante_nrcUncheckedCreateWithoutNrcInput = {
    id_integrante: number
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type integrante_nrcCreateOrConnectWithoutNrcInput = {
    where: integrante_nrcWhereUniqueInput
    create: XOR<integrante_nrcCreateWithoutNrcInput, integrante_nrcUncheckedCreateWithoutNrcInput>
  }

  export type integrante_nrcCreateManyNrcInputEnvelope = {
    data: integrante_nrcCreateManyNrcInput | integrante_nrcCreateManyNrcInput[]
    skipDuplicates?: boolean
  }

  export type materiaCreateWithoutNrcInput = {
    nombre: string
    codigo: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type materiaUncheckedCreateWithoutNrcInput = {
    id_materia?: number
    nombre: string
    codigo: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type materiaCreateOrConnectWithoutNrcInput = {
    where: materiaWhereUniqueInput
    create: XOR<materiaCreateWithoutNrcInput, materiaUncheckedCreateWithoutNrcInput>
  }

  export type usuarioCreateWithoutNrcInput = {
    primer_nombre: string
    segundo_nombre?: string | null
    primer_apellido: string
    segundo_apellido: string
    correo: string
    confirmado?: boolean
    token_confirmacion: string
    ultima_conexion?: Date | string | null
    password?: string | null
    fecha_actualizacion?: Date | string
    fecha_creacion?: Date | string | null
    estado: boolean
    evaluacion?: evaluacionCreateNestedManyWithoutUsuarioInput
    usuario_rol?: usuario_rolCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutNrcInput = {
    id_usuario?: number
    primer_nombre: string
    segundo_nombre?: string | null
    primer_apellido: string
    segundo_apellido: string
    correo: string
    confirmado?: boolean
    token_confirmacion: string
    ultima_conexion?: Date | string | null
    password?: string | null
    fecha_actualizacion?: Date | string
    fecha_creacion?: Date | string | null
    estado: boolean
    evaluacion?: evaluacionUncheckedCreateNestedManyWithoutUsuarioInput
    usuario_rol?: usuario_rolUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutNrcInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutNrcInput, usuarioUncheckedCreateWithoutNrcInput>
  }

  export type integrante_nrcUpsertWithWhereUniqueWithoutNrcInput = {
    where: integrante_nrcWhereUniqueInput
    update: XOR<integrante_nrcUpdateWithoutNrcInput, integrante_nrcUncheckedUpdateWithoutNrcInput>
    create: XOR<integrante_nrcCreateWithoutNrcInput, integrante_nrcUncheckedCreateWithoutNrcInput>
  }

  export type integrante_nrcUpdateWithWhereUniqueWithoutNrcInput = {
    where: integrante_nrcWhereUniqueInput
    data: XOR<integrante_nrcUpdateWithoutNrcInput, integrante_nrcUncheckedUpdateWithoutNrcInput>
  }

  export type integrante_nrcUpdateManyWithWhereWithoutNrcInput = {
    where: integrante_nrcScalarWhereInput
    data: XOR<integrante_nrcUpdateManyMutationInput, integrante_nrcUncheckedUpdateManyWithoutNrcInput>
  }

  export type materiaUpsertWithoutNrcInput = {
    update: XOR<materiaUpdateWithoutNrcInput, materiaUncheckedUpdateWithoutNrcInput>
    create: XOR<materiaCreateWithoutNrcInput, materiaUncheckedCreateWithoutNrcInput>
    where?: materiaWhereInput
  }

  export type materiaUpdateToOneWithWhereWithoutNrcInput = {
    where?: materiaWhereInput
    data: XOR<materiaUpdateWithoutNrcInput, materiaUncheckedUpdateWithoutNrcInput>
  }

  export type materiaUpdateWithoutNrcInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type materiaUncheckedUpdateWithoutNrcInput = {
    id_materia?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usuarioUpsertWithoutNrcInput = {
    update: XOR<usuarioUpdateWithoutNrcInput, usuarioUncheckedUpdateWithoutNrcInput>
    create: XOR<usuarioCreateWithoutNrcInput, usuarioUncheckedCreateWithoutNrcInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutNrcInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutNrcInput, usuarioUncheckedUpdateWithoutNrcInput>
  }

  export type usuarioUpdateWithoutNrcInput = {
    primer_nombre?: StringFieldUpdateOperationsInput | string
    segundo_nombre?: NullableStringFieldUpdateOperationsInput | string | null
    primer_apellido?: StringFieldUpdateOperationsInput | string
    segundo_apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    confirmado?: BoolFieldUpdateOperationsInput | boolean
    token_confirmacion?: StringFieldUpdateOperationsInput | string
    ultima_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    evaluacion?: evaluacionUpdateManyWithoutUsuarioNestedInput
    usuario_rol?: usuario_rolUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutNrcInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    primer_nombre?: StringFieldUpdateOperationsInput | string
    segundo_nombre?: NullableStringFieldUpdateOperationsInput | string | null
    primer_apellido?: StringFieldUpdateOperationsInput | string
    segundo_apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    confirmado?: BoolFieldUpdateOperationsInput | boolean
    token_confirmacion?: StringFieldUpdateOperationsInput | string
    ultima_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    evaluacion?: evaluacionUncheckedUpdateManyWithoutUsuarioNestedInput
    usuario_rol?: usuario_rolUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type rol_servicioCreateWithoutRolInput = {
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    estado: boolean
    servicio: servicioCreateNestedOneWithoutRol_servicioInput
  }

  export type rol_servicioUncheckedCreateWithoutRolInput = {
    id_servicio: number
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type rol_servicioCreateOrConnectWithoutRolInput = {
    where: rol_servicioWhereUniqueInput
    create: XOR<rol_servicioCreateWithoutRolInput, rol_servicioUncheckedCreateWithoutRolInput>
  }

  export type rol_servicioCreateManyRolInputEnvelope = {
    data: rol_servicioCreateManyRolInput | rol_servicioCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type usuario_rolCreateWithoutRolInput = {
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    usuario: usuarioCreateNestedOneWithoutUsuario_rolInput
  }

  export type usuario_rolUncheckedCreateWithoutRolInput = {
    id_usuario: number
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type usuario_rolCreateOrConnectWithoutRolInput = {
    where: usuario_rolWhereUniqueInput
    create: XOR<usuario_rolCreateWithoutRolInput, usuario_rolUncheckedCreateWithoutRolInput>
  }

  export type usuario_rolCreateManyRolInputEnvelope = {
    data: usuario_rolCreateManyRolInput | usuario_rolCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type rol_servicioUpsertWithWhereUniqueWithoutRolInput = {
    where: rol_servicioWhereUniqueInput
    update: XOR<rol_servicioUpdateWithoutRolInput, rol_servicioUncheckedUpdateWithoutRolInput>
    create: XOR<rol_servicioCreateWithoutRolInput, rol_servicioUncheckedCreateWithoutRolInput>
  }

  export type rol_servicioUpdateWithWhereUniqueWithoutRolInput = {
    where: rol_servicioWhereUniqueInput
    data: XOR<rol_servicioUpdateWithoutRolInput, rol_servicioUncheckedUpdateWithoutRolInput>
  }

  export type rol_servicioUpdateManyWithWhereWithoutRolInput = {
    where: rol_servicioScalarWhereInput
    data: XOR<rol_servicioUpdateManyMutationInput, rol_servicioUncheckedUpdateManyWithoutRolInput>
  }

  export type rol_servicioScalarWhereInput = {
    AND?: rol_servicioScalarWhereInput | rol_servicioScalarWhereInput[]
    OR?: rol_servicioScalarWhereInput[]
    NOT?: rol_servicioScalarWhereInput | rol_servicioScalarWhereInput[]
    id_rol?: IntFilter<"rol_servicio"> | number
    id_servicio?: IntFilter<"rol_servicio"> | number
    fecha_creacion?: DateTimeNullableFilter<"rol_servicio"> | Date | string | null
    fecha_actualizacion?: DateTimeNullableFilter<"rol_servicio"> | Date | string | null
    estado?: BoolFilter<"rol_servicio"> | boolean
  }

  export type usuario_rolUpsertWithWhereUniqueWithoutRolInput = {
    where: usuario_rolWhereUniqueInput
    update: XOR<usuario_rolUpdateWithoutRolInput, usuario_rolUncheckedUpdateWithoutRolInput>
    create: XOR<usuario_rolCreateWithoutRolInput, usuario_rolUncheckedCreateWithoutRolInput>
  }

  export type usuario_rolUpdateWithWhereUniqueWithoutRolInput = {
    where: usuario_rolWhereUniqueInput
    data: XOR<usuario_rolUpdateWithoutRolInput, usuario_rolUncheckedUpdateWithoutRolInput>
  }

  export type usuario_rolUpdateManyWithWhereWithoutRolInput = {
    where: usuario_rolScalarWhereInput
    data: XOR<usuario_rolUpdateManyMutationInput, usuario_rolUncheckedUpdateManyWithoutRolInput>
  }

  export type usuario_rolScalarWhereInput = {
    AND?: usuario_rolScalarWhereInput | usuario_rolScalarWhereInput[]
    OR?: usuario_rolScalarWhereInput[]
    NOT?: usuario_rolScalarWhereInput | usuario_rolScalarWhereInput[]
    id_usuario?: IntFilter<"usuario_rol"> | number
    id_rol?: IntFilter<"usuario_rol"> | number
    fecha_creacion?: DateTimeFilter<"usuario_rol"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"usuario_rol"> | Date | string | null
    estado?: BoolFilter<"usuario_rol"> | boolean
  }

  export type rol_servicioCreateWithoutServicioInput = {
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    estado: boolean
    rol: rolCreateNestedOneWithoutRol_servicioInput
  }

  export type rol_servicioUncheckedCreateWithoutServicioInput = {
    id_rol: number
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type rol_servicioCreateOrConnectWithoutServicioInput = {
    where: rol_servicioWhereUniqueInput
    create: XOR<rol_servicioCreateWithoutServicioInput, rol_servicioUncheckedCreateWithoutServicioInput>
  }

  export type rol_servicioCreateManyServicioInputEnvelope = {
    data: rol_servicioCreateManyServicioInput | rol_servicioCreateManyServicioInput[]
    skipDuplicates?: boolean
  }

  export type rol_servicioUpsertWithWhereUniqueWithoutServicioInput = {
    where: rol_servicioWhereUniqueInput
    update: XOR<rol_servicioUpdateWithoutServicioInput, rol_servicioUncheckedUpdateWithoutServicioInput>
    create: XOR<rol_servicioCreateWithoutServicioInput, rol_servicioUncheckedCreateWithoutServicioInput>
  }

  export type rol_servicioUpdateWithWhereUniqueWithoutServicioInput = {
    where: rol_servicioWhereUniqueInput
    data: XOR<rol_servicioUpdateWithoutServicioInput, rol_servicioUncheckedUpdateWithoutServicioInput>
  }

  export type rol_servicioUpdateManyWithWhereWithoutServicioInput = {
    where: rol_servicioScalarWhereInput
    data: XOR<rol_servicioUpdateManyMutationInput, rol_servicioUncheckedUpdateManyWithoutServicioInput>
  }

  export type rolCreateWithoutRol_servicioInput = {
    rol: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    usuario_rol?: usuario_rolCreateNestedManyWithoutRolInput
  }

  export type rolUncheckedCreateWithoutRol_servicioInput = {
    id_rol?: number
    rol: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    usuario_rol?: usuario_rolUncheckedCreateNestedManyWithoutRolInput
  }

  export type rolCreateOrConnectWithoutRol_servicioInput = {
    where: rolWhereUniqueInput
    create: XOR<rolCreateWithoutRol_servicioInput, rolUncheckedCreateWithoutRol_servicioInput>
  }

  export type servicioCreateWithoutRol_servicioInput = {
    nombre: string
    descripcion: string
    url: string
    metodo: string
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type servicioUncheckedCreateWithoutRol_servicioInput = {
    id_servicio?: number
    nombre: string
    descripcion: string
    url: string
    metodo: string
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type servicioCreateOrConnectWithoutRol_servicioInput = {
    where: servicioWhereUniqueInput
    create: XOR<servicioCreateWithoutRol_servicioInput, servicioUncheckedCreateWithoutRol_servicioInput>
  }

  export type rolUpsertWithoutRol_servicioInput = {
    update: XOR<rolUpdateWithoutRol_servicioInput, rolUncheckedUpdateWithoutRol_servicioInput>
    create: XOR<rolCreateWithoutRol_servicioInput, rolUncheckedCreateWithoutRol_servicioInput>
    where?: rolWhereInput
  }

  export type rolUpdateToOneWithWhereWithoutRol_servicioInput = {
    where?: rolWhereInput
    data: XOR<rolUpdateWithoutRol_servicioInput, rolUncheckedUpdateWithoutRol_servicioInput>
  }

  export type rolUpdateWithoutRol_servicioInput = {
    rol?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    usuario_rol?: usuario_rolUpdateManyWithoutRolNestedInput
  }

  export type rolUncheckedUpdateWithoutRol_servicioInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    rol?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    usuario_rol?: usuario_rolUncheckedUpdateManyWithoutRolNestedInput
  }

  export type servicioUpsertWithoutRol_servicioInput = {
    update: XOR<servicioUpdateWithoutRol_servicioInput, servicioUncheckedUpdateWithoutRol_servicioInput>
    create: XOR<servicioCreateWithoutRol_servicioInput, servicioUncheckedCreateWithoutRol_servicioInput>
    where?: servicioWhereInput
  }

  export type servicioUpdateToOneWithWhereWithoutRol_servicioInput = {
    where?: servicioWhereInput
    data: XOR<servicioUpdateWithoutRol_servicioInput, servicioUncheckedUpdateWithoutRol_servicioInput>
  }

  export type servicioUpdateWithoutRol_servicioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    metodo?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type servicioUncheckedUpdateWithoutRol_servicioInput = {
    id_servicio?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    metodo?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type evaluacionCreateWithoutUsuarioInput = {
    comentario?: string | null
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    criterio_evaluacion?: criterio_evaluacionCreateNestedManyWithoutEvaluacionInput
    videojuego: videojuegoCreateNestedOneWithoutEvaluacionInput
  }

  export type evaluacionUncheckedCreateWithoutUsuarioInput = {
    id_evaluacion?: number
    id_videojuegos: number
    comentario?: string | null
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    criterio_evaluacion?: criterio_evaluacionUncheckedCreateNestedManyWithoutEvaluacionInput
  }

  export type evaluacionCreateOrConnectWithoutUsuarioInput = {
    where: evaluacionWhereUniqueInput
    create: XOR<evaluacionCreateWithoutUsuarioInput, evaluacionUncheckedCreateWithoutUsuarioInput>
  }

  export type evaluacionCreateManyUsuarioInputEnvelope = {
    data: evaluacionCreateManyUsuarioInput | evaluacionCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type nrcCreateWithoutUsuarioInput = {
    codigo: string
    activo: boolean
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    integrante_nrc?: integrante_nrcCreateNestedManyWithoutNrcInput
    materia: materiaCreateNestedOneWithoutNrcInput
  }

  export type nrcUncheckedCreateWithoutUsuarioInput = {
    id_nrc?: number
    id_materia: number
    codigo: string
    activo: boolean
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    integrante_nrc?: integrante_nrcUncheckedCreateNestedManyWithoutNrcInput
  }

  export type nrcCreateOrConnectWithoutUsuarioInput = {
    where: nrcWhereUniqueInput
    create: XOR<nrcCreateWithoutUsuarioInput, nrcUncheckedCreateWithoutUsuarioInput>
  }

  export type nrcCreateManyUsuarioInputEnvelope = {
    data: nrcCreateManyUsuarioInput | nrcCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type usuario_rolCreateWithoutUsuarioInput = {
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    rol: rolCreateNestedOneWithoutUsuario_rolInput
  }

  export type usuario_rolUncheckedCreateWithoutUsuarioInput = {
    id_rol: number
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type usuario_rolCreateOrConnectWithoutUsuarioInput = {
    where: usuario_rolWhereUniqueInput
    create: XOR<usuario_rolCreateWithoutUsuarioInput, usuario_rolUncheckedCreateWithoutUsuarioInput>
  }

  export type usuario_rolCreateManyUsuarioInputEnvelope = {
    data: usuario_rolCreateManyUsuarioInput | usuario_rolCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type evaluacionUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: evaluacionWhereUniqueInput
    update: XOR<evaluacionUpdateWithoutUsuarioInput, evaluacionUncheckedUpdateWithoutUsuarioInput>
    create: XOR<evaluacionCreateWithoutUsuarioInput, evaluacionUncheckedCreateWithoutUsuarioInput>
  }

  export type evaluacionUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: evaluacionWhereUniqueInput
    data: XOR<evaluacionUpdateWithoutUsuarioInput, evaluacionUncheckedUpdateWithoutUsuarioInput>
  }

  export type evaluacionUpdateManyWithWhereWithoutUsuarioInput = {
    where: evaluacionScalarWhereInput
    data: XOR<evaluacionUpdateManyMutationInput, evaluacionUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type evaluacionScalarWhereInput = {
    AND?: evaluacionScalarWhereInput | evaluacionScalarWhereInput[]
    OR?: evaluacionScalarWhereInput[]
    NOT?: evaluacionScalarWhereInput | evaluacionScalarWhereInput[]
    id_evaluacion?: IntFilter<"evaluacion"> | number
    id_usuario?: IntFilter<"evaluacion"> | number
    id_videojuegos?: IntFilter<"evaluacion"> | number
    comentario?: StringNullableFilter<"evaluacion"> | string | null
    fecha_creacion?: DateTimeFilter<"evaluacion"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"evaluacion"> | Date | string | null
    estado?: BoolFilter<"evaluacion"> | boolean
  }

  export type nrcUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: nrcWhereUniqueInput
    update: XOR<nrcUpdateWithoutUsuarioInput, nrcUncheckedUpdateWithoutUsuarioInput>
    create: XOR<nrcCreateWithoutUsuarioInput, nrcUncheckedCreateWithoutUsuarioInput>
  }

  export type nrcUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: nrcWhereUniqueInput
    data: XOR<nrcUpdateWithoutUsuarioInput, nrcUncheckedUpdateWithoutUsuarioInput>
  }

  export type nrcUpdateManyWithWhereWithoutUsuarioInput = {
    where: nrcScalarWhereInput
    data: XOR<nrcUpdateManyMutationInput, nrcUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type usuario_rolUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: usuario_rolWhereUniqueInput
    update: XOR<usuario_rolUpdateWithoutUsuarioInput, usuario_rolUncheckedUpdateWithoutUsuarioInput>
    create: XOR<usuario_rolCreateWithoutUsuarioInput, usuario_rolUncheckedCreateWithoutUsuarioInput>
  }

  export type usuario_rolUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: usuario_rolWhereUniqueInput
    data: XOR<usuario_rolUpdateWithoutUsuarioInput, usuario_rolUncheckedUpdateWithoutUsuarioInput>
  }

  export type usuario_rolUpdateManyWithWhereWithoutUsuarioInput = {
    where: usuario_rolScalarWhereInput
    data: XOR<usuario_rolUpdateManyMutationInput, usuario_rolUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type rolCreateWithoutUsuario_rolInput = {
    rol: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    rol_servicio?: rol_servicioCreateNestedManyWithoutRolInput
  }

  export type rolUncheckedCreateWithoutUsuario_rolInput = {
    id_rol?: number
    rol: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    rol_servicio?: rol_servicioUncheckedCreateNestedManyWithoutRolInput
  }

  export type rolCreateOrConnectWithoutUsuario_rolInput = {
    where: rolWhereUniqueInput
    create: XOR<rolCreateWithoutUsuario_rolInput, rolUncheckedCreateWithoutUsuario_rolInput>
  }

  export type usuarioCreateWithoutUsuario_rolInput = {
    primer_nombre: string
    segundo_nombre?: string | null
    primer_apellido: string
    segundo_apellido: string
    correo: string
    confirmado?: boolean
    token_confirmacion: string
    ultima_conexion?: Date | string | null
    password?: string | null
    fecha_actualizacion?: Date | string
    fecha_creacion?: Date | string | null
    estado: boolean
    evaluacion?: evaluacionCreateNestedManyWithoutUsuarioInput
    nrc?: nrcCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutUsuario_rolInput = {
    id_usuario?: number
    primer_nombre: string
    segundo_nombre?: string | null
    primer_apellido: string
    segundo_apellido: string
    correo: string
    confirmado?: boolean
    token_confirmacion: string
    ultima_conexion?: Date | string | null
    password?: string | null
    fecha_actualizacion?: Date | string
    fecha_creacion?: Date | string | null
    estado: boolean
    evaluacion?: evaluacionUncheckedCreateNestedManyWithoutUsuarioInput
    nrc?: nrcUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutUsuario_rolInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutUsuario_rolInput, usuarioUncheckedCreateWithoutUsuario_rolInput>
  }

  export type rolUpsertWithoutUsuario_rolInput = {
    update: XOR<rolUpdateWithoutUsuario_rolInput, rolUncheckedUpdateWithoutUsuario_rolInput>
    create: XOR<rolCreateWithoutUsuario_rolInput, rolUncheckedCreateWithoutUsuario_rolInput>
    where?: rolWhereInput
  }

  export type rolUpdateToOneWithWhereWithoutUsuario_rolInput = {
    where?: rolWhereInput
    data: XOR<rolUpdateWithoutUsuario_rolInput, rolUncheckedUpdateWithoutUsuario_rolInput>
  }

  export type rolUpdateWithoutUsuario_rolInput = {
    rol?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    rol_servicio?: rol_servicioUpdateManyWithoutRolNestedInput
  }

  export type rolUncheckedUpdateWithoutUsuario_rolInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    rol?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    rol_servicio?: rol_servicioUncheckedUpdateManyWithoutRolNestedInput
  }

  export type usuarioUpsertWithoutUsuario_rolInput = {
    update: XOR<usuarioUpdateWithoutUsuario_rolInput, usuarioUncheckedUpdateWithoutUsuario_rolInput>
    create: XOR<usuarioCreateWithoutUsuario_rolInput, usuarioUncheckedCreateWithoutUsuario_rolInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutUsuario_rolInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutUsuario_rolInput, usuarioUncheckedUpdateWithoutUsuario_rolInput>
  }

  export type usuarioUpdateWithoutUsuario_rolInput = {
    primer_nombre?: StringFieldUpdateOperationsInput | string
    segundo_nombre?: NullableStringFieldUpdateOperationsInput | string | null
    primer_apellido?: StringFieldUpdateOperationsInput | string
    segundo_apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    confirmado?: BoolFieldUpdateOperationsInput | boolean
    token_confirmacion?: StringFieldUpdateOperationsInput | string
    ultima_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    evaluacion?: evaluacionUpdateManyWithoutUsuarioNestedInput
    nrc?: nrcUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutUsuario_rolInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    primer_nombre?: StringFieldUpdateOperationsInput | string
    segundo_nombre?: NullableStringFieldUpdateOperationsInput | string | null
    primer_apellido?: StringFieldUpdateOperationsInput | string
    segundo_apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    confirmado?: BoolFieldUpdateOperationsInput | boolean
    token_confirmacion?: StringFieldUpdateOperationsInput | string
    ultima_conexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    evaluacion?: evaluacionUncheckedUpdateManyWithoutUsuarioNestedInput
    nrc?: nrcUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type evaluacionCreateWithoutVideojuegoInput = {
    comentario?: string | null
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    criterio_evaluacion?: criterio_evaluacionCreateNestedManyWithoutEvaluacionInput
    usuario: usuarioCreateNestedOneWithoutEvaluacionInput
  }

  export type evaluacionUncheckedCreateWithoutVideojuegoInput = {
    id_evaluacion?: number
    id_usuario: number
    comentario?: string | null
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    criterio_evaluacion?: criterio_evaluacionUncheckedCreateNestedManyWithoutEvaluacionInput
  }

  export type evaluacionCreateOrConnectWithoutVideojuegoInput = {
    where: evaluacionWhereUniqueInput
    create: XOR<evaluacionCreateWithoutVideojuegoInput, evaluacionUncheckedCreateWithoutVideojuegoInput>
  }

  export type evaluacionCreateManyVideojuegoInputEnvelope = {
    data: evaluacionCreateManyVideojuegoInput | evaluacionCreateManyVideojuegoInput[]
    skipDuplicates?: boolean
  }

  export type equipoCreateWithoutVideojuegoInput = {
    nombre: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    estado_equipo: estadoCreateNestedOneWithoutEquiposInput
    integrante?: integranteCreateNestedManyWithoutEquipoInput
  }

  export type equipoUncheckedCreateWithoutVideojuegoInput = {
    id_equipo?: number
    nombre: string
    id_estado: number
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    integrante?: integranteUncheckedCreateNestedManyWithoutEquipoInput
  }

  export type equipoCreateOrConnectWithoutVideojuegoInput = {
    where: equipoWhereUniqueInput
    create: XOR<equipoCreateWithoutVideojuegoInput, equipoUncheckedCreateWithoutVideojuegoInput>
  }

  export type evaluacionUpsertWithWhereUniqueWithoutVideojuegoInput = {
    where: evaluacionWhereUniqueInput
    update: XOR<evaluacionUpdateWithoutVideojuegoInput, evaluacionUncheckedUpdateWithoutVideojuegoInput>
    create: XOR<evaluacionCreateWithoutVideojuegoInput, evaluacionUncheckedCreateWithoutVideojuegoInput>
  }

  export type evaluacionUpdateWithWhereUniqueWithoutVideojuegoInput = {
    where: evaluacionWhereUniqueInput
    data: XOR<evaluacionUpdateWithoutVideojuegoInput, evaluacionUncheckedUpdateWithoutVideojuegoInput>
  }

  export type evaluacionUpdateManyWithWhereWithoutVideojuegoInput = {
    where: evaluacionScalarWhereInput
    data: XOR<evaluacionUpdateManyMutationInput, evaluacionUncheckedUpdateManyWithoutVideojuegoInput>
  }

  export type equipoUpsertWithoutVideojuegoInput = {
    update: XOR<equipoUpdateWithoutVideojuegoInput, equipoUncheckedUpdateWithoutVideojuegoInput>
    create: XOR<equipoCreateWithoutVideojuegoInput, equipoUncheckedCreateWithoutVideojuegoInput>
    where?: equipoWhereInput
  }

  export type equipoUpdateToOneWithWhereWithoutVideojuegoInput = {
    where?: equipoWhereInput
    data: XOR<equipoUpdateWithoutVideojuegoInput, equipoUncheckedUpdateWithoutVideojuegoInput>
  }

  export type equipoUpdateWithoutVideojuegoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    estado_equipo?: estadoUpdateOneRequiredWithoutEquiposNestedInput
    integrante?: integranteUpdateManyWithoutEquipoNestedInput
  }

  export type equipoUncheckedUpdateWithoutVideojuegoInput = {
    id_equipo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    id_estado?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    integrante?: integranteUncheckedUpdateManyWithoutEquipoNestedInput
  }

  export type criterio_evaluacionCreateManyCriterioInput = {
    id_evaluacion: number
    valoracion: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type criterio_evaluacionUpdateWithoutCriterioInput = {
    valoracion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    evaluacion?: evaluacionUpdateOneRequiredWithoutCriterio_evaluacionNestedInput
  }

  export type criterio_evaluacionUncheckedUpdateWithoutCriterioInput = {
    id_evaluacion?: IntFieldUpdateOperationsInput | number
    valoracion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type criterio_evaluacionUncheckedUpdateManyWithoutCriterioInput = {
    id_evaluacion?: IntFieldUpdateOperationsInput | number
    valoracion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type integranteCreateManyEquipoInput = {
    id_integrante?: number
    primer_nombre: string
    correo: string
    usuario_github: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type videojuegoCreateManyEquipoInput = {
    id_videojuego?: number
    nombre: string
    descripcion?: string | null
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
    token_captcha?: string | null
  }

  export type integranteUpdateWithoutEquipoInput = {
    primer_nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    usuario_github?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    integrante_nrc?: integrante_nrcUpdateManyWithoutIntegranteNestedInput
  }

  export type integranteUncheckedUpdateWithoutEquipoInput = {
    id_integrante?: IntFieldUpdateOperationsInput | number
    primer_nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    usuario_github?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    integrante_nrc?: integrante_nrcUncheckedUpdateManyWithoutIntegranteNestedInput
  }

  export type integranteUncheckedUpdateManyWithoutEquipoInput = {
    id_integrante?: IntFieldUpdateOperationsInput | number
    primer_nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    usuario_github?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type videojuegoUpdateWithoutEquipoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    token_captcha?: NullableStringFieldUpdateOperationsInput | string | null
    evaluacion?: evaluacionUpdateManyWithoutVideojuegoNestedInput
  }

  export type videojuegoUncheckedUpdateWithoutEquipoInput = {
    id_videojuego?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    token_captcha?: NullableStringFieldUpdateOperationsInput | string | null
    evaluacion?: evaluacionUncheckedUpdateManyWithoutVideojuegoNestedInput
  }

  export type videojuegoUncheckedUpdateManyWithoutEquipoInput = {
    id_videojuego?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    token_captcha?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type equipoCreateManyEstado_equipoInput = {
    id_equipo?: number
    nombre: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type equipoUpdateWithoutEstado_equipoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    integrante?: integranteUpdateManyWithoutEquipoNestedInput
    videojuego?: videojuegoUpdateManyWithoutEquipoNestedInput
  }

  export type equipoUncheckedUpdateWithoutEstado_equipoInput = {
    id_equipo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    integrante?: integranteUncheckedUpdateManyWithoutEquipoNestedInput
    videojuego?: videojuegoUncheckedUpdateManyWithoutEquipoNestedInput
  }

  export type equipoUncheckedUpdateManyWithoutEstado_equipoInput = {
    id_equipo?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type criterio_evaluacionCreateManyEvaluacionInput = {
    id_criterio: number
    valoracion: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type criterio_evaluacionUpdateWithoutEvaluacionInput = {
    valoracion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    criterio?: criterioUpdateOneRequiredWithoutCriterio_evaluacionNestedInput
  }

  export type criterio_evaluacionUncheckedUpdateWithoutEvaluacionInput = {
    id_criterio?: IntFieldUpdateOperationsInput | number
    valoracion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type criterio_evaluacionUncheckedUpdateManyWithoutEvaluacionInput = {
    id_criterio?: IntFieldUpdateOperationsInput | number
    valoracion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type integrante_nrcCreateManyIntegranteInput = {
    id_nrc: number
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type integrante_nrcUpdateWithoutIntegranteInput = {
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    nrc?: nrcUpdateOneRequiredWithoutIntegrante_nrcNestedInput
  }

  export type integrante_nrcUncheckedUpdateWithoutIntegranteInput = {
    id_nrc?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type integrante_nrcUncheckedUpdateManyWithoutIntegranteInput = {
    id_nrc?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type nrcCreateManyMateriaInput = {
    id_nrc?: number
    codigo: string
    activo: boolean
    id_usuario: number
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type nrcUpdateWithoutMateriaInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    integrante_nrc?: integrante_nrcUpdateManyWithoutNrcNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutNrcNestedInput
  }

  export type nrcUncheckedUpdateWithoutMateriaInput = {
    id_nrc?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    integrante_nrc?: integrante_nrcUncheckedUpdateManyWithoutNrcNestedInput
  }

  export type nrcUncheckedUpdateManyWithoutMateriaInput = {
    id_nrc?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type integrante_nrcCreateManyNrcInput = {
    id_integrante: number
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type integrante_nrcUpdateWithoutNrcInput = {
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    integrante?: integranteUpdateOneRequiredWithoutIntegrante_nrcNestedInput
  }

  export type integrante_nrcUncheckedUpdateWithoutNrcInput = {
    id_integrante?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type integrante_nrcUncheckedUpdateManyWithoutNrcInput = {
    id_integrante?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type rol_servicioCreateManyRolInput = {
    id_servicio: number
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type usuario_rolCreateManyRolInput = {
    id_usuario: number
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type rol_servicioUpdateWithoutRolInput = {
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    servicio?: servicioUpdateOneRequiredWithoutRol_servicioNestedInput
  }

  export type rol_servicioUncheckedUpdateWithoutRolInput = {
    id_servicio?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type rol_servicioUncheckedUpdateManyWithoutRolInput = {
    id_servicio?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usuario_rolUpdateWithoutRolInput = {
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    usuario?: usuarioUpdateOneRequiredWithoutUsuario_rolNestedInput
  }

  export type usuario_rolUncheckedUpdateWithoutRolInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usuario_rolUncheckedUpdateManyWithoutRolInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type rol_servicioCreateManyServicioInput = {
    id_rol: number
    fecha_creacion?: Date | string | null
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type rol_servicioUpdateWithoutServicioInput = {
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    rol?: rolUpdateOneRequiredWithoutRol_servicioNestedInput
  }

  export type rol_servicioUncheckedUpdateWithoutServicioInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type rol_servicioUncheckedUpdateManyWithoutServicioInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type evaluacionCreateManyUsuarioInput = {
    id_evaluacion?: number
    id_videojuegos: number
    comentario?: string | null
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type nrcCreateManyUsuarioInput = {
    id_nrc?: number
    id_materia: number
    codigo: string
    activo: boolean
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type usuario_rolCreateManyUsuarioInput = {
    id_rol: number
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type evaluacionUpdateWithoutUsuarioInput = {
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    criterio_evaluacion?: criterio_evaluacionUpdateManyWithoutEvaluacionNestedInput
    videojuego?: videojuegoUpdateOneRequiredWithoutEvaluacionNestedInput
  }

  export type evaluacionUncheckedUpdateWithoutUsuarioInput = {
    id_evaluacion?: IntFieldUpdateOperationsInput | number
    id_videojuegos?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    criterio_evaluacion?: criterio_evaluacionUncheckedUpdateManyWithoutEvaluacionNestedInput
  }

  export type evaluacionUncheckedUpdateManyWithoutUsuarioInput = {
    id_evaluacion?: IntFieldUpdateOperationsInput | number
    id_videojuegos?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type nrcUpdateWithoutUsuarioInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    integrante_nrc?: integrante_nrcUpdateManyWithoutNrcNestedInput
    materia?: materiaUpdateOneRequiredWithoutNrcNestedInput
  }

  export type nrcUncheckedUpdateWithoutUsuarioInput = {
    id_nrc?: IntFieldUpdateOperationsInput | number
    id_materia?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    integrante_nrc?: integrante_nrcUncheckedUpdateManyWithoutNrcNestedInput
  }

  export type nrcUncheckedUpdateManyWithoutUsuarioInput = {
    id_nrc?: IntFieldUpdateOperationsInput | number
    id_materia?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usuario_rolUpdateWithoutUsuarioInput = {
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    rol?: rolUpdateOneRequiredWithoutUsuario_rolNestedInput
  }

  export type usuario_rolUncheckedUpdateWithoutUsuarioInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usuario_rolUncheckedUpdateManyWithoutUsuarioInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type evaluacionCreateManyVideojuegoInput = {
    id_evaluacion?: number
    id_usuario: number
    comentario?: string | null
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    estado: boolean
  }

  export type evaluacionUpdateWithoutVideojuegoInput = {
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    criterio_evaluacion?: criterio_evaluacionUpdateManyWithoutEvaluacionNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutEvaluacionNestedInput
  }

  export type evaluacionUncheckedUpdateWithoutVideojuegoInput = {
    id_evaluacion?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    criterio_evaluacion?: criterio_evaluacionUncheckedUpdateManyWithoutEvaluacionNestedInput
  }

  export type evaluacionUncheckedUpdateManyWithoutVideojuegoInput = {
    id_evaluacion?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
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