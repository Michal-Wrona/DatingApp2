export interface Pagination {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
}

// export class PaginatedResult<Member[]>
export class PaginatedResult<T> {
    result: T;
    pagination: Pagination;
}